import profileImg from "$images/profileImg.jpg"
import { ProfileImg, decideWidthAndHeight, flexAlignCenter, flexColumnDirection } from "@/styles/CommonStyles";
import styled from "styled-components";

const UserInfoContainer = styled.div`
    ${flexColumnDirection};
    padding-top: 0.8rem;
`
const UserInfo = styled.div`
    ${ decideWidthAndHeight('100%' , '') };
    ${ flexAlignCenter };
    position: relative;
    flex-grow: 1;
    max-width: 100%;

    & > div:first-child {
        ${ decideWidthAndHeight('100%' , '') };
        ${ flexAlignCenter };
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        gap: 0.5rem;
        max-width: 100%;
    }
`

const ProfileName = styled.div`
    text-align: left;
    text-overflow: ellipsis;
    flex-grow: 1;
    position: relative;
    top: -1px;
    overflow: hidden;
    white-space: nowrap;
`

// 2024/05/18 현재 사용하지 않음
const UserSetting = () => {
    return (
        /* 유저 정보 및 설정 진입 부분 */
        <UserInfoContainer>
            <UserInfo>
                <div>
                    <ProfileImg>
                        <img
                            alt="프로필 이미지"
                            src={profileImg}
                            loading="lazy"
                            width="32"
                            height="32"
                            style={ { borderRadius: "0.125rem" }}
                        />
                    </ProfileImg>
                    <ProfileName>
                        <div></div>
                    </ProfileName>
                </div>
            </UserInfo>
        </UserInfoContainer>
    )
}

export default UserSetting;