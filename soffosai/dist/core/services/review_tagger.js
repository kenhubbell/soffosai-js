"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _service = require("./service.js");
var _constants = require("../../common/constants.js");
var _index = require("../../common/serviceio_fields/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * This module extracts key information from negative product reviews. It attempts to find
 * the referred object, it's fault and an action/verb that is associated with it. If any 
 * of the information is not present, it returns "n/a". This is useful for organizations who 
 * want to analyze product reviews in order to identify and prioritize the most important issues.
 * @class
 * @alias SoffosServices.ReviewTaggerService
 */
var ReviewTaggerService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(ReviewTaggerService, _SoffosAIService);
  var _super = _createSuper(ReviewTaggerService);
  function ReviewTaggerService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ReviewTaggerService);
    var service = _constants.ServiceString.REVIEW_TAGGER;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.ReviewTaggerIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - The review text.
   * @returns {Promise<Object>} 
   * object - string<br>
   * The faulty object. This could be the product itself, or a component, e.g. "door handle". If 'n/a' is returned, it's assumed that the object is the product itself. <br>
   * action - string <br>
   * The action/verb associated with that object, e.g. "squeaks" <br>
   * fault - string <br>
   * The fault (or strength) of the object, e.g. "loose" or "broken". <br>
   * @example
   * import { SoffosServices } from "soffosai";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.ReviewTaggerService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client 12345",
   *     "This oven has been a complete disaster from the start. After about 2 weeks of use, \
   *     the oven and broiler burners would turn off suddenly after being on for only 5 seconds. \
   *     This has been an ongoing issue for months, and it still does not work."
   * );
   * console.log(JSON.stringify(response, null, 2));
   *     
   * // returns
   * // {
   * //     "object": "oven and broiler burners",
   * //     "action": "turn off suddenly",
   * //     "fault": "not working",
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.01245,
   * //       "total_cost": 0.01745
   * //     },
   * //     "charged_character_count": 249,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(ReviewTaggerService, [{
    key: "call",
    value: function call(user, text) {
      var payload = {
        "user": user,
        "text": text
      };
      return _get(_getPrototypeOf(ReviewTaggerService.prototype), "call", this).call(this, payload);
    }
  }]);
  return ReviewTaggerService;
}(_service.SoffosAIService);
var _default = ReviewTaggerService;
exports["default"] = _default;