import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';
import userData from './mockData/userData'
import creditstData from './mockData/creditsData'
import generateToken from '../helpers/generateToken';
import strings from '../Utils/strings'

chai.should();
chai.use(chaiHttp);
let user=userData.validUser2
const userToken = generateToken(userData.userData1);
const aunothorizedToken = generateToken(userData.adminData);
const invalidToken ='bvnvnvnvnvnv';

describe('debits Test',()=>{
it('user should add new debits', done => {
        chai.request(app)
          .get('/api/v1/debits/d08a096f-6536-4507-aeca-f18f8234129f')
          .set('Authorization', `Bearer ${userToken}`)
          .end((error, res) => {
             res.should.have.property('status').eql(200);
            done();
});
});
it('user should not get a single debits', done => {
    chai.request(app)
      .get('/api/v1/debits/d08a096f-6536-4507-aeca-f18f8234129f/11')
      .set('Authorization', `Bearer ${userToken}`)
      .end((error, res) => {
         res.should.have.property('status').eql(404);
        done();
});
});
it('user should view debits with invalid id', done => {
    chai.request(app)
      .get('/api/v1/debits/d08a096f-6536-4507-aeca')
      .set('Authorization', `Bearer ${userToken}`)
      .end((error, res) => {
         res.should.have.property('status').eql(400);
        done();
});
});

it('user should add new credits', done => {
    chai.request(app)
      .post('/api/v1/debits/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(creditstData.validData)
      .end((error, res) => {
         res.should.have.property('status').eql(201);
        done();
});
});
it('user should get a single debits', done => {
    chai.request(app)
      .get('/api/v1/debits/d08a096f-6536-4507-aeca-f18f8234129f/1')
      .set('Authorization', `Bearer ${userToken}`)
      .end((error, res) => {
         res.should.have.property('status').eql(200);
        done();
});
});
it('user should not new debits with missing field', done => {
  chai.request(app)
    .post('/api/v1/debits/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${userToken}`)
    .send(creditstData. WithMissingField)
    .end((error, res) => {
       res.should.have.property('status').eql(400);
      done();
});
});

it('user should not new debits with aunothorized token', done => {
  chai.request(app)
    .post('/api/v1/debits/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${invalidToken}`)
    .send(creditstData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(401);
       res.body.should.have.property('Error').eql(strings.users.error.UNABLE_TO_PROCESS);
      done();
});
});
it('user should not new debits with invalid token', done => {
  chai.request(app)
    .post('/api/v1/debits/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${aunothorizedToken}`)
    .send(creditstData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(403);
       res.body.should.have.property('Error').eql(strings.users.error.AUTHORIZED);
      done();
});
});
});