/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* Option definition for STATUS dataTypes
*/
export class DisplayOption {
    /**
    * Json friendly unique name for option
    */
    'name': string;
    /**
    * Displayed text for option
    */
    'label': string;
    /**
    * Type of option
    */
    'type': DisplayOption.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DisplayOption.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DisplayOption.attributeTypeMap;
    }
}

export namespace DisplayOption {
    export enum TypeEnum {
        DEFAULT = <any> 'DEFAULT',
        SUCCESS = <any> 'SUCCESS',
        WARNING = <any> 'WARNING',
        DANGER = <any> 'DANGER',
        INFO = <any> 'INFO'
    }
}
