import {Node} from "./node.mjs";
import {TranscriptCorrectionService} from "../../app.mjs";

/**
 * A service configuration for TranscriptCorrectionService for Pipeline use.
 * @class
 * @alias _SoffosNodes.TranscriptCorrectionIO
 */
class TranscriptCorrectionNode extends Node {

    /**
     * @param {string} name
     * @param {string} text
     */
    constructor(name, text) {
        let service = new TranscriptCorrectionService();
        let source = {
			text: text
        };
        
        return super(name, service, source);
    }
}

export default TranscriptCorrectionNode;