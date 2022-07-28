<!--
  * 앱제작 팀프로젝트(4조_박소윤, 이주현, 김시온, 송은경) : 마음아지트

  * 로그인(login) 페이지
  * 작성자 : 송은경
  * 작성일 : 2022.07.20
  * 업데이트 : 2022.07.21

    //// : 시멘틱 영역표시
    ???? : 해결해야할 부분
    !!!! : 수정사항 
 -->
<template>
    <div class="wrap">
        <!-- //// 섹션 //// -->
        <section>
            <h1 class="hidden">마음아지트 로그인</h1>
            <h2>매 순간을 <br>마음아지트와 함께</h2>
            <div class="agit_img"></div>
            <!-- 버튼 모임 -->
            <ul class="join_btn_wrap">
                <li class="login">
                    <button>로그인</button>
                </li>
                <li class="join">
                    <button>회원가입</button>
                </li>
                <li>
                    <!-- sns 로그인 -->
                    <ul class="sns_login">
                        <li class="kakao"><a href="#none">카카오</a></li>
                        <li class="naver"><a href="#none">네이버</a></li>
                        <li class="facebook"><a href="#none">페이스북</a></li>
                        <li class="google"><a href="#none">구글</a></li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@charset "utf-8";

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Noto Sans", Avenir, Helvetica, Arial, sans-serif;
}

a {
    text-decoration: none;
    color: #333;
}

ul,li {
    list-style: none;
}

.cf::after {
    content: '';
    display: block;
    clear: both;
}

.hidden {
    display: none;
}

/* 모바일 수평 스크롤 금지 */
html,
body {
    max-width: 100%;
    overflow-x: hidden;

    /* y축 스크롤바 숨기기(작동o) */
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

/* y축 스크롤바 숨기기(작동o) */
.html,
body::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera*/
}
/* --------------------------------------------------------------- */

/* 공통 */
.wrap{
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

/* //// 섹션 //// */
section{
    /*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: calc(100% - 40px);
    margin: 0 auto;
}

h2{
    margin-top: 40px;
    width: 100%;
}

.agit_img{
    width: 100%;
    height: 300px;
    background: url(../assets/Loginview/login_img.png) no-repeat center;
    background-size: contain;
}

/* 버튼 모임 */
.join_btn_wrap{
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}

.login,
.join{
    width: 100%;
}

button{
    width: 100%;
    background-color: #68b39f;
    color: #fff;
    padding: 20px;
    border-radius: 15px;
    font-weight: 600;
    font-size: 1.1em;
}

/* sns 로그인 */
.sns_login {
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
    justify-content: center;
    margin-bottom: 20px;
}
.sns_login a {
    display: block;
    text-indent: -99999px;
    width: 60px;
    height: 60px;
}

.kakao, .naver, .facebook, .google {
    border-radius: 50%;
}

.kakao {
    background-color: #fae100;
}

.naver {
    background-color: #2db400;
}

.facebook {
    background-color: #3b5998;
}

.google {
    border: 1px solid #ddd;
}

/* sns 로그인 배경이미지 */
.kakao a {
    background: url(../assets/Loginview/kakao.png) no-repeat center;
}
.naver a {
    background: url(../assets/Loginview/naver.png) no-repeat center;
}
.facebook a {
    background: url(../assets/Loginview/facebook.png) no-repeat center;
}
.google a {
    background: url(../assets/Loginview/google.png) no-repeat center;
}
</style>