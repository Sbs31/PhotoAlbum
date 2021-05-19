(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlbomTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['userid'],
  name: "AlbomTable",
  data: function data() {
    return {
      user_id: this.userid,
      alboms: [],
      showMenu: false,
      showMenuAlboms: false,
      menuClass: false,
      showModal: false,
      contextTop: 0,
      contextLeft: 0,
      albomContextId: '',
      modalEdite: false
    };
  },
  methods: {
    getAlboms: function getAlboms() {
      var _this = this;

      this.showModal = false;
      axios.get("/api/getAlbom/".concat(this.user_id)).then(function (response) {
        return _this.alboms = response.data;
      });
    },
    ContextMenu: function ContextMenu(e) {
      var t = e.target;
      console.log(e);

      if (t.id === 'albom-table') {
        this.modalEdite = false;
        this.showMenuAlboms = false;
        this.contextTop = e.offsetY + 70;
        this.contextLeft = e.offsetX + 20;
        /*$('#context-menu').css({
             top: top,
            left: left
        });*/

        this.showMenu = true;
      } else {
        console.log(e.target.parentElement);
        this.showMenu = false;
        this.contextTop = e.pageY - 70;
        this.contextLeft = e.pageX - 390;
        this.showMenuAlboms = true;
        var td = e.target.closest('.albom__item');

        if (td) {
          var data = e.target.dataset.ctx;
          this.albomContextId = data;
          console.log('клик по итему ' + data);
        } else {
          console.log('клик по столу');
        }
      }
    },
    HideContextMenu: function HideContextMenu() {
      var _this2 = this;

      if (this.showMenu || this.showMenuAlboms) setTimeout(function () {
        _this2.showMenuAlboms = false;
        _this2.showMenu = false;
      }, 100);
      /*setTimeout(()=>this.showMenu = false,1000);*/
      //this.menuClass = '';
    },
    ContextAlbom: function ContextAlbom(e) {
      this.contextTop = e.pageYOffset + 70;
      this.contextLeft = e.pageXOffset + 20;
      this.showMenuAlboms = true;
    },
    modal: function modal() {
      /*if(!this.showModal)
          this.showModal=true;
      if(this.showModal){
          this.showModal = false;
      }*/
      this.showModal = !this.showModal;
    },
    removeAlbom: function removeAlbom(albomId) {
      axios.post("/api/removeAlbom/".concat(albomId)).then(function (res) {
        return console.log(res);
      });
      this.showMenuAlboms = false;
      setTimeout(this.getAlboms(), 200);
    },
    editAlbom: function editAlbom() {
      this.showModal = true;
      this.modalEdite = true;
    }
  },
  created: function created() {
    this.getAlboms();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#albom-table[data-v-454d8f44]{\n    min-height: 60vh;\n}\n.albom__item[data-v-454d8f44]{\n    max-width: 10rem;\n    text-align:center;\n    padding: 20px;\n    cursor: pointer;\n}\n.albom__item[data-v-454d8f44]:hover{\n    background-color: rgba(0,0,0,.05);\n}\n.alboms[data-v-454d8f44]{\n    display:flex;\n    flex-wrap:wrap;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    justify-items: center;\n    align-items:center;\n}\n.albom__title[data-v-454d8f44]{\n    font-size: 14px;\n}\n.albom__description[data-v-454d8f44]{\n    font-size: 12px;\n}\n.custom-context-menu[data-v-454d8f44]{\n    position: absolute;\n    background-color: #fff;\n    display: flex;\n    flex-direction:column;\n\n    padding: 0px;\n    width: 20rem;\n    border-radius: 4px;\n    box-shadow: 0 10px 20px -5px rgba(0,0,0,.4);\n}\n.menu__item[data-v-454d8f44]{\n    padding: 10px;\n\n    background-color: #fff;\n    color: #000;\n    font-size: 18px;\n    cursor: pointer;\n}\n.menu__item[data-v-454d8f44]:hover{\n    background-color: #555;\n    color: #fff;\n}\n.fade-enter-active[data-v-454d8f44], .fade-leave-active[data-v-454d8f44] {\n    transition: .2s;\n}\n.fade-leave-to[data-v-454d8f44] /* .fade-leave-active до версии 2.1.8 */ {\n    opacity: 0;\n    transform: translateY(20px);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card-body",
      on: {
        contextmenu: function($event) {
          $event.preventDefault()
          return _vm.ContextMenu($event)
        },
        click: _vm.HideContextMenu
      }
    },
    [
      _vm.showModal
        ? _c("modal-add-albom", {
            attrs: {
              userid: _vm.user_id,
              edited: _vm.modalEdite,
              albomid: _vm.albomContextId
            },
            on: { "close-modal": _vm.modal, "new-albom": _vm.getAlboms }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "alboms", attrs: { id: "albom-table" } },
        _vm._l(_vm.alboms, function(albom) {
          return _c(
            "div",
            { staticClass: "albom__item", attrs: { "data-ctx": albom.id } },
            [
              _c("img", {
                staticClass: "albom__img w-100 ",
                attrs: {
                  "data-ctx": albom.id,
                  src: "/images/albom-label.png",
                  alt: ""
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "albom__body", attrs: { "data-ctx": albom.id } },
                [
                  _c(
                    "h2",
                    {
                      staticClass: "albom__title",
                      attrs: { "data-ctx": albom.id }
                    },
                    [_vm._v(_vm._s(albom.name))]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "albom__description ctx",
                      attrs: { "data-ctx": albom.id }
                    },
                    [_vm._v(_vm._s(albom.description))]
                  )
                ]
              )
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showMenu,
                expression: "showMenu"
              }
            ],
            staticClass: "custom-context-menu isHideContext",
            style: { top: _vm.contextTop + "px", left: _vm.contextLeft + "px" },
            attrs: { id: "context-menu" }
          },
          [
            _c("div", { staticClass: "menu__item", on: { click: _vm.modal } }, [
              _vm._v("Добавить новый альбом")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "menu__item" }, [
              _vm._v("Добавить закрытый альбом")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showMenuAlboms,
                expression: "showMenuAlboms"
              }
            ],
            staticClass: "custom-context-menu isHideContext",
            style: { top: _vm.contextTop + "px", left: _vm.contextLeft + "px" },
            attrs: { id: "context-menu-albom" }
          },
          [
            _c(
              "div",
              {
                staticClass: "menu__item",
                on: {
                  click: function($event) {
                    return _vm.removeAlbom(_vm.albomContextId)
                  }
                }
              },
              [_vm._v("удалить")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "menu__item", on: { click: _vm.editAlbom } },
              [_vm._v("переиминовать")]
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AlbomTable.vue":
/*!************************************************!*\
  !*** ./resources/js/components/AlbomTable.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlbomTable_vue_vue_type_template_id_454d8f44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true& */ "./resources/js/components/AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true&");
/* harmony import */ var _AlbomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlbomTable.vue?vue&type=script&lang=js& */ "./resources/js/components/AlbomTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AlbomTable_vue_vue_type_style_index_0_id_454d8f44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css& */ "./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AlbomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlbomTable_vue_vue_type_template_id_454d8f44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlbomTable_vue_vue_type_template_id_454d8f44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "454d8f44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AlbomTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AlbomTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/AlbomTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AlbomTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_style_index_0_id_454d8f44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=style&index=0&id=454d8f44&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_style_index_0_id_454d8f44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_style_index_0_id_454d8f44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_style_index_0_id_454d8f44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_style_index_0_id_454d8f44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_style_index_0_id_454d8f44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_template_id_454d8f44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlbomTable.vue?vue&type=template&id=454d8f44&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_template_id_454d8f44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbomTable_vue_vue_type_template_id_454d8f44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);