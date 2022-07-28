<template>
    <div class="wrap">
        <!-- //// 헤더 //// -->
        <!-- !!!! : 헤더 없앰(혹시몰라 남겨둔 부분. 지워도됨) -->
<!--         <header>
            <h1 class="hidden">마음아지트 힐링페이지</h1>
            <div class="header_all">
                <div class="back_bt">
                    <a href="#"><img src="./img/back_bt.png" alt="뒤로가기버튼" width="14" height="24"></a>
                </div>
            </div>
        </header> -->
        <!-- //// 섹션 //// -->
        <section>
            <!-- 데일리루틴 -->
            <!-- !!!! : 구조 수정 -->
            <div class="section1">
                <h2>Daily Routine</h2>
                <p class="h2_p">바쁜 하루 속 하루 루틴을 시작해보세요!</p>
                <div class="daily_routine">
                    <div>
                        <a href="#none">
                            <img src="./img/D_R_1.png" alt="하루루틴1" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">Morning</p>
                    </div>
                    <div>
                        <a href="#none">
                            <img src="./img/D_R_2.png" alt="하루루틴2" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">To Work</p>
                    </div>
                    <div>
                        <a href="#none">
                            <img src="./img/D_R_3.png" alt="하루루틴3" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">To Home</p>
                    </div>
                    <div>
                        <a href="#none">
                            <img src="./img/D_R_4.png" alt="하루루틴4" width="100" height="100">
                        </a>
                        <p class="time">7-10분</p>
                        <p class="place">At Sleep</p>
                    </div>
                </div>
            </div>
            <!-- 상황별 -->
            <div class="section2">
                <h2>상황별</h2>
                <p class="h2_p">일상 속 다양한 상황에서 아지트와 함께해보세요.</p>

                <div class="situation">
                    <!-- 상황별 - 위 -->
                    <a class="top" href="#">
                        <div class="contets_field">
                            <img class="play_icon" src="./img/play_bt.png" alt="재생버튼" width="28" height="28">
                            <div class="text_field">
                                <p class="note">가볍게 듣는 명상 음악 ! 지금 시작해보세요</p>
                                <p class="title">Everyday <br>
                                    Meditation
                                </p>
                            </div>
                        </div>
                    </a>
                    <!-- 상황별 - 아래 -->
                    <a class="bottom bottom_01" href="#">
                        <div class="contets_field">
                            <img class="play_icon" src="./img/play_bt.png" alt="재생버튼" width="28" height="28">
                            <div class="text_field">
                                <p class="title">Sleeping</p>
                                <p class="note">아지트가<br> 숙면을 도와드릴게요</p>
                            </div>
                        </div>
                    </a>
                    <a class="bottom bottom_02" href="#">
                        <div class="contets_field">
                            <img class="play_icon" src="./img/play_bt.png" alt="재생버튼" width="28" height="28">
                            <div class="text_field">
                                <p class="title">Healing</p>
                                <p class="note">긍정 힘이 솟는<br> 음악을 들어보세요</p>
                            </div>
                        </div>
                    </a>
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
/* --------------------------------------------------------------- */


h2{
    font-size: 25px;
    margin-bottom: 15px;
}

p.h2_p{
    font-size: 0.9em;
    margin-bottom: 30px;
}

.wrap {
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    margin: 0 auto;
    /* border: 1px solid #000; */

    /* 개별추가 */
    width: calc(100% - 40px);
    max-width: calc(767px - 40px);
    min-width: calc(425px - 40px);
    margin-top: 40px;
}

/* //// 섹션 //// */
section{
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    margin: 0 auto;
}

/* //// 헤더 //// */

/* !!!! : 헤더 높이 등 수정, 헤더 없앰 */
/* header{
    width: 100%;
    height: 70px;
    line-height: 70px;
}
.header_all{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
} */

/* 데일리루틴 */
.section1 {
    width: 100%;
/* !!!! : 마진값.. */
    margin: 0px auto 50px;
}

/* !!!! : 사이즈 조정 */
.daily_routine{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 50px auto;
}

.daily_routine div{
    text-align: center;
}

.daily_routine .time {
    margin-top: 20px;
    font-size: 0.9em;
}

.daily_routine .place {
    font-size: 1em;
    font-weight: 400;
}


/* 상황별 */
.section2 {
    width: 100%;
    margin: 50px auto 110px;
}

.situation{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

/* 상황별 - 위 */
.top {
    display: block;
    width: 100%;
    height: 240px;
    position: relative;
    background: url(./img/situation1.png) no-repeat;
    background-size: cover;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
}

.top .contets_field,
.bottom .contets_field {
    position: relative;
    width: calc(100% - 35px);
    height: calc(100% - 35px);
    color: #fff;
    /* background-color: rgba(255, 255, 255, .5); */
}

.top .play_icon {
    position: absolute;
    top: 0%;
    right: 0;
}

.top .text_field {
    position: absolute;
    left: 0%;
    bottom: 20px;
    /* background-color: aqua; */
}

.top .note {
    margin-bottom: 10px;
    font-size: 0.8rem;
}

.top .title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
}

/* 상황별 - 아래쪽 */
.bottom {
    display: block;
    width: 47.5%;
    height: 180px;
    position: relative;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom_01 {
    background: url(./img/situation2.png) no-repeat;
    background-size: cover;
}

.bottom_02 {
    background: url(./img/situation3.png) no-repeat;
    background-size: cover;
}

.bottom .text_field {
    text-align: left;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /* background-color: aqua; */
}

.bottom .title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.bottom .note {
    margin-top: 80px;
    font-size: 0.9rem;
}

.bottom .play_icon {
    position: absolute;
    top: 0;
    right: 0;
}

/* 시온 */
/* .top .text{

}

.top .text>p{
    color: #ffffff;
    margin-top: 10px;
}

.top .text>span{
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;
}

.top .play{
    position: absolute;
    top: 170px;
    right: 10px;
}

.bottom{
    position: relative;
}
.bottom .text1{
    text-align: center;
    position: absolute;
    top: 10px;
    left: 20px;
}

.bottom .text1>p{
    color: #ffffff;
}
.bottom .text1>span{
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;

}
.bottom .text2{
    text-align: center;
    position: absolute;
    top: 10px;
    right: 0px;
}
.bottom .text2>p{
    color: #ffffff;
    
}
.bottom .text2>span{
    color: #ffffff;
    font-size: 25px;
    font-weight: 600;

}
.bottom .play1{
    position: absolute;
    top: 150px;
    left: 10px;
}
.bottom .play2{
    position: absolute;
    top: 150px;
    right: 10px;
} */

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