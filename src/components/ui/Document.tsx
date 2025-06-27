import { Upload } from "lucide-react";

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
  className
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
    return(
        <div className="p-6 max-w-7xl mx-auto">{children}</div>
    )
};
