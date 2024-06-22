import { ChattingContentUserType } from "@/constants/enum";
import { ChatResponseData } from "../api/chattingApisType";

/** 채팅 내용들을 담을 때의 객체 형태
 * @type userType 사용자의 질문인지 GPT의 응답인지 구분하기 위함
 * @type description 질문,응답 내용
 */
export interface ChattingContentComponentPropsType {
    userType: ChattingContentUserType,
    description: string,
    referenceDocInfo?: ChatResponseData["referenceDocInfo"],
}