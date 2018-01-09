webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_game_play_game_component__ = __webpack_require__("../../../../../src/app/play-game/play-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_container_game_container_component__ = __webpack_require__("../../../../../src/app/game-container/game-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__game_container_game_container_component__["a" /* GameContainerComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
            { path: 'addquestion', component: __WEBPACK_IMPORTED_MODULE_3__new_question_new_question_component__["a" /* NewQuestionComponent */] },
            { path: 'letsplay', component: __WEBPACK_IMPORTED_MODULE_4__play_game_play_game_component__["a" /* PlayGameComponent */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__play_game_play_game_component__ = __webpack_require__("../../../../../src/app/play-game/play-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_container_game_container_component__ = __webpack_require__("../../../../../src/app/game-container/game-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__play_game_play_game_component__["a" /* PlayGameComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_question_new_question_component__["a" /* NewQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__game_container_game_container_component__["a" /* GameContainerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__question_service__["a" /* QuestionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/game-container/game-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-container/game-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <p>\n          <a [routerLink]=\"['/']\" activeRouterLink=\"active\" class=\"btn btn-primary\">Home</a>|\n          <a [routerLink]=\"['addquestion']\" activeRouterLink=\"active\" class=\"btn btn-primary\">Add a Question</a>\n        </p>\n      </div>\n      <div class=\"col-sm-6 text-right\">\n        <button (click)=\"logout()\" class=\"btn btn-primary\">Logout</button>\n      </div>\n    </div>\n    \n    <router-outlet></router-outlet>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/game-container/game-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameContainerComponent = (function () {
    function GameContainerComponent(_questions) {
        this._questions = _questions;
    }
    GameContainerComponent.prototype.ngOnInit = function () {
        if (!('currPlayer' in localStorage)) {
            this.setPlayer();
        }
        else {
            this._questions.setCurrPlayer(localStorage.currPlayer);
        }
    };
    GameContainerComponent.prototype.setPlayer = function () {
        var playerName = window.prompt("Enter a username for the Player.");
        this._questions.setCurrPlayer(playerName);
    };
    GameContainerComponent.prototype.logout = function () {
        this._questions.logoutPlayer();
        this.setPlayer();
    };
    GameContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-container',
            template: __webpack_require__("../../../../../src/app/game-container/game-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-container/game-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */]])
    ], GameContainerComponent);
    return GameContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"lastGameResult\">\n  <div class=\"col-sm-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"card-text\">\n          <p class=\"text-center\">Great job, {{ lastGameResult.username }}! Your score was {{ lastGameResult.score }}/3 ({{ lastGameResult.score / 3 | percent }})</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"card-text\">\n          <p class=\"text-center\"><a class=\"btn btn-primary\" [routerLink]=\"['/letsplay']\">Play</a></p>\n          <p class=\"text-center\">Click the button above to start the trivia game.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-12\">\n      <label>Search:</label>\n      <input (keyup)=\"searchSet()\" type=\"text\" name=\"searchBar\" id=\"searchBar\" [(ngModel)]=\"searchString\">\n  </div>\n</div>\n<table class=\"table table-striped\">\n  <thead>\n    <th>Name</th>\n    <th>Score</th>\n    <th>Percentage</th>\n  </thead>\n  <tr *ngFor=\"let player of playerListDisplay\">\n    <td>{{player.username}}</td>\n    <td>{{ player.score }}/3</td>\n    <td>{{ player.score / 3 | percent }}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = (function () {
    function HomepageComponent(_questions, _router) {
        this._questions = _questions;
        this._router = _router;
        this.lastGameResult = null;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._questions.getPlayers(function (players) {
            _this.playerList = players;
            _this.playerListDisplay = _this.playerList;
            _this.sortPlayers();
        });
        this._questions.lastResultObs.subscribe(function (resp) {
            _this.lastGameResult = resp;
        });
        // this._router.events.subscribe((event)=>{
        //   console.log(event.toString());
        //   if (event.toString() == "NavigationStart"){
        //     this._questions.clearResult();
        //   }
        // })
    };
    HomepageComponent.prototype.searchSet = function () {
        console.log(this.searchString.includes('%'), this.searchString);
        if (this.searchString == '') {
            this.playerListDisplay = this.playerList;
        }
        else if (this.searchString.includes('%')) {
            var percentScore = Number(this.searchString.replace('%', ''));
            var score = Math.round(percentScore / 100 * 3);
            console.log(score);
            this.playerListDisplay = [];
            for (var i = 0; i < this.playerList.length; i++) {
                if (this.playerList[i].score == score) {
                    this.playerListDisplay.push(this.playerList[i]);
                }
            }
        }
        else if (isNaN(Number(this.searchString))) {
            this.playerListDisplay = [];
            for (var i = 0; i < this.playerList.length; i++) {
                if (this.playerList[i].username.includes(this.searchString)) {
                    this.playerListDisplay.push(this.playerList[i]);
                }
            }
        }
        else {
            this.playerListDisplay = [];
            for (var i = 0; i < this.playerList.length; i++) {
                if (this.playerList[i].score == Number(this.searchString)) {
                    this.playerListDisplay.push(this.playerList[i]);
                }
            }
        }
        this.sortPlayers();
    };
    HomepageComponent.prototype.sortPlayers = function () {
        this.playerListDisplay.sort(function (a, b) { return b.score - a.score; });
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"saveQuestion()\" #questionForm=\"ngForm\">\n  <h1>New Question</h1>\n  <div class=\"form-group\">\n    <label for=\"questionPrompt\">Question:</label>\n    <textarea #question=\"ngModel\" class=\"form-control\" [(ngModel)]=\"newQuestion.prompt\" required minlength=\"15\" class=\"form-control\" name=\"prompt\"></textarea>\n    <p *ngIf></p>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"correctAns\">Correct Answer:</label>\n    <input type=\"text\" class=\"form-control\" name=\"correctAns\" id=\"correctAns\" #answer=\"ngModel\" [(ngModel)]=\"newQuestion.answer\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"fakeAns1\">Fake Answer 1:</label>\n    <input type=\"text\" class=\"form-control\" name=\"fakeAns1\" id=\"fakeAns1\" #wrongAnswerA=\"ngModel\" [(ngModel)]=\"newQuestion.wrongAnswerA\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"fakeAns2\">Fake Answer 2:</label>\n    <input type=\"text\" class=\"form-control\" name=\"fakeAns2\" id=\"fakeAns2\" #wrongAnswerB=\"ngModel\" [(ngModel)]=\"newQuestion.wrongAnswerB\" required>\n  </div>\n  <div>\n    <a [routerLink]=\"['/']\" class=\"btn btn-danger\">Cancel</a>\n    <button type=\"submit\" [disabled]=\"questionForm.invalid\" class=\"btn btn-success\">Submit</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewQuestionComponent = (function () {
    function NewQuestionComponent(_questions, _router) {
        this._questions = _questions;
        this._router = _router;
        this.newQuestion = new __WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]();
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
        this._questions.clearResult();
    };
    NewQuestionComponent.prototype.saveQuestion = function () {
        this._questions.addQuestion(this.newQuestion);
        this._router.navigate(['/']);
    };
    NewQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-question',
            template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], NewQuestionComponent);
    return NewQuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/play-game/play-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/play-game/play-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <p>Hi {{ username }}</p>\n    <p>Choose and answer for each of the questions and submit the test once done.</p>\n    <p>Good Luck</p>\n  </div>\n</div>\n<form (ngSubmit)=\"submitAnswers()\" #questionForm=\"ngForm\">\n  \n  <div class=\"form-group row\" *ngFor=\"let question of questionList | slice:0:3; let i = index\">\n    <div class=\"col-sm-12\">\n      <label for=\"question\">{{ i + 1 }}. {{ question.prompt }}</label>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input required class=\"form-check-input\" type=\"radio\" name=\"{{ question._id }}\" id=\"exampleRadios1\" value=\"{{ question.answer }}\" [(ngModel)]=\"answers[i]\">\n          {{ question.answer }}\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input required class=\"form-check-input\" type=\"radio\" name=\"{{ question._id }}\" id=\"exampleRadios2\" value=\"{{ question.wrongAnswerA }}\" [(ngModel)]=\"answers[i]\">\n          {{ question.wrongAnswerA }}\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input required class=\"form-check-input\" type=\"radio\" name=\"{{ question._id }}\" id=\"{{ question._id }}\" value=\"{{ question.wrongAnswerB }}\" [(ngModel)]=\"answers[i]\">\n          {{ question.wrongAnswerB }}\n        </label>\n      </div>\n    </div>\n  </div>\n  <p *ngIf=\"questionForm.invalid\">All questions must be answered</p>\n  <p><a [routerLink]=\"['/']\" class=\"btn btn-danger\" >Cancel</a> <input [disabled]=\"questionForm.invalid\" type=\"submit\" value=\"Submit\" class=\"btn btn-success\"></p>\n</form>"

/***/ }),

/***/ "../../../../../src/app/play-game/play-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_service__ = __webpack_require__("../../../../../src/app/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayGameComponent = (function () {
    function PlayGameComponent(_questions, _routes) {
        this._questions = _questions;
        this._routes = _routes;
        this.answers = ['', '', ''];
    }
    PlayGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._questions.clearResult();
        this._questions.getQuestions(function (questions) {
            _this.questionList = questions;
            _this.randQuestions();
            _this.username = localStorage.currPlayer;
        });
    };
    PlayGameComponent.prototype.randQuestions = function () {
        for (var i = 0; i < this.questionList.length; i++) {
            var randInd = Math.floor(Math.random() * this.questionList.length);
            var temp = this.questionList[randInd];
            this.questionList[randInd] = this.questionList[i];
            this.questionList[i] = temp;
        }
    };
    PlayGameComponent.prototype.submitAnswers = function () {
        var score = 0;
        for (var i = 0; i < this.answers.length; i++) {
            if (this.questionList[i].answer == this.answers[i]) {
                score++;
            }
        }
        this._questions.saveResult(score);
        this._routes.navigate(['/']);
    };
    PlayGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-play-game',
            template: __webpack_require__("../../../../../src/app/play-game/play-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/play-game/play-game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PlayGameComponent);
    return PlayGameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__("../../../../../src/app/player.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
        this._lastResultSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        this.lastResultObs = this._lastResultSubject.asObservable();
    }
    QuestionService.prototype.setCurrPlayer = function (username) {
        this.currPlayer = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */];
        this.currPlayer.username = username;
        localStorage.currPlayer = username;
        console.log(this.currPlayer);
    };
    QuestionService.prototype.logoutPlayer = function () {
        this.currPlayer = null;
        localStorage.clear;
    };
    QuestionService.prototype.saveResult = function (score) {
        var scoredPlayer = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* Player */]();
        console.log(localStorage);
        scoredPlayer.username = localStorage.currPlayer;
        scoredPlayer.score = score;
        this._http.post('/players', scoredPlayer).subscribe();
        this.lastResultPlayer = scoredPlayer;
        this._lastResultSubject.next(this.lastResultPlayer);
    };
    QuestionService.prototype.clearResult = function () {
        this._lastResultSubject.next(null);
    };
    QuestionService.prototype.getPlayers = function (callback) {
        var _this = this;
        this._http.get('/players').map(function (resp) { return resp; }).subscribe(function (resp) {
            _this.playerList = resp;
            callback(resp);
        });
    };
    QuestionService.prototype.addQuestion = function (question) {
        this._http.post('/questions', question).subscribe();
    };
    QuestionService.prototype.getQuestions = function (callback) {
        var _this = this;
        this._http.get('questions').map(function (resp) { return resp; }).subscribe(function (resp) {
            _this.questionList = resp;
            callback(resp);
        });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map