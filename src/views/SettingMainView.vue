<template>
  <div class="wrap">
        <h1 class="hidden">마이페이지 메인</h1>
        <!-- //// section //// -->
        <section>
            <div class="profile">
                <!-- 1. info 부분 -->
                <div class="profile_info">
                    <!-- info 묶음 -->
                    <div class="info_wrap">
                        <!-- 프로필 이미지 -->
                        <img src="./img/profile_user.png" width="100" alt="setting_img" class="profile_user">
                        <!-- 텍스트 영역 -->
                        <div class="text_field">
                            <p class="profile_title1"><span>만성피로맨</span>&nbsp;님</p>
                            <p class="profile_title2">일반회원</p>
                        </div>
                        <!-- 설정 톱니바퀴 -->
                        <a class="setting" href="#none">
                            <img src="./img/setting_img.png" alt="setting_img">
                        </a>
                    </div>
                </div>
                <!-- 2. 3분할 상태창 -->
                <div class="profile_status">
                <div class="text_field">
                    <!-- 방문일수 -->
                    <div class="visit_date">
                        <p class="title">방문일수</p>
                        <span class="number">365</span>
                    </div>
                    <div class="line"></div>
                    <!-- 명상시간 -->
                    <div class="meditation_time">
                        <p class="title">명상시간 (시)</p>
                        <span class="number">365</span>
                    </div>
                    <div class="line"></div>
                    <!-- 포인트 -->
                    <div class="user_point">
                        <p class="title">포인트</p>
                        <span class="number">1,212</span><span>&nbsp;pt</span>
                    </div>
                </div>
                </div>
                <!-- 3. 구독 / 선물 -->
                <div class="premium_wrap">
                    <div class="premium_self">
                        <img src="./img/premium_self.png" width="50" alt="premium_self">
                        <span>프리미엄 혜택 구독하기</span>
                    </div>
                    <div class="premium_other">
                        <img src="./img/premium_other.png" width="50" alt="premium_other">
                        <span>선물하기</span>
                    </div>
                </div>
                <!-- 4. 설정 목록 부분 -->
                <ul class="account_list">
                    <li>
                        <div class="title">
                            <img src="./img/account_list1.png" alt="account_list1">
                            <a href="#none">나의 명상 기록</a>
                        </div>
                        <img src="./img/arrow.png" alt="arrow" class="arrow">
                    </li>
                    <li>
                        <div class="title">
                            <img src="./img/account_list2.png" alt="account_list2">
                            <a href="#none">내 계정</a>
                        </div>
                        <img src="./img/arrow.png" alt="arrow" class="arrow">
                    </li>
                    <li>
                        <div class="title">
                            <img src="./img/account_list3.png" alt="account_list3">
                            <a href="#none">나의 구매 / 찜 내역</a>
                        </div>
                        <img src="./img/arrow.png" alt="arrow" class="arrow">
                    </li>
                    <li>
                        <div class="title">
                            <img src="./img/account_list4.png" alt="account_list4">
                            <a href="#none">고객 센터</a>
                        </div>
                        <img src="./img/arrow.png" alt="arrow" class="arrow">
                    </li>
                </ul>
                <!-- 5. 배너 부분 -->
                <div class="mypage_banner">
                    <div class="slide_container">
                        <div class="slide_img">
                            <p>힐링상품 01</p>
                            <img src="./img/setMain_healingBannerImg_00.jpg" alt="힐링상품-홍보배너">
                        </div>
                        <div class="slide_img">
                            <p>힐링상품 02</p>
                            <img src="./img/setMain_healingBannerImg_01.jpg" alt="힐링상품-홍보배너">
                        </div>
                        <div class="slide_img">
                            <p>힐링상품 03</p>
                            <img src="./img/setMain_healingBannerImg_02.jpg" alt="힐링상품-홍보배너">
                        </div>
                    </div>
                </div>
            </div>
        <!-- //// 푸터 //// -->
        <footer>
            <div class="footer_all">
                <router-link to="/HealingView"><div class="healing"><img src="./img/healing.png" width="35" alt="healing"><span>힐링</span></div></router-link>
                <router-link to="/DiaryMainView"><div class="daily"><img src="./img/daily.png" width="35" alt="daily"><span>일지</span></div></router-link>
                <router-link to="/indexView"><div class="home"><img src="./img/home.png" width="80" alt="home"></div></router-link>
                <router-link to="/ShopView"><div class="store"><img src="./img/store.png" width="35" alt="store"><span>상점</span></div></router-link>
                <router-link to="/SettingMainView"><div class="mypage"><img src="./img/mypage.png" width="35" alt="mypage"><span>마이페이지</span></div></router-link>
            </div>
        </footer>
        <!-- <footer>
            <div class="footer_all">
                <div class="healing">
                    <img src="./img/healing.png" width="30" alt="힐링">
                    <p>힐링</p>
                </div>
                <div class="daily">
                    <img src="./img/daily.png" width="30" alt="일지">
                    <p>일지</p>
                </div>
                <div class="home">
                    <img src="./img/home.png" width="80" alt="홈">
                </div>
                <div class="store">
                    <img src="./img/store.png" width="30" alt="상점">
                    <p>상점</p>
                </div>
                <div class="mypage">
                    <img src="./img/mypage.png" width="30" alt="마이페이지">
                    <p>마이페이지</p>
                </div>
            </div>
        </footer> -->

        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@charset "utf-8";
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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

/* 레이아웃 --------------------------------------------------------------- */

.wrap {
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

/* //// 섹션 //// */
section {
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    height: auto;
    margin: 0 auto 110px;
}

.profile {
    width: 100%;
    position: relative;
}

/* info 부분 */
.profile_info {
    display: inline-block;
    width: 100%;
    height: 253px;
    background-color: #E0ECDE;
    border-radius: 0 0 0 50px;
    position: relative;
}

.info_wrap {
    width: calc(100% - 40px);
    /* border: 1px solid black; */
    height: 150px;
    margin: 0 auto;
    margin-top: 40px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 텍스트 영역 */
.info_wrap .text_field {
    width: 55%;
    color: #2D6974;
    font-size: 1.3rem;
    line-height: 35px;
    /* background-color: olivedrab; */
}

.profile_title1 span {
    color: #333;
    font-weight: 600;
    font-size: 1.6rem;
}

.profile_title2 {
    font-size: 1.2rem;
    font-weight: 500;
}

/* 설정 톱니바퀴 이미지 */
.setting {
    align-self: flex-start;
}

/* 3분할 상태창 */
.profile_status {
    width: 90%;
    height: 119px;
    background-color: #68B39F;
    position: absolute;
    right: 0;
    top: 200px;
    border-radius: 45px 0 0 45px;

}

.profile_status .text_field {
    width: calc(100% - 60px);
    height: 119px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.profile_status > div{
    text-align: center;
    color: #fff;
}

.profile_status .title {
    color: rgba(255, 255, 255, .9);
    margin-bottom: 5px;
}

/* div 사이 막대 */
.line {
    width: 1px;
    height: 40px;
    background-color: rgba(255, 255, 255, .8);
}

.profile_status .number {
    font-size: 1.8rem;
    font-weight: 600;
}

/* 구독 / 선물 */
.premium_wrap {
    width: calc(100% - 40px);
    height: 180px;
    margin: 115px auto 50px;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    text-align: center;
}

.premium_wrap > div img {
    position: absolute;
    transform: translate(-50%, -50px);
    left: 50%;
    top: 50%;
}

.premium_self {
    grid-column: 1/2;
    background-color: #2D6974;
    border-radius: 40px;
    position: relative;
    cursor: pointer;
}

.premium_self span, .premium_other span {
    display: inline-block;
    width: 120px;
    height: 50px;
    margin-top: 105px;
    /* background-color: rebeccapurple; */
    color: #fff;
    font-size: 1.1rem;
    line-height: 27px;
}

.premium_other span {
    line-height: 50px;
}

.premium_other {
    grid-column: 2/3;
    background-color: #67b29f;
    border-radius: 40px;
    position: relative;
    cursor: pointer;
}

/* 설정 목록 부분 */
.account_list {
    width: calc(100% - 40px);
    margin: 50px auto;
    /* border: 1px solid black; */
}

.account_list li {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: yellowgreen; */
}

.account_list a {
    padding-left: 10px;
    font-size: 1.3em;
}

/* 배너 */
.mypage_banner {
    width: 100%;
    margin: 50px auto;
    overflow: hidden;
    /* background-color: yellow; */
}

.slide_container {
    width: 300%;
    display: flex;
    transition: all .5s;
}

.slide_img {
    width: 100%;
    position: relative;
}

.slide_img img {
    width: 100%;
}

.slide_img p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

/* =================== footer ======================= */
/* //// 푸터 //// */
/* //// 푸터 //// */
footer{
    /* !!!! : 위치지정 포지션 fixed로 수정 */
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    width: 100%;
    min-width: 425px;
    max-width: 767px;
    height: 46px;
/*     margin: 0 auto;
    margin-left: -20px; */
}
footer .footer_all{
    width: (100% - 40px);
    background-color: #68b39f;
    padding: 20px 0;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    justify-content: space-between;
}
.footer_all a {color: #fff; }
footer .footer_all div{
    width: 100px;
    height: 35px;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
}
footer .footer_all div p{
    font-size: 0.7em;
    font-weight: 600;
    color: #ffffff;
    width: 100%;
    height: 30px;
}
footer .home{
    padding-bottom: 30px;
}
</style>