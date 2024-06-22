// {
//     isOpen: false,
//     title: '안내',
//     description: '이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.',
//     buttons: [
//         { buttonText: '닫기' , active: null }
//     ],
// }

/**
 * 모달 구성에 필요한 기본 속성 값들
 * @type isOpen / 모달 렌더링 여부
 * @type title / 모달 제목
 * @type description / 모달 내용
 * @type buttons / 하단에 구성될 버튼 목록들
 * @type buttons - buttonText / 버튼 제목
 * @type buttons - active / 버튼 클릭 시 실행할 함수 [ null일 시 모달 닫기 기본 함수 실행 ]
 */
export interface ModalStateType {
    isOpen: boolean,
    title: string,
    description: string,
    buttons: Array<{
        buttonText: string,
        active: VoidFunction | null,
    }>
}