import { SoffosPipelines, SoffosServices, SoffosNodes } from "./src/app.mjs";

declare module 'soffosai' {
    export const apiKey: string;
    export const ServiceString: string;

    /**
     *  A SoffosAIService that finds statements or sentences in text that are not coherent,
     *  or can be interpreted in multiple ways while also taking in account the surrounding context.
     */
    export class AmbiguityDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?: number, sentence_overlap?: boolean): Promise<object>;
    }

    /** 
     * This module will provide the user an answer based on the provided context, 
     * the question and, optionally, the expected correct answer..
    */
    export class AnswerScoringService {
        constructor(kwargs?: {});
        call(user: string, context:string, question:string, user_answer:string, answer?:string): Promise<object>;
    }

    /**
     * This module finds conflicting information in a body of text and returns a 
     * description of the contradiction along with the relevant sentences and their 
     * offsets within the original text.
     */
    export class ContradictionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The Documents Ingest module enables ingestion of content into Soffos.
     * Takes in the text and gives the document_id to reference the text in Soffos database.
     */
    export class DocumentsIngestService {
        constructor(kwargs?: {});
        call(user: string, document_name:string, text?:string, tagged_elements?:Array<string>, meta?:object): Promise<object>;
    }

    /**
     * The Documents module enables search of ingested contents from Soffos.
     */
    export class DocumentsSearchService {
        constructor(kwargs?: {});
        call(user: string, query?:object, filters?:object, document_ids?:Array<string>, top_n_keywords?:number,
            top_n_natural_language?:number, date_from?:string, date_until?:string): Promise<object>;
    }

    /**
     * The Documents module enables deletion of ingested contents from Soffos.
     */
    export class DocumentsDeleteService {
        constructor(kwargs?: {});
        call(user: string, text: string, document_ids:Array<string>): Promise<object>;
    }

    /**
     * This module extracts key information from the body of an e-mail.
     */
     export class EmailAnalysisService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * Detect selected emotions within the provided text. The original text is chunked to
     * passages of a specified sentence length. Smaller chunks yield better accuracy.
     */
    export class EmotionDetectionService {
        constructor(kwargs?: {});
        call(user: string, text:string, sentence_split?:number, sentence_overlap?:boolean, emotion_choices?:string[]): Promise<object>;
    }

    /**
     * The File Converter extracts text from various types of files.
     */
    export class FileConverterService {
        constructor(kwargs?: {});
        call(user: string, file:Blob, normalize?:number): Promise<object>;
    }

    /**
     * The Language Detection module detects the dominant language in the provided text.
     */
    export class LanguageDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for creating a session.
     */
    export class LetsDiscussCreateService {
        constructor(kwargs?: {});
        call(user: string, context: string): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss main service, continues thread of conversation.
     */
    export class LetsDiscussService {
        constructor(kwargs?: {});
        call(user: string, session_id:string, query:string): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for retrieving sessions.
     */
    export class LetsDiscussRetrieveService {
        constructor(kwargs?: {});
        call(user: string, return_messages:boolean): Promise<object>;
    }

    /**
     * The Let's Discuss module allows the user to have a conversation with the AI about the content 
     * provided by the user. The main difference between this module and the Question Answering module 
     * is that Let's Discuss keeps a history of the interactions.
     * 
     * LetsDiscuss service to be used for deleting sessions.
     */
    export class LetsDiscussDeleteService {
        constructor(kwargs?: {});
        call(user: string, session_ids: string[]): Promise<object>;
    }

    /**
     * Identifies illogical statements in text and explains why they are illogical.
     */
    export class LogicalErrorDetectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * Identifies illogical statements in text and explains why they are illogical.
     */
    export class MicrolessonService {
        constructor(kwargs?: {});
        call(user: string, content: object[]): Promise<object>;
        add_content(source: string, context: string): null;
    }

    /**
     * Identifies named entities in text. It supports custom labels.
     * This module is extremely versatile as the labels can be defined by the user.
     */
    export class NamedEntityRecognitionService {
        constructor(kwargs?: {});
        call(user: string, text: string, labels:object): Promise<object>;
        /**
         * Adds a TAG label and its description so that Soffos AI can identify the entities matching the tag
         * @param {string} label - The identifier of the label
         * @param {string} definition - The definition of the label
         */
        add_label(label:string, definition:string): null;
    }

    /**
     * Paraphrase and Simplify are available as two different flavors of the same module. 
     * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
     * the Simplify module outputs more commonly used words without altering the meaning of the original text. 
     */
    export class ParaphraseService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * This module detects profanities and the level of offensiveness in a body of text. 
     */
    export class ProfanityService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The Q&A Generation module splits large documents in chunks from which it generates multiple 
     * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
     * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
     * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
     * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
     * This gives a lot of flexibility to cater to your specific use case.
     */
    export class QuestionAndAnswerGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
    }

    /**
     * This module is a combination of various sub-modules that enable users to get accurate answers on 
     * questions posed on a large amount of content. It includes basic intent recognition capabilities 
     * to enable appropriate responses to incorrect or profane language, or typical personal questions 
     * like "How are you?" and greetings
     */
    export class QuestionAnsweringService {
        constructor(kwargs?: {});
        call(user: string, question:string, document_text?:string, document_ids?:string[], 
            check_ambiguity?:boolean, check_query_type?:boolean, generic_response?:boolean, meta?:object): Promise<object>;
    }

    /**
     * This module extracts key information from negative product reviews. It attempts to find
     * the referred object, it's fault and an action/verb that is associated with it. If any 
     * of the information is not present, it returns "n/a". This is useful for organizations who 
     * want to analyze product reviews in order to identify and prioritize the most important issues.
     */
    export class ReviewTaggerService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * This module processes the text to measure whether it is negative, positive or neutral.
     * The text is processed in segments of user-defined length and it provides scores for each 
     * segment as well as the overall score of the whole text.
     */
    export class SentimentAnalysisService {
        constructor(kwargs?: {});
        call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
    }

    /**
     * Paraphrase and Simplify are available as two different flavors of the same module. 
     * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
     * the Simplify module outputs more commonly used words without altering the meaning of the original text.
     */
    export class SimplifyService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * The summarization module utilizes Natural Language Generation (NLG) to generate an 
     * abstractive summary of a specified length. In contrast to extractive summarization methods, 
     * which simply calculate the centrality of sentences or passages in the original text and 
     * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
     * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
     * but a combination of all key points formulated as a new text.
     */
    export class SummarizationService {
        constructor(kwargs?: {});
        call(user: string, text: string, sent_length:number): Promise<object>;
    }

    /**
     * The table generator module enables applications to extract numerical and statistical 
     * data from raw text in a tabular format. For use-cases where data has to be manually 
     * reviewed and cross-referenced, this module can bring enormous value.
     */
    export class TableGeneratorService {
        constructor(kwargs?: {});
        call(user: string, text: string, table_format?:string): Promise<object>;
    }

    /**
     * This module can generate tags for a piece of text that can aid with content search in
     * certain use-cases. It allows to specify a number of tags to be generated for each of 
     * the categories "topic", "domain", "audience", "entity".
     */
    export class TagGenerationService {
        constructor(kwargs?: {});
        call(user: string, text: string, types?:string[], n?:number): Promise<object>;
    }

    /**
     * This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems.
     * It can handle cases where STT produced the wrong word or phrase by taking into account the 
     * surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
     * STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
     */
    export class TranscriptCorrectionService {
        constructor(kwargs?: {});
        call(user: string, text: string): Promise<object>;
    }

    /**
     * A controller for consuming multiple Services called stages.
     * It validates all inputs of all stages before sending the first Soffos API request to ensure
     * that the Pipeline will not waste credits.
     * 
     * ** use_defaults=True means that stages will take input from the previous stages' 
     * output of the same field name prioritizing the latest stage's output. 
     * If the previous stages does not have it, it will take from the
     * pipeline's user_input.  Also, the stages will only be supplied with the required fields + default
     * of the require_one_of_choices fields.
     */
    export class SoffosPipeline {
        /**
         * @param {object[]} nodes 
         * @param {boolean} [use_defaults=false] 
         * @param {Object} [kwargs={}]
         */
        constructor (nodes:object, use_defaults?:boolean, kwargs?:object);

        /**
         * Run the Pipeline
         * @param {object} user_input 
         * @returns {Promise}
         */
        run(user_input:object): Promise<object>;

        /**
         * Validates the Pipeline construction vs the user_input before sending the first API call
         * Throws errors when not valid.
         * @param {object} user_input 
         * @param {Node} stages 
         * @returns {boolean}
         */
        validate_pipeline(user_input:object, stages:Node[]): boolean;

        /**
         * Adds a node at the end of the node list/stages.
         * @param {Node} node 
         */
        add_node(node:Node): null;

        /**
         * 
         * @param {Node[]} stages
         * @param {object} user_input
         * @returns {Node[]}
         */
        setDefaults(stages:Node[], user_input:object): Node[];
    }

/*/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////// */

    export namespace SoffosServices {
        /**
         *  A SoffosAIService that finds statements or sentences in text that are not coherent,
         *  or can be interpreted in multiple ways while also taking in account the surrounding context.
         */
        export class AmbiguityDetectionService {
            constructor(kwargs?: {});
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
                 * @example
                 * import { SoffosServices } from "soffosai";
                 * 
                 * const service = new SoffosServices.AmbiguityDetectionService({apiKey: my_apiKey});
                 * let output = await service.call("Client1234567","I saw the signs");
                 * console.log(JSON.stringify(output, null, 2));
                 * 
                 * // returns {
                 * // "ambiguities": [
                 * //   {
                 * //     "text": "I saw the signs",
                 * //     "span_start": 0,
                 * //     "spane_end": 15,
                 * //     "reason": "It is unclear if the signs refer to literal signs or figurative signs."
                 * //   }
                 * // ],
                 * // "cost": {
                 * //     "api_call_cost": 0.005,
                 * //     "character_volume_cost": 0.005,
                 * //     "total_cost": 0.01
                 * // },
                 * // "charged_character_count": 100,
                 * // "unit_price": "0.000050"
                 * //}
                 */
            call(user: string, text: string, sentence_split?: number, sentence_overlap?: boolean): Promise<object>;
        }

        /** 
         * This module will provide the user an answer based on the provided context, 
         * the question and, optionally, the expected correct answer..
        */
        export class AnswerScoringService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             *                        the api is an application (app) and that app has users. Soffos API will accept 
             *                        any string.
             * @param {string} context -  This should be the passage with the information that is related to the 
             *                            question and answer.
             * @param {string} question - The question to answer.
             * @param {string} user_answer - The user's answer which will be marked.
             * @param {string} [answer] - Optionally provide the expected answer.
             * @returns {Promise<Object>}
             * score - float <br>
             * A value between 0 and 1 indicating the correctness of the answer.<br>
             * reasoning string - A concise explanation of how the AI arrived to the predicted score. <br>
             * @example
             * import { SoffosServices } from "soffosai";
             * let service = new SoffosServices.AnswerScoringService({apiKey: my_apiKey});
             * let output = await service.call(
             * "client_id",
             * "Genetic evidence suggests that dogs descended directly from wolves (Canis) and that the now-extinct wolf lineages that produced dogs branched off from the line that produced modern living wolves sometime between 27,000 and 40,000 years ago. The timing and location of dog domestication is a matter of debate. There is strong genetic evidence, however, that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
             * "How long ago did dogs first become domesticated?",
             * "around 20,000 years ago.",
             * "Between 14,000 and 29,000 years ago."
             * );
             * console.log(JSON.stringify(output, null, 2));
             * // returns
             * //{
             * // "score": 0.8,
             * // "reasoning": "The user's answer is close to the correct answer, but not exact. The correct answer is between 14,000 and 29,000 years ago, while the user's answer is around 20,000 years ago. Although the user's answer falls within the correct range, it is not as precise as the correct answer.",
             * // "cost": {
             * //   "api_call_cost": 0.005,
             * //   "character_volume_cost": 0.02855,
             * // "total_cost": 0.03355
             * // },
             * // "charged_character_count": 571,
             * // "unit_price": "0.000050"
             * //}
             */
            call(user: string, context:string, question:string, user_answer:string, answer?:string): Promise<object>;
        }

        /**
         * This module finds conflicting information in a body of text and returns a 
         * description of the contradiction along with the relevant sentences and their 
         * offsets within the original text.
         */
        export class ContradictionDetectionService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to be analyzed for contradictions.
             * @returns {Promise<Object>} 
             * contradictions - dictionary list<br>
             * A list of dictionaries representing detected contradictions. Each dictionary contains the following fields: <br>
             * contradiction: A description of the contradiction.<br>
             * sentences: A list of sentences related to the contradiction. Each sentence is a dictionary with the sentence's text, starting offset and ending offset within the original text.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.ContradictionDetectionService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client 1234567",
             *     "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.\
             *     Pakistan has said that it performed several tests of its 2300 km-range Shaheen-2 missile in \
             *      September 2004."
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "contradictions": [
             * //       {
             * //         "contradiction": "The source noted that the Shaheen-2 has never been tested by Pakistan, but Pakistan has said that it performed several tests of its Shaheen-2 missile.",
             * //         "sentences": [
             * //           {
             * //             "text": "The source noted that the Shaheen-2, with a range of 2400 km, has never been tested by Pakistan.",      
             * //             "span_start": 0,
             * //             "span_end": 96
             * //           }
             * //         ]
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.0106,
             * //       "total_cost": 0.0156
             * //     },
             * //     "charged_character_count": 212,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The Documents Ingest module enables ingestion of content into Soffos.
         * Takes in the text and gives the document_id to reference the text in Soffos database.
         */
        export class DocumentsIngestService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} document_name - The name of the document.
             * @param {string} [text] - Required when tagged_elements is not provided. 
             * Only one of text and tagged_elements can be provided.
             * The text content of the document.
             * @param {object} [tagged_elements] - Required when text is not provided. Only one of text and tagged_elements can be provided.
             * A list of dictionaries representing tagged spans of 
             * text extracted from a document file. This field accepts the value of the tagged_elements or 
             * normalized_tagged_elements field from the output of the File Converter module.
             * Therefore, it requires each element to contain the text and tag fields and any non-heading 
             * element to contain a headings field which is also a list of dictionaries where each dictionary 
             * should contain the fields text and tag.
             * @param {object} [meta] - A dictionary containing metadata fields for tagging the document. 
             * The keys should be string and the values can be any type, such as string, integer, boolean etc. 
             * This allows document filtering based on the meta fields. Due to name being a mandatory field 
             * provided independently, if a name field is included in meta it will be ignored.
             * @returns {Promise<Object>} 
             * document_id - string <br>
             * The unique id of the ingested document. It's crucial to store the document_id in order 
             * to be able to reference this document later on when calling other modules.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * 
             * const service = new SoffosServices.DocumentsIngestService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client 987654321",
             *     'dogs',
             *     "Genetic evidence suggests that dogs descended directly from wolves (Canis) and \
             *     that the now-extinct wolf lineages that produced dogs branched off from the line \
             *     that produced modern living wolves sometime between 27,000 and 40,000 years ago. \
             *     The timing and location of dog domestication is a matter of debate. \
             *     There is strong genetic evidence, however, that the first domestication events occurred \
             *     somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "document_id": "0d059b3bf66b4ecfa124c175a6d3cd45",
             * //     "success": true,
             * //     "filtered": {
             * //       "passages": [],
             * //       "reason": "Unable to process due to bad structure."
             * //     },
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.02415,
             * //       "total_cost": 0.02915
             * //     },
             * //     "charged_character_count": 483,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, document_name:string, text?:string, tagged_elements?:Array<string>, meta?:object): Promise<object>;
        }

        /**
         * The Documents module enables search of ingested contents from Soffos.
         */
        export class DocumentsSearchService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {object} [query]
             * Required when top_n_natural_language is set above 0.
             * The text to be used to match passages from ingested documents. 
             * This could be anything from a very specific natural language question to a simple cobination 
             * of words for keyword search. It can also be set as null for only-filtering searches.
             * @param {object} [filters] - The filters field can be used to narrow down the search to only 
             * the documents meeting certain metadata-based criteria, or even returning all the filtered 
             * documents when query is left null. It is catering only for the metadata provided in the meta 
             * field when ingesting a document. Other important filters such as document_ids, date_from and 
             * date_until are provided as top level fields.
             * Filters are defined as nested dictionaries. 
             * The keys of the dictionaries can be a logical operator ("$and", "$or", "$not"), a comparison 
             * operator ("$eq", "$in", "$gt", "$gte", "$lt", "$lte") or a metadata field name. 
             * Logical operator keys have a dictionary of metadata field names and/or logical operators as 
             * their value. Metadata field names have a dictionary of comparison operators as their value. 
             * Comparison operator keys accept a single values or lists as their values. 
             * Lists can be compared with the with the "$in" operator against single values, or with 
             * the "$eq" operator against other lists in which case the set of values of each list 
             * is compared and order does not matter. If no logical operator is given, "$and" is used as 
             * the default operation. If no comparison operator is specified, "$eq" 
             * (or "$in" if the comparison value is a list) is used as the default operation.
             * @param {Array.<string>} [document_ids] - Passing document IDs will confine the search to those documents.
             * @param {number} [top_n_keywords] - The number of document passages to be retrieved using 
             * keyword search. The relevancy is calculated algorithmically based on the frequency of the 
             * query words in the ingested passages. Setting this to 0 disables the keyword search. 
             * When query is left null while top_n_keywords is larger than 0, it will simply filter 
             * the documents based on the rest of the fields like date or metadata. All matched passages will 
             * be returned, therefore the actual value of top_n_keywords does not make a difference, 
             * so long it is larger than 0.
             * @param {number} [top_n_natural_language] - The number of document passages to be retrieved 
             * using Machine Learning-based semantic search. Setting this to 0 disables the semantic search.
             * @param {string} [date_from] - Filters passages to those ingested at or after the specified ISO-8601 formatted date.
             * @param {string} [date_until] - Filters passages to those ingested before the specified ISO-8601 formatted date.
             * @returns {Promise<Object>} 
             * passages - dictionary list
             * List of passages. Each passage contains the following data:
             * content: The raw text of the passage.
             * document_id: Origin document's ID.
             * created_at: Ingestion datetime.
             * name: Origin document's name.
             * scores: Dictionary containing the matching score of this passage to the query for each method that matched it.
             * meta: Dictionary with the metadata that were provided when the passage's origin document was ingested.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.DocumentsSearchService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client 987654321", null, null, ["0d059b3bf66b4ecfa124c175a6d3cd45"]
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns this if document_id exists and you own the document
             * // {
             * //     "passages": [
             * //       {
             * //         "content": "Genetic evidence suggests that dogs descended directly from wolves (Canis) and     that the now-extinct wolf lineages that produced dogs branched off from the line     that produced modern living wolves sometime between 27,000 and 40,000 years ago. The timing and location of dog domestication is a matter of debate. There is strong genetic evidence, 
             * //   however, that the first domestication events occurred     somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
             * //         "created_at": "2023-09-13T09:38:00.807895",
             * //         "document_id": "0d059b3bf66b4ecfa124c175a6d3cd45",
             * //         "name": "dogs",
             * //         "scores": [
             * //           {
             * //             "keyword": 0.5312093733737563
             * //           }
             * //         ],
             * //         "meta": {}
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0,
             * //       "character_volume_cost": 0,
             * //       "total_cost": 0
             * //     },
             * //     "charged_character_count": 0,
             * //     "unit_price": "0.000000"
             * // }
             */
            call(user: string, query?:object, filters?:object, document_ids?:Array<string>, top_n_keywords?:number,
                top_n_natural_language?:number, date_from?:string, date_until?:string): Promise<object>;
        }

        /**
         * The Documents module enables deletion of ingested contents from Soffos.
         */
        export class DocumentsDeleteService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {Array.<string>} document_ids - A list of the document_ids of the documents to be deleted.
             * @returns {Promise<Object>} 
             * success = true if operation succeded
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.DocumentsDeleteService({apiKey:my_apiKey});
             * let  response = await service.call('client 987654321', ["0d059b3bf66b4ecfa124c175a6d3cd45"]);
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns this if document_id exists and you own the document
             * // {
             * //     "success": true
             * // }
             */
            call(user: string, text: string, document_ids:Array<string>): Promise<object>;
        }

        /**
         * This module extracts key information from the body of an e-mail.
         */
        export class EmailAnalysisService {
            constructor(kwargs?: {});
            call(user: string, text: string): Promise<object>;
        }

        /**
         * Detect selected emotions within the provided text. The original text is chunked to
         * passages of a specified sentence length. Smaller chunks yield better accuracy.
         */
        export class EmotionDetectionService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to detect emotions from.
             * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
             * @param {number} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
             * For example, with sentence_split 3 and sentence_overlap=true :
             * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
             * @param {Array.<string>} [emotion_choices] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
             * @returns {Promise<Object>} 
             * spans - dictionary list<br>
             * A list of spans resulting from the specified chunking parameters. Each span contains the following fields: <br>
             * text: The text of the span.<br>
             * detected_emotions: A list of the emotions detected for the specific span.<br>
             * span_start: The starting character index of the span in the original input text.<br>
             * span_end: The ending character index of the span in the original input text.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.EmotionDetectionService({apiKey:my_apiKey});
             * let response = await service.call("client_a_happy_one", "I am excited about my birthday!");
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "spans": [
             * //       {
             * //         "detected_emotions": [
             * //           "joy"
             * //         ],
             * //         "text": "I am excited about my birthday!",
             * //         "span_start": 0,
             * //         "span_end": 31
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.005,
             * //       "total_cost": 0.01
             * //     },
             * //     "charged_character_count": 100,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text:string, sentence_split?:number, sentence_overlap?:boolean, emotion_choices?:string[]): Promise<object>;
        }

        /**
         * The File Converter extracts text from various types of files.
         */
        export class FileConverterService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {Blob} file - The byte stream of the file. The file should not exceed 50Mb in size.
             * @param {number} [normalize=0] - Whether to perform normalization.
             * @returns {Promise<Object>}
             * text - string<br>
             * Raw text extracted from the document. <br>
             *  <br>
             * tagged_elements dictionary list     * A list of dictionaries of all the extracted text snippets and their tags. Each dictionary has the following fields: <br>
             * text: The text of the snippet.<br>
             * tag: A tag. Detectable elements: paragraph, heading, bullet_list, table_of_contents.<br>
             * headings: A list of dictionaries representing the headings which this element is under. Each dictionary contains the text and tag fields of each heading. This is useful for sorting and labelling the content.<br>
             * Other element-specific fields: <br>
             * bullets: Available only bullet_list elements. Contains all bullets and their sub-bullets in a nested structure.<br>
             * contents: Available only in table_of_content elements. Contains the headings and sub-headings of the document's table of contents.<br>
             * heading: Available only in table_of_content elements. It is the heading of the document's table of contents.<br>
             *  <br>
             * normalized_text string<br>
             * Resulting text after normalization. <br>
             *  <br>
             * normalized_tagged_elements dictionary list<br>
             * Similar to the standard tagged_elements. Detectable elements: paragraph, heading, bullet_list, quote.<br>
             * @example
             * // needs React.js or other frontend js library or framework
             */
            call(user: string, file:Blob, normalize?:number): Promise<object>;
        }

        /**
         * The Language Detection module detects the dominant language in the provided text.
         */
        export class LanguageDetectionService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to be classified under a language.
             * @returns {Promise<Object>} 
             * language - string<br>
             * The language code of the detected language. <br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.LanguageDetectionService({apiKey:my_apiKey});
             * let response = await service.call("me again", "空港はどこですか");
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "language": "ja",
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.005,
             * //       "total_cost": 0.01
             * //     },
             * //     "charged_character_count": 100,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss service to be used for creating a session.
         */
        export class LetsDiscussCreateService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} context - The content to discuss about.
             * @returns {Promise<Object>} 
             * session_id - string
             * The unique id of the conversation session. It's crucial to store the session_id in order to make queries.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.LetsDiscussCreateService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "me again",
             *     "The James Webb Space Telescope is the largest, most powerful space telescope ever built. \
             *     It will allow scientists to look at what our universe was like about 200 million years \
             *     after the Big Bang. The telescope will be able to capture images of some of the first \
             *     galaxies ever formed. It will also be able to observe objects in our solar system from \
             *     Mars outward, look inside dust clouds to see where new stars and planets are forming \
             *     and examine the atmospheres of planets orbiting other stars."
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns the session id of the conversation
             * // {
             * //     "session_id": "b658686f8b834b3f86d5218a4549e1c4"
             * // }
             */
            call(user: string, context: string): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss main service, continues thread of conversation.
         */
        export class LetsDiscussService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} session_id - The ID of the session provided by the /create/ endpoint.
             * @param {string} query - User's message.
             * @returns {Promise<Object>} 
             * response - string <br>
             * Module's response to the user's query. <br>
             * context - string <br>
             * The context discussed about provided by the user during session creation. <br>
             * messages -  dictionary list <br>
             * A list of dictionaries representing all the messages exchanged between the user and the system for the specific session. The messages are sorted in chronological order. <br>
             * Each dictionary contains the following fields: text: The message. source: The source of the message, which is either the user or Soffos.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.LetsDiscussService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "me again",
             *     "b658686f8b834b3f86d5218a4549e1c4",
             *     "What is the purpose of observing this?"
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "response": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
             * //   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
             * //     "context": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.     It will allow scientists to look at what our universe was like about 200 million years     after the Big Bang. The telescope will be able to capture images of some of the first     galaxies ever formed. It will also be able to observe objects in our solar system from     Mars outward, look inside dust clouds to see where new stars and planets are forming     and examine the atmospheres of planets orbiting other stars.",
             * //     "messages": [
             * //       {
             * //         "text": "Where can I see the photos taken by this telescope?",
             * //         "source": "user"
             * //       },
             * //       {
             * //         "text": "The photos taken by the James Webb Space Telescope will be available to the public on the official website of the telescope.",
             * //         "source": "soffos"
             * //       },
             * //       {
             * //         "text": "What is the purpose of observing this?",
             * //         "source": "user"
             * //       },
             * //       {
             * //         "text": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
             * //   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
             * //         "source": "soffos"
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.07085,
             * //       "total_cost": 0.07585
             * //     },
             * //     "charged_character_count": 1417,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, session_id:string, query:string): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss service to be used for retrieving sessions.
         */
        export class LetsDiscussRetrieveService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {boolean} return_messages - When set to true, in addition to returning 
             * all the session records, it will also return all the messages associated with each session.
             * @returns {Promise<Object>} 
             * sessions - dictionary list <br>
             * List of sessions. Each session contains the following data: <br>
             * context: The content discussed in the session. <br>
             * session_id: Session's ID. <br>
             * messages: If return_messages is true, this list will contain a list of dictionaries representing the interactions between the system and the user. Each dictionary contains the user's query, the system's response and the interaction's ID as message_id, which is an integer indicating their order.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.LetsDiscussRetrieveService({apiKey:my_apiKey});
             * let response = await service.call('me again', true);
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "sessions": [
             * //       {
             * //         "context": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.     It will allow scientists to look at what our universe was like about 200 million years     after the Big Bang. The telescope will be able to capture images of some of the first     galaxies ever formed. It will also be able to observe objects in our solar system from     Mars outward, look inside dust clouds to see where new stars and planets are forming     and examine the atmospheres of planets orbiting other stars.",
             * //         "session_id": "b658686f8b834b3f86d5218a4549e1c4",
             * //         "messages": [
             * //           {
             * //             "query": "Where can I see the photos taken by this telescope?",
             * //             "response": "The photos taken by the James Webb Space Telescope will be available to the public on the official website of the telescope.",
             * //             "message_id": 0
             * //           },
             * //           {
             * //             "query": "What is the purpose of observing this?",
             * //             "response": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",
             * //             "message_id": 1
             * //           }
             * //         ]
             * //       }
             * //     ],
             * //     "session_count": 1
             * // }
             */
            call(user: string, return_messages:boolean): Promise<object>;
        }

        /**
         * The Let's Discuss module allows the user to have a conversation with the AI about the content 
         * provided by the user. The main difference between this module and the Question Answering module 
         * is that Let's Discuss keeps a history of the interactions.
         * 
         * LetsDiscuss service to be used for deleting sessions.
         */
        export class LetsDiscussDeleteService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {Array.<string>} session_ids - A list with the IDs of the sessions to be deleted.
             * @returns {Promise<Object>} 
             * success - boolean <br>
             * Indicates whether the sessions have been successfuly deleted.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.LetsDiscussDeleteService({apiKey:my_apiKey});
             * let response = await service.call('me again', ["b658686f8b834b3f86d5218a4549e1c4"]);
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "success": true
             * // }
             */
            call(user: string, session_ids: string[]): Promise<object>;
        }

        /**
         * Identifies illogical statements in text and explains why they are illogical.
         */
        export class LogicalErrorDetectionService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Input text to analyze for logical errors.
             * @returns {Promise<Object>} 
             * logical_errors - dictionary list<br>
             * A list of dictionaries representing detected logical errors. Each dictionary contains the following fields: <br>
             * text: The illogical text.<br>
             * start: Starting character index in the original text.<br>
             * end: Ending chracter index in the original text.<br>
             * explanation: The reasoning behind why the text span is illogical.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.LogicalErrorDetectionService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client12345",
             *     "Nobody has found evidence that UFOs don't exist, therefore they must exist. \
             *     Many people are saying that voter fraud is real, therefore it must be real."
             * )
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "logical_errors": [
             * //       {
             * //         "text": "Nobody has found evidence that UFOs don't exist, therefore they must exist.",
             * //         "start": 0,
             * //         "end": 75,
             * //         "explanation": "This sentence is not logical because the lack of evidence does not necessarily mean that something must exist. The absence of evidence does not prove the existence of something."
             * //       },
             * //       {
             * //         "text": "Many people are saying that voter fraud is real, therefore it must be real.",
             * //         "start": 80,
             * //         "end": 155,
             * //         "explanation": "This sentence is not logical because it assumes that the truth of a statement is determined by the number of people who believe it, which is not necessarily the case."
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.01715,
             * //       "total_cost": 0.02215
             * //     },
             * //     "charged_character_count": 343,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string): Promise<object>;
        }

        /**
         * Identifies illogical statements in text and explains why they are illogical.
         */
        export class MicrolessonService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {Array.<object>} content - A list of dictionaries. Each dictionary should contain the source and text fields, where source is the name of the document/article/website/etc. and text is the actual content. Providing the source names enables the microlesson to include the source for the key points extracted from the content.
             * @returns {Promise<Object>} 
             * microlesson - string<br>
             * A concise, structured microlesson containing a summary, key points, learning objectives and tasks. <br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.MicrolessonService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client1234567",
             *     [
             *         {
             *             "source": "Telescope.docx",
             *             "text": "The James Webb Space Telescope is the largest, most powerful \
             *             space telescope ever built. It will allow scientists to look at what our \
             *             universe was like about 200 million years after the Big Bang. The telescope \
             *             will be able to capture images of some of the first galaxies ever formed. \
             *             It will also be able to observe objects in our solar system from Mars outward, \
             *             look inside dust clouds to see where new stars and planets are forming and \
             *             examine the atmospheres of planets orbiting other stars."
             *         },
             *         {
             *             "source": "dogs.docx",
             *             "text": "Genetic evidence suggests that dogs descended directly from wolves (Canis) \
             *             and that the now-extinct wolf lineages that produced dogs branched off from the \
             *             line that produced modern living wolves sometime between 27,000 and 40,000 years ago. \
             *             The timing and location of dog domestication is a matter of debate. \
             *             There is strong genetic evidence, however, that the first domestication events \
             *             occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
             *         }
             *     ]
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "microlesson": {
             * //       "summary": "The James Webb Space Telescope is the largest, most powerful space telescope ever built and will allow scientists to observe objects in our solar system from Mars outward. Genetic evidence suggests that dogs descended directly from wolves and that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
             * //       "key_points": [
             * //         {
             * //           "key_point": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.",
             * //           "source": "Telescope.docx"
             * //         },
             * //         {
             * //           "key_point": "Dogs descended directly from wolves  and the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago (dogs.docx)..",
             * //           "source": "Canis"
             * //         }
             * //       ],
             * //       "learning_objectives": [
             * //         "Understand the capabilities of the James Webb Space Telescope.",
             * //         "Understand the history of dog domestication."
             * //       ],
             * //       "tasks": [
             * //         "Research the James Webb Space Telescope and list its capabilities.",
             * //         "Research the history of dog domestication and list the key points."
             * //       ]
             * //     },
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.049,
             * //       "total_cost": 0.054
             * //     },
             * //     "charged_character_count": 980,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, content: object[]): Promise<object>;
            /**
             * @param {string} source 
             * @param {string} text 
             */
            add_content(source: string, text: string): null;
        }

        /**
         * Identifies named entities in text. It supports custom labels.
         * This module is extremely versatile as the labels can be defined by the user.
         */
        export class NamedEntityRecognitionService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Input text to be analyzed for named entities.
             * @param {Object.<string, string>} labels - When providing labels, the module will extract entities that match your labels and descriptions. This gives enough flexibility to deal with any use-case.
             * @returns {Promise<Object>}
             * named_entities - dictionary list<br>
             * A list of dictionaries representing identified named entities. Each dictionary contains the following fields: <br>
             * text: The text of the entity.<br>
             * tag: Label of the entity.<br>
             * span: A list with the start and end offset of the entity in the original text.<br>
             * entity_counts - dictionary list<br>
             * A list of dictionaries with entities and their counts. The dictionaries contain the following fields: <br>
             * text: The name of the entity.<br>
             * tag: Label of the entity.<br>
             * count: Number of occurrences of the entity in the text.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.NamedEntityRecognitionService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client_whatever",
             *     "Patient Name: John Smith\nDate of Admission: June 15, 2023\n \
             *     Medical Record Number: 123456789\n\nChief Complaint:\n \
             *     The patient presents with severe abdominal pain and vomiting.\n\n \
             *     History of Present Illness:\n \
             *     Mr. Smith, a 45-year-old male, reports the onset of abdominal pain two days ago. \
             *     The pain is localized to the lower right quadrant and has been progressively worsening. \
             *     He has experienced multiple episodes of non-bloody vomiting. No significant \
             *     alleviating or exacerbating factors have been identified.\n\nPast Medical History:\n \
             *     The patient has a history of hypertension and type 2 diabetes mellitus. \
             *     He underwent an appendectomy in his childhood. He denies any known allergies or \
             *     previous surgeries.\n\n \
             *     Medications:\n \
             *     - Lisinopril 10mg once daily for hypertension\n \
             *     - Metformin 500mg twice daily for diabetes\n\n \
             *     Family History:\nThe patient's father had a history of myocardial infarction at the age of 60. \
             *     His mother is alive and well with no significant medical conditions. \
             *     There is no known family history of gastrointestinal disorders.\n\n \
             *     Social History:\nMr. Smith is a non-smoker and does not consume alcohol. \
             *     He is married and works as an accountant. He denies any illicit drug use.\n\n \
             *     Physical Examination:\n- Vital Signs: Blood pressure 130/80 mmHg, heart rate 82 bpm, \
             *     respiratory rate 16 breaths per minute, temperature 37.2°C (oral)\n \
             *     - General: The patient appears uncomfortable and is lying still in bed.\n \
             *     - Abdomen: There is tenderness in the right lower quadrant with guarding and \
             *     rebound tenderness. No palpable masses or organomegaly. Bowel sounds are diminished.\n\n \
             *     Assessment and Plan:\nThe patient's presentation is concerning for acute appendicitis. \
             *     He will undergo further diagnostic evaluation, including complete blood count, urinalysis, \
             *     and abdominal ultrasound. In the meantime, he will be kept NPO (nothing by mouth) and \
             *     started on intravenous fluids. Surgical consultation will be obtained for potential appendectomy.\n\n \
             *     Please note that this is a fictional clinical text generated for demonstration purposes only. \
             *     Any resemblance to actual patients or medical scenarios is purely coincidental.",
             *     {
             *         "Admission date": "date of admission"
             *     }
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "named_entities": [
             * //       {
             * //         "label": "Admission date",
             * //         "text": "June 15, 2023",
             * //         "span": [
             * //           44,
             * //           57
             * //         ]
             * //       }
             * //     ],
             * //     "entity_counts": [
             * //       {
             * //         "label": "Admission date",
             * //         "text": "June 15, 2023",
             * //         "count": 1
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.1114,
             * //       "total_cost": 0.1164
             * //     },
             * //     "charged_character_count": 2228,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string, labels:object): Promise<object>;
            
            /**
             * Adds a TAG label and its description so that Soffos AI can identify the entities matching the tag
             * @param {string} label - The identifier of the label
             * @param {string} definition - The definition of the label
             */
            add_label(label:string, definition:string): null;
        }

        /**
         * Paraphrase and Simplify are available as two different flavors of the same module. 
         * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
         * the Simplify module outputs more commonly used words without altering the meaning of the original text. 
         */
        export class ParaphraseService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to be paraphrased/simplified.
             * @returns {Promise<Object>} 
             * paraphrase
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.ParaphraseService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "sample client id", 
             *     "Soffosai provides a very easy and economical way to integrate AI into your systems"
             * );
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "paraphrase": "Soffosai offers a simple and cost-effective method for incorporating AI into your systems",
             * //     "simplify": false,
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.005,
             * //       "total_cost": 0.01
             * //     },
             * //     "charged_character_count": 100,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string): Promise<object>;
        }

        /**
         * This module detects profanities and the level of offensiveness in a body of text. 
         */
        export class ProfanityService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Input text.
             * @returns {Promise<Object>} 
             * offensive_probability - float<br>
             * A float value between 0 and 1 indicating the degree of offensiveness.<br>
             * offensive_prediction - boolean <br>
             * Boolean value indicating whether the probability exceeds the threshold of what is definitely considered offensive for the underlying model. <br>
             * profanities - dictionary list <br>
             * List of dictionaries resembling detected profanities. Each dictionary contains the following fields: <br>
             * text: The text of the profanity.<br>
             * span_start: The starting character index of the profanity in the original text.<br>
             * span_end: The ending character index of the profanity in the original text.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.ProfanityService({apiKey:my_apiKey});
             * let response = await service.call("client123", "Don't give me this shit.");
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "profanities": [
             * //       {
             * //         "text": "shit",
             * //         "span_start": 19,
             * //         "span_end": 23
             * //       }
             * //     ],
             * //     "offensive_probability": 0.8668110370635986,
             * //     "offensive_prediction": true,
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.005,
             * //       "total_cost": 0.01
             * //     },
             * //     "charged_character_count": 100,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The Q&A Generation module splits large documents in chunks from which it generates multiple 
         * question-answer pairs. The chunk length is configurable. Usually more questions can be generated
         * when segmenting the text to smaller chunks, while longer chunks help retain more context, in cases 
         * where a topic is discussed over multiple sentences in the context. To address cases where the topic 
         * is split mid-way, the module supports overlapping the chunks by a configurable amount of sentences. 
         * This gives a lot of flexibility to cater to your specific use case.
         */
        export class QuestionAndAnswerGenerationService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - The input text from which the question-answer pairs will be generated.
             * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
             * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
             * For example, with sentence_split 3 and sentence_overlap=true :
             * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
             * @returns {Promise<Object>} 
             * qna_list - dictionary list <br>
             * A list of dictionaries representing question-answer pairs. Each dictionary contains the fields question, answer and chunk_index which is the index of the chunk the question-answer pair was generated from. chunk_index maps to the chunk with the same value in the key index.<br>
             * chunks - dictionary list <br>
             * A list of dictionaries representing the chunks as they were split from the original according to the splitting parameters given in the request. Each dictionary contains the fields text, index as well as the span_start and span_end fields which are the starting and ending position of the chunk in the originally provided text.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.QuestionAndAnswerGenerationService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "me again",
             *     "AI and specifically NLP is a very powerful component to any application that makes \
             *     it powerful, interesting and creative. However, implementing the NLP components can \
             *     sometimes be hard, or very costly in cases where an NLP engineering team has to be \
             *     hired to build it. Especially, since NLP keeps evolving at an absurd rate, it might \
             *     be impossible for a developer to keep up with the advancements in terms of work that \
             *     needs to be done or money that need to be spent to keep their NLP at a state where it \
             *     can compete with similar apps out there. Here at Soffos we have packaged several \
             *     high-level functionalities as modules, some of which require multiple types of NLP and \
             *     complex logic, for developers to use out-of-the-box, as is, removing the need to develop \
             *     it themselves. Moreover, Soffos continuously updates their modules to match the state of \
             *     the art. Developers will never need to maintain any AI/NLP related component of their \
             *     application. All they need is to be creative, come up with ideas, and combine our modules \
             *     however they desire to come up with amazing intelligent applications."
             * );
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "qna_list": [
             * //       {
             * //         "question": "What is NLP?",
             * //         "answer": "NLP stands for Natural Language Processing, which is a branch of Artificial Intelligence that deals with understanding and generating human language.",
             * //         "chunk_index": 0
             * //       },
             * //       {
             * //         "question": "What makes NLP powerful?",
             * //         "answer": "NLP is powerful because it can understand and generate human language, which makes it a powerful component to any application.",
             * //         "chunk_index": 0
             * //       },
             * //       {
             * //         "question": "What can be difficult about implementing NLP components?",
             * //         "answer": "Implementing NLP components can be difficult because it can be hard to keep up with the advancements in terms of work that needs to be done or money that need to be spent to keep their NLP at a state where it can compete with similar apps out there.",
             * //         "chunk_index": 0
             * //       },
             * //       {
             * //         "question": "What does Soffos offer developers?",
             * //         "answer": "Soffos offers developers high-level functionalities packaged as modules, which require multiple types of NLP and complex logic, for developers to use out-of-the-box, as is, removing the need to develop it themselves.",
             * //         "chunk_index": 1
             * //       },
             * //       {
             * //         "question": "Does Soffos maintain AI/NLP related components?",
             * //         "answer": "Yes, Soffos continuously updates their modules to match the state of the art and developers will never need to maintain any 
             * //   AI/NLP related component of their application.",
             * //         "chunk_index": 1
             * //       },
             * //       {
             * //         "question": "What is required to create intelligent applications?",
             * //         "answer": "Creativity, ideas, and the ability to combine modules.",
             * //         "chunk_index": 2
             * //       }
             * //     ],
             * //     "chunks": [
             * //       {
             * //         "text": "AI and specifically NLP is a very powerful component to any application that makes it powerful, interesting and creative. However, implementing the NLP components can sometimes be hard, or very costly in cases where an NLP engineering team has to be hired to build it. Especially, since NLP keeps evolving at an absurd rate, it might be impossible for a developer to keep up with the advancements in terms of work that needs to be done or money that need to be spent to keep their NLP at a state where it can compete with similar apps out there.",  
             * //         "span_start": 0,
             * //         "span_end": 545,
             * //         "index": 0
             * //       },
             * //       {
             * //         "text": "Here at Soffos we have packaged several high-level functionalities as modules, some of which require multiple types of NLP and complex logic, for developers to use out-of-the-box, as is, removing the need to develop it themselves. Moreover, Soffos continuously updates their modules to match the state of the art. Developers will never need to maintain any AI/NLP related component of their application.",   
             * //         "span_start": 546,
             * //         "span_end": 949,
             * //         "index": 1
             * //       },
             * //       {
             * //         "text": "All they need is to be creative, come up with ideas, and combine our modules however they desire to come up with amazing intelligent applications.",
             * //         "span_start": 950,
             * //         "span_end": 1096,
             * //         "index": 2
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.05945,
             * //       "total_cost": 0.06445
             * //     },
             * //     "charged_character_count": 1189,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
        }

        /**
         * This module is a combination of various sub-modules that enable users to get accurate answers on 
         * questions posed on a large amount of content. It includes basic intent recognition capabilities 
         * to enable appropriate responses to incorrect or profane language, or typical personal questions 
         * like "How are you?" and greetings
         */
        export class QuestionAnsweringService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} question
             * @param {string} [document_text] - The text to be used as the context to formulate the answer.
             * @param {Array.<string>} [document_ids] - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
             * @param {bool} [check_ambiguity=true] - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
             * "What was his most famous invention?"
             * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
             * "What was Tesla's most famous invention and when did he create it?"
             * In this case, the AI can infer that he refers to Tesla.
             * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
             * @param {string} [check_query_type=true] - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
             * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
             * @param {string} [generic_responses=false] - In addition to checking for ambiguity or query type, this module performs other checks such as profanity, language, etc.. If the input query fails in one of these checks, it will reject the query by responding with a message that points out the issue.
             * When true, the module will respond with a generic message without giving the reason as to why the message was rejected, which is the same behavior as when it cannot find an answer to the query in the provided context.
             * @param {Object.<string, string>} meta
             * @returns {Promise<Object>} 
             * answer - string<br>
             * The answer to the query. In cases where the query failed a check, and depending on the above explained parameters, this will be a message that indicates that an answer could not be retrieved. <br>
             * valid_query - boolean <br>
             * Boolean flag denoting whether the query failed a check. <br>
             * no_answer - boolean <br>
             * Boolean flag denoting that the query has passed the checks, but no answer for it was found in the context. <br>
             * message_id - string <br>
             * A unique ID representing the message and its associated prediction. <br>
             * passages - dictionary list <br> 
             * A list of objects representing the most relevant passages of the queried documents. The first step for generating an answer is finding the most relevant passages from a big knowledge base. The passages are matched with a combination of keyword and semantic similarity. Each passage has the following fields: <br>
             * text, document_name, document_id, scores: A dictionary containing the matching scores for either or both keyword, semantic. <br>
             * context - string <br>
             * The merged passages text.<br>
             * highlights - dictionary list<br>
             * A list of objects representing sentences within the context which are highly similar to the answer. Each dictionary has the following fields:<br>
             * span: A list with the start and end character index of the sentence within context.
             * sentence: The sentence text.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.QuestionAnsweringService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client12345",
             *     "How would Soffos SDK help me as a programmer?",
             *     "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications. \
             *     With reduced code requirements, you can seamlessly integrate powerful AI functionalities \
             *     like microlessons, named entity recognition, and more."
             * );
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "message_id": "43f354b0ef1040a7894cfd2260652d9e",
             * //     "answer": "The Soffos SDK would help you as a programmer by simplifying the process of plugging Soffos APIs into your applications and reducing code requirements. This would allow you to seamlessly integrate powerful AI functionalities like microlessons and named entity recognition.",
             * //     "context": "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications.     With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more.",
             * //     "valid_query": true,
             * //     "no_answer": false,
             * //     "highlights": [
             * //       {
             * //         "span": [
             * //           90,
             * //           237
             * //         ],
             * //         "sentence": "With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more."
             * //       }
             * //     ],
             * //     "passages": [],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.0141,
             * //       "total_cost": 0.0191
             * //     },
             * //     "charged_character_count": 282,
             * //     "unit_price": "0.000050"
             * // }
             *   
             */
            call(user: string, question:string, document_text?:string, document_ids?:string[], 
                check_ambiguity?:boolean, check_query_type?:boolean, generic_response?:boolean, meta?:object): Promise<object>;
        }

        /**
         * This module extracts key information from negative product reviews. It attempts to find
         * the referred object, it's fault and an action/verb that is associated with it. If any 
         * of the information is not present, it returns "n/a". This is useful for organizations who 
         * want to analyze product reviews in order to identify and prioritize the most important issues.
         */
        export class ReviewTaggerService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - The review text.
             * @returns {Promise<Object>} 
             * object - string<br>
             * The faulty object. This could be the product itself, or a component, e.g. "door handle". If 'n/a' is returned, it's assumed that the object is the product itself. <br>
             * action - string <br>
             * The action/verb associated with that object, e.g. "squeaks" <br>
             * fault - string <br>
             * The fault (or strength) of the object, e.g. "loose" or "broken". <br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.ReviewTaggerService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client 12345",
             *     "This oven has been a complete disaster from the start. After about 2 weeks of use, \
             *     the oven and broiler burners would turn off suddenly after being on for only 5 seconds. \
             *     This has been an ongoing issue for months, and it still does not work."
             * );
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "object": "oven and broiler burners",
             * //     "action": "turn off suddenly",
             * //     "fault": "not working",
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.01245,
             * //       "total_cost": 0.01745
             * //     },
             * //     "charged_character_count": 249,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string): Promise<object>;
        }

        /**
         * This module processes the text to measure whether it is negative, positive or neutral.
         * The text is processed in segments of user-defined length and it provides scores for each 
         * segment as well as the overall score of the whole text.
         */
        export class SentimentAnalysisService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to be analyzed for sentiment.
             * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
             * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
             * For example, with sentence_split 3 and sentence_overlap=true :
             * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
             * @returns {Promise<Object>} 
             * sentiment_breakdown - dictionary list <br>
             * A list of dictionaries representing the score of each segment of text. Each dictionary contains the following fields: <br>
             * text: The text of the segment. <br>
             * start: The starting character index of the segment in the original text. <br>
             * end: The ending character index of the segment in the original text. <br>
             * sentiment: A dictionary containing the scores for negative, neutral and positive.<br>
             * sentiment_overall - dictionary <br>
             * Contains the overall negative, neutral and positive score for the provided text.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.SentimentAnalysisService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client 54321",
             *     "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
             *     1, false
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "sentiment_breakdown": [
             * //       {
             * //         "text": "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
             * //         "start": 0,
             * //         "end": 94,
             * //         "sentiment": {
             * //           "negative": 0.0020085338037461042,
             * //           "neutral": 0.017729898914694786,
             * //           "positive": 0.9802615642547607
             * //         }
             * //       }
             * //     ],
             * //     "sentiment_overall": {
             * //       "negative": 0.0020085338037461042,
             * //       "neutral": 0.017729898914694786,
             * //       "positive": 0.9802615642547607
             * //     },
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.005,
             * //       "total_cost": 0.01
             * //     },
             * //     "charged_character_count": 100,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string, sentence_split?:number, sentence_overlap?:boolean): Promise<object>;
        }

        /**
         * Paraphrase and Simplify are available as two different flavors of the same module. 
         * While the Paraphrase module attempts to change the wording while keeping the same level of complexity, 
         * the Simplify module outputs more commonly used words without altering the meaning of the original text.
         */
        export class SimplifyService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to be paraphrased/simplified.
             * @returns {Promise<Object>} 
             * paraphrase - the paraphrased text <br>
             * "simplify": true
             * @example:
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.SimplifyService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "sample client id", 
             *     "Soffosai provides a very easy and economical way to integrate AI into your systems."
             * );
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "paraphrase": "Soffosai makes it super simple and cheap to add AI to your systems.",
             * //     "simplify": true,
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.005,
             * //       "total_cost": 0.01
             * //     },
             * //     "charged_character_count": 100,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string): Promise<object>;
        }

        /**
         * The summarization module utilizes Natural Language Generation (NLG) to generate an 
         * abstractive summary of a specified length. In contrast to extractive summarization methods, 
         * which simply calculate the centrality of sentences or passages in the original text and 
         * concatenate the highest rated ones, abstractive summaries are often more concise and accurate. 
         * The end result isn't necessarily a sum of word-for-word copies of passages from the original text, 
         * but a combination of all key points formulated as a new text.
         */
        export class SummarizationService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to be summarized.
             * @param {number} sent_length - The desired sentence length of the summary. The service will respond with a 403 error if the value is larger than the number of sentences in the text.
             * @returns {Promise<Object>} 
             * summary - string<br>
             * The summary. <br>
             * error - string <br>
             * When the specified sent_length is larger than the number of sentences, the service will return a 403 error along with a json with the error field and the error message.
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.SummarizationService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client 23456",
             *     "Ludwig van Beethoven (baptised 17 December 1770 – 26 March 1827) was a German \
             *     composer and pianist. ... After some months of bedridden illness, he died in 1827. \
             *     Beethoven's works remain mainstays of the classical music repertoire.",
             *     3
             * );
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "summary": "Ludwig van Beethoven was a German composer and pianist. He composed many works that remain mainstays of the classical music repertoire. After a period of illness, he died in 1827.",
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.0119,
             * //       "total_cost": 0.0169
             * //     },
             * //     "charged_character_count": 238,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string, sent_length:number): Promise<object>;
        }

        /**
         * The table generator module enables applications to extract numerical and statistical 
         * data from raw text in a tabular format. For use-cases where data has to be manually 
         * reviewed and cross-referenced, this module can bring enormous value.
         */
        export class TableGeneratorService {
            constructor(kwargs?: {});
            /**
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
             * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string} text - Text to extract tables from.
             * @param {string} [table_format="markdown"] - A string indicating the table output format.
             * Formats supported:
             * @returns {Promise<Object>} 
             * tables - dictionary list<br>
             * A list of dictionaries representing tables. Each dictionary contains the following fields: <br>
             * title:  A descriptive title for the table. <br>
             * table: The table in a raw markdown or CSV formatted string. <br>
             * note: Useful notes for table interpretation.<br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.TableGeneratorService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "client 2345678",
             *     "Demographic and socioeconomic factors can contribute to community spread of COVID-19. \
             *     The aim of this study is to describe the demographics and socioeconomic factors in \
             *     relation to geolocation of COVID-19 patients who were discharged from the emergency \
             *     department (ED) back into the community...",
             *     "CSV"
             * );
             * console.log(JSON.stringify(response, null, 2));
             *     
             * // returns
             * // {
             * //     "tables": [
             * //       {
             * //         "title": "Demographics and Socioeconomic Factors of COVID-19 Patients Discharged from the Emergency Department",
             * //         "table": "Demographic Factor,Socioeconomic Factor,Geolocation\nAge,Income,Latitude\nGender,Education,Longitude\nRace/Ethnicity,Occupation,\nHousing,,\nTransportation,,\n",
             * //         "note": "The table captures the demographic factors (age, gender, race/ethnicity) and socioeconomic factors (income, education, occupation, housing, transportation, health insurance) related to the geolocation (latitude and longitude) of COVID-19 patients discharged from the 
             * //   emergency department."
             * //       }
             * //     ],
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.01535,
             * //       "total_cost": 0.02035
             * //     },
             * //     "charged_character_count": 307,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string, table_format?:string): Promise<object>;
        }

        /**
         * This module can generate tags for a piece of text that can aid with content search in
         * certain use-cases. It allows to specify a number of tags to be generated for each of 
         * the categories "topic", "domain", "audience", "entity".
         */
        export class TagGenerationService {
            constructor(kwargs?: {});
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
             * tags - dictionary dictionary<br>
             * A dictionary containing the tags grouped by the type of tag. A confidence score is provided also for each tag. <br>
             * @example
             * import { SoffosServices } from "soffosai";
             * 
             * const my_apiKey = "Token <put your api key here>";
             * const service = new SoffosServices.TagGenerationService({apiKey:my_apiKey});
             * let response = await service.call(
             *     "Client 12345",
             *     "The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. \
             *     It is the first installment in The Matrix film series...",
             *     ["topic", "domain", "audience", "entity"],
             *     5
             * );
             * console.log(JSON.stringify(response, null, 2));
             * 
             * // returns
             * // {
             * //     "tags": {
             * //       "entity": [
             * //         {
             * //           "tag": "The Matrix film series",
             * //           "score": 0.8959815820439049
             * //         },
             * //         {
             * //           "tag": "The Matrix",
             * //           "score": 0.8853121672946954
             * //         },
             * //         {
             * //           "tag": "Wachowskis",
             * //           "score": 0.8181770474784962
             * //         },
             * //         {
             * //           "tag": "science fiction",
             * //           "score": 0.8022009225526905
             * //         },
             * //         {
             * //           "tag": "1999",
             * //           "score": 0.7902458979844174
             * //         }
             * //       ],
             * //       "topic": [
             * //         {
             * //           "tag": "The Matrix film series",
             * //           "score": 0.8959815820439049
             * //         },
             * //         {
             * //           "tag": "The Matrix",
             * //           "score": 0.8853121672946954
             * //         },
             * //         {
             * //           "tag": "Wachowskis",
             * //           "score": 0.8181770474784962
             * //         },
             * //         {
             * //           "tag": "science fiction",
             * //           "score": 0.8022009225526905
             * //         },
             * //         {
             * //           "tag": "action film",
             * //           "score": 0.7878362644378212
             * //         }
             * //       ],
             * //       "domain": [
             * //         {
             * //           "tag": "science fiction",
             * //           "score": 0.8022009225526905
             * //         },
             * //         {
             * //           "tag": "film",
             * //           "score": 0.799161600775062
             * //         },
             * //         {
             * //           "tag": "action",
             * //           "score": 0.7521322760333649
             * //         }
             * //       ]
             * //     },
             * //     "cost": {
             * //       "api_call_cost": 0.005,
             * //       "character_volume_cost": 0.00745,
             * //       "total_cost": 0.01245
             * //     },
             * //     "charged_character_count": 149,
             * //     "unit_price": "0.000050"
             * // }
             */
            call(user: string, text: string, types?:string[], n?:number): Promise<object>;
        }

        /**
         * This module cleans up and corrects poorly transcribed text from Speech-To-Text (STT) systems.
         * It can handle cases where STT produced the wrong word or phrase by taking into account the 
         * surrounding context and choosing the most fitting replacement. Although this is meant for correcting 
         * STT outpus, it can also be used to correct grammar, misspellings and syntactical errors.
         */
        export class TranscriptCorrectionService {
            constructor(kwargs?: {});
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
            call(user: string, text: string): Promise<object>;
        }
    }

/*/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////// */

    export namespace SoffosNodes {
        /**
         * A service configuration for Ambiguity Detection Service for Pipeline use.
         */
        export class AmbiguityDetectionNode{
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to be analyzed for ambiguitites.
             * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
             * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
             * For example, with sentence_split 3 and sentence_overlap=true :
             * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
             */
            constructor(name:string, text:string, sentence_split?:number, sentence_overlap?:boolean);
        }
        
        /**
         * A service configuration for Answer Scoring Service for Pipeline use.
         */
        export class AnswerScoringNode{
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} context - This should be the passage with the information that is related to the question and answer.
             * @param {string} question - The question to answer.
             * @param {string} user_answer - The user's answer which will be marked.
             * @param {string} [answer=null] - Optionally provide the expected answer.
             */
            constructor(name:string, context:string, question:string, user_answer:string, answer?:string);
        }
        
        /**
         * A service configuration for Ambiguity Detection Service for Pipeline use.
         */
        export class ContradictionDetectionNode{
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to be analyzed for contradictions.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for Documents Ingest Service for Pipeline use.
         */
        export class DocumentsIngestNode {
            /**
             * @param {string} name
             * @param {string} document_name - The name of the document.
             * @param {string} [text] - Required when tagged_elements is not provided. 
             * Only one of text and tagged_elements can be provided.
             * The text content of the document.
             * @param {object} [tagged_elements] - Required when text is not provided. Only one of text and tagged_elements can be provided.
             * A list of dictionaries representing tagged spans of 
             * text extracted from a document file. This field accepts the value of the tagged_elements or 
             * normalized_tagged_elements field from the output of the File Converter module.
             * Therefore, it requires each element to contain the text and tag fields and any non-heading 
             * element to contain a headings field which is also a list of dictionaries where each dictionary 
             * should contain the fields text and tag.
             * @param {object} [meta] - A dictionary containing metadata fields for tagging the document. 
             * The keys should be string and the values can be any type, such as string, integer, boolean etc. 
             * This allows document filtering based on the meta fields. Due to name being a mandatory field 
             * provided independently, if a name field is included in meta it will be ignored.
             */
            constructor(name:string, document_name:string, text?:string, tagged_elements?:object, meta?:object);
        }

        /**
         * A service configuration for Documents Search Service for Pipeline use.
         */
        export class DocumentsSearchNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {object} [query]
             * Required when top_n_natural_language is set above 0.
             * The text to be used to match passages from ingested documents. 
             * This could be anything from a very specific natural language question to a simple cobination 
             * of words for keyword search. It can also be set as null for only-filtering searches.
             * @param {object} [filters] - The filters field can be used to narrow down the search to only 
             * the documents meeting certain metadata-based criteria, or even returning all the filtered 
             * documents when query is left null. It is catering only for the metadata provided in the meta 
             * field when ingesting a document. Other important filters such as document_ids, date_from and 
             * date_until are provided as top level fields.
             * Filters are defined as nested dictionaries. 
             * The keys of the dictionaries can be a logical operator ("$and", "$or", "$not"), a comparison 
             * operator ("$eq", "$in", "$gt", "$gte", "$lt", "$lte") or a metadata field name. 
             * Logical operator keys have a dictionary of metadata field names and/or logical operators as 
             * their value. Metadata field names have a dictionary of comparison operators as their value. 
             * Comparison operator keys accept a single values or lists as their values. 
             * Lists can be compared with the with the "$in" operator against single values, or with 
             * the "$eq" operator against other lists in which case the set of values of each list 
             * is compared and order does not matter. If no logical operator is given, "$and" is used as 
             * the default operation. If no comparison operator is specified, "$eq" 
             * (or "$in" if the comparison value is a list) is used as the default operation.
             * @param {Array.<string>} [document_ids] - Passing document IDs will confine the search to those documents.
             * @param {number} [top_n_keywords] - The number of document passages to be retrieved using 
             * keyword search. The relevancy is calculated algorithmically based on the frequency of the 
             * query words in the ingested passages. Setting this to 0 disables the keyword search. 
             * When query is left null while top_n_keywords is larger than 0, it will simply filter 
             * the documents based on the rest of the fields like date or metadata. All matched passages will 
             * be returned, therefore the actual value of top_n_keywords does not make a difference, 
             * so long it is larger than 0.
             * @param {number} [top_n_natural_language] - The number of document passages to be retrieved 
             * using Machine Learning-based semantic search. Setting this to 0 disables the semantic search.
             * @param {string} [date_from] - Filters passages to those ingested at or after the specified ISO-8601 formatted date.
             * @param {string} [date_until] - Filters passages to those ingested before the specified ISO-8601 formatted date.
             */
            constructor(name:string, query?:Object, filters?:Object, document_ids?:string[], top_n_keywords?:number,
                top_n_natural_language?:number, date_from?:string, date_until?:string);
        }
        
        /**
         * A service configuration for DocumentsDeleteService for Pipeline use.
         * @class
         * @alias _SoffosNodes.DocumentsDeleteNode
         */
        export class DocumentsDeleteNode{
            /**
             * @param {string} name - The name of this Node.
             * @param {Array.<string>} document_ids - A list of the document_ids of the documents to be deleted.
             */
            constructor(name:string, document_ids:string[]);
        }

        /**
         * A service configuration for EmailAnalysisService for Pipeline use.
         */
        export class EmailAnalysisNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - The e-mail body text.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for EmotionDetectionService for Pipeline use.
         */
        export class EmotionDetectionNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to detect emotions from.
             * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
             * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
             * For example, with sentence_split 3 and sentence_overlap=true :
             * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
             * @param {Array.<string>} [emotion_choices=_EMOTION_LIST] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
             */
            constructor(name:string, text:string, sentence_split:number, sentence_overlap:boolean, emotion_choices?:string[]);
        }
        
        /**
         * A service configuration for FileConverterService for Pipeline use.
         */
        export class FileConverterNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {Blob} file - The byte stream of the file. The file should not exceed 50Mb in size.
             * @param {number} [normalize] - Whether to perform normalization.
             */
            constructor(name:string, file:Blob, normalize?:number);
        }
        
        /**
         * A service configuration for LanguageDetectionService for Pipeline use.
         */
        export class LanguageDetectionNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to be classified under a language.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for LetsDiscussCreateService for Pipeline use.
         */
        export class LetsDiscussCreateNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} context - The content to discuss about.
             */
            constructor(name:string, context:string);
        }

        /**
         * A service configuration for LetsDiscussService for Pipeline use.
         */
        export class LetsDiscussNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} session_id - The ID of the session provided by the /create/ endpoint.
             * @param {string} query - User's message.
             * @returns {Promise<Object>} 
             */
            constructor(name:string, session_id:string, query:string);
        }

        /**
         * A service configuration for LetsDiscussRetrieveService for Pipeline use.
         */
        export class LetsDiscussRetrieveNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {boolean} [return_messages=true] - When set to true, in addition to returning 
             * all the session records, it will also return all the messages associated with each session.
             */
            constructor(name:string, return_messages?:boolean);
        }

        /**
         * A service configuration for LetsDiscussDeleteService for Pipeline use.
         */
        class LetsDiscussDeleteNode {
            /**
             * @param {string} name - The name of this Node.
             * @param {Array.<string>} session_ids - A list with the IDs of the sessions to be deleted.
             */
            constructor(name:string, session_ids:string[]);
        }
        
        /**
         * A service configuration for LogicalErrorDetectionService for Pipeline use.
         */
        export class LogicalErrorDetectionNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Input text to analyze for logical errors.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for MicrolessonService for Pipeline use.
         */
        export class MicrolessonNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {Array.<object>} content - A list of dictionaries. Each dictionary should contain the source and text fields, where source is the name of the document/article/website/etc. and text is the actual content. Providing the source names enables the microlesson to include the source for the key points extracted from the content.
             */
            constructor(name:string, content:object[]);
        }
        
        /**
         * A service configuration for NamedEntityRecognitionService for Pipeline use.
         */
        export class NamedEntityRecognitionNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Input text to be analyzed for named entities.
             * @param {Object.<string, string>} labels - When providing labels, the module will extract entities that match your labels and descriptions. This gives enough flexibility to deal with any use-case.
             */
            constructor(name:string, text:string, labels:any);
        }
        
        /**
         * A service configuration for ParaphraseService for Pipeline use.
         */
        export class ParaphraseNode {
            /**
             * @param {string} name - The name of this Node.
             * It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to be paraphrased/simplified.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for ProfanityService for Pipeline use.
         */
        export class ProfanityNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Input text.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for QuestionAndAnswerGenerationService for Pipeline use.
         */
        export class QuestionAndAnswerGenerationNode {
            /**
             * @param {string} name - The name of this Node.
             * It will be used by the Pipeline to reference this Node.
             * @param {string} text - The input text from which the question-answer pairs will be generated.
             * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
             * @param {string} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
             * For example, with sentence_split 3 and sentence_overlap=true :
             * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
             */
            constructor(name:string, text:string, sentence_split?:number, sentence_overlap?:string);
        }
        
        /**
         * A service configuration for QuestionAnsweringService for Pipeline use.
         */
        export class QuestionAnsweringNode {
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
            constructor(name: string, question: string, document_text?: string, document_ids?: string[], 
                check_ambiguity?:boolean, check_query_type?:boolean, generic_response?:boolean, meta?:object);
        }
        
        /**
         * A service configuration for ReviewTaggerService for Pipeline use.
         */
        export class ReviewTaggerNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - The review text.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for SentimentAnalysisService for Pipeline use.
         */
        export class SentimentAnalysisNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to be analyzed for sentiment.
             * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
             * @param {string} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
             * For example, with sentence_split 3 and sentence_overlap=true :
             * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
             */
            constructor(name:string, text:string, sentence_split?:number, sentence_overlap?:string);
        }
        
        /**
         * A service configuration for SimplifyService for Pipeline use.
         */
        export class SimplifyNode {
            /**
             * @param {string} name - The name of this Node.
             * It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to be paraphrased/simplified.
             */
            constructor(name:string, text:string);
        }
        
        /**
         * A service configuration for SummarizationService for Pipeline use.
         */
        export class SummarizationNode {
            /**
             * @param {string} name
             * @param {string} text - Text to be summarized.
             * @param {number} sent_length - The desired sentence length of the summary. The service will respond with a 403 error if the value is larger than the number of sentences in the text.
             */
            constructor(name:string, text:string, sent_length:number);
        }
        
        /**
         * A service configuration for TableGeneratorService for Pipeline use.
         */
        export class TableGeneratorNode {
            /**
             * @param {string} name - The name of this Node.
             * @param {string} text - Text to extract tables from.
             * @param {string} [table_format='markdown'] - A string indicating the table output format.
             * Formats supported: "CSV", 'markdown'
             */
            constructor(name:string, text:string, table_format:string);
        }
        
        /**
         * A service configuration for TagGenerationService for Pipeline use.
         */
        export class TagGenerationNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to extract keywords from.
             * @param {Array.<?>} [types=["topic"]] - List of types of keywords to extract. Supported types:
             * topic: Tags relating to the subject matter of the text.
             * domain: Tags relating to the domain of the text. For example, "AI", or "Science fiction". In some cases, domain tags might be similar to topic tags.
             * audience: Tags relating to the type of audience the text is intended for.
             * entity: Entities such as people, places, products, etc. mentioned in the text.
             * @param {number} n - The number of tags to be generated for each of the specified tag types.
             */
            constructor(name:string, text:string, types:object[], n:number);
        }
        
        /**
         * A service configuration for TranscriptCorrectionService for Pipeline use.
         */
        export class TranscriptCorrectionNode {
            /**
             * @param {string} name - The name of this Node.
             *  It will be used by the Pipeline to reference this Node.
             * @param {string} text - Text to be corrected.
             */
            constructor(name:string, text:string);
        }
    }

/*/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////// */
    
    export namespace SoffosPipelines {
        /**
         * A controller for consuming multiple Services called stages.
         * It validates all inputs of all stages before sending the first Soffos API request to ensure
         * that the Pipeline will not waste credits.
         * 
         * ** use_defaults=True means that stages will take input from the previous stages' 
         * output of the same field name prioritizing the latest stage's output. 
         * If the previous stages does not have it, it will take from the
         * pipeline's user_input.  Also, the stages will only be supplied with the required fields + default
         * of the require_one_of_choices fields.
         */
        export class SoffosPipeline {
            /**
             * @param {object[]} nodes 
             * @param {boolean} [use_defaults=false] 
             * @param {Object} [kwargs={}]
             */
            constructor (nodes:object, use_defaults?:boolean, kwargs?:object);

            /**
             * Run the Pipeline
             * @param {object} user_input 
             * @returns {Promise}
             */
            run(user_input:object): Promise<object>;

            /**
             * Validates the Pipeline construction vs the user_input before sending the first API call
             * Throws errors when not valid.
             * @param {object} user_input 
             * @param {Node} stages 
             * @returns {boolean}
             */
            validate_pipeline(user_input:object, stages:Node[]): boolean;

            /**
             * Adds a node at the end of the node list/stages.
             * @param {Node} node 
             */
            add_node(node:Node): null;

            /**
             * 
             * @param {Node[]} stages
             * @param {object} user_input
             * @returns {Node[]}
             */
            setDefaults(stages:Node[], user_input:object): Node[];
        }

        /**
         * When you already have a document uploaded to Soffos, use its document_id and ask questions about the doc.
         */
        export class AskADocumentPipeline{
            /**
             * Call the pipeline
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {string[]} doc_ids 
             * @param {string} question 
             * @returns {object}
             */
            call(user:string, doc_ids:string[], question:string): object;
        }

        /**
         * Given a file path, upload the file to Soffos and get its reference document_id.
         */
        export class FileIngestPipeline{
            /**
             * 
             * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
     * the api is an application (app) and that app has users. Soffos API will accept any string.
             * @param {Blob} file 
             * @param {number} [normalize=0]
             * @returns {object}
             */
            call(user:string, file:Blob, normalize?:number): object;
        }
    }
}

export {};