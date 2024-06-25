import axios from '@/api/axiosHandler';
import { QnAResponseData } from '@/types/api/QnAApisType';

/**
 * 질문에 대한 응답 생성 API
 * 
 * @param id / 채팅방 고유 번호
 * @param keyword / 질문 내용
 */
export const requestQnAResponse = async (params: { id: string; keyword: string }): Promise<QnAResponseData> => {
    const response = await axios.post('/QnA/' , params);   

    return response.data;
}