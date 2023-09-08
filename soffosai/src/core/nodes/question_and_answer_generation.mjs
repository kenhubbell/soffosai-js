import {Node} from "./node.mjs";
import {QuestionAndAnswerGenerationService} from "../../app.mjs";

/**
 * A service configuration for QuestionAndAnswerGenerationService for Pipeline use.
 * @class
 * @alias _SoffosNodes.QuestionAndAnswerGenerationNode
 */
class QuestionAndAnswerGenerationNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     * @param {number} [sentence_split=3]
     * @param {string} [sentence_overlap=false]
     */
    constructor(name, text, sentence_split=3, sentence_overlap=false) {
        let service = new QuestionAndAnswerGenerationService();
        let source = {
			text: text,
			sentence_split: sentence_split,
			sentence_overlap: sentence_overlap
        };
        
        return super(name, service, source);
    }
}

export default QuestionAndAnswerGenerationNode;