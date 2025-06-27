import React from "react";
import {
  FileText,
  MoreVertical,
  Download,
  Brain,
} from "lucide-react";
import { DocumentHeader, TotalDocuments } from "../ui/Document";
import { useAppState } from "../../hooks/useAppState";
import useUserDocuments from "../../hooks/useUserDocuments";
import { truncate } from "../ui/Document";

export const DocumentsPage: React.FC = () => {
  const { user } = useAppState();
  const { data: documents,isLoading } = useUserDocuments(user?.clientId || "");


  const getFileIcon = () => {
    return <FileText className="w-5 h-5 text-primary-600" />;
  };

  if(isLoading) return <div className="text-center text-gray-500 mt-8">Loading documents...</div>;
 

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <DocumentHeader
          title="Documents"
          description="Manage your uploaded documents and generate quizzes"
        >
        </DocumentHeader>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <TotalDocuments count={documents?.length}/>
          </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {documents?.map((document, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    {getFileIcon()}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {/* {document.title} */}
                      {truncate(document.file_type, 30)}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {truncate(document.filename, 60)}
                      </p>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>


              <div className="flex items-center space-x-2">
                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                  <Brain className="w-4 h-4" />
                  <span>Generate Quiz</span>
                </button>

                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        documents?.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No documents uploaded yet. Start by uploading your first document!
          </div>
        )
      }
    </div>
  );
};
