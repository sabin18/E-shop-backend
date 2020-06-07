import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';
import userData from './mockData/userData'
import generateToken from '../helpers/generateToken';

chai.should();
chai.use(chaiHttp);

let admin =userData.adminData
const adminToken = generateToken(userData.adminData);
describe('admin Test',()=>{
it('admin should view all user', done => {
    chai.request(app)
      .get('/api/v1/auth/users')
      .set('Authorization', `Bearer ${adminToken}`)
      .end((error, res) => {
        console.log('res====>',res.body);
         res.should.have.property('status').eql(200);
         res.body.data.admin
        done();
});
});
});