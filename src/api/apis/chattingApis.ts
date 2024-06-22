import axios from '@/api/axiosHandler';
import { ChatResponseData } from '@/types/api/chattingApisType';

/**
 * 질문에 대한 응답 생성 API
 * 
 * @param id / 채팅방 고유 번호
 * @param description / 질문 내용
 */
export const requestChatResponse = async (params: { id: string; description: string }): Promise<ChatResponseData> => {
    const response = await axios.post('/Item/' , params);   

    return response.data;
}