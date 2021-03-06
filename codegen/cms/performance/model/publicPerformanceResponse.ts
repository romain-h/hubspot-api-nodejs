/**
 * CMS Performance API
 * Use these endpoints to get a time series view of your website\'s performance.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { PerformanceView } from './performanceView';

export class PublicPerformanceResponse {
    'data': Array<PerformanceView>;
    'domain'?: string;
    'path'?: string;
    'startInterval': number;
    'endInterval': number;
    'interval': PublicPerformanceResponse.IntervalEnum;
    'period'?: PublicPerformanceResponse.PeriodEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PerformanceView>"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "startInterval",
            "baseName": "startInterval",
            "type": "number"
        },
        {
            "name": "endInterval",
            "baseName": "endInterval",
            "type": "number"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "PublicPerformanceResponse.IntervalEnum"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "PublicPerformanceResponse.PeriodEnum"
        }    ];

    static getAttributeTypeMap() {
        return PublicPerformanceResponse.attributeTypeMap;
    }
}

export namespace PublicPerformanceResponse {
    export enum IntervalEnum {
        ONEMINUTE = <any> 'ONE_MINUTE',
        FIVEMINUTES = <any> 'FIVE_MINUTES',
        TENMINUTES = <any> 'TEN_MINUTES',
        FIFTEENMINUTES = <any> 'FIFTEEN_MINUTES',
        THIRTYMINUTES = <any> 'THIRTY_MINUTES',
        ONEHOUR = <any> 'ONE_HOUR',
        FOURHOURS = <any> 'FOUR_HOURS',
        TWELVEHOURS = <any> 'TWELVE_HOURS',
        ONEDAY = <any> 'ONE_DAY',
        ONEWEEK = <any> 'ONE_WEEK'
    }
    export enum PeriodEnum {
        ONEMINUTE = <any> 'ONE_MINUTE',
        FIVEMINUTES = <any> 'FIVE_MINUTES',
        TENMINUTES = <any> 'TEN_MINUTES',
        FIFTEENMINUTES = <any> 'FIFTEEN_MINUTES',
        THIRTYMINUTES = <any> 'THIRTY_MINUTES',
        ONEHOUR = <any> 'ONE_HOUR',
        FOURHOURS = <any> 'FOUR_HOURS',
        TWELVEHOURS = <any> 'TWELVE_HOURS',
        ONEDAY = <any> 'ONE_DAY',
        ONEWEEK = <any> 'ONE_WEEK'
    }
}
