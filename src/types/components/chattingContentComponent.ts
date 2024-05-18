import { ChattingContentUserType } from "@/constants/enum";

/** 채팅 내용들을 담을 때의 객체 형태
 * @param userType 사용자의 질문인지 GPT의 응답인지 구분하기 위함
 * @param description 질문,응답 내용
 */
export interface ChattingContentComponentPropsType {
    userType: ChattingContentUserType, 
    description: string 
}