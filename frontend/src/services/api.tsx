import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

interface EmailData {
  to: string;
  subject: string;
  text: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

interface ApiError {
  error: string;
}

export const sendEmail = async (emailData: EmailData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>(`${API_URL}/send-email`, emailData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data as ApiError;
  }
};