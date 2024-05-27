const ThemeStyles = (() => {
    
    const darkThemeOriginal = {
        // 메인 화면
        menuBoxIconColor: 'invert(100%) brightness(100%);', // 메인 화면 메뉴 박스 아이콘 색
        menuBoxBorderColor: 'hsla(0,0%,100%,.1)',           // 메인 화면 메뉴 박스 테두리 색
        menuBoxBorderShadowColor: 'rgba(0,0,0,0.4)',        // 메인 화면 메뉴 박스 그림자 색
        menuBoxBorderShadowSpread: '16px',                  // 메인 화면 메뉴 박스 그림자 퍼짐 정도
        menuBoxDescriptionColor: '#fff',                    // 메인 화면 메뉴 설명 텍스트 색
        // 챗봇 화면
        fontColor: '#fff',
        sidebarBackgroundColor: '#171717',                  // 좌측 사이드바 배경색
        sidebarBackgroundColorHover: '#212121',             // 좌측 사이드바 목록에 마우스를 올렸을 때의 배경색
        sidebarControlColor: '#cdcdcd',                     // 좌측 사이드바를 열고 닫을 수 있는 아이콘 색
        sidebarControlHover: '#fff',                        // 좌측 사이드바를 열고 닫을 수 있는 아이콘에 마우스를 올렸을 때의 색
        sidebarMenuButtonColor: '#fff',                     // 좌측 사이드바 채팅 목록에 마우를 올렸을 때의 우측 버튼 두 개의 색
        sidebarColor: 'hsla(0, 0%, 89%, .3);',              // 좌측 사이드바 스크롤바 색
        modelChangePopupBackgroundColor: '#2f2f2f',         // 모델 변경 팝업 배경색
        modelChangePopupBackgroundColorHover: '#212121',    // 모델 변경 시에 변경할 모델 영역에 마우스를 올렸을 때의 배경색
        mainViewBackgroundColor: '#212121',                 // 메인 화면 배경색
        iconBorderColor: 'rgba(180,180,180,1)',             // 아이콘 보더 색
        chattingBackgroundColor: '#2f2f2f',                 // 채팅 영역 색
        submitButtonBackgroundColor: '#fff',                // 채팅 아이콘 백그라운드 색 [활설화]
        submitButtonDisabledBackgroundColor: '#676767',     // 채팅 아이콘 백그라운드 색 [비활성화]
        submitButtonIconColor: '#000',                      // 채팅 보내는 아이콘 색
    }

    const lightThemeOriginal = {
        // 메인 화면
        menuBoxIconColor: 'invert(100%) brightness(0%);',
        menuBoxBorderColor: 'rgba(0,0,0,.1)',
        menuBoxBorderShadowColor: 'rgba(0,0,0,0.05)',
        menuBoxBorderShadowSpread: '7px',
        menuBoxDescriptionColor: 'rgba(109,109,109,1)',
        // 챗봇 화면
        fontColor: '#000',
        sidebarBackgroundColor: '#f9f9f9',
        sidebarBackgroundColorHover: '#ececec',
        sidebarControlColor: '#cdcdcd',
        sidebarControlHover: '#0d0d0d',
        sidebarMenuButtonColor: '#0d0d0d',
        sidebarColor: '#ececec',
        modelChangePopupBackgroundColor: '#fff',
        modelChangePopupBackgroundColorHover: '#ececec',
        mainViewBackgroundColor: '#fff',
        iconBorderColor: 'rgba(0,0,0,0.15)',
        chattingBackgroundColor: 'rgba(244,244,244,1)',
        submitButtonBackgroundColor: 'rgba(0,0,0,1)',
        submitButtonDisabledBackgroundColor: 'rgba(215,215,215,1)',
        submitButtonIconColor: 'rgba(244,244,244,1)',
    }
    
    return {
        darkTheme: Object.freeze(darkThemeOriginal),
        lightTheme: Object.freeze(lightThemeOriginal)
    }
})();

export default ThemeStyles