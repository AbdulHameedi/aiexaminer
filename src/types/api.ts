import axios from "axios";
const API = axios.create({
  baseURL: "https://aigojo.onrender.com/api/v1/"
});
export default API;

export interface UploadResponseProps {
  filename: string;
  upload_timestamp: string;
  topics: string[];
  file_type: string;
}
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  created_at: string;
}