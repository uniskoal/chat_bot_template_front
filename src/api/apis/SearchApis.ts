import axios from '@/api/axiosHandler';
import { SearchResponseData } from '@/types/api/SearchApisType';

/**
 * 질문에 대한 응답 생성 API
 * 
 * @param id / 채팅방 고유 번호
 * @param keyword / 질문 내용
 */
export const requestSearchResponse = async (params: { id: string; keyword: string }): Promise<SearchResponseData> => {
    const response = await axios.post('/FileSearch/' , params);   

    return response.data;
}