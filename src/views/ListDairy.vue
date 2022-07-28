<template>
    <div class="wrap">
        <h1 class="hidden">위시리스트</h1>
        <!-- //// 섹션 //// -->
        <section>
            <!-- 윗쪽 영역 -->
            <div class="list_top">
                <!-- 달력버튼 -->
                <div class="calendar">
                    <button type="button">
                        <img src="./img/calendar.png" alt="달력버튼" width="30">
                    </button>
                </div>
                <!-- 오늘 날짜 -->
                <div class="today">
                    <h2>July, 2022</h2>
                    <p>2022.07.18</p>
                </div>
                <!-- 인접 날짜선택 -->
                <ul class="select-date">
                    <li>
                        <p class="day_week">SAT</p>
                        <p class="date">16</p>
                    </li>
                    <li>
                        <p class="day_week">SUN</p>
                        <p class="date">17</p>
                    </li>
                    <li class="select">
                        <p class="day_week">MON</p>
                        <p class="date">18</p>
                    </li>
                    <li>
                        <p class="day_week">TUE</p>
                        <p class="date">19</p>
                    </li>
                    <li>
                        <p class="day_week">WED</p>
                        <p class="date">20</p>
                    </li>
                </ul>
            </div>
            <!-- 리스트 작성란(아래쪽 영역) -->
            <div class="list-bottom">
                <!-- 리스트 작성 묶음 -->
                <div class="diary_add">
                    <!-- 일기 추가 -->
                    <div class="section1">
                        <h3>일기 추가</h3>
                        <!-- ???? : 체크박스로 만들어서 중복체크 됨 -->
                        <form class="form_diary_radio">
                            <div class="checkbox">
                                <input class="checkbox1" type="checkbox" id="checkbox1" value="일기" name="diary">
                                <label for="checkbox1">일기</label>
                            </div>
                            <div class="checkbox">
                                <input class="checkbox2" type="checkbox" id="checkbox2" value="리스트" name="list">
                                <label for="checkbox2">리스트</label>
                            </div>
                        </form>

                    </div>
                    <!-- 일기 제목 -->
                    <div class="section2">
                        <h3>제목</h3>
                        <input class="title_input" type='text' name='title_text' placeholder="일기 제목을 작성하세요." onfocus="this.placeholder=''"
                            onblur="this.placeholder='일기 제목을 작성하세요.'" />
                    </div>
                    <!-- 일기 내용 -->
                    <div class="section3">
                        <h3>오늘, 나는</h3>
                        <textarea class="contents_input" name="diary_content" placeholder="일기 내용을 작성하세요." cols="30" rows="10"></textarea>
                    </div>
                    <!-- 감정 스티커 -->
                    <div class="section4">
                        <h3>감정 레포트</h3>
                        <div class="feeling">
                            <a href="#none">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.3519 30.7037C24.2782 30.7037 30.7037 24.2782 30.7037 16.3519C30.7037 8.42554 24.2782 2 16.3519 2C8.42554 2 2 8.42554 2 16.3519C2 24.2782 8.42554 30.7037 16.3519 30.7037Z"
                                        stroke="#333333" stroke-width="2.8" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10.6111 20.6582H22.0926" stroke="#333333" stroke-width="2.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0463 12.0469H12.0606" stroke="#333333" stroke-width="2.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.6573 12.0469H20.6717" stroke="#333333" stroke-width="2.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                            <a href="#none">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.3519 30.7037C24.2782 30.7037 30.7037 24.2782 30.7037 16.3519C30.7037 8.42554 24.2782 2 16.3519 2C8.42554 2 2 8.42554 2 16.3519C2 24.2782 8.42554 30.7037 16.3519 30.7037Z"
                                        stroke="#333333" stroke-width="2.8" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M22.0926 22.093C22.0926 22.093 19.9398 19.2227 16.3518 19.2227C12.7639 19.2227 10.6111 22.093 10.6111 22.093"
                                        stroke="#333333" stroke-width="2.8" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12.0463 12.0469H12.0607" stroke="#333333" stroke-width="2.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.6574 12.0469H20.6718" stroke="#333333" stroke-width="2.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
    
                            </a>
                            <a href="#none">
                                <svg class="select" width="33" height="33" viewBox="0 0 33 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.3519 30.7037C24.2782 30.7037 30.7037 24.2782 30.7037 16.3519C30.7037 8.42554 24.2782 2 16.3519 2C8.42554 2 2 8.42554 2 16.3519C2 24.2782 8.42554 30.7037 16.3519 30.7037Z"
                                        stroke="#333333" stroke-width="2.8" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M10.6111 19.2227C10.6111 19.2227 12.7639 22.093 16.3518 22.093C19.9398 22.093 22.0926 19.2227 22.0926 19.2227"
                                        stroke="#333333" stroke-width="2.8" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12.0463 12.0469H12.0607" stroke="#333333" stroke-width="2.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.6574 12.0469H20.6718" stroke="#333333" stroke-width="2.8"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
    
                            </a>
                            <a href="#none">
                                <svg class="face4" width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.5 0C6.9375 0 0 6.9375 0 15.5C0 24.0625 6.9375 31 15.5 31C24.0625 31 31 24.0625 31 15.5C31 6.9375 24.0625 0 15.5 0ZM15.5 28C8.60625 28 3 22.3937 3 15.5C3 8.60625 8.60625 3 15.5 3C22.3937 3 28 8.60625 28 15.5C28 22.3937 22.3937 28 15.5 28ZM16 18.5C15.175 18.5 14.5 19.175 14.5 20C14.5 20.825 15.175 21.5 16 21.5C17.4875 21.5 18.8938 22.1562 19.85 23.3C20.3563 23.9125 21.3 24.0437 21.9625 23.4937C22.6 22.9625 22.6875 22.0188 22.1562 21.3813C20.625 19.55 18.3813 18.5 16 18.5ZM10.5 14.5C11.6062 14.5 12.5 13.6062 12.5 12.5C12.5 11.3938 11.6062 10.5 10.5 10.5C9.39375 10.5 8.5 11.3938 8.5 12.5C8.5 13.6062 9.39375 14.5 10.5 14.5ZM20.5 10.5C19.3937 10.5 18.5 11.3938 18.5 12.5C18.5 13.6062 19.3937 14.5 20.5 14.5C21.6063 14.5 22.5 13.6062 22.5 12.5C22.5 11.3938 21.6063 10.5 20.5 10.5ZM10.15 16.675C9.4375 17.6312 7.875 19.8375 7.875 20.9312C7.875 22.35 9.05 23.5 10.5 23.5C11.95 23.5 13.125 22.35 13.125 20.9312C13.125 19.8375 11.5625 17.6312 10.85 16.675C10.675 16.4437 10.325 16.4437 10.15 16.675Z"
                                        fill="#333333" />
                                </svg>
    
                            </a>
                            <a href="#none">
                                <svg class="face5" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.7065 11.9796L24.838 10.7C24.9669 10.6226 25.0792 10.5207 25.1687 10.3999C25.2581 10.2791 25.3229 10.1419 25.3593 9.99612C25.3958 9.85032 25.4031 9.69876 25.381 9.55012C25.3588 9.40147 25.3076 9.25864 25.2303 9.12978C25.1529 9.00092 25.051 8.88856 24.9302 8.79911C24.8094 8.70966 24.6722 8.64488 24.5264 8.60845C24.3806 8.57202 24.229 8.56467 24.0804 8.58682C23.9318 8.60897 23.7889 8.66017 23.6601 8.73752L23.66 8.73753L18.8204 11.6437C18.8203 11.6437 18.8202 11.6437 18.8202 11.6438L18.8202 11.6438L22.7065 11.9796ZM22.7065 11.9796C22.9056 12.1477 23.0725 12.3517 23.1981 12.5818C23.3675 12.8922 23.4562 13.2401 23.4562 13.5938C23.4562 14.154 23.2337 14.6913 22.8375 15.0875C22.4413 15.4837 21.904 15.7062 21.3438 15.7062C20.7835 15.7062 20.2462 15.4837 19.85 15.0875C19.4922 14.7298 19.276 14.2569 19.2375 13.756L22.7065 11.9796ZM10.2951 11.9776C10.0862 12.1536 9.91268 12.3691 9.78507 12.6126C9.61492 12.9373 9.5322 13.3007 9.54505 13.6671C9.55789 14.0335 9.66586 14.3902 9.85833 14.7022C10.0508 15.0142 10.3212 15.2708 10.6428 15.4466C10.9645 15.6225 11.3264 15.7116 11.6929 15.7053C12.0595 15.6989 12.418 15.5973 12.7334 15.4104C13.0488 15.2234 13.31 14.9577 13.4916 14.6392C13.6457 14.3688 13.7378 14.0683 13.7622 13.7593C13.9527 13.7323 14.1344 13.6574 14.2895 13.5404C14.4903 13.3892 14.6356 13.176 14.7031 12.9338C14.7705 12.6917 14.7563 12.434 14.6626 12.2008C14.569 11.9676 14.4013 11.7718 14.1853 11.6436C14.1851 11.6435 14.185 11.6434 14.1849 11.6433L9.33792 8.73747L9.33798 8.73737L9.33236 8.73427C9.07304 8.59145 8.76844 8.55474 8.48261 8.63187C8.19678 8.70899 7.952 8.89395 7.79972 9.14784C7.64745 9.40172 7.59955 9.70477 7.66611 9.99324C7.73266 10.2817 7.90848 10.5331 8.15659 10.6947L8.15652 10.6948L8.16204 10.6981L10.2951 11.9776ZM23.9321 22.4386C23.965 22.1425 23.8811 21.8455 23.6985 21.6105L23.6962 21.6071L23.6923 21.6013L23.6871 21.5935L23.6811 21.5863L23.6714 21.5746L23.6715 21.5746L23.6682 21.5709L23.6553 21.5562L23.58 21.4619L23.5748 21.466C23.4544 21.3337 23.3279 21.2071 23.1957 21.0866L23.1954 21.0863C22.8952 20.8139 22.4556 20.4636 21.8628 20.1158C20.6759 19.4155 18.9036 18.7469 16.5039 18.7469C14.1021 18.7469 12.328 19.4175 11.1413 20.1157L11.1412 20.1157C10.5508 20.4632 10.1094 20.8133 9.80701 21.0878C9.65545 21.2234 9.53941 21.3414 9.45886 21.428L9.4574 21.4296L9.36246 21.5342L9.36209 21.5339L9.35392 21.5444L9.34008 21.5622L9.33541 21.5645L9.31157 21.5939C9.21695 21.7106 9.14624 21.8448 9.10348 21.9888C9.06072 22.1329 9.04675 22.2839 9.06236 22.4333C9.07797 22.5827 9.12286 22.7276 9.19447 22.8597C9.26607 22.9918 9.36299 23.1085 9.47969 23.2031C9.59639 23.2977 9.73058 23.3684 9.87461 23.4112C10.0186 23.4539 10.1697 23.4679 10.3191 23.4523C10.4685 23.4367 10.6134 23.3918 10.7455 23.3202C10.8746 23.2502 10.9891 23.1559 11.0826 23.0427L11.0827 23.0428L11.0882 23.0367C11.1688 22.9482 11.2538 22.8637 11.343 22.7838L11.343 22.7837C11.637 22.5199 11.9571 22.2867 12.2985 22.0878L12.299 22.0875C13.1719 21.5747 14.5501 21.0344 16.5039 21.0344C18.4575 21.0344 19.8339 21.5766 20.7031 22.0857L20.7034 22.0858C21.044 22.2846 21.3634 22.5177 21.6565 22.7814C21.745 22.8615 21.8295 22.9459 21.9095 23.0344L21.9094 23.0346L21.9153 23.0405C22.1054 23.2703 22.3779 23.4168 22.6747 23.4486C22.9746 23.4808 23.275 23.3931 23.5106 23.2048L23.5108 23.2047C23.7472 23.0152 23.8987 22.7397 23.9321 22.4386ZM16.5 0.825C12.3427 0.825 8.35573 2.47647 5.4161 5.4161C2.47647 8.35573 0.825 12.3427 0.825 16.5C0.825 20.6573 2.47647 24.6443 5.4161 27.5839C8.35573 30.5235 12.3427 32.175 16.5 32.175C20.6573 32.175 24.6443 30.5235 27.5839 27.5839C30.5235 24.6443 32.175 20.6573 32.175 16.5C32.175 12.3427 30.5235 8.35573 27.5839 5.4161C24.6443 2.47647 20.6573 0.825 16.5 0.825ZM3.1125 16.5C3.1125 14.7419 3.45878 13.0011 4.13156 11.3768C4.80435 9.75258 5.79046 8.27675 7.03361 7.03361C8.27675 5.79046 9.75258 4.80435 11.3768 4.13156C13.0011 3.45878 14.7419 3.1125 16.5 3.1125C18.2581 3.1125 19.9989 3.45878 21.6232 4.13156C23.2474 4.80435 24.7232 5.79046 25.9664 7.03361C27.2095 8.27675 28.1957 9.75258 28.8684 11.3768C29.5412 13.0011 29.8875 14.7419 29.8875 16.5C29.8875 20.0506 28.477 23.4557 25.9664 25.9664C23.4557 28.477 20.0506 29.8875 16.5 29.8875C12.9494 29.8875 9.54425 28.477 7.03361 25.9664C4.52296 23.4557 3.1125 20.0506 3.1125 16.5Z" fill="#333333" stroke="#333333" stroke-width="0.35"/>
                                    </svg>
                                    
    
                            </a>
                        </div>
                    </div>
                    <!-- 감정 색상 -->
                    <div class="section5">
                        <h3>나의 마음은 무슨 색일까?</h3>
                        <ul class="color_c">
                            <li class="color color1"></li>
                            <li class="color color2"></li>
                            <li class="color color3"></li>
                            <li class="color color4"></li>
                            <li class="color color5"></li>
                        </ul>
                    </div>
                    <!-- 버튼 -->
                    <div class="btns">
                        <button class="cancel">취소</button>
                        <button class="save">저장</button>
                    </div>

                </div>
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <footer>
<!--             <div class="footer_all">
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
    </div> <!-- class="wrap" -->
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
/* --------------------------------------------------------------- */

:root{
    /* color */
    --color-main: #68B39F;
    --color-sub: #E0ECDE;
    --color-point: #2D6974;
    --color-white: #fff;
    --color-black: #333; 
    
    /* size */
    
    /* width */
    --width: calc(100% - 40px);
}

h3 {
    font-size: 1.4em;
    margin-bottom: 20px;
}

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
    width: 100%;
    height: auto;
    margin: 0 auto 110px;
}
section {
    background: #68B39F;
}

/* ------------------------------- list_top -------------------------------- */
/* 위쪽 영역 */
.list_top{
    width: calc(100% - 40px);
    margin: 0 auto;
    height: 30%;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}

/* 달력버튼 */
.list_top .calendar{
    display: flex;
    justify-content: end;
    height: 50px;
    margin-top: 40px;
}
.list_top .calendar button{
    background: #fff;
    padding: 10px;
    border-radius: 10px;
}

/* 오늘 날짜 */
.today h2,
.today p{
    color: #fff;
    padding-bottom: 20px;
}

.today h2 {
    font-size: 29px;
}

/* 인접 날짜선택 */
.list_top .select-date{
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
}
.list_top .select-date li{
    flex: 1;
    height: 80px;
    background-color: #2d6974;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.list_top .select-date .day_week,
.list_top .select-date .date{
    /* font-size: ; */
    line-height: 22px;
    color: #fff;
}

/* select된 날짜 */
.list_top .select-date li.select{
    background-color: #fff;
}
.list_top .select-date li.select p{
    color: #000
}

/* ------------------------------- list-bottom -------------------------------- */
/* 아래쪽 영역 */
.list-bottom{
    width: 100%;
    background-color: #fff;
    border-radius: 50px 50px 0 0;
    margin: 50px auto 0;
    padding: 50px 0 0;
}

.list-bottom .diary_add{
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    /* !!!! : gap 여백 수정(디자인시안) */
    gap: 40px;
    /* background-color: #CFD345; */
}

/* 일기 추가 */
.section1{
    width: 100%;
    font-size: 1em;
}

.section1 .form_diary_radio {
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
    font-weight: 800;
}

/* 일기 추가_input1 */
.checkbox1 + label{
    position: relative;
}
.checkbox input[type="checkbox"].checkbox1{
    display: none;
}
.checkbox input[type="checkbox"].checkbox1 + label:before { /* 체크박스 배경 */
    display: inline-block;
    content: '';
    width: 1.2em; 
    height: 1.2em;
    background-color: #CFD345;
    border-radius: 50%;
    margin: 0 7px -3px 0;
}
.checkbox input[type="checkbox"].checkbox1 + label:after { /* 체크 마크 */
    position: absolute;
    left: 3px;
    top: 3px;
    content: '✔';
    font-size: 0.9em;
    line-height: 0.8;
    color: #fff;
    transition: all .25s;
}
[type="checkbox"].checkbox1 + label:after { /* 기본 상태 - 투명에 크기 0 */
    opacity: 0;
    transform: scale(0);
}
[type="checkbox"]:checked.checkbox1 + label:after { /* 체크 상태 - 불투명에 크기 1 */
    opacity: 1;
    transform: scale(1);
}

/* 일기 추가_input2 */
.checkbox2 + label{
    position: relative;
}
.checkbox input[type="checkbox"].checkbox2{
    display: none;
}
.checkbox input[type="checkbox"].checkbox2 + label:before { /* 체크박스 배경 */
    display: inline-block;
    content: '';
    width: 1.2em; 
    height: 1.2em;
    background-color: #FDA769;
    border-radius: 50%;
    margin: 0 7px -3px 0;
}
.checkbox input[type="checkbox"].checkbox2 + label:after { /* 체크 마크 */
    position: absolute;
    left: 3px;
    top: 3px;
    content: '✔';
    font-size: 0.9em;
    line-height: 0.8;
    color: #fff;
    transition: all .25s;
}
[type="checkbox"].checkbox2 + label:after { /* 기본 상태 - 투명에 크기 0 */
    opacity: 0;
    transform: scale(0);
}
[type="checkbox"]:checked.checkbox2 + label:after { /* 체크 상태 - 불투명에 크기 1 */
    opacity: 1;
    transform: scale(1);
}

/* 일기 제목 */
.section2{
    width: 100%;
}

.title_input{
    background: #e0ecde;
    width: 100%;
    height: 50px;
    border-radius: 15px;
    padding: 20px;
}

/* 일기 내용 */
.section3{
    width: 100%;
}
.contents_input{
    background: #e0ecde;
    width: 100%;
    height: 130px;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
}

/* 감정 스티커 */
.section4{
    width: 100%;
}

.section4 .feeling{
    display: flex;
    flex-flow: row nowrap;
    gap: 30px;
}

/* !!!! : 호버 주석, 셀렉트 추가 */
.section4 .feeling svg.select path {
    stroke: #FF7A7A;
    transition: all 0.3s;
}
.section4 .feeling .face4.select path{
    fill: #FF7A7A;
    transition: all 0.3s;
}
.section4 .feeling .face5.select path{
    stroke: #FF7A7A;
    fill: #FF7A7A;
    transition: all 0.5s;
}

/* .section4 .feeling svg:hover path{
    stroke: #FF7A7A;
    transition: all 0.3s;
}
.section4 .feeling .face4:hover path{
    fill: #FF7A7A;
    transition: all 0.3s;
}
.section4 .feeling .face5:hover path{
    stroke: #FF7A7A;
    fill: #FF7A7A;
    transition: all 0.5s;
} */

/* 감정 색상 */
.section5{
    width: 100%;
}
.section5 .color_c{
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
}
.section5 .color_c .color{
    width: 25px;
    height: 25px;
    border-radius: 15px;
    cursor: pointer;
}
.section5 .color_c .color1{
    background-color: #CFD345;
}
.section5 .color_c .color2{
    background-color: #FDA769;
}

.section5 .color_c .color3{
    background-color: #A2DACD;
}

.section5 .color_c .color4{
    background-color: #F99EB4;
}

.section5 .color_c .color5{
    background-color: #2D6974;
}

/* 버튼 */
.btns{
    display: flex;
    flex-flow: row nowrap;
    justify-content: end;
    gap: 10px;
}
.btns button{
    padding: 10px 25px;
    background-color: #fec868;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 1em;
}

/* !!!! : 취소버튼 색을 바꾸어봄 */
.btns .cancel {
    background-color: #d7d7d7;
}


/* ------------------------------- 메뉴바 -------------------------------- */
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
.footer_all a {color: #fff; }
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