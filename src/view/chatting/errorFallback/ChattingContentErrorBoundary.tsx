import React from "react";

interface Props {
    children: React.ReactNode
}

interface State {
    hasError: boolean
}

class ChattingContentErrorBoundary extends React.Component<Props , State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    /** 하위 컴포넌트에서 에러(예를 들어 api 에러)가 발생할 경우 객체를 받아 적절하게 처리할 수 있도록 상태를 만들어서 반환*/
    static getDerivedStateFromError(error: Error): { hasError: boolean } { // 24/06/23 현재 Error 객체 사용 안함
        return { hasError: true };
    }
  
    render() {
        if (this.state.hasError) {
            // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
            return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
    }
}

export default ChattingContentErrorBoundary