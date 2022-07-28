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
        <h1 class="hidden">앱 설정</h1>
        <!-- //// 헤더 //// -->
        <header>
            <a href="#none" class="back_bt">
                <img src="../assets/Settingsubview/back_bt.png" width="11" alt="뒤로가기"><span>앱 설정</span>
            </a>
        </header>
        <!-- //// 섹션 //// -->
        <section>
            <!-- !!!! : 너무 복잡해서 새로 짰음 -->
            <div class="setting">
                <h2 class="title"><span>설정</span></h2>
                <ul>
                    <li class="ar"><a href="#none"><span>알람</span><img src="../assets/Settingsubview/btn.png" alt="알람"></a></li>
                    <li><a href="#none"><span>푸시 알림 설정</span><img src="../assets/Settingsubview/btn.png" alt="알람"></a></li>
                    <li><a href="#none"><span>앱 잠금</span><img src="../assets/Settingsubview/btn_on.png" width="75" alt="알람"></a></li>
                </ul>
            </div>
            <div class="info">
                <h2 class="title"><span>정보</span></h2>
                <ul>
                    <li><a href="#none"><span>서비스 이용약관</span><img src="../assets/Settingsubview/btn.png" alt="알람"></a></li>
                    <li><a href="#none"><span>개인정보 처리방침</span><img src="../assets/Settingsubview/btn.png" alt="알람"></a></li>
                </ul>
            </div>


<!--             <div class="list_wrap set_list">
                <ul class="set">
                    <li>설정
                        <ul class="set_cont">
                            <li>
                                <span class="title">알람</span>
                                <span class="btn"><img src="../assets/Settingsubview/btn.png" alt="버튼"></span>
                            </li>
                            <li>
                                <span class="title">푸시 알림 설정</span>
                                <span class="btn"><img src="../assets/Settingsubview/btn.png" alt="버튼"></span>
                            </li>
                            <li>
                                <span class="title">앱 잠금</span>
                                <span class="btn swich_btn"><img src="../assets/Settingsubview/btn_on.png" alt="버튼on" width="50"></span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="list_wrap info_list">
                <ul class="info">
                    <li>정보
                        <ul class="set_cont">
                            <li>
                                <span class="title">서비스 이용약관</span>
                                <span class="btn"><img src="../assets/Settingsubview/btn.png" alt="버튼"></span>
                            </li>
                            <li>
                                <span class="title">개인정보 처리방침</span>
                                <span class="btn"><img src="../assets/Settingsubview/btn.png" alt="버튼"></span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div> -->
            
            <!-- 하단ui 묶음 -->
            <div class="bottom_wrap">
                <button class="logout_bt">로그아웃</button>
                <p class="version">App 버전 1.0</p>
            </div>
        </section>
        <!-- //// 푸터 //// -->
        <footer>
            <div class="footer_all">
                <div class="healing">
                    <img src="../assets/Settingsubview/healing.png" width="30" alt="힐링">
                    <p>힐링</p>
                </div>
                <div class="daily">
                    <img src="../assets/Settingsubview/daily.png" width="30" alt="일지">
                    <p>일지</p>
                </div>
                <div class="home">
                    <img src="../assets/Settingsubview/home.png" width="80" alt="홈">
                </div>
                <div class="store">
                    <img src="../assets/Settingsubview/store.png" width="30" alt="상점">
                    <p>상점</p>
                </div>
                <div class="mypage">
                    <img src="../assets/Settingsubview/mypage.png" width="30" alt="마이페이지">
                    <p>마이페이지</p>
                </div>
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
/* 레이아웃 ---------------------------------------------------------- */

/* 공통 */
.wrap{
    width: 100%;
    max-width: 767px;
    min-width: 425px;
    margin: 0 auto;
    /* border: 1px solid #000; */
}

header{
    width: 100%;
    background: #e0ecde;
}

header .back_bt{
    display: block;
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    line-height: 70px;
}

header span{
    font-size: 1.3em;
    font-weight: 400;
    margin-left: 30px;
}

/* //// 섹션 //// */
section{
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    margin: 0 auto;
}

/* 설정, 정보 - 타이틀 */
h2 {
    width: 100%;
    margin: 0 auto;
    background-color: #68B39F;
}

h2 span {
    margin-left: 20px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    line-height: 60px;
}

/* 설정, 정보 - 하위 */
.setting ul, .info ul {
    width: calc(100% - 40px);
    margin: 40px auto;
    background-color: #fff;
}

.setting ul a,
.info ul a {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
}

/* 하단ui 묶음 */
.bottom_wrap {
    width: calc(100% - 40px);
    margin: 150px auto 50px;
}

/* 하단ui 묶음 - 로그아웃 버튼 */
.bottom_wrap .logout_bt {
    width: 100%;
    height: 70px;
    background-color: #d9d9d9;
    border-radius: 40px;
    font-size: 1.3rem;
}

/* 하단ui 묶음 - 버전 정보 */
.bottom_wrap .version {
    margin-top: 25px;
    color: #A9A9A9;
    text-align: center;
}


/* section .list_wrap{
    height: 100px;
    width: 100%;
    background-color: #68b39f;
    position: relative;
}

section .list_wrap > ul{
    width: calc(100% - 40px);
    height: 100%;
    line-height: 2;
    margin: 0 auto;
}

section .list_wrap > ul > li{
    color: #333;
}

section .list_wrap ul li{
    padding: 10px 0;
}

section .list_wrap .set_cont{
    position: absolute;
    width: 100%;
    left: 0;
    top: 50px;
    background-color: #fff;
}

section .list_wrap .set_cont li{
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

section .list_wrap.info_list{
    margin-top: 80px;
}

section button{
    width: calc(100% - 40px);
    margin: 80px auto 0; 
    padding: 10px;
    background-color: #aeaeae;
    font-size: 1.1em;
    font-weight: 600;
    border-radius: 10px;
    color: #fff;
}

section p{
    width: calc(100% - 40px);
    margin: 0 auto;  
    text-align: center;
    font-size: 0.9em;
    color: #a9a9a9;
} */

/* //// 푸터 //// */
footer{
    /* !!!! : 위치지정 포지션 fixed로 수정 */
    position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
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