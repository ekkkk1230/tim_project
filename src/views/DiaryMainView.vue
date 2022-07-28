<template>
    <div class="wrap">
        <h1 class="hidden">마음아지트 일지 작성란</h1>
        <!-- //// section //// -->
        <section>
            <!-- 일지 윗부분 -->
            <div class="diary_top">
                <!-- 일지쓰기 버튼 -->
                <a class="write_btn cf" href="#none">
                    <img src="./img/write_btn.png" alt="write_btn">
                </a>
                
                <!-- 달력 -->
                <div class="calender">
                    <b>July, 2022</b>
                    <p>2022. 07. 17</p>
                    <img src="./img/all_calendar.png" alt="calender" class="calender_img">
                </div>
            </div>
            <!-- 일지 아래부분 -->
            <div class="diary_bottom">
                <div class="diary_bottom_title">
                    <h2>오늘의 기록</h2>
                    <img src="./img/delete_btn.png" width="25" alt="delete_btn" class="delete_btn">
                </div>
                <!-- 기록 내용 묶음 -->
                <div class="record_wrap">
                    <!-- 기록 내용 부분 -->
                    <div class="record_wrap_content">
                        <h3>2022-07-14</h3>
                        <!-- 기록 -->
                        <div class="content_wrap diary">
                            <div class="timeline">
                                <img src="./img/timeline_diary_01.png" width="19" alt="timeline">
                                <img src="./img/timeline_diary_02.png" width="1" alt="timeline">
                            </div>
                            <div class="category">
                                <p>Diary</p>
                                <img src="./img/sticker.png" alt="sticker" class="sticker">
                            </div>
                            <div class="content">
                                <p class="title">오늘은 칭찬을 받았다!</p>
                                <p class="note">
                                    칭찬받는건 너무 기분좋은 일이다. 어제보다 더 나은 내가 된 기분이다 :)
                                </p>
                            </div>
                        </div>
                        <div class="content_wrap list">
                            <div class="timeline">
                                <img src="./img/timeline_list_01.png" width="19" alt="timeline">
                                <img src="./img/timeline_list_02.png" width="1" alt="timeline">
                            </div>
                            <div class="category">
                                <p>List</p>
                            </div>
                            <div class="content">
                                <p class="title">뽀삐 쓰다듬기</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <footer>
            <!-- <div class="footer_all">
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
            </div> -->
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

.wrap {
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    margin: 0 auto;
    border: 1px solid #000;
}

/* //// 섹션 //// */
section{
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    height: auto;
    margin: 40px auto 110px;
}

/* 일지쓰기 버튼 */
.write_btn {
    position: relative;
    margin-top: 40px;
    margin-right: 20px;
    display: block;
    float: right;
    width: 48px;
    height: 48px;
    background-color: #fff;
    border-radius: 10px;
}

.write_btn img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

/* 일지 윗부분 */
.diary_top {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #68B39F;
}

/* 달력 */
.calender {
    width: calc(100% - 40px);
    height: 600px;
    /* background-color: red; */
    margin: 120px auto;
    position: relative;
    /* background-color: rebeccapurple; */
}

.calender b, .calender p {
    margin-left: 20px;
    color: #fff;
}

.calender b {
    font-size: 28px;
}

.calender_img {
    width: 90%;
    display: block;
    position: absolute;
    top: 100px;
    transform: translateX(-50%);
    left: 50%;
}

/* 일지 아래부분 */
.diary_bottom {
    width: 100%;
    height: auto;
    padding: 30px 0 110px;
    border-radius: 30px 30px 0 0;
    background-color: #fff;
    position: absolute;
    top: 80%;   /* 위치 조정(위로 슬라이드시 올라오게) */
    left: 0;
}

.diary_bottom_title {
    width: calc(100% - 40px);
    margin: 0px auto 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #68B39F; */
}

/* 기록 내용 묶음 */
.record_wrap {
    width: calc(100% - 40px);
    border-radius: 20px;
    margin: 0 auto;
    background: #E0ECDE;
    overflow: hidden;
    position: relative;
    /* background-color: aqua; */
}

.record_wrap h3 {
    width: calc(100% - 40px);
    margin: 0 auto 20px;
    font-size: 16px;
    color: #666;
}

.record_wrap_content {
    padding: 20px 0;
}

/* 기록 내용 부분 */
.content_wrap {
    width: calc(100% - 40px);
    height: auto;
    margin: 0px auto;
    right: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 5fr;
    color: #333;
    /* background-color: greenyellow; */
    /* border: 1px #333 solid; */
}

.diary {
    height: 130px;
}

.list {
    height: 50px;
}


.timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellow; */
    overflow: hidden;
    grid-column: 1/2;
}

.content_wrap .category {
    grid-column: 2/3;
    text-align: center;
    /* background-color: orange; */
}

.content_wrap .content {
    grid-column: 3/4;
    padding-left: 20px;
}

.sticker {
    display: inline-block;
}

.category p, .content .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
}
/* =================== footer ======================= */
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