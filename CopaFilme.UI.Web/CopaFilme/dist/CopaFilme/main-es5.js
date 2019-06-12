(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <app-selecao-filme></app-selecao-filme>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/banner-selecao/banner-selecao.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/banner-selecao/banner-selecao.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <p class=\"lead text-sm text-center\">CAMPEONATO DE FILMES</p>\n  <h1 class=\"display-4 text-center\">Fase de Seleção</h1>\n  <hr class=\"my-4\">\n  <p class=\"lead text-justify text-center\">Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/banner-vitoria/banner-vitoria.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/banner-vitoria/banner-vitoria.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <p class=\"lead text-sm text-center\">CAMPEONATO DE FILMES</p>\n    <h1 class=\"display-4 text-center\">Resultado Final</h1>\n    <hr class=\"my-4\">\n    <p class=\"lead text-justify text-center\">Veja o resultado final do Campeonato de filmes de forma simples e rápida</p>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/filmes-vencedores/filmes-vencedores.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/filmes-vencedores/filmes-vencedores.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner-vitoria></app-banner-vitoria>\n\n<div class=\"row\">\n  <div class=\"col-12\">\n      <div class=\"input-group mb-2 mr-sm-2 input-group-lg\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text posicao\">1 º</div>\n          </div>\n          <input type=\"text\" class=\"form-control textoVencedor\" value=\"{{filmesVencedores[0].Titulo}}\" readonly>\n        </div>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"input-group mb-2 mr-sm-2 input-group-lg\">\n            <div class=\"input-group-prepend\">\n              <div class=\"input-group-text posicao\">2 º</div>\n            </div>\n            <input type=\"text\" class=\"form-control textoVencedor\" value=\"{{filmesVencedores[1].Titulo}}\" readonly>\n          </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/selecao-filme/selecao-filme.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selecao-filme/selecao-filme.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"filmesVencedores === undefined\">\n        <app-banner-selecao></app-banner-selecao>\n\n        <div class=\"row\">\n            <div class=\"col-10\">\n                <p class=\"lead\">Selecionados</p>\n                <p class=\"lead\">{{quantidadeFilmesSelecionados}} de 8</p>\n            </div>\n            <div class=\"col-2\">\n                <button class=\"btn btn-primary float-right\" (click)=\"GerarCampeonato()\">GERAR MEU CAMPEONATO</button>\n            </div>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-3 mb-2 mt-1\" *ngFor=\"let filme of filmes\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-2\">\n                                <input type=\"checkbox\" class=\"form-control\" #filmeSelecioando [id]=\"filme.Id\" (change)=\"AlterarListaSelecionados(filmeSelecioando)\">\n                            </div>\n                                <div class=\"col-10\">\n                                    <h5 class=\"card-title\">\n                                        <label for=\"{{filme.Id}}\">\n                                            {{filme.Titulo}}\n                                        </label>\n                                    </h5>\n                                    <h6 class=\"card-subtitle mb-2 text-muted\">\n                                        <label for=\"{{filme.Id}}\">\n                                            {{filme.Ano}}\n                                        </label>\n                                    </h6>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>\n<div *ngIf=\"filmesVencedores !== undefined\">\n    <app-filmes-vencedores [filmesVencedores]=filmesVencedores></app-filmes-vencedores>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CopaFilme';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _selecao_filme_selecao_filme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selecao-filme/selecao-filme.component */ "./src/app/selecao-filme/selecao-filme.component.ts");
/* harmony import */ var _filmes_vencedores_filmes_vencedores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filmes-vencedores/filmes-vencedores.component */ "./src/app/filmes-vencedores/filmes-vencedores.component.ts");
/* harmony import */ var _banner_selecao_banner_selecao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./banner-selecao/banner-selecao.component */ "./src/app/banner-selecao/banner-selecao.component.ts");
/* harmony import */ var _banner_vitoria_banner_vitoria_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner-vitoria/banner-vitoria.component */ "./src/app/banner-vitoria/banner-vitoria.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_FilmeService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/FilmeService */ "./src/app/services/FilmeService.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _selecao_filme_selecao_filme_component__WEBPACK_IMPORTED_MODULE_5__["SelecaoFilmeComponent"],
                _filmes_vencedores_filmes_vencedores_component__WEBPACK_IMPORTED_MODULE_6__["FilmesVencedoresComponent"],
                _banner_selecao_banner_selecao_component__WEBPACK_IMPORTED_MODULE_7__["BannerSelecaoComponent"],
                _banner_vitoria_banner_vitoria_component__WEBPACK_IMPORTED_MODULE_8__["BannerVitoriaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_services_FilmeService__WEBPACK_IMPORTED_MODULE_10__["FilmeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner-selecao/banner-selecao.component.css":
/*!*************************************************************!*\
  !*** ./src/app/banner-selecao/banner-selecao.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci1zZWxlY2FvL2Jhbm5lci1zZWxlY2FvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/banner-selecao/banner-selecao.component.ts":
/*!************************************************************!*\
  !*** ./src/app/banner-selecao/banner-selecao.component.ts ***!
  \************************************************************/
/*! exports provided: BannerSelecaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerSelecaoComponent", function() { return BannerSelecaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerSelecaoComponent = /** @class */ (function () {
    function BannerSelecaoComponent() {
    }
    BannerSelecaoComponent.prototype.ngOnInit = function () {
    };
    BannerSelecaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-selecao',
            template: __webpack_require__(/*! raw-loader!./banner-selecao.component.html */ "./node_modules/raw-loader/index.js!./src/app/banner-selecao/banner-selecao.component.html"),
            styles: [__webpack_require__(/*! ./banner-selecao.component.css */ "./src/app/banner-selecao/banner-selecao.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerSelecaoComponent);
    return BannerSelecaoComponent;
}());



/***/ }),

/***/ "./src/app/banner-vitoria/banner-vitoria.component.css":
/*!*************************************************************!*\
  !*** ./src/app/banner-vitoria/banner-vitoria.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci12aXRvcmlhL2Jhbm5lci12aXRvcmlhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/banner-vitoria/banner-vitoria.component.ts":
/*!************************************************************!*\
  !*** ./src/app/banner-vitoria/banner-vitoria.component.ts ***!
  \************************************************************/
/*! exports provided: BannerVitoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerVitoriaComponent", function() { return BannerVitoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerVitoriaComponent = /** @class */ (function () {
    function BannerVitoriaComponent() {
    }
    BannerVitoriaComponent.prototype.ngOnInit = function () {
    };
    BannerVitoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-vitoria',
            template: __webpack_require__(/*! raw-loader!./banner-vitoria.component.html */ "./node_modules/raw-loader/index.js!./src/app/banner-vitoria/banner-vitoria.component.html"),
            styles: [__webpack_require__(/*! ./banner-vitoria.component.css */ "./src/app/banner-vitoria/banner-vitoria.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerVitoriaComponent);
    return BannerVitoriaComponent;
}());



/***/ }),

/***/ "./src/app/filmes-vencedores/filmes-vencedores.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/filmes-vencedores/filmes-vencedores.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textoVencedor{\r\n    background: white !important;\r\n    font-size: xx-large;\r\n}\r\n\r\n.posicao{\r\n    font-size: xx-large\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbWVzLXZlbmNlZG9yZXMvZmlsbWVzLXZlbmNlZG9yZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmlsbWVzLXZlbmNlZG9yZXMvZmlsbWVzLXZlbmNlZG9yZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0b1ZlbmNlZG9ye1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5wb3NpY2Fve1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/filmes-vencedores/filmes-vencedores.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/filmes-vencedores/filmes-vencedores.component.ts ***!
  \******************************************************************/
/*! exports provided: FilmesVencedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmesVencedoresComponent", function() { return FilmesVencedoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilmesVencedoresComponent = /** @class */ (function () {
    function FilmesVencedoresComponent() {
    }
    FilmesVencedoresComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FilmesVencedoresComponent.prototype, "filmesVencedores", void 0);
    FilmesVencedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filmes-vencedores',
            template: __webpack_require__(/*! raw-loader!./filmes-vencedores.component.html */ "./node_modules/raw-loader/index.js!./src/app/filmes-vencedores/filmes-vencedores.component.html"),
            styles: [__webpack_require__(/*! ./filmes-vencedores.component.css */ "./src/app/filmes-vencedores/filmes-vencedores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilmesVencedoresComponent);
    return FilmesVencedoresComponent;
}());



/***/ }),

/***/ "./src/app/selecao-filme/selecao-filme.component.css":
/*!***********************************************************!*\
  !*** ./src/app/selecao-filme/selecao-filme.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjYW8tZmlsbWUvc2VsZWNhby1maWxtZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/selecao-filme/selecao-filme.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/selecao-filme/selecao-filme.component.ts ***!
  \**********************************************************/
/*! exports provided: SelecaoFilmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecaoFilmeComponent", function() { return SelecaoFilmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_FilmeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/FilmeService */ "./src/app/services/FilmeService.ts");



var SelecaoFilmeComponent = /** @class */ (function () {
    function SelecaoFilmeComponent(filmeService) {
        this.filmeService = filmeService;
        this.filmesSelecionados = [];
        this.quantidadeFilmesSelecionados = 0;
    }
    SelecaoFilmeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmeService.ListarFilmes().subscribe(function (filmes) { return _this.filmes = filmes; });
    };
    SelecaoFilmeComponent.prototype.AlterarListaSelecionados = function (filmeSelecionado) {
        if (filmeSelecionado.checked)
            this.quantidadeFilmesSelecionados++;
        if (this.quantidadeFilmesSelecionados > 8 && filmeSelecionado.checked) {
            filmeSelecionado.checked = false;
            this.quantidadeFilmesSelecionados--;
        }
        else if (this.quantidadeFilmesSelecionados <= 8 && filmeSelecionado.checked)
            this.filmesSelecionados.push(filmeSelecionado.id);
        else {
            this.quantidadeFilmesSelecionados--;
            this.filmesSelecionados.splice(this.filmesSelecionados.indexOf(filmeSelecionado.id), 1);
        }
    };
    SelecaoFilmeComponent.prototype.GerarCampeonato = function () {
        var _this = this;
        this.filmeService.RealizarCampeonato(this.filmesSelecionados).subscribe(function (filmesRetorno) { return _this.filmesVencedores = filmesRetorno; });
    };
    SelecaoFilmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selecao-filme',
            template: __webpack_require__(/*! raw-loader!./selecao-filme.component.html */ "./node_modules/raw-loader/index.js!./src/app/selecao-filme/selecao-filme.component.html"),
            providers: [_services_FilmeService__WEBPACK_IMPORTED_MODULE_2__["FilmeService"]],
            styles: [__webpack_require__(/*! ./selecao-filme.component.css */ "./src/app/selecao-filme/selecao-filme.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_FilmeService__WEBPACK_IMPORTED_MODULE_2__["FilmeService"]])
    ], SelecaoFilmeComponent);
    return SelecaoFilmeComponent;
}());



/***/ }),

/***/ "./src/app/services/FilmeService.ts":
/*!******************************************!*\
  !*** ./src/app/services/FilmeService.ts ***!
  \******************************************/
/*! exports provided: FilmeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmeService", function() { return FilmeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var FilmeService = /** @class */ (function () {
    function FilmeService(http) {
        this.http = http;
        this._apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL;
        this._httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    FilmeService.prototype.ListarFilmes = function () {
        return this.http.get(this._apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resposta) { return resposta; }));
    };
    FilmeService.prototype.RealizarCampeonato = function (filmesSelcionados) {
        return this.http.post(this._apiUrl, JSON.stringify(filmesSelcionados), this._httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resposta) { return resposta; }));
    };
    FilmeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilmeService);
    return FilmeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: "https://localhost:44341/api/v1.0/Filme"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paulo\source\repos\CopaFilme\CopaFilme.UI.Web\CopaFilme\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map