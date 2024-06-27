/**
 * AI채팅 화면에서 질의에 대한 응답 데이터 타입
 * 
 * src/api/apis/chattingApis.ts -> requestChatResponse API 
 * 
 * @type id / 채팅방 고유 번호
 * @type keyword / 응답 내용
 */
export interface QnAResponseData {
    id: string,
    key_word: string,
    answer: string

}