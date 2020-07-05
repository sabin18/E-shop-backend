import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';
import userData from './mockData/userData';
import paymentData from './mockData/paymentData'
import generateToken from '../helpers/generateToken';
import strings from '../Utils/strings'

chai.should();
chai.use(chaiHttp);
let user=userData.validUser
const adminToken = generateToken(userData.adminData);
const aunothorizedToken = generateToken(userData.validUser);
const invalidToken ='bvnvnvnvnvnv';

describe('payment Test',()=>{

it('admin should not add new payment with missing field', done => {
  chai.request(app)
    .post('/api/v1/admin/payment/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${adminToken}`)
    .send(paymentData.WithInvalidUser)
    .end((error, res) => {
       res.should.have.property('status').eql(400);
      done();
});
});
it('admin should add new  payment', done => {
  chai.request(app)
    .post('/api/v1/admin/payment/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${adminToken}`)
    .send(paymentData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(200);
      done();
});
});
it('admin should not add new payment with aunothorized token', done => {
  chai.request(app)
    .post('/api/v1/admin/payment/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${invalidToken}`)
    .send(paymentData.validData)
    .end((error, res) => {
      res.should.have.property('status').eql(401);
      res.body.should.have.property('Error').eql(strings.users.error.UNABLE_TO_PROCESS);
      done();
});
});
it('admin should add new payment without invalid token', done => {
  chai.request(app)
    .post('/api/v1/admin/payment/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${aunothorizedToken}`)
    .send(paymentData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(403);
       res.body.should.have.property('Error').eql(strings.users.error.AUTHORIZED);
      done();
});
});
});