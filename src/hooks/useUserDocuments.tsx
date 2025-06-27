import { useQuery } from "react-query";
import API from "../types/api";
import { UploadResponseProps } from "../types/api";

export const getUserDocuments = async (
  userId: string
): Promise<UploadResponseProps[]> => {
  const response = await API.get(`/users/${userId}/documents`);
  return response.data;
};

const useUserDocuments = (userId: string) => {
  return useQuery<UploadResponseProps[], Error>(
    ["userDocuments", userId],
    () => getUserDocuments(userId),
    {
      enabled: !!userId, 
    }
  );
};

export default useUserDocuments;
