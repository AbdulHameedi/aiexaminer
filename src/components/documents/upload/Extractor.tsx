import { Upload } from "lucide-react";
import { DocumentHeader } from "../../ui/Document";
import { useRef } from "react";
import { useAppState } from "../../../hooks/useAppState";
// import { useSetSelected } from "../../../hooks/useSelected";
import useUpload from "../../../hooks/useDocument";

const UploadExtractor = () => {
  const { mutate, isLoading } = useUpload();
  const { user } = useAppState();
  // const setSelected = useSetSelected();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const images = Array.from(e.target.files);
    // const newImageList = [...images, ...uploadedDoc];
    // setSelected("uploadedImage", newImageList);
    // console.log(uploadedImage);

    const file = images[0];
    console.log(user?.clientId)
    if (user?.clientId && file) {
      const user_id = user?.clientId;
      mutate({ file, user_id });
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
        <input
          type="file"
          ref={fileInputRef}
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        {isLoading ? (
          <p className="text-blue-600">Uploading...</p>
        ) : (
          <button className="bg-blue-600 text-white p-2 rounded-md">
            Choose File
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadExtractor;
