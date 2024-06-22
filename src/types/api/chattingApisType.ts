/**
 * AI채팅 화면에서 질의에 대한 응답 데이터 타입
 * 
 * src/api/apis/chattingApis.ts -> requestChatResponse API 
 * 
 * @type id / 채팅방 고유 번호
 * @type description / 응답 내용
 * @type referenceDocInfo / 참고 문서 정보
 * @type > file_name / 참고 문서 파일 이름
 * @type > meta_data / 챗봇이 응답 내용을 생성할 때의 참고 문서 정보
 * @type >> page / 문서 내 참고 페이지
 * @type >> context / 문서 내 참고 내용 일부
 */
export interface ChatResponseData {
    id: string,
    description: string,
    referenceDocInfo: {
        file_name: string,
        meta_data: Array<{
            page: string,
            context: string,
        }>
    }
}