"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AmbiguityDetectionService", {
  enumerable: true,
  get: function get() {
    return _ambiguity_detection["default"];
  }
});
Object.defineProperty(exports, "AnswerScoringService", {
  enumerable: true,
  get: function get() {
    return _answer_scoring["default"];
  }
});
Object.defineProperty(exports, "ContradictionDetectionService", {
  enumerable: true,
  get: function get() {
    return _contradiction_detection["default"];
  }
});
Object.defineProperty(exports, "DocumentsDeleteService", {
  enumerable: true,
  get: function get() {
    return _documents.DocumentsDeleteService;
  }
});
Object.defineProperty(exports, "DocumentsIngestService", {
  enumerable: true,
  get: function get() {
    return _documents.DocumentsIngestService;
  }
});
Object.defineProperty(exports, "DocumentsSearchService", {
  enumerable: true,
  get: function get() {
    return _documents.DocumentsSearchService;
  }
});
Object.defineProperty(exports, "EmailAnalysisService", {
  enumerable: true,
  get: function get() {
    return _email_analysis["default"];
  }
});
Object.defineProperty(exports, "EmotionDetectionService", {
  enumerable: true,
  get: function get() {
    return _emotion_detection["default"];
  }
});
Object.defineProperty(exports, "FileConverterService", {
  enumerable: true,
  get: function get() {
    return _file_converter["default"];
  }
});
Object.defineProperty(exports, "LanguageDetectionService", {
  enumerable: true,
  get: function get() {
    return _language_detection["default"];
  }
});
Object.defineProperty(exports, "LetsDiscussCreateService", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussCreateService;
  }
});
Object.defineProperty(exports, "LetsDiscussDeleteService", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussDeleteService;
  }
});
Object.defineProperty(exports, "LetsDiscussRetrieveService", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussRetrieveService;
  }
});
Object.defineProperty(exports, "LetsDiscussService", {
  enumerable: true,
  get: function get() {
    return _lets_discuss.LetsDiscussService;
  }
});
Object.defineProperty(exports, "LogicalErrorDetectionService", {
  enumerable: true,
  get: function get() {
    return _logical_error_detection["default"];
  }
});
Object.defineProperty(exports, "MicrolessonService", {
  enumerable: true,
  get: function get() {
    return _microlesson["default"];
  }
});
Object.defineProperty(exports, "NamedEntityRecognitionService", {
  enumerable: true,
  get: function get() {
    return _named_entity_recognition["default"];
  }
});
Object.defineProperty(exports, "ParaphraseService", {
  enumerable: true,
  get: function get() {
    return _paraphrase["default"];
  }
});
Object.defineProperty(exports, "ProfanityService", {
  enumerable: true,
  get: function get() {
    return _profanity["default"];
  }
});
Object.defineProperty(exports, "QuestionAndAnswerGenerationService", {
  enumerable: true,
  get: function get() {
    return _qna_generation["default"];
  }
});
Object.defineProperty(exports, "QuestionAnsweringService", {
  enumerable: true,
  get: function get() {
    return _question_answering["default"];
  }
});
Object.defineProperty(exports, "ReviewTaggerService", {
  enumerable: true,
  get: function get() {
    return _review_tagger["default"];
  }
});
Object.defineProperty(exports, "SentimentAnalysisService", {
  enumerable: true,
  get: function get() {
    return _sentiment_analysis["default"];
  }
});
Object.defineProperty(exports, "SimplifyService", {
  enumerable: true,
  get: function get() {
    return _simplify["default"];
  }
});
Object.defineProperty(exports, "SoffosAIService", {
  enumerable: true,
  get: function get() {
    return _service.SoffosAIService;
  }
});
Object.defineProperty(exports, "SummarizationService", {
  enumerable: true,
  get: function get() {
    return _summarization["default"];
  }
});
Object.defineProperty(exports, "TableGeneratorService", {
  enumerable: true,
  get: function get() {
    return _table_generator["default"];
  }
});
Object.defineProperty(exports, "TagGenerationService", {
  enumerable: true,
  get: function get() {
    return _tag_generation["default"];
  }
});
Object.defineProperty(exports, "TranscriptCorrectionService", {
  enumerable: true,
  get: function get() {
    return _transcript_correction["default"];
  }
});
var _ambiguity_detection = _interopRequireDefault(require("./ambiguity_detection.js"));
var _answer_scoring = _interopRequireDefault(require("./answer_scoring.js"));
var _contradiction_detection = _interopRequireDefault(require("./contradiction_detection.js"));
var _documents = require("./documents.js");
var _email_analysis = _interopRequireDefault(require("./email_analysis.js"));
var _emotion_detection = _interopRequireDefault(require("./emotion_detection.js"));
var _file_converter = _interopRequireDefault(require("./file_converter.js"));
var _language_detection = _interopRequireDefault(require("./language_detection.js"));
var _lets_discuss = require("./lets_discuss.js");
var _logical_error_detection = _interopRequireDefault(require("./logical_error_detection.js"));
var _microlesson = _interopRequireDefault(require("./microlesson.js"));
var _named_entity_recognition = _interopRequireDefault(require("./named_entity_recognition.js"));
var _paraphrase = _interopRequireDefault(require("./paraphrase.js"));
var _profanity = _interopRequireDefault(require("./profanity.js"));
var _qna_generation = _interopRequireDefault(require("./qna_generation.js"));
var _question_answering = _interopRequireDefault(require("./question_answering.js"));
var _review_tagger = _interopRequireDefault(require("./review_tagger.js"));
var _sentiment_analysis = _interopRequireDefault(require("./sentiment_analysis.js"));
var _simplify = _interopRequireDefault(require("./simplify.js"));
var _summarization = _interopRequireDefault(require("./summarization.js"));
var _table_generator = _interopRequireDefault(require("./table_generator.js"));
var _tag_generation = _interopRequireDefault(require("./tag_generation.js"));
var _transcript_correction = _interopRequireDefault(require("./transcript_correction.js"));
var _service = require("./service.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }