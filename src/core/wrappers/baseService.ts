import {ApiClient} from '../api/apiClient';

export abstract class BaseService {
    protected apiClient: ApiClient;

    constructor() {
        this.apiClient = new ApiClient();
    }
}