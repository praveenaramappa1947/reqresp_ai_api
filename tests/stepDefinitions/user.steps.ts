import {Given, When, Then} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
import {CustomWorld} from '../hooks/world';
import {UserService} from '../../src/services/userService';
import {createUserPayload} from '../../src/payloads/users/createUserPayload';

const userService = new UserService();

Given('user sends GET user request', async function (this: CustomWorld) {   
    this.api.endpoint = '/api/users?page=2';
    this.api.response = await userService.getUsers(2);
}
);

When('API response is received', async function(this: CustomWorld) {
    this.api.responseBody = await this.api.response?.json();
});

Then('verify the response status code is {int}', async function (this: CustomWorld, expectedStatusCode: number) {
    const actualStatusCode = this.api.response?.status();
    expect(actualStatusCode).toBe(expectedStatusCode);
});

Then('status code should be {int}', async function (this: CustomWorld, expectedStatusCode: number) {
    const actualStatusCode = this.api.response?.status();
    expect(actualStatusCode).toBe(expectedStatusCode);
});

Then('response should contain a list of users', async function (this: CustomWorld) {
    const responseBody = this.api.responseBody as any;
    expect(responseBody).toHaveProperty('data');
    expect(Array.isArray(responseBody.data)).toBe(true);
    expect(responseBody.data.length).toBeGreaterThan(0);
});

Then('single user details should be returned', async function (this: CustomWorld) {

    const responseBody = this.api.responseBody as any;
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBeTruthy();
    expect(responseBody.data.first_name).toBeTruthy();
    expect(responseBody.data.last_name).toBeTruthy();
  }
);

Given('user sends GET single user request', async function (this: CustomWorld) {
    this.api.endpoint = '/api/users/2';
    this.api.response = await userService.getSingleUser(2);
  }
);

Given('user provide valid user payload', async function(this: CustomWorld) {
    this.api.requestBody = createUserPayload;
    }
);

When('user sends POST create user request', async function(this: CustomWorld) {
    this.api.response = await userService.createUser(this.api.requestBody);
    this.api.responseBody = await this.api.response?.json();
    }
);

Then('user should be created successfully', async function(this: CustomWorld) {
    const responseBody = this.api.responseBody as any;
    expect(responseBody.name).toBe('Praveena');
    expect(responseBody.job).toBe('Software Engineer');
    expect(responseBody.id).toBeDefined();
    expect(responseBody.createdAt).toBeDefined();
    this.runtime.userId = responseBody.id;
    }
);