import { FileText, Upload } from "lucide-react";

export const UploadButton = () => {
  return (
    <button className="bg-[#FE0000] hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
      <Upload className="w-5 h-5" />
      <span>Upload Document</span>
    </button>
  );
};

interface DocumentHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}
export const DocumentHeader = ({
  title,
  description,
  children,
  className,
}: DocumentHeaderProps) => {
  return (
    <div className={`flex items-center justify-between mb-4 ${className}`}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
      {children}
    </div>
  );
};

interface DocumentBodyProps {
  children?: React.ReactNode;
}
export const DocumentBody = ({ children }: DocumentBodyProps) => {
  return <div className="p-6 max-w-7xl mx-auto">{children}</div>;
};

export const truncate = (text: string, length: number) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};

export const TotalDocuments = ({ count }: { count: number|undefined }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Total Documents</p>
          <p className="text-2xl font-bold text-gray-900">{count}</p>
        </div>
        <FileText className="w-8 h-8 text-primary-600" />
      </div>
    </div>
  );
};
