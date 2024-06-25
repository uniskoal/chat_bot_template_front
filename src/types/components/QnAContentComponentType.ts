import { QnAContentUserType } from "@/constants/enum";
import { QnAResponseData } from "../api/QnAApisType";

/** ketword, 질문을 담을 때의 객체 형태
 * @type description 질문,응답 내용
 */
export interface QnAContentComponentPropsType {
    userType: QnAContentUserType,
    description: string,
    // referenceDocInfo?: ChatResponseData["referenceDocInfo"],
}