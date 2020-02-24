/**
 * Quotes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObject } from './simplePublicObject';

export class BatchResponseSimplePublicObject {
    'results': Array<SimplePublicObject>;
    'numErrors'?: number;
    'errors': Array<Error>;
    'status': BatchResponseSimplePublicObject.StatusEnum;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>"
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseSimplePublicObject.StatusEnum"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseSimplePublicObject.attributeTypeMap;
    }
}

export namespace BatchResponseSimplePublicObject {
    export enum StatusEnum {
        PENDING = <any> 'PENDING',
        PROCESSING = <any> 'PROCESSING',
        CANCELED = <any> 'CANCELED',
        COMPLETE = <any> 'COMPLETE'
    }
}
