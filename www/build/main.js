webpackJsonp([11],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfvalTempOefeningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splitter_splitter__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AfvalTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfvalTempOefeningPage = /** @class */ (function () {
    function AfvalTempOefeningPage(navCtrl, navParams, menu, alertCtrl, dragulaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.dragulaService = dragulaService;
        this.aantalKeerFout = 0;
        this.templates = [];
        this.stoffen = [];
        this.cat1 = []; // id 1
        this.cat2 = []; // id 2
        this.cat3 = []; // id 3
        this.cat4 = []; // id 4
        this.cat5 = []; // id 5
        this.bruineFles = []; // id 6
        this.gootsteen = []; // id 7
        this.templates = navParams.data.templates;
        this.stoffen = this.templates[0].stoffen;
        this.uitleg = this.templates[0].uitleg;
        this.hint = this.templates[0].hint;
        this.dragulaService.drop.subscribe(function (val) {
            console.log('Item Moved');
        });
    }
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    AfvalTempOefeningPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    AfvalTempOefeningPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    AfvalTempOefeningPage.prototype.ionViewDidLoad = function () {
        console.log(this.templates);
    };
    AfvalTempOefeningPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Fout!',
            subTitle: 'Je hebt een fout gemaakt! Probeer de fout te vinden en op te lossen',
            buttons: ['OK']
        });
        alert.present();
    };
    AfvalTempOefeningPage.prototype.showHint = function () {
        // logic om hint te gaan ophalen afhankelijk van de tempID
        var alert = this.alertCtrl.create({
            title: 'Hint',
            subTitle: this.hint,
            buttons: ['OK']
        });
        alert.present();
    };
    AfvalTempOefeningPage.prototype.showAlertJuist = function () {
        var alert = this.alertCtrl.create({
            title: 'Juist!',
            subTitle: 'Dit is het juiste antwoord!',
            buttons: ['OK']
        });
        alert.present();
    };
    AfvalTempOefeningPage.prototype.showAlertBan = function () {
        var alert = this.alertCtrl.create({
            title: 'U bent geband uit het systeem',
            subTitle: 'Wegens onregelmatig gebruik van de app bent u geband uit het systeem',
            buttons: ['OK']
        });
        alert.present();
    };
    AfvalTempOefeningPage.prototype.check = function () {
        var ok = true;
        if (this.stoffen.length == 0) {
            for (var _i = 0, _a = this.cat1; _i < _a.length; _i++) {
                var stof = _a[_i];
                if (!(stof.afval == 1)) {
                    ok = false;
                }
            }
            for (var _b = 0, _c = this.cat2; _b < _c.length; _b++) {
                var stof = _c[_b];
                if (!(stof.afval == 2)) {
                    ok = false;
                }
            }
            for (var _d = 0, _e = this.cat3; _d < _e.length; _d++) {
                var stof = _e[_d];
                if (!(stof.afval == 3)) {
                    ok = false;
                }
            }
            for (var _f = 0, _g = this.cat4; _f < _g.length; _f++) {
                var stof = _g[_f];
                if (!(stof.afval == 4)) {
                    ok = false;
                }
            }
            for (var _h = 0, _j = this.cat5; _h < _j.length; _h++) {
                var stof = _j[_h];
                if (!(stof.afval == 5)) {
                    ok = false;
                }
            }
            for (var _k = 0, _l = this.bruineFles; _k < _l.length; _k++) {
                var stof = _l[_k];
                if (!(stof.afval == 6)) {
                    ok = false;
                }
            }
            for (var _m = 0, _o = this.gootsteen; _m < _o.length; _m++) {
                var stof = _o[_m];
                if (!(stof.afval == 7)) {
                    ok = false;
                }
            }
        }
        else {
            ok = false;
        }
        if (ok) {
            this.showAlertJuist();
            this.templates.shift();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__splitter_splitter__["a" /* SplitterPage */], {
                templates: this.templates
            });
        }
        else {
            this.aantalKeerFout++;
            if (this.aantalKeerFout >= 5) {
                this.showAlertBan();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else if (this.aantalKeerFout >= 3) {
                this.showHint();
            }
            else {
                this.showAlert();
            }
        }
    };
    AfvalTempOefeningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-afval-temp-oefening',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/afval-temp-oefening/afval-temp-oefening.html"*/'<!--\n  Generated template for the AfvalTempOefeningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Maken</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n      <ion-card-header>\n        Sleep de stoffen naar de juiste afvalbak\n      </ion-card-header>\n    \n      <ion-card-content>\n        {{this.uitleg}}\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-list [dragula]="\'my-bag\'" [dragulaModel]="stoffen" class="stoffen">\n        <div ion-button clear color="secondary" *ngFor="let item of stoffen">\n          {{item.naam}}\n        </div>\n    </ion-list>\n\n    <ion-row>\n      <ion-col width-50 class="left">\n        <p>Categorie 1</p>\n        <ion-list [dragula]="\'my-bag\'" [dragulaModel]="cat1" class="cat">\n          <div ion-button clear color="secondary" *ngFor="let item of cat1">\n            {{item.naam}}\n          </div>\n        </ion-list>\n      </ion-col>\n\n      <ion-col width-50 class="right">\n        <p>Categorie 2</p>\n        <ion-list [dragula]="\'my-bag\'" [dragulaModel]="cat2" class="cat">\n          <div ion-button clear color="secondary" *ngFor="let item of cat2">\n            {{item.naam}}\n          </div>\n        </ion-list>\n      </ion-col>\n\n      <ion-col width-50 class="right">\n          <p>Categorie 3</p>\n          <ion-list [dragula]="\'my-bag\'" [dragulaModel]="cat3" class="cat">\n            <div ion-button clear color="secondary" *ngFor="let item of cat3">\n              {{item.naam}}\n            </div>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col width-50 class="left">\n          <p>Categorie 4</p>\n          <ion-list [dragula]="\'my-bag\'" [dragulaModel]="cat4" class="cat">\n            <div ion-button clear color="secondary" *ngFor="let item of cat4">\n              {{item.naam}}\n            </div>\n          </ion-list>\n        </ion-col>\n  \n        <ion-col width-50 class="right">\n          <p>Categorie 5</p>\n          <ion-list [dragula]="\'my-bag\'" [dragulaModel]="cat5" class="cat">\n            <div ion-button clear color="secondary" *ngFor="let item of cat5">\n              {{item.naam}}\n            </div>\n          </ion-list>\n        </ion-col>\n  \n        <ion-col width-50 class="right">\n            <p>Bruine Fles</p>\n            <ion-list [dragula]="\'my-bag\'" [dragulaModel]="bruineFles" class="cat">\n              <div ion-button clear color="secondary" *ngFor="let item of bruineFles">\n                {{item.naam}}\n              </div>\n            </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <p>Gootsteen</p>\n      <ion-list [dragula]="\'my-bag\'" [dragulaModel]="gootsteen" class="cat">\n          <div ion-button clear color="secondary" *ngFor="let item of gootsteen">\n            {{item.naam}}\n          </div>\n      </ion-list>\n      \n    <button ion-button round (click)="check()">Submit</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/afval-temp-oefening/afval-temp-oefening.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"]])
    ], AfvalTempOefeningPage);
    return AfvalTempOefeningPage;
}());

//# sourceMappingURL=afval-temp-oefening.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatTempOefeningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splitter_splitter__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MatTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatTempOefeningPage = /** @class */ (function () {
    function MatTempOefeningPage(navCtrl, navParams, menu, alertCtrl, dragulaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.dragulaService = dragulaService;
        // Templates vanuit de splitterPage
        this.templates = [];
        this.juisteMaterialen = [];
        // De tweede div waar de antwoorden in worden geplaatst
        this.q2 = [];
        this.aantalKeerFout = 0;
        // Logic om alle materialen op te halen
        this.AllMaterials = [
            {
                id: 1,
                name: 'erlemeyer',
                afbeelding: '../../assets/imgs/erlemeyer.png'
            },
            {
                id: 2,
                name: 'logo',
                afbeelding: '../../assets/imgs/logo.png'
            },
            {
                id: 3,
                name: 'erasmus_logo',
                afbeelding: '../../assets/imgs/erasmus_logo.jpg'
            },
            {
                id: 4,
                name: 'pasOp',
                afbeelding: '../../assets/imgs/pasOp.png'
            },
            {
                id: 5,
                name: 'tandwiel',
                afbeelding: '../../assets/imgs/tandwiel.png'
            }
        ];
        this.templates = navParams.data.templates;
        this.uitleg = this.templates[0].uitleg;
        this.juisteMaterialen = this.templates[0].juisteMaterialen;
        this.hint = this.templates[0].hint;
        this.dragulaService.drop.subscribe(function (val) {
            console.log('Item Moved');
        });
    }
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    MatTempOefeningPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    MatTempOefeningPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    MatTempOefeningPage.prototype.ionViewDidLoad = function () {
        console.log(this.templates);
    };
    MatTempOefeningPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Fout!',
            subTitle: 'Je hebt een fout gemaakt! Probeer de fout te vinden en op te lossen',
            buttons: ['OK']
        });
        alert.present();
    };
    MatTempOefeningPage.prototype.showHint = function () {
        // logic om hint te gaan ophalen afhankelijk van de tempID
        var hint = "Dit is de hint";
        var alert = this.alertCtrl.create({
            title: 'Hint',
            subTitle: this.hint,
            buttons: ['OK']
        });
        alert.present();
    };
    MatTempOefeningPage.prototype.showAlertJuist = function () {
        var alert = this.alertCtrl.create({
            title: 'Juist!',
            subTitle: 'Dit is het juiste antwoord!',
            buttons: ['OK']
        });
        alert.present();
    };
    MatTempOefeningPage.prototype.showAlertBan = function () {
        var alert = this.alertCtrl.create({
            title: 'U bent geband uit het systeem',
            subTitle: 'Wegens onregelmatig gebruik van de app bent u geband uit het systeem',
            buttons: ['OK']
        });
        alert.present();
    };
    MatTempOefeningPage.prototype.check = function () {
        var amountOfChoosenItems = this.q2.length;
        var amountOfJuisteMaterialen = this.juisteMaterialen.length;
        var ok = true;
        if (amountOfChoosenItems == amountOfJuisteMaterialen) {
            var _loop_1 = function (materiaal) {
                if (!this_1.juisteMaterialen.find(function (x) { return x === materiaal.id; })) {
                    ok = false;
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.q2; _i < _a.length; _i++) {
                var materiaal = _a[_i];
                _loop_1(materiaal);
            }
            ;
        }
        else {
            ok = false;
        }
        if (ok) {
            this.showAlertJuist();
            this.templates.shift();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__splitter_splitter__["a" /* SplitterPage */], {
                templates: this.templates
            });
        }
        else {
            this.aantalKeerFout++;
            if (this.aantalKeerFout >= 5) {
                this.showAlertBan();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else if (this.aantalKeerFout >= 3) {
                this.showHint();
            }
            else {
                this.showAlert();
            }
        }
    };
    MatTempOefeningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mat-temp-oefening',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/mat-temp-oefening/mat-temp-oefening.html"*/'<!--\n  Generated template for the MatTempOefeningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Maken</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n  <!--\n    <p>Material Template Oefening</p>\n    <p>template ID: {{tempID}} </p>\n  -->\n    \n      <ion-card>\n        <ion-card-header>\n          Sleep het juiste materiaal op de tafel\n        </ion-card-header>\n      \n        <ion-card-content>\n          {{this.uitleg}}\n        </ion-card-content>\n      </ion-card>\n\n      <ion-row>\n        <ion-col width-50 class="left">\n          <ion-list [dragula]="\'my-bag\'" [dragulaModel]="AllMaterials" class="allMaterials">\n            <div ion-button clear color="secondary" *ngFor="let item of AllMaterials" class="material">\n              <img src="{{item.afbeelding}}" width="48" height="48"> \n              {{item.name}}\n            </div>\n          </ion-list>\n          <button ion-button round (click)="check()">Submit</button>\n        </ion-col>\n\n        <ion-col width-50 class="right">\n          <ion-list [dragula]="\'my-bag\'" [dragulaModel]="q2" class="choosenMaterials">\n            <div ion-button clear color="secondary" *ngFor="let item of q2" class="material">\n              <img src="{{item.afbeelding}}" width="48" height="48"> \n            </div>\n          </ion-list>\n          <div class="tafelPoten1"></div>\n          <div class="tafelPoten2"></div>\n        </ion-col>\n      </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/mat-temp-oefening/mat-temp-oefening.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"]])
    ], MatTempOefeningPage);
    return MatTempOefeningPage;
}());

//# sourceMappingURL=mat-temp-oefening.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerwijzingsTempOefeningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitter_splitter__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VerwijzingsTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerwijzingsTempOefeningPage = /** @class */ (function () {
    // Logic om uitleg en link te gaan ophalen
    //uitleg: String = "Dit is de uitleg die de docent meegeeft";
    //link: String="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    function VerwijzingsTempOefeningPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.templates = [];
        this.templates = navParams.data.templates;
        this.uitleg = this.templates[0].uitleg;
        this.link = this.templates[0].link;
    }
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    VerwijzingsTempOefeningPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    VerwijzingsTempOefeningPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    VerwijzingsTempOefeningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerwijzingsTempOefeningPage');
    };
    VerwijzingsTempOefeningPage.prototype.goBack = function () {
        this.templates.shift();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__splitter_splitter__["a" /* SplitterPage */], {
            templates: this.templates
        });
    };
    VerwijzingsTempOefeningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verwijzings-temp-oefening',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/verwijzings-temp-oefening/verwijzings-temp-oefening.html"*/'<!--\n  Generated template for the VerwijzingsTempOefeningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Maken</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!--\n    <p>Verwijzings Template Oefening</p>\n    <p>template ID: {{tempID}} </p> \n  -->\n\n  <ion-card>\n      <ion-card-header>\n        Lees onderstaande text\n      </ion-card-header>\n    \n      <ion-card-content>\n        {{uitleg}}\n        <br />\n        <br />\n        Link: <a href="{{link}}">{{link}}</a>\n      </ion-card-content>\n  </ion-card>\n  <button ion-button round (click)="goBack()">OK</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/verwijzings-temp-oefening/verwijzings-temp-oefening.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], VerwijzingsTempOefeningPage);
    return VerwijzingsTempOefeningPage;
}());

//# sourceMappingURL=verwijzings-temp-oefening.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KkTempOefeningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splitter_splitter__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the KkTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KkTempOefeningPage = /** @class */ (function () {
    function KkTempOefeningPage(navCtrl, navParams, menu, alertCtrl, dragulaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.dragulaService = dragulaService;
        // Templates vanuit de splitterPage
        this.templates = [];
        this.aantalKeerFout = 0;
        // Logic om alle (nodige) materialen op het halen
        this.kkMaterials = [
            {
                id: 1,
                name: 'Maatkolf',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwan'
            },
            {
                id: 2,
                name: 'Volpipet',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwan'
            },
            {
                id: 3,
                name: 'Buret',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwan'
            },
            {
                id: 4,
                name: 'Analytische balans',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwan'
            },
            {
                id: 5,
                name: 'Maatbeker',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwal'
            },
            {
                id: 6,
                name: 'Erlenmeyer',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwal'
            },
            {
                id: 7,
                name: 'Reageerbuis',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwal'
            },
            {
                id: 8,
                name: 'Bovenweger',
                afbeelding: '../../assets/imgs/erlemeyer.png',
                soort: 'kwal'
            }
        ];
        this.kwanMaterials = [];
        this.kwalMaterials = [];
        this.templates = navParams.data.templates;
        this.hint = "Dit is de hint die altijd zal weergegeven worden";
        this.dragulaService.drop.subscribe(function (val) {
            console.log('Item Moved');
        });
    }
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    KkTempOefeningPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    KkTempOefeningPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    KkTempOefeningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KkTempOefeningPage');
    };
    KkTempOefeningPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Fout!',
            subTitle: 'Je hebt een fout gemaakt! Probeer de fout te vinden en op te lossen',
            buttons: ['OK']
        });
        alert.present();
    };
    KkTempOefeningPage.prototype.showHint = function () {
        // logic om hint te gaan ophalen afhankelijk van de tempID
        var hint = "Dit is de hint";
        var alert = this.alertCtrl.create({
            title: 'Hint',
            subTitle: this.hint,
            buttons: ['OK']
        });
        alert.present();
    };
    KkTempOefeningPage.prototype.showAlertJuist = function () {
        var alert = this.alertCtrl.create({
            title: 'Juist!',
            subTitle: 'Dit is het juiste antwoord!',
            buttons: ['OK']
        });
        alert.present();
    };
    KkTempOefeningPage.prototype.showAlertBan = function () {
        var alert = this.alertCtrl.create({
            title: 'U bent geband uit het systeem',
            subTitle: 'Wegens onregelmatig gebruik van de app bent u geband uit het systeem',
            buttons: ['OK']
        });
        alert.present();
    };
    KkTempOefeningPage.prototype.check = function () {
        var ok = true;
        if (this.kkMaterials.length == 0) {
            for (var _i = 0, _a = this.kwanMaterials; _i < _a.length; _i++) {
                var material = _a[_i];
                if (!(material.soort == "kwan")) {
                    ok = false;
                }
            }
            for (var _b = 0, _c = this.kwalMaterials; _b < _c.length; _b++) {
                var material = _c[_b];
                if (!(material.soort == "kwal")) {
                    ok = false;
                }
            }
        }
        else {
            ok = false;
        }
        if (ok) {
            this.showAlertJuist();
            this.templates.shift();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__splitter_splitter__["a" /* SplitterPage */], {
                templates: this.templates
            });
        }
        else {
            this.aantalKeerFout++;
            if (this.aantalKeerFout >= 5) {
                this.showAlertBan();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else if (this.aantalKeerFout >= 3) {
                this.showHint();
            }
            else {
                this.showAlert();
            }
        }
    };
    KkTempOefeningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-kk-temp-oefening',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/kk-temp-oefening/kk-temp-oefening.html"*/'<!--\n  Generated template for the KkTempOefeningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Maken</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n        <ion-card-header>\n          Sleep het juiste materiaal op de tafel\n        </ion-card-header>\n      \n        <ion-card-content>\n          Er zal hier steeds dezelfde uitleg gegeven \n        </ion-card-content>\n      </ion-card>\n\n      <ion-list [dragula]="\'my-bag\'" [dragulaModel]="kkMaterials" class="stoffen">\n          <div ion-button clear color="secondary" *ngFor="let item of kkMaterials">\n            <img src="{{item.afbeelding}}" width="48" height="48">\n            {{item.name}}\n          </div>\n      </ion-list>\n\n      <ion-row>\n            <ion-col width-50 class="left">\n              <p>Kwantitietieve Materialen</p>\n              <ion-list [dragula]="\'my-bag\'" [dragulaModel]="kwanMaterials" class="cat">\n                <div ion-button clear color="secondary" *ngFor="let item of kwanMaterials">\n                  <img src="{{item.afbeelding}}" width="48" height="48">\n                </div>\n              </ion-list>\n            </ion-col>\n      \n            <ion-col width-50 class="right">\n              <p>Kwalitatieve Materialen</p>\n              <ion-list [dragula]="\'my-bag\'" [dragulaModel]="kwalMaterials" class="cat">\n                <div ion-button clear color="secondary" *ngFor="let item of kwalMaterials">\n                  <img src="{{item.afbeelding}}" width="48" height="48">\n                </div>\n              </ion-list>\n            </ion-col>\n      </ion-row>\n\n      <button ion-button round (click)="check()">Submit</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/kk-temp-oefening/kk-temp-oefening.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"]])
    ], KkTempOefeningPage);
    return KkTempOefeningPage;
}());

//# sourceMappingURL=kk-temp-oefening.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WerkwijzeTempOefeningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splitter_splitter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mid_step_mid_step__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WerkwijzeTempOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WerkwijzeTempOefeningPage = /** @class */ (function () {
    function WerkwijzeTempOefeningPage(navCtrl, navParams, menu, alertCtrl, dragulaService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.dragulaService = dragulaService;
        this.templates = [];
        this.stappen = [];
        this.aantalKeerFout = 0;
        this.stappenMetMidsteps = [];
        this.juisteVolgorde = [];
        this.gegevenVolgorde = [];
        this.gekozenVolgorde = [];
        this.templates = navParams.data.templates;
        this.stappen = this.templates[0].stappen;
        this.hint = this.templates[0].hint;
        this.stappen.forEach(function (stap) {
            _this.juisteVolgorde.push(stap.id);
            if (!(stap.midsteps == null || stap.midsteps.length == 0)) {
                _this.stappenMetMidsteps.push(stap.midsteps);
            }
        });
        this.gegevenVolgorde = this.shuffle(this.stappen);
        dragulaService.drop.subscribe(function (value) {
            console.log("Object moved");
        });
    }
    /**
      * Shuffles array in place. ES6 version
      * items An array containing the items.
    */
    WerkwijzeTempOefeningPage.prototype.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    ;
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    WerkwijzeTempOefeningPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    WerkwijzeTempOefeningPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    WerkwijzeTempOefeningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WerkwijzeTempOefeningPage');
    };
    WerkwijzeTempOefeningPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Fout!',
            subTitle: 'Je hebt een fout gemaakt! Probeer de fout te vinden en op te lossen',
            buttons: ['OK']
        });
        alert.present();
    };
    WerkwijzeTempOefeningPage.prototype.showHint = function () {
        var alert = this.alertCtrl.create({
            title: 'Hint',
            subTitle: this.hint,
            buttons: ['OK']
        });
        alert.present();
    };
    WerkwijzeTempOefeningPage.prototype.showAlertJuist = function () {
        var alert = this.alertCtrl.create({
            title: 'Juist!',
            subTitle: 'Dit is het juiste antwoord!',
            buttons: ['OK']
        });
        alert.present();
    };
    WerkwijzeTempOefeningPage.prototype.showAlertBan = function () {
        var alert = this.alertCtrl.create({
            title: 'U bent geband uit het systeem',
            subTitle: 'Wegens onregelmatig gebruik van de app bent u geband uit het systeem',
            buttons: ['OK']
        });
        alert.present();
    };
    WerkwijzeTempOefeningPage.prototype.check = function () {
        var ok = true;
        var antwoord = [];
        this.gekozenVolgorde.forEach(function (stap) {
            antwoord.push(stap.id);
        });
        for (var i in this.juisteVolgorde) {
            if (antwoord[i] !== this.juisteVolgorde[i] || antwoord[i] == null) {
                ok = false;
            }
        }
        if (ok) {
            this.showAlertJuist();
            if (this.stappenMetMidsteps.length == 0 || this.stappenMetMidsteps == null) {
                this.templates.shift();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__splitter_splitter__["a" /* SplitterPage */], {
                    templates: this.templates
                });
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__mid_step_mid_step__["a" /* MidStepPage */], {
                    templates: this.templates,
                    steps: this.gekozenVolgorde
                });
            }
        }
        else {
            this.aantalKeerFout++;
            if (this.aantalKeerFout >= 5) {
                this.showAlertBan();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else if (this.aantalKeerFout >= 3) {
                this.showHint();
            }
            else {
                this.showAlert();
            }
        }
    };
    WerkwijzeTempOefeningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-werkwijze-temp-oefening',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/werkwijze-temp-oefening/werkwijze-temp-oefening.html"*/'<!--\n  Generated template for the WerkwijzeTempOefeningPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Maken</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!--\n      <p>Werkwijze Template Oefening</p>\n      <p>template ID: {{tempID}} </p>\n    -->\n\n    <ion-card>\n      <ion-card-header>\n        Sleep de verschillende stappen in de juiste volgorde\n      </ion-card-header>\n    \n      <ion-card-content>\n        "Uitleg over het labo en wat je moet doen, zodat de studenten weten welk materiaal ze moeten nemen"\n      </ion-card-content>\n    </ion-card>\n\n    <ion-row>\n      <ion-col width-50 class="left">\n        <ion-list [dragula]=\'"my-bag"\' [dragulaModel]="gegevenVolgorde" class="table1">\n          <button ion-item *ngFor="let item of gegevenVolgorde" detail-none>\n            {{item.step}}\n        </button>\n        </ion-list>\n      </ion-col>\n\n      <ion-col width-50 class="right">\n        <ion-list [dragula]=\'"my-bag"\' [dragulaModel]="gekozenVolgorde" class="table2">\n          <button ion-item *ngFor="let item of gekozenVolgorde" detail-none>\n            {{item.step}}\n          </button>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    \n    <button ion-button round (click)="check()">Submit</button>\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/werkwijze-temp-oefening/werkwijze-temp-oefening.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaService"]) === "function" && _e || Object])
    ], WerkwijzeTempOefeningPage);
    return WerkwijzeTempOefeningPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=werkwijze-temp-oefening.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/afval-temp-oefening/afval-temp-oefening.module": [
		298,
		24
	],
	"../pages/hermaak-oefening/hermaak-oefening.module": [
		299,
		23
	],
	"../pages/kk-temp-oefening/kk-temp-oefening.module": [
		300,
		22
	],
	"../pages/login/login.module": [
		301,
		21
	],
	"../pages/mat-temp-oefening/mat-temp-oefening.module": [
		302,
		20
	],
	"../pages/materials/materials.module": [
		303,
		19
	],
	"../pages/mid-step/mid-step.module": [
		309,
		13
	],
	"../pages/settings/settings.module": [
		304,
		18
	],
	"../pages/splitter/splitter.module": [
		305,
		17
	],
	"../pages/te-maken-oefeningen/te-maken-oefeningen.module": [
		306,
		16
	],
	"../pages/verwijzings-temp-oefening/verwijzings-temp-oefening.module": [
		307,
		15
	],
	"../pages/werkwijze-temp-oefening/werkwijze-temp-oefening.module": [
		308,
		14
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
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mat_temp_oefening_mat_temp_oefening__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verwijzings_temp_oefening_verwijzings_temp_oefening__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kk_temp_oefening_kk_temp_oefening__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__afval_temp_oefening_afval_temp_oefening__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__werkwijze_temp_oefening_werkwijze_temp_oefening__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SplitterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitterPage = /** @class */ (function () {
    function SplitterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.templates = [];
        this.templates = navParams.data.templates;
    }
    SplitterPage.prototype.ionViewDidLoad = function () {
        if (this.templates == null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else if (this.templates.length == 0) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else {
            switch (this.templates[0].soort) {
                case "materialTemplate": {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__mat_temp_oefening_mat_temp_oefening__["a" /* MatTempOefeningPage */], {
                        templates: this.templates
                    });
                    break;
                }
                case "verwijzingstemplate": {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__verwijzings_temp_oefening_verwijzings_temp_oefening__["a" /* VerwijzingsTempOefeningPage */], {
                        templates: this.templates
                    });
                    break;
                }
                case "kkTemplateOefening": {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__kk_temp_oefening_kk_temp_oefening__["a" /* KkTempOefeningPage */], {
                        templates: this.templates
                    });
                    break;
                }
                case "afvalTemplate": {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__afval_temp_oefening_afval_temp_oefening__["a" /* AfvalTempOefeningPage */], {
                        templates: this.templates
                    });
                    break;
                }
                case "werkwijzeTemplate": {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__werkwijze_temp_oefening_werkwijze_temp_oefening__["a" /* WerkwijzeTempOefeningPage */], {
                        templates: this.templates
                    });
                    break;
                }
                default: {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
            }
        }
    };
    SplitterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-splitter',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/splitter/splitter.html"*/'<!--\n  Generated template for the SplitterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>splitter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/splitter/splitter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SplitterPage);
    return SplitterPage;
}());

//# sourceMappingURL=splitter.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_materials_materials__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_te_maken_oefeningen_te_maken_oefeningen__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_hermaak_oefening_hermaak_oefening__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mat_temp_oefening_mat_temp_oefening__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_verwijzings_temp_oefening_verwijzings_temp_oefening__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_afval_temp_oefening_afval_temp_oefening__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_werkwijze_temp_oefening_werkwijze_temp_oefening__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_splitter_splitter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_kk_temp_oefening_kk_temp_oefening__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mid_step_mid_step__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__node_modules_ng2_dragula__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__node_modules_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__node_modules_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// http://masteringionic.com/blog/2017-12-15-creating-a-sortable-list-with-ionic-and-dragula/

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_te_maken_oefeningen_te_maken_oefeningen__["a" /* TeMakenOefeningenPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_hermaak_oefening_hermaak_oefening__["a" /* HermaakOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_materials_materials__["a" /* MaterialsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mat_temp_oefening_mat_temp_oefening__["a" /* MatTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_verwijzings_temp_oefening_verwijzings_temp_oefening__["a" /* VerwijzingsTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_afval_temp_oefening_afval_temp_oefening__["a" /* AfvalTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_werkwijze_temp_oefening_werkwijze_temp_oefening__["a" /* WerkwijzeTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_splitter_splitter__["a" /* SplitterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_kk_temp_oefening_kk_temp_oefening__["a" /* KkTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mid_step_mid_step__["a" /* MidStepPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__node_modules_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/afval-temp-oefening/afval-temp-oefening.module#AfvalTempOefeningPageModule', name: 'AfvalTempOefeningPage', segment: 'afval-temp-oefening', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hermaak-oefening/hermaak-oefening.module#HermaakOefeningPageModule', name: 'HermaakOefeningPage', segment: 'hermaak-oefening', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kk-temp-oefening/kk-temp-oefening.module#KkTempOefeningPageModule', name: 'KkTempOefeningPage', segment: 'kk-temp-oefening', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mat-temp-oefening/mat-temp-oefening.module#MatTempOefeningPageModule', name: 'MatTempOefeningPage', segment: 'mat-temp-oefening', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materials/materials.module#MaterialsPageModule', name: 'MaterialsPage', segment: 'materials', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splitter/splitter.module#SplitterPageModule', name: 'SplitterPage', segment: 'splitter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/te-maken-oefeningen/te-maken-oefeningen.module#TeMakenOefeningenPageModule', name: 'TeMakenOefeningenPage', segment: 'te-maken-oefeningen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verwijzings-temp-oefening/verwijzings-temp-oefening.module#VerwijzingsTempOefeningPageModule', name: 'VerwijzingsTempOefeningPage', segment: 'verwijzings-temp-oefening', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/werkwijze-temp-oefening/werkwijze-temp-oefening.module#WerkwijzeTempOefeningPageModule', name: 'WerkwijzeTempOefeningPage', segment: 'werkwijze-temp-oefening', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mid-step/mid-step.module#MidStepPageModule', name: 'MidStepPage', segment: 'mid-step', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_te_maken_oefeningen_te_maken_oefeningen__["a" /* TeMakenOefeningenPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_hermaak_oefening_hermaak_oefening__["a" /* HermaakOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_materials_materials__["a" /* MaterialsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_mat_temp_oefening_mat_temp_oefening__["a" /* MatTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_verwijzings_temp_oefening_verwijzings_temp_oefening__["a" /* VerwijzingsTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_afval_temp_oefening_afval_temp_oefening__["a" /* AfvalTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_werkwijze_temp_oefening_werkwijze_temp_oefening__["a" /* WerkwijzeTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_splitter_splitter__["a" /* SplitterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_kk_temp_oefening_kk_temp_oefening__["a" /* KkTempOefeningPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_mid_step_mid_step__["a" /* MidStepPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_materials_materials__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_te_maken_oefeningen_te_maken_oefeningen__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_hermaak_oefening_hermaak_oefening__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Te maken oefeningen', component: __WEBPACK_IMPORTED_MODULE_6__pages_te_maken_oefeningen_te_maken_oefeningen__["a" /* TeMakenOefeningenPage */] },
            { title: 'Hermaak Oefening', component: __WEBPACK_IMPORTED_MODULE_7__pages_hermaak_oefening_hermaak_oefening__["a" /* HermaakOefeningPage */] },
            { title: 'Labo Materiaal', component: __WEBPACK_IMPORTED_MODULE_5__pages_materials_materials__["a" /* MaterialsPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.checkLogin = function () {
        //Hier gebeurt controle
        return true;
    };
    LoginPage.prototype.login = function () {
        if (this.checkLogin() === true) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            alert("wrong credentials");
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <img src="../../assets/imgs/erasmus_logo.jpg" alt="Logo" height="120" width="146"> \n        <ion-item>\n          <ion-input id="username" type="text" placeholder="Gebruikersnaam"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input id="password" type="password" placeholder="Paswoord"></ion-input>\n        </ion-item>\n        <button ion-button color="secondary" round (click)="login()">Login</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidStepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitter_splitter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MidStepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MidStepPage = /** @class */ (function () {
    function MidStepPage(navCtrl, navParams, menu, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.aantalKeerFout = 0;
        this.templates = [];
        this.steps = [];
        this.allMidSteps = [];
        this.templates = navParams.data.templates;
        this.steps = navParams.data.steps;
        for (var i = 0; i < this.steps.length; i++) {
            if (this.steps[i].midsteps != null) {
                for (var y = 0; y < this.steps[i].midsteps.length; y++) {
                    this.allMidSteps.push(this.steps[i].midsteps[y]);
                }
            }
        }
    }
    MidStepPage.prototype.ionViewDidLoad = function () {
        console.log(this.allMidSteps);
    };
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    MidStepPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    //https://stackoverflow.com/questions/38652827/disable-swipe-to-view-sidemenu-ionic-2/38654644?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    MidStepPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    MidStepPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Fout!',
            subTitle: 'Je hebt een fout gemaakt! Probeer de fout te vinden en op te lossen',
            buttons: ['OK']
        });
        alert.present();
    };
    MidStepPage.prototype.showHint = function () {
        var alert = this.alertCtrl.create({
            title: 'Hint',
            subTitle: 'Nog niet geweten of hier een hint moet',
            buttons: ['OK']
        });
        alert.present();
    };
    MidStepPage.prototype.showAlertJuist = function () {
        var alert = this.alertCtrl.create({
            title: 'Juist!',
            subTitle: 'Dit is het juiste antwoord!',
            buttons: ['OK']
        });
        alert.present();
    };
    MidStepPage.prototype.showAlertBan = function () {
        var alert = this.alertCtrl.create({
            title: 'U bent geband uit het systeem',
            subTitle: 'Wegens onregelmatig gebruik van de app bent u geband uit het systeem',
            buttons: ['OK']
        });
        alert.present();
    };
    MidStepPage.prototype.check = function () {
        var ok = true;
        if (ok) {
            this.showAlertJuist();
            this.templates.shift();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__splitter_splitter__["a" /* SplitterPage */], {
                templates: this.templates
            });
        }
        else {
            this.aantalKeerFout++;
            if (this.aantalKeerFout >= 5) {
                this.showAlertBan();
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            else if (this.aantalKeerFout >= 3) {
                this.showHint();
            }
            else {
                this.showAlert();
            }
        }
    };
    MidStepPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mid-step',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/mid-step/mid-step.html"*/'<!--\n  Generated template for the MidStepPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Maken</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list ion-item *ngFor="let midStep of allMidSteps" detail-none>\n    <ion-item>\n      {{midStep.step}}\n    </ion-item>\n\n    \n  </ion-list>\n  <button ion-button round (click)="check()">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/mid-step/mid-step.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], MidStepPage);
    return MidStepPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=mid-step.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materials_materials__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__te_maken_oefeningen_te_maken_oefeningen__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hermaak_oefening_hermaak_oefening__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    HomePage.prototype.openPage = function () {
        alert("iets");
    };
    HomePage.prototype.openMaterialPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__materials_materials__["a" /* MaterialsPage */]);
    };
    HomePage.prototype.openTeMakenOefeningenPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__te_maken_oefeningen_te_maken_oefeningen__["a" /* TeMakenOefeningenPage */]);
    };
    HomePage.prototype.openHermaakOefeningPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hermaak_oefening_hermaak_oefening__["a" /* HermaakOefeningPage */]);
    };
    HomePage.prototype.openSettingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="pageHeader">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" class="menuIcon"></ion-icon>\n    </button>\n    <ion-title class="pageTitle">Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    <ion-card (click)="openTeMakenOefeningenPage()">\n        <ion-card-content>\n          <ion-card-title>\n            <em>Te Maken Oefeningen</em>\n          </ion-card-title>\n        </ion-card-content>\n        <img src="../../assets/imgs/pasOp.png" class="cardImage"/>\n    </ion-card>\n    \n    <ion-card (click)="openHermaakOefeningPage()">\n        <ion-card-content>\n          <ion-card-title>\n            <em>Hermaak Oefening</em>\n          </ion-card-title>\n        </ion-card-content>\n        <img src="../../assets/imgs/erasmus_logo.jpg" class="cardImage"/>\n    </ion-card>\n\n    <ion-card (click)="openMaterialPage()">\n        <ion-card-content>\n          <ion-card-title>\n            Labo Materiaal\n          </ion-card-title>\n        </ion-card-content>\n        <img src="../../assets/imgs/erlemeyer.png" class="cardImage"/>\n    </ion-card>\n\n    <ion-card (click)="openSettingsPage()">\n        <ion-card-content>\n          <ion-card-title>\n            Instellingen\n          </ion-card-title>\n        </ion-card-content>\n        <img src="../../assets/imgs/tandwiel.png" class="cardImage"/>\n    </ion-card>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MaterialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaterialsPage = /** @class */ (function () {
    function MaterialsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MaterialsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaterialsPage');
    };
    MaterialsPage.prototype.moreInfo = function (materiaal) {
        alert("Dit is een " + materiaal);
    };
    MaterialsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-materials',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/materials/materials.html"*/'<ion-header>\n    <ion-navbar class="pageHeader">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menuIcon"></ion-icon>\n      </button>\n      <ion-title class="pageTitle">Labo Materiaal</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      \n      <ion-list>\n          <ion-item (click)="moreInfo(\'erlemeyer\')">\n            <ion-thumbnail item-start>\n              <img src="../../assets/imgs/erlemeyer.png">\n            </ion-thumbnail>\n            <h2>erlemeyer</h2>\n          </ion-item>\n      </ion-list>\n\n      <ion-list>\n          <ion-item (click)="moreInfo(\'logo\')">\n            <ion-thumbnail item-start>\n              <img src="../../assets/imgs/erasmus_logo.jpg">\n            </ion-thumbnail>\n            <h2>Iets anders</h2>\n          </ion-item>\n      </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/materials/materials.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MaterialsPage);
    return MaterialsPage;
}());

//# sourceMappingURL=materials.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeMakenOefeningenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitter_splitter__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeMakenOefeningenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeMakenOefeningenPage = /** @class */ (function () {
    function TeMakenOefeningenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // Logic om alle open labo's binnen te trekken uit json-file
        this.openLabos = [
            {
                laboNaam: "Labo 1",
                inleverDatum: "22/05/18",
                oefeningen: [
                    {
                        oefeningNaam: "Oefening 1",
                        templates: [
                            {
                                soort: "kkTemplateOefening"
                            },
                            {
                                soort: "materialTemplate",
                                uitleg: "Het is hier de bedoeling dat je de juiste materialen op tafel sleept om een filtratie toe te passen",
                                hint: "Je moet gewoon slepen",
                                juisteMaterialen: [1, 2, 3]
                            },
                            {
                                soort: "verwijzingstemplate",
                                uitleg: "Klik op onderstaande link om naar de leerstof te gaan",
                                link: "http://www.google.com"
                            },
                            {
                                soort: "afvalTemplate",
                                stoffen: [
                                    {
                                        id: 1,
                                        naam: "Zout",
                                        afval: 1
                                    },
                                    {
                                        id: 2,
                                        naam: "Peper",
                                        afval: 1
                                    },
                                    {
                                        id: 3,
                                        naam: "Water",
                                        afval: 7
                                    },
                                    {
                                        id: 4,
                                        naam: "Giftige stof",
                                        afval: 6
                                    }
                                ],
                                uitleg: "Het is hierbij de bedoeling dat je alle soorten afval in de juiste vuilbak zet",
                                hint: "Let goed voor de giftige stof!"
                            }
                        ]
                    },
                    {
                        oefeningNaam: "Oefening 2",
                        templates: [
                            {
                                soort: "werkwijzeTemplate",
                                stappen: [
                                    {
                                        id: 1,
                                        step: 'Dit is stap 1',
                                        midsteps: [
                                            {
                                                step: "Dit is de tussenstap 1 van stap 1",
                                                question: "Dit is de vraag",
                                                answer: "juist"
                                            },
                                            {
                                                step: "Dit is de tussenstap 2 van stap 1",
                                                question: "Dit is de tweede vraag",
                                                answer: "juist"
                                            }
                                        ]
                                    },
                                    {
                                        id: 2,
                                        step: 'Dit is stap 2',
                                        midsteps: null
                                    },
                                    {
                                        id: 3,
                                        step: 'Dit is stap 3',
                                        midsteps: null
                                    },
                                    {
                                        id: 4,
                                        step: 'Dit is stap 4',
                                        midsteps: null
                                    }
                                ],
                                hint: "Zet het in de juiste volgorde"
                            }
                        ]
                    }
                ]
            }
        ];
    }
    TeMakenOefeningenPage.prototype.openOefening = function (oefening) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__splitter_splitter__["a" /* SplitterPage */], {
            templates: oefening.templates
        });
    };
    TeMakenOefeningenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeMakenOefeningenPage');
    };
    TeMakenOefeningenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-te-maken-oefeningen',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/te-maken-oefeningen/te-maken-oefeningen.html"*/'<ion-header>\n    <ion-navbar class="pageHeader">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menuIcon"></ion-icon>\n      </button>\n      <ion-title class="pageTitle">Te maken Oefeningen</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-item-group *ngFor="let labo of openLabos" no-lines>\n      <ion-item-divider color="light">{{labo.laboNaam}} - tegen: {{labo.inleverDatum}}</ion-item-divider>\n      <ion-item *ngFor="let oefening of labo.oefeningen" no-lines>\n        <a (click)="openOefening(oefening)">{{oefening.oefeningNaam}}</a>\n      </ion-item>\n    </ion-item-group>\n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/te-maken-oefeningen/te-maken-oefeningen.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
    ], TeMakenOefeningenPage);
    return TeMakenOefeningenPage;
    var _a, _b;
}());

//# sourceMappingURL=te-maken-oefeningen.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HermaakOefeningPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitter_splitter__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HermaakOefeningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HermaakOefeningPage = /** @class */ (function () {
    function HermaakOefeningPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // Logic om te hermaken oefeningen op te halen
        this.teHermakenOefeningen = [
            {
                laboNaam: "Labo 1",
                inleverDatum: "22/05/18",
                oefeningen: [
                    {
                        oefeningNaam: "Oefening 1",
                        templates: [
                            {
                                soort: "kkTemplateOefening"
                            },
                            {
                                soort: "materialTemplate",
                                uitleg: "Zorg ervoor dat je de juiste materialen gebruikt om een oplossing te kunnen maken",
                                hint: "Gewoon slepen",
                                juisteMaterialen: [1, 2, 3, 4]
                            }
                        ]
                    },
                    {
                        oefeningNaam: "Oefening 2",
                        templates: null
                    }
                ]
            }
        ];
        var RightMats;
    }
    HermaakOefeningPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HermaakOefeningPage');
    };
    HermaakOefeningPage.prototype.showConfirm = function (pageName, templates) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are You Sure?',
            message: 'You can not go back when starting this exercise!',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.setRoot(pageName, {
                            templates: templates
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    HermaakOefeningPage.prototype.openOefening = function (oefening) {
        this.showConfirm(__WEBPACK_IMPORTED_MODULE_2__splitter_splitter__["a" /* SplitterPage */], oefening.templates);
    };
    HermaakOefeningPage.prototype.checkWithRightMats = function (testMats) {
        // logic om rightMats en testMats met elkaar te verglijken
        return true;
    };
    HermaakOefeningPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hermaak-oefening',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/hermaak-oefening/hermaak-oefening.html"*/'<ion-header>\n    <ion-navbar class="pageHeader">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menuIcon"></ion-icon>\n      </button>\n      <ion-title class="pageTitle">Hermaak Oefening</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n\n        <ion-item-group *ngFor="let labo of teHermakenOefeningen" no-lines>\n            <ion-item-divider color="light">{{labo.laboNaam}}</ion-item-divider>\n            <ion-item *ngFor="let oefening of labo.oefeningen" no-lines>\n                <a (click)="openOefening(oefening)">{{oefening.oefeningNaam}}</a>\n            </ion-item>\n        </ion-item-group>\n\n    </ion-content>\n\n    <!-- Id dat wordt meegegeven aan de openOefening functie komt uit de json-file -->\n  '/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/hermaak-oefening/hermaak-oefening.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HermaakOefeningPage);
    return HermaakOefeningPage;
}());

//# sourceMappingURL=hermaak-oefening.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar class="pageHeader">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" class="menuIcon"></ion-icon>\n      </button>\n      <ion-title class="pageTitle">Settings</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-item>\n          <ion-range [(ngModel)]="brightness">\n            <ion-icon range-left small name="sunny"></ion-icon>\n            <ion-icon range-right name="sunny"></ion-icon>\n          </ion-range>\n        </ion-item>\n  </ion-content>\n'/*ion-inline-end:"/Users/Robin/Documents/GitHub/Project-Mobile-Apps-Groep2/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map