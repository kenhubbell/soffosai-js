import { SoffosAIService } from './service.mjs';
import { ServiceString } from '../../common/constants.mjs';
import {TableGeneratorIO} from '../../common/serviceio_fields/index.mjs';


const TABLE_FORMATS = ['markdown', 'CSV'];

/**
 * The table generator module enables applications to extract numerical and statistical 
 * data from raw text in a tabular format. For use-cases where data has to be manually 
 * reviewed and cross-referenced, this module can bring enormous value.
 * @class
 * @alias SoffosServices.TableGeneratorService
 */
class TableGeneratorService extends SoffosAIService {
    constructor(kwargs = {}) {
      const service = ServiceString.TABLE_GENERATOR;
      super(service, kwargs);
      this._serviceio = new TableGeneratorIO();
    }
  
    /**
     * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
     * @param {string} text - Text to extract tables from.
     * @param {string} [table_format="markdown"] - A string indicating the table output format.
     * Formats supported:
     * @returns {Promise<Object>} 
     */
    call(user, text, table_format='markdown') {
      if (!TABLE_FORMATS.includes(table_format)){
        throw new Error(`${table_format} is not a supported format. Please choose from ${TABLE_FORMATS}.`)
      }
      let payload = {
        "user": user,
        "text": text,
        "table_format": table_format
      };
      return super.call(payload);
    }
}

export default TableGeneratorService
