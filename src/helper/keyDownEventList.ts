/**
 * 엔터 키 입력 시에 실행할 함수를 설정하는 이벤트
 * @param event 입력 이벤트
 * @param callback 엔터키 입력 시 실행할 함수
 */
export const keyDownEnter = (event: React.KeyboardEvent<HTMLElement> , callback: VoidFunction) => {
    
    if(event.key === 'Enter') { 
        /** 기존 이벤트 방지 */
        event.preventDefault();
        /** 함수 실행 */
        callback() 
    };
}