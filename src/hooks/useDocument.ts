import {useMutation } from "react-query";
import API from "../types/api";
import { useSetSelected } from "./useSelected";
import { UploadResponseProps } from "../types/api";

interface UploadPayload {
  file: File;
  user_id: string;
}
const uploadFile = async ({
  file,
  user_id,
}: UploadPayload): Promise<UploadResponseProps> => {

    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", user_id);
    
    const response = await API.post<UploadResponseProps>("/upload", formData,   {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};

const useUpload = () => {
    const setSelected = useSetSelected();

  return useMutation(uploadFile, {
    onSuccess: (data) => {
      setSelected("uploadResponse", data);
      console.log(data);
    },
    onError: (error) => {
      console.error("Upload failed:", error);
    },
  });
};

export default useUpload;
