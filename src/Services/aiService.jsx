import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_AI_API || 'http://127.0.0.1:8000',
    timeout: 10000,
});

export const askAI = async (prompt) => {
    const response = await api.post('/chat', { prompt });
    return response?.data?.answer || 'Không có phản hồi từ AI service.';
};
