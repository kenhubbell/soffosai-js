import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {AmbiguityDetectionIO} from '../../common/serviceio_fields/index.mjs';


/**
 *  This module finds statements or sentences in text that are not coherent, or can be interpreted 
 * in multiple ways while also taking in account the surrounding context. For example, "The fisherman 
 * went to the bank" would be identified as ambiguous, but "The fisherman went to the bank to draw money" 
 * won't.

 * It accepts parameters to control the way the text is segmented for processing.

 * It gives an explanation as to why a span of text is considered ambiguous. Despite taking in account 
 * the context of each span, the module may sometimes be strict in what it considers ambiguous, even if 
 * the combination of words mean something very specific most of the time.

 * A very fascinating tool for writers that can be used to inspire, write more understandable content, 
 * or even to just delve into the remarkable nuances and complexities hidden in human language and thought
 * @class
 * @alias SoffosServices.AmbiguityDetectionService
*/
class AmbiguityDetectionService extends SoffosAIService {
    
    constructor(kwargs = {}) {
      const service = ServiceString.AMBIGUITY_DETECTION;
      super(service, kwargs);
      this._serviceio = new AmbiguityDetectionIO();
    }
  
    /**
     * @param {string} user                     - The ID of the user accessing the Soffos API.  
     *                                            Soffos assumes that the owner of
     *                                            the api is an application (app) and that app has users. 
     *                                            Soffos API will accept any string.
     * @param {string} text                     - Text to be analyzed for ambiguitites.
     * @param {number} [sentence_split=4]       - The number of sentences of each chunk when splitting the input text.
     * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence. 
     *                                            For example, with sentence_split=3 and sentence_overlap=true : <br>
     *                                            [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @returns {Promise<Object>}
     */
    call(user, text, sentence_split = 4, sentence_overlap = false) {
      let payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap
      };
      return super.call(payload);
    }
}

export default AmbiguityDetectionService