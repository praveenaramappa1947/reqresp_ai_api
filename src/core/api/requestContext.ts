import {request, APIRequestContext} from '@playwright/test';
import {testConfig} from '../config/testConfig';

export class RequestContext {
    static async create():
    Promise<APIRequestContext> {
        return await request.newContext({
            baseURL: testConfig.baseUrl,
            extraHTTPHeaders: {
                'X-API-KEY': testConfig.apiKey
            }
        });
    }
}