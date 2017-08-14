webpackJsonp([1],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/detail/detail.module": [
		265,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_detail__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.publicKey = '96558ca279bf14f5aead546ced0cdd2b';
        this.baseUrl = 'https://gateway.marvel.com/v1/public/comics?';
        this.ts = new Date().getTime();
        this.limit = 41;
        this.offset = 0;
        this.md = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.ts + 'acabe8a3a268841c5fb1499bfbcd43829ee8b1e3' + this.publicKey);
        this.encodedPath = this.baseUrl + '&apikey=' + this.publicKey + '&hash=' + this.md + '&ts=' + this.ts + '&limit=' + this.limit + '&format=comic';
        this.comicList();
    }
    HomePage.prototype.comicList = function () {
        this.offset = 0;
        this.encodedPath = this.baseUrl + '&format=comic' + '&apikey=' + this.publicKey + '&hash=' + this.md + '&ts=' + this.ts + '&limit=' + this.limit;
        this.getComicsByUrl(this.encodedPath);
    };
    HomePage.prototype.comicLoadMore = function (infiniteScroll) {
        var _this = this;
        this.offset = this.offset + this.limit;
        var offsetPath = this.encodedPath + '&offset=' + this.offset;
        this.http.get(offsetPath)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.comics = _this.comics.concat(data.data.results);
            infiniteScroll.complete();
        }, function (err) {
            console.log('error in MCU');
        });
    };
    HomePage.prototype.comicSelected = function (comic) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_detail__["a" /* DetailPage */], {
            comic: comic
        });
    };
    HomePage.prototype.comicSearch = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '' && !Number(val)) {
            this.searchByTitle(val);
        }
        else {
            if (val && val.trim() != '' && Number(val) && val.length > 3) {
                this.searchByYear(val);
            }
            else {
                this.comicList();
            }
        }
    };
    HomePage.prototype.searchByTitle = function (name) {
        this.encodedPath = this.baseUrl + '&format=comic' + '&apikey=' + this.publicKey + '&hash=' + this.md + '&ts=' + this.ts + '&limit=' + this.limit + '&titleStartsWith=' + name;
        this.getComicsByUrl(this.encodedPath);
    };
    HomePage.prototype.searchByYear = function (year) {
        this.encodedPath = this.baseUrl + '&format=comic' + '&apikey=' + this.publicKey + '&hash=' + this.md + '&ts=' + this.ts + '&limit=' + this.limit + '&startYear=' + year;
        this.getComicsByUrl(this.encodedPath);
    };
    HomePage.prototype.getComicsByUrl = function (url) {
        var _this = this;
        this.http.get(url)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.comics = data.data.results;
            console.log(_this.comics);
        }, function (err) {
            console.log('error in MCU');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/mines/Documents/pruebas/video-start-things/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      <img src="../assets/images/logo.jpg" />\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-searchbar class="seeTr" (ionInput)="comicSearch($event)"></ion-searchbar>\n<div class="container-fluid">\n\n        <button class="button_box" *ngFor="let comic of comics" (click)="comicSelected(comic)"> \n            <ion-card >\n\n              <ion-card-title padding>\n                <h2 class="nameTitle">{{comic.title.split(\'#\')[0]}}</h2>\n                <p class="contentTitle">Issue #{{comic.issueNumber}}</p>\n              </ion-card-title>\n              <img class="portrait" src="{{comic.thumbnail.path}}.{{comic.thumbnail.extension}}"/>\n\n              <ion-card-content>\n                <p class="contentSerie">From the series:</p>\n                <p class="serieName">{{comic.series.name}}</p>\n              </ion-card-content>\n          </ion-card>\n      </button> \n</div>\n\n\n\n	<ion-infinite-scroll (ionInfinite)="comicLoadMore($event)">\n	<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/mines/Documents/pruebas/video-start-things/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_detail_detail__["a" /* DetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/mines/Documents/pruebas/video-start-things/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mines/Documents/pruebas/video-start-things/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.segments = "description";
        this.publicKey = '96558ca279bf14f5aead546ced0cdd2b';
        this.ts = new Date().getTime();
        this.md = __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.ts + 'acabe8a3a268841c5fb1499bfbcd43829ee8b1e3' + this.publicKey);
        this.comic = navParams.get('comic');
        this.getCharacters();
        this.getCreators();
        console.log(this.comic);
    }
    DetailPage.prototype.getCharacters = function () {
        var _this = this;
        var url = this.comic.characters.collectionURI + '?&apikey=' + this.publicKey + '&hash=' + this.md + '&ts=' + this.ts;
        this.http.get(url)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.characters = data.data.results;
            console.log(_this.characters);
        }, function (err) {
            console.log('error in MCU');
            return;
        });
    };
    DetailPage.prototype.getCreators = function () {
        var _this = this;
        var url = this.comic.creators.collectionURI + '?&apikey=' + this.publicKey + '&hash=' + this.md + '&ts=' + this.ts;
        this.http.get(url)
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.creators = data.data.results;
            console.log(_this.creators);
        }, function (err) {
            console.log('error in MCU');
            return;
        });
    };
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/mines/Documents/pruebas/video-start-things/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title class="details-header" text-center>	{{comic.title.split(\'#\')[0]}}\n    </ion-title>\n  </ion-navbar>\n\n\n	<ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="segments" mode="ios">\n\n      <ion-segment-button value="description">\n        Description\n      </ion-segment-button>\n\n      <ion-segment-button value="images">\n 				Images\n      </ion-segment-button>\n\n      <ion-segment-button value="characters">\n        Characters\n      </ion-segment-button>\n\n      <ion-segment-button value="creators">\n        Creators\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="segments">\n    <ion-list class="specialBack" *ngSwitchCase="\'description\'" >\n			<ion-grid>\n				<ion-row center>\n					<ion-col>\n					<div class= "post-meta">\n					<h1>{{comic.title}}</h1>\n					</div>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col center> \n					<div padding class = "post-image-right">\n					<img class="portrait" src="{{comic.thumbnail.path}}.jpg"/>\n					</div>\n					</ion-col>\n					<ion-col>\n					<div padding class="post-data">\n					 <h2> Summary:</h2>\n					 <p>{{comic.description}}</p>\n					 </div>\n					 </ion-col>\n				</ion-row>\n\n			</ion-grid>\n    </ion-list>\n\n    <ion-list class="specialBack" *ngSwitchCase="\'images\'" disabled>\n	    <div padding class="post-image" *ngFor="let image of comic.images">\n		    <img class="image-size-medium" src="{{image.path}}.jpg">\n	    </div>\n    </ion-list>\n\n    <ion-list class="specialBack" *ngSwitchCase="\'characters\'" disabled>\n      <ion-grid>\n      <div *ngFor="let character of characters">\n          <ion-row>\n            <ion-col>\n              <ion-item text-wrap class="post-char" no-lines>\n                <ion-avatar item-start>\n                  <img padding src="{{character.thumbnail.path}}.{{character.thumbnail.extension}}"/>\n                </ion-avatar>\n                <h2 class="nameTitle">{{character.name}}</h2>\n                <p class="contentStyle">{{character.description}}</p>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n      </div>\n      </ion-grid>\n    </ion-list>\n\n    <ion-list class="specialBack" *ngSwitchCase="\'creators\'" disabled>\n      <ion-grid>\n      <div *ngFor="let creator of creators">\n          <ion-row>\n            <ion-col>\n              <ion-item class="post-char" no-lines>\n                <ion-avatar item-start>\n                  <img padding src="{{creator.thumbnail.path}}.{{creator.thumbnail.extension}}"/>\n                </ion-avatar>\n                <h2 class="nameTitle">{{creator.fullName}}</h2>\n                <p class="contentStyle"></p>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n      </div>\n      </ion-grid>\n    </ion-list>\n\n\n\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mines/Documents/pruebas/video-start-things/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map