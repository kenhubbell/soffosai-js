import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {TagGenerationIO} from '../../common/serviceio_fields/index.mjs';


/**
 * This module can generate tags for a piece of text that can aid with content search in
 * certain use-cases. It allows to specify a number of tags to be generated for each of 
 * the categories "topic", "domain", "audience", "entity".
 * @class
 * @alias SoffosServices.TagGenerationService
 */
class TagGenerationService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.TAG_GENERATION;
      super(service, kwargs);
      this._serviceio = new TagGenerationIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to extract keywords from.
     * @param {Array.<string>} [types=["topic"]] - List of types of keywords to extract. Supported types:
     * topic: Tags relating to the subject matter of the text.
     * domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". In some cases, domain tags might be similar to topic tags.
     * audience: Tags relating to the type of audience the text is intended for.
     * entity: Entities such as people, places, products, etc. mentioned in the text.
     * @param {number} [n=10] - The number of tags to be generated for each of the specified tag types.
     * @returns {Promise<Object>} 
     */
    call(user, text, types=["topic"], n=10) {
        /*
            Note: List of types of keywords to extract. Supported types:

            topic: Tags relating to the subject matter of the text. 
            domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". 
                In some cases, domain tags might be similar to topic tags. 
            audience: Tags relating to the type of audience the text is intended for. 
            entity: Entities such as people, places, products, etc. mentioned in the text.
        */
        for (let i = 0; i < types.length; i++) {
            let _type = types[i];
            if (!["topic", "domain", "audience", "entity"].includes(_type)) {
                throw new Error(`${this._service} types argument's elements can only be "topic", "domain", "audience" and/or "entity".`);
            }
        }
      let payload = {
        "user": user,
        "text": text,
        "types": types,
        "n": n
      };
      return super.call(payload);
    }
}

export default TagGenerationService
