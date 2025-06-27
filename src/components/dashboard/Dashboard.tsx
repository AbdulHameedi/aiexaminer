import React from "react";
import {
  TrendingUp,
  FileText,
  ChevronRight,
  Zap,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { UploadButton } from "../ui/Document";
import useUserDocuments from "../../hooks/useUserDocuments";
import { useAppState } from "../../hooks/useAppState";

export const Dashboard: React.FC = () => {
  const { user } = useAppState();
  const { data: documents } = useUserDocuments(user?.clientId || "");
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome {user?.name?.split(" ")[0]}
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your learning journey.
          </p>
        </div>
        <Link to="/dashboard/upload">
          <UploadButton />
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Documents
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {documents?.length}
              </p>
            </div>
            <div className="bg-primary-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-accent-500 mr-1" />
            <span className="text-accent-600">+2 this week</span>
          </div>
        </div>

        {/* <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Score</p>
              <p className="text-2xl font-bold text-gray-900">87%</p>
            </div>
            <div className="bg-accent-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-accent-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-accent-500 mr-1" />
            <span className="text-accent-600">+3% this week</span>
          </div>
        </div> */}

        {/* <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Study Time</p>
              <p className="text-2xl font-bold text-gray-900">24h</p>
            </div>
            <div className="bg-warning-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-warning-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-accent-500 mr-1" />
            <span className="text-accent-600">+4h this week</span>
          </div>
        </div> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Documents */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Recent Documents
                </h2>
                <Link to="/dashboard/documents">
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                    View all
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-6">
              {documents && (
                <div className="space-y-4">
                  {documents?.slice(0, 3).map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary-100 p-2 rounded-lg">
                          <FileText className="w-4 h-4 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {/* {doc.title} */}
                            TItle
                          </h3>
                          <p className="text-sm text-gray-500">
                            Uploaded {doc.upload_timestamp}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-1 rounded-md text-sm transition-colors">
                          Create Quiz
                        </button>
                      </div>
                    </div>
                  ))}
                  {documents?.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                      No documents uploaded yet. Start by uploading your first
                      document!
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Quick Actions
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <Link to="/dashboard/upload">
                <button className="w-full flex items-center space-x-3 p-3 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors">
                  <FileText className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-primary-700">
                    Upload Document
                  </span>
                </button>
              </Link>
              <button className="w-full flex items-center space-x-3 p-3 bg-accent-50 hover:bg-accent-100 rounded-lg transition-colors">
                <BookOpen className="w-5 h-5 text-accent-600" />
                <span className="font-medium text-accent-700">Study Tools</span>
              </button>
            </div>
          </div>

          {/* Daily Challenge */}
          <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl p-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-5 h-5" />
              <h3 className="font-semibold">Daily Challenge</h3>
            </div>
            <p className="text-primary-100 mb-4 text-sm">
              Complete a quiz with 90% or higher to earn bonus tokens!
            </p>
            <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
