import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {SimplifyIO} from '../../common/serviceio_fields/index.mjs';


/**
 * Paraphrase and Simplify are available as two different flavors of the same module. 
 * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
 * the Simplify module outputs more commonly used words without altering the meaning of the original text.
 * @class
 * @alias SoffosServices.SimplifyService
 */
class SimplifyService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.SIMPLIFY;
      super(service, kwargs);
      this._serviceio = new SimplifyIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be paraphrased/simplified.
     * @returns {Promise<Object>} 
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text,
      };
      return super.call(payload);
    }
}

export default SimplifyService
