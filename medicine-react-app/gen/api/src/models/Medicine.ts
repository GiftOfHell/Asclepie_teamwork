/* tslint:disable */
/* eslint-disable */
/**
 * Medicine description service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Medicine
 */
export interface Medicine {
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    address: string;
}

export function MedicineFromJSON(json: any): Medicine {
    return MedicineFromJSONTyped(json, false);
}

export function MedicineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Medicine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'amount': json['amount'],
        'address': json['address'],
    };
}

export function MedicineToJSON(value?: Medicine | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'amount': value.amount,
        'address': value.address,
    };
}


