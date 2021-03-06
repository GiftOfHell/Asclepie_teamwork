/* tslint:disable */
/* eslint-disable */
/**
 * Medicine service
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
    name1?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    amount1?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    price1?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    name2?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    amount2?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    price2?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    name3?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    amount3?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    address3?: string;
    /**
     * 
     * @type {string}
     * @memberof Medicine
     */
    price3?: string;
}

export function MedicineFromJSON(json: any): Medicine {
    return MedicineFromJSONTyped(json, false);
}

export function MedicineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Medicine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name1': !exists(json, 'name1') ? undefined : json['name1'],
        'amount1': !exists(json, 'amount1') ? undefined : json['amount1'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'price1': !exists(json, 'price1') ? undefined : json['price1'],
        'name2': !exists(json, 'name2') ? undefined : json['name2'],
        'amount2': !exists(json, 'amount2') ? undefined : json['amount2'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'price2': !exists(json, 'price2') ? undefined : json['price2'],
        'name3': !exists(json, 'name3') ? undefined : json['name3'],
        'amount3': !exists(json, 'amount3') ? undefined : json['amount3'],
        'address3': !exists(json, 'address3') ? undefined : json['address3'],
        'price3': !exists(json, 'price3') ? undefined : json['price3'],
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
        
        'name1': value.name1,
        'amount1': value.amount1,
        'address1': value.address1,
        'price1': value.price1,
        'name2': value.name2,
        'amount2': value.amount2,
        'address2': value.address2,
        'price2': value.price2,
        'name3': value.name3,
        'amount3': value.amount3,
        'address3': value.address3,
        'price3': value.price3,
    };
}


