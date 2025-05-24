"use client";

import React from "react";
import { Bot, UserCheck, Settings, Play, Send, ChartBar, Repeat } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <UserCheck size={48} className="text-indigo-600" />,
      title: "Sign Up or Log In",
      description: "Create an account or log in using Clerk. Build a personalized profile that tracks your interview journey and stores preferences.",
      imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Settings size={48} className="text-indigo-600" />,
      title: "Choose Your Interview Type",
      description: "Select from technical, behavioral, or mixed interviews. Customize difficulty, topics, and duration to match your career goals.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Play size={48} className="text-indigo-600" />,
      title: "Start the Mock Interview",
      description: "Our AI generates dynamic, contextually relevant questions powered by Gemini. One question at a time keeps you focused and engaged.",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Send size={48} className="text-indigo-600" />,
      title: "Submit Your Answers",
      description: "Respond via text or multiple-choice options. Our intuitive interface tracks your responses and provides a seamless experience.",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <ChartBar size={48} className="text-indigo-600" />,
      title: "Receive Real-Time Feedback",
      description: "Get instant, AI-powered analysis of your responses. Understand your strengths, areas for improvement, and receive detailed scoring.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: <Repeat size={48} className="text-indigo-600" />,
      title: "Continue Practicing",
      description: "Access your interview history, track progress, and keep refining your skills with unlimited mock interviews and adaptive challenges.",
      imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <div className="relative h-[300px] mb-8 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Interview preparation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 flex items-center justify-center">
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                IntelliView AI: Your Interview Preparation Companion
              </h1>
              <p className="text-xl mt-4">
                Master your interviews with AI-powered practice and personalized insights
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={step.title} 
            className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 overflow-hidden"
          >
            <div className="relative h-40 -mx-6 -mt-6 mb-6">
              <img
                src={step.imageUrl}
                alt={step.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
            <div className="flex items-center mb-4">
              {step.icon}
              <h2 className="ml-4 text-2xl font-semibold text-gray-800">
                Step {index + 1}: {step.title}
              </h2>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="/dashboard" 
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors inline-flex items-center"
        >
          Start Your Interview Journey
          <Play className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default HowItWorksPage;