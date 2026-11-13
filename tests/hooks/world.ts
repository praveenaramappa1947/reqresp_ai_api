import { setWorldConstructor, World, type IWorldOptions } from '@cucumber/cucumber';
import {APIResponse} from '@playwright/test';

export interface ApiContext {
        endpoint?: string;

        requestBody?: unknown;
        requestHeaders?: Record<string, string>;

        response?: APIResponse;
        responseBody?: unknown;
   }

   export interface AuthContext {
        token?: string;
    }

    export interface RuntimeContext {
        scenarioName?: string;
        userId?: string;
        resourceId?: string;
        token?: string;
    }

    export class CustomWorld extends World {
        api: ApiContext;
        auth: AuthContext;
        runtime: RuntimeContext;

        constructor(options: IWorldOptions) {
        super(options);

        this.api = {};
        this.auth = {};
        this.runtime = {};
    }

    async initializeScenario(
        scenarioName: string,
    ): Promise<void> {
        this.runtime.scenarioName = scenarioName;

        this.api = {};
        this.auth = {};
    }

    async clearScenarioData(): Promise<void> {
        this.api = {};
        this.auth = {};
        this.runtime = {};
    }
}

setWorldConstructor(CustomWorld);

declare module '@cucumber/cucumber' {
    interface World {
        api: ApiContext;
        auth: AuthContext;
        runtime: RuntimeContext;
    }
}