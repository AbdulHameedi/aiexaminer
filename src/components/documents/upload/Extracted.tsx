import { Book, File, Lightbulb, X } from "lucide-react";
import { useAppState } from "../../../hooks/useAppState";

const Extracted = () => {
  const { uploadResponse } = useAppState();
  const topicLength = uploadResponse?.topics?.length || 0;
  return (
    <div>
      <div className="flex justify-between p-6 bg-gray-300 rounded-md mb-8">
        <div className="flex gap-6">
          <File size={30} className="text-blue-600" />
          <div className="flex flex-col gap-3">
            <p>{uploadResponse?.filename}</p>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <File size={15} />
                <p className="text-sm">2.09</p>
              </div>
              <div className="flex gap-2">
                <Book size={15} />
                <p className="text-sm">{uploadResponse?.upload_timestamp}</p>
              </div>
            </div>
          </div>
        </div>
        <X />
      </div>
      <div className="shadow-md p-6 bg-white">
        <div className="flex gap-4">
          <Lightbulb />
          <p>Extracted Topics</p>
        </div>
        <div className="flex gap-2">
          <p>Total Topics:</p>
          <p>{topicLength}</p>
        </div>
        <div>
          {uploadResponse?.topics?.map((topic, idx) => (
            <div key={idx} className="flex items-center gap-2 mb-2">
              <Book size={20} className="text-blue-600" />
              <p className="text-sm">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extracted;
