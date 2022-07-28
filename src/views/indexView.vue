<template>
<div class="wrap">
        <h1 class="hidden">마음아지트 메인</h1>
        <!-- //// 헤더 //// -->
        <header>
            <!-- 글로벌 네비 -->
            <div class="global_nav">
                <div class="GNV_relative">
                    <div class="btns">
                        <a href="#none" class="plus_bt"><img src="./img/main_plus_bt.png" alt="글로벌네비게이션 더보기"></a>
                        <div class="plus_touch_show">
                            <a href="#none" class="refresh_bt"><img src="./img/main_refresh_bt.png" alt="새로고침"></a>
                            <a href="#none" class="share_bt"><img src="./img/main_share_bt.png" alt="공유하기"></a>
                            <a href="#none" class="setting_bt"><img src="./img/main_setting_bt.png" alt="설정"></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 프로필 영역 -->
            <div id="profile_field">
                <div class="profile_info">
                    <p class="login_date">
                        <span>1</span>일째
                    </p>
                    <p class="hello">안녕하세요 <br>
                        <span>만성피로맨</span>님</p>
                    <p class="phrase_title">One sentence for today</p>
                    <p class="phrase">명언</p>
                </div>
                <div class="profile_img"><img src="./img/main_profile_img.png"></div>
            </div>
        </header>

        <!-- //// 섹션 //// -->
        <section>
            <!-- 힐링상품 배너 -->
            <div class="healing_banner">
                <!-- <h2>Healing product</h2> -->
                <div class="slide_container">

                    <div class="slide_img">
                        <img src="./img/main_healingBannerImg_00.jpg" alt="힐링상품 배너" draggable="false">
                        <p>배너문구1</p>
                    </div>
                    <div class="slide_img">
                        <img src="./img/main_healingBannerImg_01.jpg" alt="힐링상품 배너" draggable="false">
                        <p>배너문구2</p>
                    </div>
                    <div class="slide_img">
                        <img src="./img/main_healingBannerImg_02.jpg" alt="힐링상품 배너" draggable="false">
                        <p>배너문구3</p>
                    </div>
                </div>
            </div>

            <!-- 인기 미디어 목록 -->
            <div class="popular">
                <h2>Popular meditation</h2>
                <div class="slide_container">
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>우주와 함께하는 시간</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="인기미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>우주와 함께하는 시간</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="인기미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>우주와 함께하는 시간</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="인기미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>우주와 함께하는 시간</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="인기미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>우주와 함께하는 시간</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="인기미디어-플레이">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 새로운 미디어 목록 -->
            <div class="new">
                <h2>New meditation</h2>
                <div class="slide_container">
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>마음 속 평안을 찾는 여행</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="새미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>마음 속 평안을 찾는 여행</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="새미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>마음 속 평안을 찾는 여행</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="새미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>마음 속 평안을 찾는 여행</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="새미디어-플레이">
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="contents_field">
                            <p>마음 속 평안을 찾는 여행</p>
                            <img src="./img/main_contentsPlay_icon.png" alt="새미디어-플레이">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 힐링클래스 배너 -->
            <div class="class_banner">
                <h2 class="class">Class</h2>
                <div class="class_banner_slide">
                    <div class="slide_container">
                        <div class="slide_img">
                            <img src="./img/main_classBannerImg_00.jpg" alt="힐링클래스-배너" draggable="false">
                            <p>배너문구1</p>
                        </div>
                        <div class="slide_img">
                            <img src="./img/main_classBannerImg_01.jpg" alt="힐링클래스-배너" draggable="false">
                            <p>배너문구2</p>
                        </div>
                        <div class="slide_img">
                            <img src="./img/main_classBannerImg_02.jpg" alt="힐링클래스-배너" draggable="false">
                            <p>배너문구3</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- //// 푸터 //// -->
<!--         <footer>
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
            <footer>
                <div class="footer_all">
                    <router-link to="/HealingView"><div class="healing"><img src="./img/healing.png" width="35" alt="healing"><span>힐링</span></div></router-link>
                    <router-link to="/DiaryMainView"><div class="daily"><img src="./img/daily.png" width="35" alt="daily"><span>일지</span></div></router-link>
                    <router-link to="/indexView"><div class="home"><img src="./img/home.png" width="80" alt="home"></div></router-link>
                    <router-link to="/ShopView"><div class="store"><img src="./img/store.png" width="35" alt="store"><span>상점</span></div></router-link>
                    <router-link to="/SettingMainView"><div class="mypage"><img src="./img/mypage.png" width="35" alt="mypage"><span>마이페이지</span></div></router-link>
                </div>
            </footer>
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

/* //// 레이아웃 시작 //// */

h2 {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 25px;
    text-align: center;
}

.wrap {
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

/* //// 헤더 //// */
header {
    width: 100%;
    margin: 0 auto;
    height: 317px;
    padding-top: 1px;
    border-radius: 0 0 0 35px;
    background-color: #ecf4eb;
    position: relative;
    overflow: hidden;
}

/* 글로벌 네비 */
.global_nav {
    /* display: none; */
    width: 160px;
    height: 50px;
    background-color: #68b39f;
    border-radius: 26px 0 0 26px;
    position: absolute;
    top: 40px;
    right: -80px;
    /* 터치전/후 80px 차이 */
}

.GNV_relative {
    position: relative;
    width: 100%;
    height: 100%;
}

.btns {
    width: 160px;
    height: 50px;
    margin-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.plus_bt {
    display: block;
    width: 40px;
    height: 40px;
    margin-top: 2px;
    position: absolute;
    left: 8px;
    /* display: none; */
}

.plus_touch_show {
    width: 85%;
    height: 40px;
    display: flex;
    margin-right: 8px;
    justify-content: space-between;
    display: none;
}

.plus_touch_show a {
    display: block;
    width: 40px;
    height: 40px;
}

/* 프로필 영역 */
#profile_field {
    width: 85%;
    height: 70%;
    margin: 60px auto;
    /* background-color: white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile_info {
    width: 60%;
    height: 100%;
    background-color: #ecf4eb;
}

.login_date span {
    font-size: 35px;
    font-weight: 600;
    color: #68b39f;
    display: inline-block;
    margin-bottom: 20px;
}

.login_date {
    font-size: 17px;
    color: #333333;
}

.hello {
    font-size: 20px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 20px;
}

.hello span {
    font-size: 28px;
    font-weight: 600;
    color: #333333;
}

.profile_info .phrase_title {
    font-size: 16px;
    font-weight: 600;
    color: #2d6974;
    margin-bottom: 10px;
}

.phrase {
    font-size: 20px;
    color: #333333;
}

/* 프로필 이미지 */
.profile_img {
    width: 120px;
    height: 120px;
    /* background-color: #68B39F; */
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

/* 힐링배너 */
.healing_banner {
    width: 100%;
    overflow: hidden;
    margin: 50px auto;
}

.healing_banner .slide_container {
    width: 300%;
    display: flex;
    transition: all .5px;
    /* transform: translateX(-100vw); */
}

.healing_banner .slide_img {
    width: 100%;
    position: relative;
}

.healing_banner .slide_img img {
    width: 100%;
}

.healing_banner .slide_img p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

/* 인기 미디어 목록 */
.popular {
    width: calc(100% - 40px);
    height: auto;
    margin: 50px auto;
    overflow: hidden;
    /* border: 1px solid #333; */
}

.popular .slide_container {
    width: 300%;
    display: flex;
    transition: all .5s;
}

.popular .silde_box {
    width: 150px;
    height: 150px;
    margin-right: 2%;
    border-radius: 25px;
    position: relative;
}

/* 배경이미지 */
.popular .silde_box:nth-child(1) {
    background: url(./img/main_popular_00.jpg) no-repeat;
    background-size: cover;
}

.popular .silde_box:nth-child(2) {
    background: url(./img/main_popular_01.jpg) no-repeat;
    background-size: cover;
}

.popular .silde_box:nth-child(3) {
    background: url(./img/main_popular_02.jpg) no-repeat;
    background-size: cover;
    margin-right: none;
}

.popular .silde_box:nth-child(4) {
    background: url(./img/main_popular_00.jpg) no-repeat;
    background-size: cover;
    margin-right: none;
}

.popular .silde_box:nth-child(5) {
    background: url(./img/main_popular_01.jpg) no-repeat;
    background-size: cover;
    margin-right: none;
}

.popular .contents_field {
    position: relative;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 80%;
}

.popular .contents_field p {
    color: #ffffff;
}

.popular .contents_field img {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0;
    bottom: 0;
}

/* 새로운 미디어 목록 */
.new {
    width: calc(100% - 40px);
    height: auto;
    margin: 50px auto;
    overflow: hidden;
    /* border: 1px solid #333; */
}

.new .slide_container {
    width: 300%;
    display: flex;
    transition: all .5s;
}

.new .silde_box {
    width: 150px;
    height: 150px;
    margin-right: 2%;
    border-radius: 25px;
    position: relative;
}

/* 배경이미지 */
.new .silde_box:nth-child(1) {
    background: url(./img/main_new_00.jpg) no-repeat;
    background-size: cover;
}

.new .silde_box:nth-child(2) {
    background: url(./img/main_new_01.jpg) no-repeat;
    background-size: cover;
}

.new .silde_box:nth-child(3) {
    background: url(./img/main_new_02.jpg) no-repeat;
    background-size: cover;
    margin-right: none;
}

.new .silde_box:nth-child(4) {
    background: url(./img/main_new_00.jpg) no-repeat;
    background-size: cover;
}

.new .silde_box:nth-child(5) {
    background: url(./img/main_new_01.jpg) no-repeat;
    background-size: cover;
    margin-right: none;
}

.new .contents_field {
    position: relative;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 80%;
}

.new .contents_field p {
    color: #ffffff;
}

.new .contents_field img {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0;
    bottom: 0;
}

/* 힐링클래스 배너 */
.class_banner {
    width: 100%;
    margin: 0 auto 50px;
    padding: 50px 0;
    background-color: #ecf4eb;
}

.class_banner_slide {
    width: 100%;
    height: auto;
    /* background-color: yellowgreen; */
    overflow: hidden;
}

.class_banner .slide_container {
    width: 300%;
    display: flex;
    transition: all .5s;
}

.class_banner .slide_img {
    width: 100%;
    position: relative;
}

.class_banner .slide_img img {
    width: 90%;
    border-radius: 30px;
    overflow: hidden;
    display: block;
    margin: 0 auto;
}

.class_banner .slide_img p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

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