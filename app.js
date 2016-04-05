"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by juanmanuelsanchez on 5/4/16.
 */
///<reference path="node_modules/angular2/ts/typings/node/node.d.ts"/>
///<reference path="node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var RedditApp = (function () {
    function RedditApp() {
    }
    RedditApp = __decorate([
        core_1.Component({
            selector: 'reddit',
            template: "\n    <form class=\"ui large form segment\">\n      <h3 class=\"ui header\">Add a Link</h3>\n      \n      <div class=\"field\">\n        <label for=\"title\">Title:</label>\n        <input name=\"title\">\n      </div>\n      <div class=\"field\">\n        <label for=\"link\">Link:</label>\n        <input name=\"link\">\n      </div>  \n    </form>\n"
        })
    ], RedditApp);
    return RedditApp;
}());
browser_1.bootstrap(RedditApp);
//# sourceMappingURL=app.js.map