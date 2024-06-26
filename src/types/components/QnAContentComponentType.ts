import { QnAContentUserType } from "@/constants/enum";
import { QnAResponseData } from "../api/QnAApisType";

/** keyword, 질문을 담을 때의 객체 형태
 * @type keyword 키워드, 문장 내용
 */
export interface QnAContentComponentPropsType {
    userType: QnAContentUserType,
    keyword: string,
    // referenceDocInfo?: ChatResponseData["referenceDocInfo"],
}