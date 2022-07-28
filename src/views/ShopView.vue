<template>
 <div class="wrap">
        <!-- 헤더 -->
        <header>
            <div class="btns">
                <h1>SHOP</h1>
                <a class='cart_bt'><img src="./img/shop_cart_bt.png" alt="장바구니"></a>
            </div>
        </header>
        <section>
            <!-- 검색창 -->
            <form class="search">
                <input type="search" class="input_search" name="input_search" placeholder="검색어를 입력하세요.">
                <button type="submit" class="input_submit"></button>
            </form>

            <!-- 인기상품 -->
            <div class="popular">
                <h2>Popular product</h2>
                <div class="popular_top">
                    <a class="view_all" href="#none">View all <img src="./img/shop_viewAll_bt.png" alt="상품 전체보기"></a>
                </div>
                <div class="slide_container">
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="./img/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="./img/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="./img/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="./img/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                    <div class="silde_box">
                        <div class="product_img">
                            <img src="./img/shop_productImg_01.jpg" alt="상품이미지">
                        </div>
                        <div class="product_info">
                            <p class="name">마음안정 디퓨저</p>
                            <p class="price"><span>28,000원</span> 14,000원</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 새상품 -->
            <div class="new">
                <h2>New product</h2>
                <div class="new_top">
                    <a class="view_all" href="#none">View all <img src="./img/shop_viewAll_bt.png" alt="상품 전체보기"></a>
                </div>
                <div class="product">
                    <div class="product_img"><img src="./img/shop_productImg_01.jpg" alt="상품이미지"></div>
                    <div class="product_info">
                        <p class="name">마음안정 디퓨저</p>
                        <p class="price"><span>28,000원</span> 14,000원</p>
                    </div>
                </div>
                <div class="product">
                    <div class="product_img"><img src="./img/shop_productImg_01.jpg" alt="상품이미지"></div>
                    <div class="product_info">
                        <p class="name">마음안정 디퓨저</p>
                        <p class="price"><span>28,000원</span> 14,000원</p>
                    </div>
                </div>
                <div class="product">
                    <div class="product_img"><img src="./img/shop_productImg_01.jpg" alt="상품이미지"></div>
                    <div class="product_info">
                        <p class="name">마음안정 디퓨저</p>
                        <p class="price"><span>28,000원</span> 14,000원</p>
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

/* //// 레이아웃 시작 //// */

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
}

h1 {
    font-size: 33px;
    font-weight: 800;
    margin-bottom: 3px;
}

h2 {
    display: inline-block;
    font-size: 25px;
    font-weight: 600;
    padding: 10px 0;
    margin-bottom: 20px;
}

/* //// 헤더 //// */
header {
    display: inline-block; /* 마진상쇄 해결 */
    width: 100%;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 50px;
    /* background-color: #CEDFCC; */
}

.btns {
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto;
    /* background-color: yellow; */
}

.cart_bt {
    width: 27px
}

/* //// 섹션 //// */
section{
/*     display: flex;
    flex-flow: column nowrap;
    justify-content: center; */
    width: 100%;
    margin: 0 auto;
}

/* 검색창 */
.search {
    position: relative;
    margin-bottom: 50px;
}

.search .input_search {
    width: 100%;    height: 52px;
    border-radius: 30px;
    background-color: #E0ECDE;
    padding-left: 25px; font-size: 20px;
}

.search .input_submit {
    font-size: 100px;
    width: 20px; height: 20px;
    position: absolute;
    top: 50%;   right: 20px;
    transform: translateY(-50%); 
    background: url(./img/shop_search_bt.png) no-repeat;
    background-size: cover;
}

::placeholder {
    font-size: 16px;
    font-weight: 400;
    opacity: 1; /* Firefox */
}

/* 인풋에 x버튼 안생기게하는 코드 */
input::-ms-clear,
input::-ms-reveal{
	display:none; width:0; height:0;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
	display:none;
}


/* 인기상품 */
.popular {
    width: 100%;
    overflow: hidden;
    margin-bottom: 50px;
}

.popular_top {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
}

.popular .view_all img {width: 8px;}

.popular .slide_container {
    /* width: ; */
    width: 200vw;
    display: flex;
}

.popular .silde_box {
    width: 140px;   height: 190px;
    background-color: #CEDFCC;
    margin-right: 3%;
    border-radius: 20px;
    overflow: hidden;
}

.popular .product_img {
    width: 140px; height: 140px;
    overflow: hidden;
}

.popular .product_img img {
    width: 100%;
}

.popular .product_info {
    width: 90%;
    margin: 5px auto;
    text-align: center;
}

.popular .name {
    font-size: 13px;
    font-weight: 800;
}

.popular .price {
    font-size: 15px;
    font-weight: 600;
}

.popular .price span {
    text-decoration: line-through red;
    font-size: 10px;
    font-weight: 400;
}

/* 새상품 */
.new {width: 100%; margin-bottom: 50px;}

.new_top {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 15px;
}

.new .view_all img {
    width: 8px;
}

.new .slide_container {
    width: 420px;
}

.new .product {
    width: 100%;   height: 120px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.new .product_img {
    width: 90px; height: 90px;
    overflow: hidden;
    border-radius: 20px;
}

.new .product_img img {
    width: 100%;
}

.new .product_info {
    width: 60%;
    margin: 5px auto;
}

.new .name {
    font-size: 20px;
    font-weight: 800;
}

.new .price {
    font-size: 15px;
    font-weight: 600;
    color: #9A9A9A;
}

.new .price span {
    text-decoration: line-through red;
    font-size: 10px;
    font-weight: 400;
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