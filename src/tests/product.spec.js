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
const userToken = generateToken(userData.userData1);
const aunothorizedToken = generateToken(userData.adminData);
const invalidToken ='bvnvnvnvnvnv';

describe('product Test',()=>{
it('user should add product', done => {
    chai.request(app)
      .post('/api/v1/products/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(productData.validData)
      .end((error, res) => {
         res.should.have.property('status').eql(200);
        done();
});
});

it('user should not add product with missing field', done => {
  chai.request(app)
    .post('/api/v1/products/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${userToken}`)
    .send(productData.WithMissingField)
    .end((error, res) => {
       res.should.have.property('status').eql(400);
      done();
});
});

it('user should not add product with the same name', done => {
    chai.request(app)
      .post('/api/v1/products/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(productData.existingProduct)
      .end((error, res) => {
         res.should.have.property('status').eql(409);
        done();
  });
  });
it('user should not add product with aunothorized token', done => {
  chai.request(app)
    .post('/api/v1/products/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${invalidToken}`)
    .send(productData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(401);
       res.body.should.have.property('Error').eql(strings.users.error.UNABLE_TO_PROCESS);
      done();
});
});
it('user should not  add  product with invalid token', done => {
  chai.request(app)
    .post('/api/v1/products/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${aunothorizedToken}`)
    .send(productData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(403);
       res.body.should.have.property('Error').eql(strings.users.error.AUTHORIZED);
      done();
});
});
});