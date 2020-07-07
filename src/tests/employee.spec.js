import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';
import userData from './mockData/userData'
import productData from './mockData/productData'
import generateToken from '../helpers/generateToken';
import strings from '../Utils/strings'

chai.should();
chai.use(chaiHttp);
let user=userData.validUser2
const userToken = generateToken(userData.userData1);
const aunothorizedToken = generateToken(userData.adminData);
const invalidToken ='bvnvnvnvnvnv';

describe('product Test',()=>{
it('user should add new emplpyees', done => {
        chai.request(app)
          .get('/api/v1/employee/d08a096f-6536-4507-aeca-f18f8234129f')
          .set('Authorization', `Bearer ${userToken}`)
          .end((error, res) => {
             res.should.have.property('status').eql(200);
            done();
});
});
it('user should a single emplpyees', done => {
    chai.request(app)
      .get('/api/v1/employee/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(userData.singleUser)
      .end((error, res) => {
         res.should.have.property('status').eql(200);
        done();
});
});
it('user should view emplpyees with invalid id', done => {
    chai.request(app)
      .get('/api/v1/employee/d08a096f-6536-4507-aeca')
      .set('Authorization', `Bearer ${userToken}`)
      .end((error, res) => {
         res.should.have.property('status').eql(400);
        done();
});
});
it('user should add new emplpyee', done => {
    chai.request(app)
      .post('/api/v1/employee/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(user)
      .end((error, res) => {
         res.should.have.property('status').eql(200);
        done();
});
});

it('user should not new emplpyee with missing field', done => {
  chai.request(app)
    .post('/api/v1/employee/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${userToken}`)
    .send(userData.User1)
    .end((error, res) => {
       res.should.have.property('status').eql(400);
      done();
});
});

it('user should not new emplpyee with the same name', done => {
    chai.request(app)
      .post('/api/v1/employee/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(user)
      .end((error, res) => {
         res.should.have.property('status').eql(409);
        done();
  });
  });
it('user should not new emplpyee with aunothorized token', done => {
  chai.request(app)
    .post('/api/v1/employee/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${invalidToken}`)
    .send(user)
    .end((error, res) => {
       res.should.have.property('status').eql(401);
       res.body.should.have.property('Error').eql(strings.users.error.UNABLE_TO_PROCESS);
      done();
});
});
it('user should not new emplpyee with invalid token', done => {
  chai.request(app)
    .post('/api/v1/employee/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${aunothorizedToken}`)
    .send(user)
    .end((error, res) => {
       res.should.have.property('status').eql(403);
       res.body.should.have.property('Error').eql(strings.users.error.AUTHORIZED);
      done();
});
});
});