/**
 * AI채팅 화면에서 질의에 대한 응답 데이터 타입
 * 
 * src/api/apis/chattingApis.ts -> requestChatResponse API 
 * 
 * @type id / 채팅방 고유 번호
 * @type answer_list / 질문 목록
 * @type answer_list -> key_word / 질문 이름
 * @type answer_list -> answer / 답변 내용
 */
export interface QnAResponseData {
    id: string,
    answer_list: { key_word: string; answer: string;}[]
}
