"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/ServiceCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ServiceCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TechStackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TechStackButton */ \"(app-client)/./src/components/TechStackButton.tsx\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-react */ \"(app-client)/./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__  auto */ \n\n\n\nconst ServiceCard = (param)=>{\n    let { AnimationData , heading , text , color , techName  } = param;\n    console.log(\"bg-\".concat(color));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col \".concat(heading === \"Mobile App Development\" ? \"lg:flex-row-reverse\" : \"lg:flex-row\", \" justify-evenly lg:mx-28 my-5 py-10 \").concat(color, \" hover:bg-gradient-to-tr hover:from-primary hover:to-[#4400a6] transition-all duration-300 rounded-lg\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-10 lg:pl-10 px-4 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl\",\n                        children: heading\n                    }, void 0, false, {\n                        fileName: \"/home/hammadghuman/UbuntuCode/Next/codemate/src/components/ServiceCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"max-w-lg\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/home/hammadghuman/UbuntuCode/Next/codemate/src/components/ServiceCard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-flow-row grid-cols-2 lg:grid-cols-2 max-w-sm gap-3\",\n                        children: techName.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechStackButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                techName: item\n                            }, item, false, {\n                                fileName: \"/home/hammadghuman/UbuntuCode/Next/codemate/src/components/ServiceCard.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/hammadghuman/UbuntuCode/Next/codemate/src/components/ServiceCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hammadghuman/UbuntuCode/Next/codemate/src/components/ServiceCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                className: \"max-w-[300px] max-h-[300px] mt-10 lg:mt-0 self-center\",\n                animationData: AnimationData\n            }, void 0, false, {\n                fileName: \"/home/hammadghuman/UbuntuCode/Next/codemate/src/components/ServiceCard.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hammadghuman/UbuntuCode/Next/codemate/src/components/ServiceCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ServiceCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceCard);\nvar _c;\n$RefreshReg$(_c, \"ServiceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2VydmljZUNhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ3NCO0FBQ2Q7QUFTbEMsTUFBTUcsY0FBYyxTQU1QO1FBTlEsRUFDbkJDLGNBQWEsRUFDYkMsUUFBTyxFQUNQQyxLQUFJLEVBQ0pDLE1BQUssRUFDTEMsU0FBUSxFQUNGO0lBQ05DLFFBQVFDLEdBQUcsQ0FBQyxNQUFZLE9BQU5IO0lBQ2xCLHFCQUNFLDhEQUFDSTtRQUNDQyxXQUFXLGlCQUk0QkwsT0FIckNGLFlBQVksMkJBQ1Isd0JBQ0EsYUFBYSxFQUNsQix3Q0FBNEMsT0FBTkUsT0FBTTs7MEJBRTdDLDhEQUFDSTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFZUDs7Ozs7O2tDQUMxQiw4REFBQ1M7d0JBQUVGLFdBQVU7a0NBQVlOOzs7Ozs7a0NBQ3pCLDhEQUFDSzt3QkFBSUMsV0FBVTtrQ0FDWkosU0FBU08sR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDZix3REFBZUE7Z0NBQVlPLFVBQVVROytCQUFoQkE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTVCLDhEQUFDZCxxREFBTUE7Z0JBQ0xVLFdBQVU7Z0JBQ1ZLLGVBQWViOzs7Ozs7Ozs7Ozs7QUFJdkI7S0EvQk1EO0FBaUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VDYXJkLnRzeD83ZDM4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRlY2hTdGFja0J1dHRvbiBmcm9tIFwiLi9UZWNoU3RhY2tCdXR0b25cIjtcbmltcG9ydCBMb3R0aWUgZnJvbSBcImxvdHRpZS1yZWFjdFwiO1xudHlwZSBQcm9wcyA9IHtcbiAgQW5pbWF0aW9uRGF0YTogYW55O1xuICBoZWFkaW5nOiBhbnk7XG4gIHRleHQ6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgdGVjaE5hbWU6IHN0cmluZ1tdO1xufTtcblxuY29uc3QgU2VydmljZUNhcmQgPSAoe1xuICBBbmltYXRpb25EYXRhLFxuICBoZWFkaW5nLFxuICB0ZXh0LFxuICBjb2xvcixcbiAgdGVjaE5hbWUsXG59OiBQcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhgYmctJHtjb2xvcn1gKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sICR7XG4gICAgICAgIGhlYWRpbmcgPT09IFwiTW9iaWxlIEFwcCBEZXZlbG9wbWVudFwiXG4gICAgICAgICAgPyBcImxnOmZsZXgtcm93LXJldmVyc2VcIlxuICAgICAgICAgIDogXCJsZzpmbGV4LXJvd1wiXG4gICAgICB9IGp1c3RpZnktZXZlbmx5IGxnOm14LTI4IG15LTUgcHktMTAgJHtjb2xvcn0gaG92ZXI6YmctZ3JhZGllbnQtdG8tdHIgaG92ZXI6ZnJvbS1wcmltYXJ5IGhvdmVyOnRvLVsjNDQwMGE2XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgcm91bmRlZC1sZ2B9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMTAgbGc6cGwtMTAgcHgtNCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPntoZWFkaW5nfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LWxnXCI+e3RleHR9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdyBncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiBtYXgtdy1zbSBnYXAtM1wiPlxuICAgICAgICAgIHt0ZWNoTmFtZS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxUZWNoU3RhY2tCdXR0b24ga2V5PXtpdGVtfSB0ZWNoTmFtZT17aXRlbX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMb3R0aWVcbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzMwMHB4XSBtYXgtaC1bMzAwcHhdIG10LTEwIGxnOm10LTAgc2VsZi1jZW50ZXJcIlxuICAgICAgICBhbmltYXRpb25EYXRhPXtBbmltYXRpb25EYXRhfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGVjaFN0YWNrQnV0dG9uIiwiTG90dGllIiwiU2VydmljZUNhcmQiLCJBbmltYXRpb25EYXRhIiwiaGVhZGluZyIsInRleHQiLCJjb2xvciIsInRlY2hOYW1lIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsIm1hcCIsIml0ZW0iLCJhbmltYXRpb25EYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ServiceCard.tsx\n"));

/***/ })

});