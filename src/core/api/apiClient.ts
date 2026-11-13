import {APIResponse} from '@playwright/test';
import {RequestContext} from './requestContext';

export class ApiClient {
    async get(endpoint: string): Promise<APIResponse> {
        const context = await RequestContext.create();
        return await context.get(endpoint);
    }

    async post(endpoint: string, payload: unknown): Promise<APIResponse> {
        const context = await RequestContext.create();
        return await context.post(endpoint, { data: payload });
    }

    async put(endpoint: string, payload: unknown): Promise<APIResponse> {
        const context = await RequestContext.create();
        return await context.put(endpoint, { data: payload });
    }
}
