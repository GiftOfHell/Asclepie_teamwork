/* tslint:disable */
/* eslint-disable */
/**
 * Medicine service
 * Location service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ErrorResponse,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    Medicine,
    MedicineFromJSON,
    MedicineToJSON,
    Location,
    LocationFromJSON,
    LocationToJSON,
} from '../models';

export interface MedicinesRequest {
  date?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
    * Returns list of medicines
     */
    async medicinesRaw(requestParameters: MedicinesRequest): Promise<runtime.ApiResponse<Array<Medicine>>> {
      const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
          path: `/medicine`,
          method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
      return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MedicineFromJSON));
    }

    /**
     * Returns list of medicines
     */
    async medicines(requestParameters: MedicinesRequest): Promise<Array<Medicine>> {
        const response = await this.medicinesRaw(requestParameters);
      return await response.value();
    }

}

export interface LocationsRequest {
  date?: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
    * Returns list of medicine locations
     */
    async locationsRaw(requestParameters: LocationsRequest): Promise<runtime.ApiResponse<Array<Location>>> {
      const queryParameters: any = {};

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
          path: `/location`,
          method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
      return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LocationFromJSON));
    }

    /**
     * Returns list of medicine locations
     */
    async locations(requestParameters: LocationsRequest): Promise<Array<Location>> {
        const response = await this.locationsRaw(requestParameters);
      return await response.value();
    }

}