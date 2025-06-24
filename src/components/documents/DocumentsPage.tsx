import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  MoreVertical, 
  Download, 
  Trash2, 
  Brain,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { DocumentHeader, UploadButton } from '../ui/Document';

export const DocumentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock documents data
  const documents = [
    {
      id: '1',
      title: 'Advanced Machine Learning Concepts',
      filename: 'ml-advanced.pdf',
      type: 'pdf',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      status: 'ready',
      pageCount: 45,
      quizzesGenerated: 3,
      lastAccessed: '2 hours ago'
    },
    {
      id: '2',
      title: 'React Best Practices Guide',
      filename: 'react-guide.docx',
      type: 'docx',
      size: '1.8 MB',
      uploadDate: '2024-01-12',
      status: 'ready',
      pageCount: 32,
      quizzesGenerated: 5,
      lastAccessed: '1 day ago'
    },
    {
      id: '3',
      title: 'Data Structures and Algorithms',
      filename: 'dsa-handbook.pdf',
      type: 'pdf',
      size: '3.2 MB',
      uploadDate: '2024-01-10',
      status: 'processing',
      pageCount: 78,
      quizzesGenerated: 0,
      lastAccessed: '3 days ago'
    },
    {
      id: '4',
      title: 'Python Programming Fundamentals',
      filename: 'python-basics.txt',
      type: 'txt',
      size: '0.5 MB',
      uploadDate: '2024-01-08',
      status: 'ready',
      pageCount: 12,
      quizzesGenerated: 2,
      lastAccessed: '5 days ago'
    },
    {
      id: '5',
      title: 'Database Design Principles',
      filename: 'db-design.pdf',
      type: 'pdf',
      size: '1.9 MB',
      uploadDate: '2024-01-05',
      status: 'error',
      pageCount: 0,
      quizzesGenerated: 0,
      lastAccessed: '1 week ago'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ready':
        return <CheckCircle className="w-4 h-4 text-accent-500" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-warning-500 animate-spin" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-error-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ready':
        return 'Ready';
      case 'processing':
        return 'Processing';
      case 'error':
        return 'Error';
      default:
        return status;
    }
  };

  const getFileIcon = () => {
    return <FileText className="w-5 h-5 text-primary-600" />;
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.filename.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || doc.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <DocumentHeader title="Documents" description="Manage your uploaded documents and generate quizzes">
          <UploadButton />
        </DocumentHeader>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              <option value="pdf">PDF</option>
              <option value="docx">Word</option>
              <option value="txt">Text</option>
              <option value="pptx">PowerPoint</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Documents</p>
                <p className="text-2xl font-bold text-gray-900">{documents.length}</p>
              </div>
              <FileText className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ready</p>
                <p className="text-2xl font-bold text-accent-600">
                  {documents.filter(d => d.status === 'ready').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-accent-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Processing</p>
                <p className="text-2xl font-bold text-warning-600">
                  {documents.filter(d => d.status === 'processing').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-warning-600" />
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Quizzes</p>
                <p className="text-2xl font-bold text-secondary-600">
                  {documents.reduce((sum, doc) => sum + doc.quizzesGenerated, 0)}
                </p>
              </div>
              <Brain className="w-8 h-8 text-secondary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredDocuments.map((document) => (
          <div key={document.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    {getFileIcon()}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{document.title}</h3>
                    <p className="text-sm text-gray-500">{document.filename}</p>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Status</span>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(document.status)}
                    <span className={`font-medium ${
                      document.status === 'ready' ? 'text-accent-600' :
                      document.status === 'processing' ? 'text-warning-600' :
                      'text-error-600'
                    }`}>
                      {getStatusText(document.status)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Size</span>
                  <span className="text-gray-900">{document.size}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Pages</span>
                  <span className="text-gray-900">{document.pageCount}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Quizzes</span>
                  <span className="text-gray-900">{document.quizzesGenerated}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last accessed</span>
                  <span className="text-gray-900">{document.lastAccessed}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {document.status === 'ready' && (
                  <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                    <Brain className="w-4 h-4" />
                    <span>Generate Quiz</span>
                  </button>
                )}
                
                {document.status === 'processing' && (
                  <div className="flex-1 bg-warning-100 text-warning-700 px-4 py-2 rounded-lg text-sm font-medium text-center">
                    Processing...
                  </div>
                )}
                
                {document.status === 'error' && (
                  <button className="flex-1 bg-error-600 hover:bg-error-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Retry Upload
                  </button>
                )}
                
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-4 h-4 text-gray-600" />
                </button>
                
                <button className="p-2 hover:bg-error-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-error-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || filterType !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Upload your first document to get started with AI-powered learning.'
            }
          </p>
          {!searchTerm && filterType === 'all' && (
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 mx-auto transition-colors">
              <Upload className="w-5 h-5" />
              <span>Upload Your First Document</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};