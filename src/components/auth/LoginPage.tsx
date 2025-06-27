import React from "react";
import { BookOpen, Trophy, Zap } from "lucide-react";
import GoogleAuth from "./GoogleAuth";
import { useAppState } from "../../hooks/useAppState";
import { Navigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const {isAuthenticated} = useAppState();

  return !isAuthenticated?(
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
                <img src="/logo.svg" alt="" />
              {/* <div className="bg-primary-600 p-3 rounded-2xl">
                 <Brain className="w-8 h-8 text-white" /> 
              </div> */}
              {/* <span className="ml-3 text-2xl font-bold text-gray-900">
                NSKAI
              </span> */}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Learning with
              <span className="text-[#FE0000] block">AI-Powered Quizzes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Upload your documents and let our AI create personalized quizzes,
              simplify complex text, and track your progress with intelligent
              insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Features */}
            <div className="space-y-8 animate-slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Smart Document Analysis
                    </h3>
                    <p className="text-gray-600">
                      Upload PDFs, Word docs, or text files and our AI will
                      analyze and create comprehensive study materials.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-100 p-3 rounded-xl">
                    <Zap className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      AI-Generated Quizzes
                    </h3>
                    <p className="text-gray-600">
                      Get personalized quizzes with multiple choice, true/false,
                      and short answer questions tailored to your content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-100 p-3 rounded-xl">
                    <Trophy className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Gamified Learning
                    </h3>
                    <p className="text-gray-600">
                      Earn tokens, unlock achievements, and track your progress
                      with our comprehensive gamification system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Card */}
            <div className="animate-slide-up delay-200 ">
              <div className="bg-blue-700 rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-white text-3xl font-bold text-gray-900 mb-2">
                    Get Started
                  </h2>
                  <p className="text-gray-300">
                    Sign in with Google to begin your learning journey
                  </p>
                </div>

                <GoogleAuth />

                <p className="text-xs text-white text-center mt-6">
                  By signing in, you agree to our Terms of Service and Privacy
                  Policy
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">
                10K+
              </div>
              <div className="text-gray-600">Documents Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 mb-2">
                50K+
              </div>
              <div className="text-gray-600">Quizzes Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ):(
    <Navigate to="/dashboard"/>
  );
};
