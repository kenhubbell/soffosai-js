import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {TranscriptCorrectionIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems.
 * It can handle cases where STT produced the wrong word or phrase by taking into account the 
 * surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
 * STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
 * @class
 * @alias SoffosServices.TranscriptCorrectionService
 */
class TranscriptCorrectionService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.TRANSCRIPTION_CORRECTION;
      super(service, kwargs);
      this._serviceio = new TranscriptCorrectionIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to be corrected.
     * @returns {Promise<Object>} 
     * correction - string<br>
     * Corrected text. <br>
     * @example
     * import { SoffosServices } from "soffosai";
     * 
     * const my_apiKey = "Token <put your api key here>";
     * const service = new SoffosServices.TranscriptCorrectionService({apiKey:my_apiKey});
     * let response = await service.call(
     *     "Client 87654321",
     *     " We just want to show people or services can't help them. Create amazing. Applications"
     * );
     * console.log(JSON.stringify(response, null, 2));
     * 
     * // returns
     * // {
     * //     "correction": "We just want to show people how our services can help them create amazing applications."
     * //     "cost": {
     * //         "api_call_cost": 0.005,
     * //         "character_volume_cost": 0.005,
     * //         "total_cost": 0.01
     * //       },
     * //       "charged_character_count": 100,
     * //       "unit_price": "0.000050"
     * // }
     */
    call(user, text) {
      let payload = {
        "user": user,
        "text": text,
      };
      return super.call(payload);
    }
}

export default TranscriptCorrectionService
