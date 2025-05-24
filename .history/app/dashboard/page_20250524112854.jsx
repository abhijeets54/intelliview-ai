"use client";

import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import {
  Bot,
  Plus,
  ListChecks,
  Trophy,
  Zap,
  TrendingUp,
  Loader2
} from "lucide-react";

import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  const { user } = useUser();
  const [interviewData, setInterviewData] = useState([]);
  const [isNewInterviewModalOpen, setIsNewInterviewModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [statsCards, setStatsCards] = useState([
    {
      icon: <ListChecks size={32} className="text-indigo-600" />,
      title: "Total Interviews",
      value: "0",
      gradient: "from-indigo-500 to-indigo-400"
    },
    {
      icon: <Trophy size={32} className="text-green-600" />,
      title: "Best Score",
      value: "N/A",
      gradient: "from-green-500 to-green-400"
    },
    {
      icon: <TrendingUp size={32} className="text-blue-600" />,
      title: "Improvement Rate",
      value: "0%",
      gradient: "from-blue-500 to-blue-400"
    }
  ]);

  const fetchInterviews = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      toast.error("User email not found");
      return;
    }

    try {
      const response = await fetch('/api/fetchUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userEmail: user.primaryEmailAddress.emailAddress
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch interview data');
      }
  
      const data = await response.json();
      
      // Filter interviews specific to the current user's email
      const userSpecificInterviews = data.userAnswers.filter(
        interview => interview.userEmail === user.primaryEmailAddress.emailAddress
      );

      setInterviewData(userSpecificInterviews);

      // Calculate and update stats
      const totalInterviews = userSpecificInterviews.length;
      const bestScore = totalInterviews > 0 
        ? Math.max(...userSpecificInterviews.map(item => parseInt(item.rating || '0')))
        : 0;
      const improvementRate = calculateImprovementRate(userSpecificInterviews);

      setStatsCards([
        {
          ...statsCards[0],
          value: totalInterviews.toString()
        },
        {
          ...statsCards[1],
          value: bestScore ? `${bestScore}/10` : 'N/A'
        },
        {
          ...statsCards[2],
          value: `${improvementRate}%`
        }
      ]);

      if (totalInterviews > 0) {
        toast.success(`Loaded ${totalInterviews} interview(s)`);
      }

    } catch (error) {
      console.error('Error fetching interviews:', error);
      toast.error(error.message || 'Failed to fetch interviews');
    }
  };

  const calculateImprovementRate = (interviews) => {
    if (interviews.length <= 1) return 0;
    
    const scores = interviews
      .map(interview => parseInt(interview.rating || '0'))
      .sort((a, b) => a - b);
    
    const improvement = ((scores[scores.length - 1] - scores[0]) / scores[0]) * 100;
    return Math.round(improvement);
  };

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      fetchInterviews().finally(() => setIsLoading(false));
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="loader mb-4" />
          <p className="text-gray-600 animate-pulse">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* User Greeting */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0 animate-slide-up">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 flex items-center gap-3">
            <Bot className="text-indigo-600 animate-bounce-soft" size={32} />
            Dashboard
          </h2>
          <h3 className="text-lg sm:text-xl text-gray-600 mt-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Welcome, {user?.firstName || 'Interviewer'}
          </h3>
        </div>
        <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-gray-500 text-sm sm:text-base">
            {user?.primaryEmailAddress?.emailAddress || 'Not logged in'}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {statsCards.map((card, index) => (
          <div 
            key={card.title}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md card-transition animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-full bg-gradient-to-br ${card.gradient} bg-opacity-10 hover:bg-opacity-20 smooth-transform`}>
                {card.icon}
              </div>
              <div className="ml-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{card.title}</p>
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                  {card.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interview Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400 flex items-center gap-3">
            <Zap size={24} className="text-yellow-500" />
            Create AI Mock Interview
          </h2>
          <button 
            onClick={() => setIsNewInterviewModalOpen(true)}
            className="flex items-center bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <Plus size={20} className="mr-2" />
            New Interview
          </button>
        </div>

        {/* Add New Interview Component */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          <AddNewInterview 
            isOpen={isNewInterviewModalOpen} 
            onClose={() => setIsNewInterviewModalOpen(false)} 
          />
        </div>
      </div>

      {/* Interview History */}
      <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 mb-6">
          Interview History
        </h2>
        <InterviewList interviews={interviewData} />
      </div>
    </div>
  );
}

export default Dashboard;