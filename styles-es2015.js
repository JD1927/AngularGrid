(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*\n  Oh Hello!\n\n  These are some base styles so that our tutorial looks good.\n\n  Let's go through the important bits real quick\n*/\n:root {\n  --yellow: #ffc600;\n  --black: #272727;\n}\nhtml {\n  /* border-box box model allows us to add padding and border to our elements without increasing their size */\n  box-sizing: border-box;\n  /* A system font stack so things load nice and quick! */\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 900;\n  font-size: 10px;\n  color: var(--black);\n  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);\n}\n/*\n  WAT IS THIS?!\n  We inherit box-sizing: border-box; from our <html> selector\n  Apparently this is a bit better than applying box-sizing: border-box; directly to the * selector\n*/\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\nbody {\n  background-image: url('topography.svg'), linear-gradient(110deg, #f93d66, #6d47d9);\n  background-size: 340px, auto;\n  min-height: calc(100vh - 100px);\n  margin: 50px;\n  /* background: white; */\n  background-attachment: fixed;\n  letter-spacing: -1px;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0 0 5px 0;\n}\n/* Each item in our grid will contain numbers */\n.item {\n  /* We center the contents of these items. You can also do this with flexbox too! */\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 5px solid rgba(0, 0, 0, 0.03);\n  border-radius: 5px;\n  font-size: 4rem;\n  background-color: var(--yellow);\n  /* best colour */\n}\n.item p {\n  margin: 0 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuLmFndWlycmUvbXlMZWFybmluZy9Bbmd1bGFyR3JpZC9zcmMvc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFDQTs7Ozs7O0NBQUE7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsMkdBQUE7RUFDQSxzQkFBQTtFQUNBLHVEQUFBO0VBQ0EsMEpBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FDQUY7QURHQTs7OztDQUFBO0FBS0E7OztFQUdFLG1CQUFBO0FDQUY7QURHQTtFQUNFLGtGQUFBO0VBRUEsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNERjtBRElBOzs7Ozs7RUFNRSxpQkFBQTtBQ0RGO0FESUEsK0NBQUE7QUFDQTtFQUNFLGtGQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLypcbiAgT2ggSGVsbG8hXG5cbiAgVGhlc2UgYXJlIHNvbWUgYmFzZSBzdHlsZXMgc28gdGhhdCBvdXIgdHV0b3JpYWwgbG9va3MgZ29vZC5cblxuICBMZXQncyBnbyB0aHJvdWdoIHRoZSBpbXBvcnRhbnQgYml0cyByZWFsIHF1aWNrXG4qL1xuOnJvb3Qge1xuICAtLXllbGxvdzogI2ZmYzYwMDtcbiAgLS1ibGFjazogIzI3MjcyNztcbn1cblxuaHRtbCB7XG4gIC8qIGJvcmRlci1ib3ggYm94IG1vZGVsIGFsbG93cyB1cyB0byBhZGQgcGFkZGluZyBhbmQgYm9yZGVyIHRvIG91ciBlbGVtZW50cyB3aXRob3V0IGluY3JlYXNpbmcgdGhlaXIgc2l6ZSAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBBIHN5c3RlbSBmb250IHN0YWNrIHNvIHRoaW5ncyBsb2FkIG5pY2UgYW5kIHF1aWNrISAqL1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xufVxuXG4vKlxuICBXQVQgSVMgVEhJUz8hXG4gIFdlIGluaGVyaXQgYm94LXNpemluZzogYm9yZGVyLWJveDsgZnJvbSBvdXIgPGh0bWw+IHNlbGVjdG9yXG4gIEFwcGFyZW50bHkgdGhpcyBpcyBhIGJpdCBiZXR0ZXIgdGhhbiBhcHBseWluZyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBkaXJlY3RseSB0byB0aGUgKiBzZWxlY3RvclxuKi9cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9hc3NldHMvaW1hZ2VzL3RvcG9ncmFwaHkuc3ZnXCIpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNmOTNkNjYsICM2ZDQ3ZDkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDM0MHB4LCBhdXRvO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBtYXJnaW46IDUwcHg7XG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG59XG5cbi8qIEVhY2ggaXRlbSBpbiBvdXIgZ3JpZCB3aWxsIGNvbnRhaW4gbnVtYmVycyAqL1xuLml0ZW0ge1xuICAvKiBXZSBjZW50ZXIgdGhlIGNvbnRlbnRzIG9mIHRoZXNlIGl0ZW1zLiBZb3UgY2FuIGFsc28gZG8gdGhpcyB3aXRoIGZsZXhib3ggdG9vISAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gIC8qIGJlc3QgY29sb3VyICovXG59XG5cbi5pdGVtIHAge1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qXG4gIE9oIEhlbGxvIVxuXG4gIFRoZXNlIGFyZSBzb21lIGJhc2Ugc3R5bGVzIHNvIHRoYXQgb3VyIHR1dG9yaWFsIGxvb2tzIGdvb2QuXG5cbiAgTGV0J3MgZ28gdGhyb3VnaCB0aGUgaW1wb3J0YW50IGJpdHMgcmVhbCBxdWlja1xuKi9cbjpyb290IHtcbiAgLS15ZWxsb3c6ICNmZmM2MDA7XG4gIC0tYmxhY2s6ICMyNzI3Mjc7XG59XG5cbmh0bWwge1xuICAvKiBib3JkZXItYm94IGJveCBtb2RlbCBhbGxvd3MgdXMgdG8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB0byBvdXIgZWxlbWVudHMgd2l0aG91dCBpbmNyZWFzaW5nIHRoZWlyIHNpemUgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogQSBzeXN0ZW0gZm9udCBzdGFjayBzbyB0aGluZ3MgbG9hZCBuaWNlIGFuZCBxdWljayEgKi9cbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIHRleHQtc2hhZG93OiAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG59XG5cbi8qXG4gIFdBVCBJUyBUSElTPyFcbiAgV2UgaW5oZXJpdCBib3gtc2l6aW5nOiBib3JkZXItYm94OyBmcm9tIG91ciA8aHRtbD4gc2VsZWN0b3JcbiAgQXBwYXJlbnRseSB0aGlzIGlzIGEgYml0IGJldHRlciB0aGFuIGFwcGx5aW5nIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGRpcmVjdGx5IHRvIHRoZSAqIHNlbGVjdG9yXG4qL1xuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9pbWFnZXMvdG9wb2dyYXBoeS5zdmdcIiksIGxpbmVhci1ncmFkaWVudCgxMTBkZWcsICNmOTNkNjYsICM2ZDQ3ZDkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDM0MHB4LCBhdXRvO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBtYXJnaW46IDUwcHg7XG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG59XG5cbi8qIEVhY2ggaXRlbSBpbiBvdXIgZ3JpZCB3aWxsIGNvbnRhaW4gbnVtYmVycyAqL1xuLml0ZW0ge1xuICAvKiBXZSBjZW50ZXIgdGhlIGNvbnRlbnRzIG9mIHRoZXNlIGl0ZW1zLiBZb3UgY2FuIGFsc28gZG8gdGhpcyB3aXRoIGZsZXhib3ggdG9vISAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG4gIC8qIGJlc3QgY29sb3VyICovXG59XG5cbi5pdGVtIHAge1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/juan.aguirre/myLearning/AngularGrid/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map