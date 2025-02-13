"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _node = require("./node.js");
var _app = require("../../app.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * A service configuration for QuestionAnsweringService for Pipeline use.
 * @class
 * @alias _SoffosNodes.QuestionAnsweringNode
 */
var QuestionAnsweringNode = /*#__PURE__*/function (_Node) {
  _inherits(QuestionAnsweringNode, _Node);
  var _super = _createSuper(QuestionAnsweringNode);
  /**
   * @param {string} name - The name of this Node.
   *  It will be used by the Pipeline to reference this Node.
   * @param {string} question
   * @param {string} document_text - The text to be used as the context to formulate the answer.
   * @param {string[]} document_ids - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
   * @param {boolean} check_ambiguity - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
   * "What was his most famous invention?"
   * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
   * "What was Tesla's most famous invention and when did he create it?"
   * In this case, the AI can infer that he refers to Tesla.
   * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
   * @param {boolean} check_query_type - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
   * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
   * @param {boolean} generic_responses
   * @param {object} meta
   */
  function QuestionAnsweringNode(name, question) {
    var _this;
    var document_text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var check_ambiguity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var check_query_type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
    var generic_responses = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var meta = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
    _classCallCheck(this, QuestionAnsweringNode);
    var service = new _app.QuestionAnsweringService();
    var source = {
      message: question,
      // special handling, message is unclear so question is used
      check_ambiguity: check_ambiguity,
      check_query_type: check_query_type,
      generic_responses: generic_responses
    };
    if (document_text) source.document_text = document_text;
    if (document_ids) source.document_ids = document_ids;
    if (meta) source.meta = meta;
    return _possibleConstructorReturn(_this, _this = _super.call(this, name, service, source));
  }
  return _createClass(QuestionAnsweringNode);
}(_node.Node);
var _default = QuestionAnsweringNode;
exports["default"] = _default;