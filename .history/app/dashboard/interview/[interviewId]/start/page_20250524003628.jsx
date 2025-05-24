"use client";
import { db } from "@/utils/db";
import { Interview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [interviewQuestions, setInterviewQuestions] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    try {
      setIsLoading(true);
      const result = await db
        .select()
        .from(Interview)
        .where(eq(Interview.interviewId, params.interviewId));
      
      const jsonResponse = JSON.parse(result[0].jsonResponse);
      setInterviewQuestions(jsonResponse);
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Failed to fetch interview details:", error);
      // Optionally add error toast or error state handling
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSave = (answerRecord) => {
    // Optional: Add any additional logic when an answer is saved
    // For example, you might want to automatically move to the next question
    if (activeQuestionIndex < interviewQuestions.length - 1) {
      setActiveQuestionIndex(prev => prev + 1);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-indigo-600" />
          <p className="mt-4 text-gray-600">Loading interview details...</p>
        </div>
      </div>
    );
  }

  if (!interviewQuestions || interviewQuestions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">No interview questions found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        <QuestionsSection
          interviewQuestions={interviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
        />
        {/* video or audio recording */}
        <RecordAnswerSection
          interviewQuestions={interviewQuestions}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
          onAnswerSave={handleAnswerSave}
        />
      </div>
      <div className="flex justify-end gap-6 mt-8">
        {activeQuestionIndex > 0 && (
          <Button 
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
            variant="outline"
            className="hover:bg-indigo-50"
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex !== interviewQuestions?.length - 1 && (
          <Button 
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex === interviewQuestions?.length - 1 && (
          <Link href={'/dashboard/interview/' + interviewData?.interviewId + '/feedback'}>
            <Button className="bg-green-600 hover:bg-green-700">
              End Interview
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;