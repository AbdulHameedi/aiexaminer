import Extracted from "../components/documents/upload/Extracted";
import UploadExtractor from "../components/documents/upload/Extractor";
import { DocumentBody } from "../components/ui/Document";
import { useAppState } from "../hooks/useAppState";

const UploadDocuments = () => {
  const { uploadResponse } = useAppState();
  console.log(uploadResponse);
  return (
    <div className="mb-8">
      <DocumentBody>
        <UploadExtractor />
        {uploadResponse && <Extracted />}
      </DocumentBody>
    </div>
  );
};

export default UploadDocuments;
