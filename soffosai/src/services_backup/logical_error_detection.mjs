import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {LogicalErrorDetectionIO} from '../../common/serviceio_fields/index.mjs';


/**
 * Identifies illogical statements in text and explains why they are illogical.
 * * @class
 * @alias SoffosServices.LogicalErrorDetectionService
 */
class LogicalErrorDetectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.LOGICAL_ERROR_DETECTION;
      super(service, kwargs);
      this._serviceio = new LogicalErrorDetectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Input text to analyze for logical errors.
     * @returns {Promise<Object>} 
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text
      };
      return super.call(payload);
    }
}

export default LogicalErrorDetectionService
