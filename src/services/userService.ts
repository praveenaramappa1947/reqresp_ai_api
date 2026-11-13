import {BaseService} from '../core/wrappers/baseService';

export class UserService extends BaseService {
    async getUsers(page: number) {
        return await this.apiClient.get(`/api/users?page=${page}`);
    }

    async getSingleUser(userId: number) {
        return await this.apiClient.get(`/api/users/${userId}`);
    }

    async createUser(payload: unknown){
        return await this.apiClient.post('/api/users', payload);
    }

    async updateUser(payload: unknown, userId: number){
        return await this.apiClient.put(`/api/users/${userId}`, payload);
    }
}