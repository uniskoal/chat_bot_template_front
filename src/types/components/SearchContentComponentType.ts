import { SearchContentUserType } from "@/constants/enum";
import { SearchResponseData } from "../api/SearchApisType";

/** keyword, 질문을 담을 때의 객체 형태
 * @type keyword 키워드, 문장 내용
 */
export interface SearchContentComponentPropsType {
    userType: SearchContentUserType,
    keyword: string,
    // referenceDocInfo?: SearchResponseData["referenceDocInfo"],
}