import { Upload } from "lucide-react";
import { DocumentHeader } from "../../ui/Document";
import { useRef } from "react";
const UploadExtractor = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="mb-8">
      <DocumentHeader
        title="Documents"
        description="Upload any document and discover its key content"
        className="mb-20"
      ></DocumentHeader>

      <div
        onClick={handleInput}
        className="flex items-center flex-col gap-6 border border-dashed border-gray-500 py-8 rounded-md hover:bg-gray-100"
      >
        <Upload size={50} className="text-gray-400" />
        <p>Click to upload</p>
        <p>Supports PDF, Word, Text</p>
        <input type="file" ref={fileInputRef} className="hidden" />
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Choose File
        </button>
      </div>
    </div>
  );
};

export default UploadExtractor;
