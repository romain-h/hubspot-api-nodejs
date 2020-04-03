/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM object like contacts, companies, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { TimelineEventIFrame } from './timelineEventIFrame';

/**
* The current state of the timeline event.
*/
export class TimelineEventResponse {
    /**
    * The ObjectType associated with the EventTemplate.
    */
    'objectType': string;
    'createdAt'?: Date;
    /**
    * Identifier for the event. This should be unique to the app and event template. If you use the same ID for different CRM objects, the last to be processed will win and the first will not have a record. You can also use `{{uuid}}` anywhere in the ID to generate a unique string, guaranteeing uniqueness.
    */
    'id': string;
    /**
    * The event template ID.
    */
    'eventTemplateId': string;
    /**
    * The email address used for contact-specific events. This can be used to identify existing contacts, create new ones, or change the email for an existing contact (if paired with the `objectId`).
    */
    'email'?: string;
    /**
    * The CRM object identifier. This is required for every event other than contacts (where utk or email can be used).
    */
    'objectId'?: string;
    /**
    * Use the `utk` parameter to associate an event with a contact by `usertoken`. This is recommended if you don\'t know a user\'s email, but have an identifying user token in your cookie.
    */
    'utk'?: string;
    /**
    * The event domain (often paired with utk).
    */
    'domain'?: string;
    /**
    * The time the event occurred. If not passed in, the curren time will be assumed. This is used to determine where an event is shown on a CRM object\'s timeline.
    */
    'timestamp'?: Date;
    /**
    * A collection of token keys and values associated with the template tokens.
    */
    'tokens': { [key: string]: string; };
    /**
    * Additional event-specific data that can be interpreted by the template\'s markdown.
    */
    'extraData'?: object;
    'timelineIFrame'?: TimelineEventIFrame;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "eventTemplateId",
            "baseName": "eventTemplateId",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "utk",
            "baseName": "utk",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "extraData",
            "baseName": "extraData",
            "type": "object"
        },
        {
            "name": "timelineIFrame",
            "baseName": "timelineIFrame",
            "type": "TimelineEventIFrame"
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventResponse.attributeTypeMap;
    }
}

