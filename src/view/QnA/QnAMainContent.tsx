import QnAView from "@/components/chatting/mainContent/QnAMainView";
import { decideWidthAndHeight, flexAlignCenter, flexColumnDirection, flexJustifyCenter, textBase } from "@/styles/CommonStyles";
import styled from "styled-components";
import chatSinSungIcon from "@/assets/images/shinsungIcon.png";
import React, { useEffect, useRef, useState } from "react";
import { QnAContentComponentPropsType } from "@/types/components/QnAContentComponentType";
import { requestQnAResponse } from "@/api/apis/QnAApis";
import { QnAContentUserType } from "@/constants/enum";
import { keyDownEnter } from "@/helper/keyDownEventList";
import MainFirstView from "@/components/chatting/mainContent/MainFirstView";

const QnAMainContentContainer = styled.main`
    ${decideWidthAndHeight('100%', '100%')};
    ${flexColumnDirection};
    background-color: ${props => props.theme.mainViewBackgroundColor};
    position: relative;
    overflow: hidden;

    & > div:first-child {
        flex: 1 1 0%;
        ${decideWidthAndHeight('100%', '100%')};
        position: relative;
        overflow: auto;
    }
`;

const QnAFormContainer = styled.div`
    ${decideWidthAndHeight('calc(100% - 0.5rem)', '')};
    border-color: transparent;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    position: absolute;
    top: 3.125rem; // 3.125rem = 50px
    left: 0;
    right: 0;
`;

const QnAFormPadding = styled.div`
    ${textBase('1rem', '1.5rem')};
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    margin: auto;
`;

const QnAingFormMargin = styled.div`
    ${textBase('1rem', '1.5rem')};
    display: flex;
    max-width: 54rem;
    gap: 0.75rem;
    margin-left: auto;
    margin-right: auto;
`;

const ChattingTextArea = styled.textarea`
    ${decideWidthAndHeight('100%', '52px')};
    padding: 0.875rem 3rem 0.875rem 1.5rem;
    background-color: transparent;
    border-width: 0;
    resize: none;
    max-height: 25dvh;
    margin: 0;
    overflow-y: hidden;

    &::placeholder {
        color: rgba(180, 180, 180, 1);
    }

    &::-webkit-scrollbar {
        ${decideWidthAndHeight('8px', '')};
        margin-left: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.sidebarColor};
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.chattingBackgroundColor};
    }
`;

const ChattingInputContainer = styled.div`
    ${decideWidthAndHeight('', '100%')};
    ${flexColumnDirection};
    flex: 1 1 0%;
    max-width: 100%;
    position: relative;

    & > div:first-child {
        ${decideWidthAndHeight('100%', '')};
        ${flexAlignCenter};
    }

    & > div:first-child > div {
        ${decideWidthAndHeight('100%', '')};
        ${flexColumnDirection};
        position: relative;
        flex-grow: 1;
        background-color: ${props => props.theme.chattingBackgroundColor};
        border-radius: 1rem;
        overflow: hidden;
    }
`;

const ChattingSubmitButton = styled.button`
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.submitButtonBackgroundColor};
    padding: 0.125rem;
    transition-duration: 0.15s;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:disabled {
        opacity: 1;
        cursor: default;
        background-color: ${props => props.theme.submitButtonDisabledBackgroundColor};
    }

    &:disabled > span > svg {
        color: ${props => props.theme.mainViewBackgroundColor};
    }

    & > span > svg {
        color: ${props => props.theme.submitButtonIconColor};
    }
`;

const ChattingMainContent = styled.div`
    ${decideWidthAndHeight('', '100%')};
    ${flexColumnDirection};

    & > div:first-child {
        flex: 1 1 0%;
        overflow: hidden;
    }

    & > div:first-child > div {
        ${decideWidthAndHeight('', '100%')};
        position: relative;
    }
`;

const MainIcon = styled.div`
    ${decideWidthAndHeight('', '100%')};
    ${flexAlignCenter};
    ${flexJustifyCenter};
    background-color: ${props => props.theme.mainViewBackgroundColor};
    color: #0d0d0d;
    position: relative;
    border-radius: 9999px;

    & > img {
        ${decideWidthAndHeight('', '66.667%')};
        color: ${props => props.theme.fontColor};
    }
`;

const MainQuestion = styled.div`
    ${textBase('1.5rem', '2rem')};
    margin-bottom: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.fontColor};
`;

const MainIconContainer = styled.div`
    ${decideWidthAndHeight('', '90%')};
    ${flexAlignCenter};
    ${flexJustifyCenter};
    ${flexColumnDirection};
    color: #0d0d0d;
    margin-top: 1rem;

    & > div:first-child {
        position: relative;
    }

    & > div > div {
        ${decideWidthAndHeight('3rem', '3rem')};
        margin-top: 0.75rem;
    }
`;

const QnAMainContent = () => {
    const [QnAContent, setQnAContent] = useState('');
    const QnAForm = useRef<HTMLTextAreaElement | null>(null);
    let textArea: React.MutableRefObject<Element | HTMLTextAreaElement | null> = useRef(null);
    const [chatList, setChatList] = useState<QnAContentComponentPropsType[]>([]);

    const resizeHeightChattingForm = (target: EventTarget & HTMLTextAreaElement) => {
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
    };

    const handleQuestionContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQnAContent(event.target.value);
        resizeHeightChattingForm(event.target);
    };

    const saveUserChatContent = (props: QnAContentComponentPropsType) => {
        setChatList(chatList => [...chatList, props]);
    };

    const submitQuestion = async () => {
        saveUserChatContent({ userType: QnAContentUserType.USER, description: QnAContent });
        setQnAContent('');
        const response = await requestQnAResponse({ id: '1', keyword: QnAContent });
        saveUserChatContent({ userType: QnAContentUserType.SBERT, description: response.keyword });
    };

    return (
        <QnAMainContentContainer>
            <ChattingMainContent>
                <QnAView />
                <MainIconContainer>
                    <div>
                        <div>
                            <MainIcon>
                                <img
                                    src={chatSinSungIcon}
                                    width="41px"
                                    height="32px"
                                />
                            </MainIcon>
                        </div>
                    </div>
                    <MainQuestion>
                        자주 묻는 질문을 보여줍니다.
                    </MainQuestion>
                </MainIconContainer>
                <QnAFormContainer>
                    <QnAFormPadding>
                        <QnAingFormMargin>
                            <ChattingInputContainer>
                                <div>
                                    <div>
                                        <ChattingTextArea
                                            id="prompt-textarea"
                                            ref={QnAForm}
                                            tabIndex={0}
                                            data-id="root"
                                            dir="auto"
                                            rows={1}
                                            placeholder="키워드 및 질문을 입력해 주세요."
                                            value={QnAContent}
                                            onChange={handleQuestionContent}
                                            onKeyDown={event => keyDownEnter(event, submitQuestion)}
                                        ></ChattingTextArea>
                                        <ChattingSubmitButton
                                            type="button"
                                            disabled={!QnAContent}
                                            onClick={submitQuestion}
                                        >
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </span>
                                        </ChattingSubmitButton>
                                    </div>
                                </div>
                            </ChattingInputContainer>
                        </QnAingFormMargin>
                    </QnAFormPadding>
                </QnAFormContainer>
            </ChattingMainContent>
        </QnAMainContentContainer>
    );
};

export default QnAMainContent;
