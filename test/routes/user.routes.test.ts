import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test, Response } from 'supertest';

import app from '../../src/Server';
import { userInstence } from '../../src/models/user.model';

let agent: SuperTest<Test>;



describe('Users Routes', () => {

    const getAllUsersPath = '/api/user';
    const { BAD_REQUEST, CREATED, OK, NOT_FOUND } = StatusCodes;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    interface getAllReponse extends Response {
        body: {
            userList: userInstence[];
            error: string
        };
    }

    describe(`"GET:${getAllUsersPath}"`, () => {

        it(`should return a JSON object with all the users and a status code of "${OK}" if the
            request was successful.`, (done) => {

            // Call API
            agent.get(getAllUsersPath)
                .end((err: Error, res: getAllReponse) => {
                    expect(res.status).toBe(OK);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });
    });

});
