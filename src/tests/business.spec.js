import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';
import userData from './mockData/userData'
import businessData from './mockData/businessData'
import generateToken from '../helpers/generateToken';
import strings from '../Utils/strings'

chai.should();
chai.use(chaiHttp);
// let user=userData.validUser
const adminToken = generateToken(userData.adminData);
const aunothorizedToken = generateToken(userData.validUser);
const invalidToken ='bvnvnvnvnvnv';

describe('admin Test',()=>{
it('admin should add business', done => {
    chai.request(app)
      .post('/api/v1/admin/business')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(businessData.validData)
     
      .end((error, res) => {
         res.should.have.property('status').eql(200);
        done();
});
});

it('admin should not add nbusiness with missing field', done => {
  chai.request(app)
    .post('/api/v1/admin/business')
    .set('Authorization', `Bearer ${adminToken}`)
    .send(businessData.business)
    .end((error, res) => {
       res.should.have.property('status').eql(400);
      done();
});
});
it('admin should not add business with unisting user', done => {
  chai.request(app)
    .post('/api/v1/admin/business')
    .set('Authorization', `Bearer ${adminToken}`)
    .send(businessData.WithInvalidUser)
    .end((error, res) => {
       res.should.have.property('status').eql(404);
      done();
});
});

it('admin should not add new business with the same name', done => {
    chai.request(app)
      .post('/api/v1/admin/business')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(businessData.invalidBusiness)
      .end((error, res) => {
         res.should.have.property('status').eql(409);
        done();
  });
  });
it('admin should not add new  user with aunothorized token', done => {
  chai.request(app)
    .post('/api/v1/admin/business')
    .set('Authorization', `Bearer ${invalidToken}`)
    .send(businessData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(401);
       res.body.should.have.property('Error').eql(strings.users.error.UNABLE_TO_PROCESS);
      done();
});
});
it('admin should add new  user without invalid token', done => {
  chai.request(app)
    .post('/api/v1/admin/business')
    .set('Authorization', `Bearer ${aunothorizedToken}`)
    .send(businessData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(403);
       res.body.should.have.property('Error').eql(strings.users.error.AUTHORIZED);
      done();
});
});
});