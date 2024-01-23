/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Gilroy-SemiBold.ttf */ "./src/fonts/Gilroy-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Gilroy-Regular.ttf */ "./src/fonts/Gilroy-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/header.svg */ "./src/img/header.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Gilroy-SemiBold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: normal;
}
@font-face {
  font-family: "Gilroy-Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: normal;
}
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.section {
  width: 100%;
}

.container {
  max-width: 941px;
  margin: 0 auto;
  background-color: rgba(251, 152, 152, 0.2);
}

header {
  height: 768px;
  flex-shrink: 0;
  margin-bottom: 180px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat;
  z-index: -1;
  background-position: 90%;
  background-size: 45%;
}

.wrapper {
  height: 768px;
  background: linear-gradient(0deg, rgba(152, 195, 232, 0.2) 8.84%, rgba(152, 195, 232, 0) 31.12%);
}

.navigation__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  flex-shrink: 0;
  width: 80%;
}

.header__content {
  margin: 0 auto;
}

.header__text-content {
  display: flex;
  flex-direction: column;
}

.header__h1 {
  width: 629px;
  color: var(--Blue_01, #1F3F68);
  font-family: "Gilroy-Regular";
  font-size: 64px;
  font-weight: 700;
  line-height: 74px;
  letter-spacing: 2.56px;
  margin-top: 101px;
}

.illustration__wrapper {
  z-index: -1;
}

.header__p {
  margin-top: 32px;
  width: 425px;
  height: 82px;
  flex-shrink: 0;
  color: #1F3F68;
  font-family: "Gilroy-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: 0.8px;
  opacity: 0.6;
}

.header__button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--blue_04, #5A98D0);
  box-shadow: 5px 10px 20px 0px rgba(53, 110, 173, 0.2);
  margin-top: 71px;
}

.header__button {
  text-align: center;
  text-decoration: none;
  color: #FFF;
  font-family: "Gilroy-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: 0.64px;
  padding: 10px 10px;
}

.header__button-wrapper:hover {
  background: var(--blue_04, #66adeb);
  box-shadow: 5px 10px 20px 0px rgba(18, 36, 56, 0.2);
}

.header__button-wrapper:active {
  background: var(--blue_04, #5A98D0);
  transform: scale(1.1);
}

.first__section {
  margin-bottom: 212px;
}

.what-we-do__content {
  display: flex;
  flex-direction: column;
  height: 1162px;
}

.content__h1 {
  font-family: "Gilroy-SemiBold";
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 46px; /* 127.778% */
  letter-spacing: 1.8px;
  width: 358px;
}

.main__h1 {
  color: #316099;
}

.card__content-wrapper {
  width: 941px;
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 100px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 525px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 5px 20px 50px 0px rgba(16, 112, 177, 0.2);
  padding: 0 48px;
}

.card__icon {
  margin: 0 auto;
  width: 224px;
  height: 197px;
}

.card__h2 {
  margin: 56px 0 16px 0;
}

.content__description {
  font-family: "Gilroy-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: 0.8px;
  opacity: 0.6;
  margin-bottom: 32px;
}

.card__description {
  color: #1F3F68;
}

.card1 {
  margin-top: 296px;
}

.card3 {
  margin-top: -250px;
}

.learn-more__button {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  gap: 24px;
  text-decoration: none;
}

.learn-more__text {
  color: #5A98D0;
  font-family: "Gilroy-SemiBold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 214.286% */
  letter-spacing: 0.7px;
}

.our-client__wrapper {
  border-radius: 200px 0px 0px 0px;
  background: #5A98D0;
  padding-bottom: 125px;
}

.our-client__text-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.our-client__h1 {
  color: #FFF;
  margin-top: 96px;
}

.our-client__description {
  color: #FFF;
  max-width: 540px;
  margin-right: 80px;
  margin-top: 96px;
}

.grid__wrapper {
  display: grid;
  grid-template-areas: "card1 card2 card3 card4" "card5 card6 card7 card8";
  margin-top: 111px;
}

.client__card {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 235px;
  height: 128px;
  flex-shrink: 0;
  color: #F2F2F2;
  font-family: "Gilroy-SemiBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 46px;
  letter-spacing: 0.4px;
}

.client__card1,
.client__card2,
.client__card3 {
  border-right: 1px solid #FFF;
  border-bottom: 1px #FFF solid;
  stroke-width: 1px;
}

.client__card5,
.client__card6,
.client__card7 {
  border-right: 1px solid #FFF;
  stroke-width: 1px;
}

.client__card4 {
  border-bottom: 1px #FFF solid;
  stroke-width: 1px;
}

.client__card8 {
  background: rgba(31, 63, 104, 0.2);
  text-transform: capitalize;
}

.client__card8 a {
  padding: 41px 62px;
  text-decoration: none;
  color: #FFF;
  transition: transform 0.3s ease;
}

.client__card8:hover a {
  background: rgba(31, 63, 104, 0.4);
  transform: scale(1.03);
  transition: transform 0.3s ease-out;
}

footer {
  background: #5A98D0;
}

.footer_wrapper {
  border-radius: 0px 200px 0px 0px;
  background: rgb(49, 96, 153);
  background-size: 75%;
}

.lets-talk__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 91px;
}

.lets-talk__text-content {
  display: flex;
  flex-direction: column;
}

.footer__h1 {
  color: #FFF;
}

.footer__description {
  max-width: 460px;
  color: #FFF;
  opacity: 0.6;
}

.lets-talk__button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 74px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #5A98D0;
  margin-right: 80px;
  color: #FFF;
  text-align: center;
  font-family: "Gilroy-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: 0.64px;
  text-decoration: none;
}

.lets-talk__button:hover {
  background: #69b4f5;
  color: #8e8caa;
}

.line {
  position: relative;
  width: 1073px;
  height: 2px;
  background-color: #FFF;
  margin: 96px 0;
  opacity: 0.4;
}

.footer__content {
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.contact__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.contact__info-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.footer__span {
  max-width: 264px;
  color: #FFF;
  font-family: "Gilroy-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.8px;
  text-decoration: none;
}

.contact__info-content a:hover {
  text-decoration: underline;
}

.signature {
  color: #FFF;
  font-family: "Gilroy-Regular";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.8px;
  opacity: 0.4;
  margin-top: 64px;
  margin-bottom: 64px;
}

.footer-info {
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.footer-info__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
}

.about-us__references {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-info__about-us:first-child {
  margin-bottom: 32px;
}

.footer__h2 {
  color: #FFF;
  font-family: "Gilroy-SemiBold";
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 46px;
  letter-spacing: 1.8px;
}

.footer-info__about-us__h2 {
  color: var(--white, #FFF);
  font-family: "Gilroy-SemiBold";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 150% */
  letter-spacing: 1px;
}

@media (max-width: 1285px) {
  header {
    background-position: 100%;
  }
}
@media (max-width: 1090px) {
  .line {
    width: 900px;
  }
  .our-client__text-content {
    margin-left: 50px;
  }
}
@media (max-width: 960px) {
  .client__card {
    width: 100%;
  }
  .card__content-wrapper {
    width: 100%;
  }
  .client__card8 a {
    padding: 0;
  }
}
@media (max-width: 920px) {
  .line {
    width: 700px;
  }
}
@media (max-width: 826px) {
  .card {
    width: 325px;
  }
  .our-client__text-content {
    margin-left: 75px;
    gap: 97px;
  }
}
@media (max-width: 767px) {
  .card__content-wrapper {
    gap: 20px;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Gilroy-SemiBold';\r\n    src: url('./fonts/Gilroy-SemiBold.ttf');\r\n    font-weight: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Gilroy-Regular';\r\n    src: url('./fonts/Gilroy-Regular.ttf');\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n$navigation-width: 1200px;\r\n$container-width: 941px;\r\n$font-gilroy-regular: \"Gilroy-Regular\";\r\n$font-gilroy-semibold: \"Gilroy-SemiBold\";\r\n\r\n\r\n*, *::after, *::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n.section {\r\n    width: 100%;\r\n}\r\n\r\n.container {\r\n    max-width: 941px;\r\n    margin: 0 auto;\r\n    background-color: rgba(251, 152, 152, .2);\r\n}\r\n\r\n\r\n                                    // Header\r\nheader {\r\n    height: 768px;\r\n    flex-shrink: 0;\r\n    margin-bottom: 180px;\r\n    background: url(\"./img/header.svg\") no-repeat;\r\n    z-index: -1;\r\n    background-position: 90%;\r\n    background-size: 45%;\r\n}\r\n\r\n.wrapper {\r\n    height: 768px;\r\n    background: linear-gradient(0deg, rgba(152, 195, 232, 0.2) 8.84%, rgba(152, 195, 232, 0) 31.12%);\r\n}\r\n\r\n.navigation__wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 40px;\r\n    width: 100%;\r\n}\r\n\r\n.navigation {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    height: 48px;\r\n    flex-shrink: 0;\r\n    width: 80%;\r\n}\r\n\r\n.header__content {\r\n    margin: 0 auto;\r\n    // display: flex;\r\n    // justify-content: center;\r\n    // align-items: center;\r\n}\r\n\r\n.header__text-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header__h1 {\r\n    width: 629px;\r\n    color: var(--Blue_01, #1F3F68);\r\n    font-family: $font-gilroy-regular;\r\n    font-size: 64px;\r\n    font-weight: 700;\r\n    line-height: 74px;\r\n    letter-spacing: 2.56px;\r\n    margin-top: 101px;\r\n}\r\n\r\n.illustration__wrapper {\r\n    z-index: -1;\r\n}\r\n\r\n.header__p {\r\n    margin-top: 32px;\r\n    width: 425px;\r\n    height: 82px;\r\n    flex-shrink: 0;\r\n    color: #1F3F68;\r\n    font-family: $font-gilroy-regular;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 26px; /* 162.5% */\r\n    letter-spacing: 0.8px;\r\n    opacity: 0.6;\r\n}\r\n\r\n.header__button-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 220px;\r\n    height: 56px;\r\n    flex-shrink: 0;\r\n    border-radius: 10px;\r\n    background: var(--blue_04, #5A98D0);\r\n    box-shadow: 5px 10px 20px 0px rgba(53, 110, 173, 0.20);\r\n    margin-top: 71px;\r\n}\r\n\r\n.header__button {\r\n    text-align: center;\r\n    text-decoration: none;\r\n    color: #FFF;\r\n    font-family: $font-gilroy-regular;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 26px; /* 162.5% */\r\n    letter-spacing: 0.64px;\r\n    padding: 10px 10px;\r\n}\r\n\r\n.header__button-wrapper:hover\r\n{\r\n    background: var(--blue_04, #66adeb);\r\n    box-shadow: 5px 10px 20px 0px rgba(18, 36, 56, 0.2);\r\n}\r\n\r\n.header__button-wrapper:active {\r\n    background: var(--blue_04, #5A98D0);\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n                                    // Main\r\n\r\n.first__section {\r\n    margin-bottom: 212px;\r\n}\r\n.what-we-do__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    // width: 840px;\r\n    // margin: 0 auto;\r\n    height: 1162px;\r\n}\r\n\r\n.content__h1 {\r\n    font-family: $font-gilroy-semibold;\r\n    font-size: 36px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 46px; /* 127.778% */\r\n    letter-spacing: 1.8px;\r\n    width: 358px;\r\n}\r\n\r\n.main__h1 {\r\n    color: #316099;\r\n}\r\n\r\n.card__content-wrapper {\r\n    width: 941px;\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-end;\r\n    gap: 100px;\r\n}\r\n\r\n.card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    width: 40%;\r\n    height: 525px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 5px 20px 50px 0px rgba(16, 112, 177, 0.20);\r\n    padding: 0 48px;\r\n}\r\n\r\n.card__icon {\r\n    margin: 0 auto;\r\n    width: 224px;\r\n    height: 197px;\r\n}\r\n\r\n.card__h2 {\r\n    margin: 56px 0 16px 0;\r\n}\r\n\r\n.content__description {\r\n    font-family: $font-gilroy-regular;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 26px; /* 162.5% */\r\n    letter-spacing: 0.8px;\r\n    opacity: 0.6;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.card__description {\r\n    color: #1F3F68;\r\n}\r\n\r\n.card1 {\r\n    margin-top: 296px;\r\n}\r\n\r\n.card3 {\r\n    margin-top: -250px;\r\n}\r\n\r\n.learn-more__button {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 48px;\r\n    gap: 24px;\r\n    text-decoration: none;\r\n}\r\n\r\n.learn-more__text {\r\n    color:  #5A98D0;\r\n    font-family: $font-gilroy-semibold;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 30px; /* 214.286% */\r\n    letter-spacing: 0.7px;\r\n}\r\n\r\n// .card2 .learn-more__button, .card3 .learn-more__button {\r\n//     margin-top: 0px;\r\n// }\r\n\r\n\r\n                                    // Our client\r\n.our-client__wrapper {\r\n    border-radius: 200px 0px 0px 0px;\r\n    background: #5A98D0;\r\n    padding-bottom: 125px;\r\n    // padding-bottom: 200px;\r\n}\r\n\r\n.our-client__content {\r\n    // height: 1549px;\r\n}\r\n\r\n.our-client__text-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content:center;\r\n    align-items: center;\r\n    // gap: 97px;\r\n}\r\n\r\n.our-client__h1 {\r\n    color: #FFF;\r\n    margin-top: 96px;\r\n}\r\n\r\n.our-client__description {\r\n    color: #FFF;\r\n    max-width: 540px;\r\n    margin-right: 80px;\r\n    margin-top: 96px;\r\n}\r\n\r\n.grid__wrapper {\r\n    display: grid;\r\n    grid-template-areas: \"card1 card2 card3 card4\"\r\n                         \"card5 card6 card7 card8\";\r\n    margin-top: 111px;\r\n}\r\n\r\n.client__card {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-transform: uppercase;\r\n    width: 235px;\r\n    height: 128px;\r\n    flex-shrink: 0;\r\n\r\n    color: #F2F2F2;\r\n    font-family: $font-gilroy-semibold;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 46px;\r\n    letter-spacing: 0.4px;\r\n}\r\n\r\n.client__card1,\r\n.client__card2,\r\n.client__card3 {\r\n    border-right: 1px solid #FFF;\r\n    border-bottom: 1px #FFF solid;\r\n    stroke-width: 1px;\r\n}\r\n\r\n.client__card5,\r\n.client__card6,\r\n.client__card7 {\r\n    border-right: 1px solid #FFF;\r\n    stroke-width: 1px;\r\n}\r\n\r\n.client__card4 {\r\n    border-bottom: 1px #FFF solid;\r\n    stroke-width: 1px;\r\n}\r\n\r\n.client__card8 {\r\n    // opacity: 0.2;\r\n    background: rgba(31, 63, 104, .2);\r\n    text-transform: capitalize;\r\n\r\n}\r\n\r\n.client__card8 a {\r\n    padding: 41px 62px;\r\n    text-decoration: none;\r\n    color: #FFF;\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.client__card8:hover a {\r\n    background: rgba(31, 63, 104, .4);\r\n    transform: scale(1.03);\r\n    transition: transform 0.3s ease-out;\r\n}\r\n\r\n                                // footer\r\n\r\nfooter {\r\n    background: #5A98D0;\r\n}\r\n\r\n.footer_wrapper {\r\n    border-radius: 0px 200px 0px 0px;\r\n    background: rgba(49, 96, 153, 1);\r\n    background-size: 75%;\r\n}\r\n\r\n.footer__content {\r\n}\r\n\r\n.lets-talk__content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 91px;\r\n}\r\n\r\n.lets-talk__text-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.footer__h1 {\r\n    color: #FFF;\r\n}\r\n\r\n.footer__description {\r\n    max-width: 460px;\r\n    color: #FFF;\r\n    opacity: 0.6;\r\n}\r\n\r\n.lets-talk__button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 15px 74px;\r\n    flex-shrink: 0;\r\n    border-radius: 10px;\r\n    background: #5A98D0;\r\n    margin-right: 80px;\r\n\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: $font-gilroy-regular;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 26px; /* 162.5% */\r\n    letter-spacing: 0.64px;\r\n    text-decoration: none;\r\n}\r\n\r\n.lets-talk__button:hover {\r\n    background: #69b4f5;\r\n    color: #8e8caa;\r\n}\r\n\r\n.line {\r\n    position: relative;\r\n    width: 1073px;\r\n    height: 2px;\r\n    background-color: #FFF;\r\n    margin: 96px 0;\r\n    opacity: 0.4;\r\n}\r\n\r\n.footer__content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 100px;\r\n}\r\n\r\n.contact__info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 24px;\r\n}\r\n\r\n.contact__info-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 15px;\r\n}\r\n\r\n.footer__span {\r\n    max-width: 264px;\r\n    color: #FFF;\r\n    font-family: $font-gilroy-regular;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 26px;\r\n    letter-spacing: 0.8px;\r\n    text-decoration: none;\r\n}\r\n\r\n.contact__info-content a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.signature {\r\n    color:#FFF;\r\n    font-family: $font-gilroy-regular;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 26px;\r\n    letter-spacing: 0.8px;\r\n    opacity: 0.4;\r\n    margin-top: 64px;\r\n    margin-bottom: 64px;\r\n}\r\n\r\n.footer-info {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 100px;\r\n}\r\n\r\n.footer-info__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 32px;\r\n}\r\n\r\n.about-us__references {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px   ;\r\n}\r\n\r\n.footer-info__about-us:first-child {\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.footer__h2 {\r\n    color: #FFF;\r\n    font-family: $font-gilroy-semibold;\r\n    font-size: 36px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 46px;\r\n    letter-spacing: 1.8px;\r\n}\r\n\r\n.footer-info__about-us__h2 {\r\n    color: var(--white, #FFF);\r\n    font-family: $font-gilroy-semibold;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 30px; /* 150% */\r\n    letter-spacing: 1px;\r\n}\r\n\r\n@media (max-width: 1285px) {\r\n    header {\r\n        background-position: 100%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1090px) {\r\n    .line {\r\n        width: 900px;\r\n    }\r\n\r\n    .our-client__text-content {\r\n        margin-left: 50px;\r\n    }\r\n}\r\n\r\n@media (max-width: 960px) {\r\n    .client__card {\r\n        width: 100%;\r\n    }\r\n\r\n    .card__content-wrapper {\r\n        width: 100%;\r\n    }\r\n\r\n    .client__card8 a {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 920px) {\r\n    .line {\r\n        width: 700px;\r\n    }\r\n}\r\n\r\n@media (max-width: 826px) {\r\n    .card {\r\n        width: 325px;\r\n    }\r\n\r\n    .our-client__text-content {\r\n        margin-left: 75px;\r\n        gap: 97px;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .card__content-wrapper {\r\n        gap: 20px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Gilroy-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Gilroy-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b91b0127c56a8e5f9e83.ttf";

/***/ }),

/***/ "./src/fonts/Gilroy-SemiBold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Gilroy-SemiBold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6780292641f883b3dad3.ttf";

/***/ }),

/***/ "./src/img/header.svg":
/*!****************************!*\
  !*** ./src/img/header.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "797820a66a7c5d21350d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ })()
;
//# sourceMappingURL=styles.js.map