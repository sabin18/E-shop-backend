import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';
import userData from './mockData/userData'
import salesData from './mockData/salesData'
import generateToken from '../helpers/generateToken';
import strings from '../Utils/strings'

chai.should();
chai.use(chaiHttp);
const userToken = generateToken(userData.userData1);
const invalidToken ='bvnvnvnvnvnv';

describe('sales Test',()=>{

it('user should not add cart with quantity greater than in stock', done => {
        chai.request(app)
          .post('/api/v1/sales/list/d08a096f-6536-4507-aeca-f18f8234129f')
          .set('Authorization', `Bearer ${userToken}`)
          .send(salesData.largeQuantity)
          .end((error, res) => {
             res.should.have.property('status').eql(400);
            done();
});
}); 

it('user should add cart', done => {
    chai.request(app)
      .post('/api/v1/sales/list/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(salesData.validData)
      .end((error, res) => {
         res.should.have.property('status').eql(201);
        done();
});
});

it('user should get cart', done => {
  chai.request(app)
    .get('/api/v1/sales/list/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${userToken}`)
    .end((error, res) => {
       res.should.have.property('status').eql(200);
      done();
});
});
it('user should not add cart with missing field', done => {
  chai.request(app)
    .post('/api/v1/sales/list/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${userToken}`)
    .send(salesData.WithMissingField)
    .end((error, res) => {
       res.should.have.property('status').eql(400);
      done();
});
});

it('user should not add sales with missing field', done => {
    chai.request(app)
      .post('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(salesData.WithMissingField)
      .end((error, res) => {
         res.should.have.property('status').eql(400);
        done();
  });
  });

  it('user should not add cart with quantity greater than in stock', done => {
    chai.request(app)
      .post('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(salesData.largeQuantity)
      .end((error, res) => {
         res.should.have.property('status').eql(400);
        done();
  });
  });

it('user should not add two cart  of same product', done => {
    chai.request(app)
      .post('/api/v1/sales/list/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(salesData.validData)
      .end((error, res) => {
         res.should.have.property('status').eql(409);
        done();
  });
  });

it('user should not add cart with aunothorized token', done => {
  chai.request(app)
    .post('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${invalidToken}`)
    .send(salesData.validData)
    .end((error, res) => {
       res.should.have.property('status').eql(401);
       res.body.should.have.property('Error').eql(strings.users.error.UNABLE_TO_PROCESS);
      done();
});
});
it('user should not add sales with aunothorized token', done => {
    chai.request(app)
      .post('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${invalidToken}`)
      .send(salesData.validData)
      .end((error, res) => {
         res.should.have.property('status').eql(401);
         res.body.should.have.property('Error').eql(strings.users.error.UNABLE_TO_PROCESS);
        done();
  });
  });

  it('user should add sales', done => {
    chai.request(app)
      .post('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f')
      .set('Authorization', `Bearer ${userToken}`)
      .send(salesData.validData)
      .end((error, res) => {
         res.should.have.property('status').eql(201);
        done();
});
}); 
it('user should get sales', done => {
  chai.request(app)
    .get('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${userToken}`)
    .end((error, res) => {
       res.should.have.property('status').eql(200);
      done();
});
}); 
it('user should get single sales', done => {
  chai.request(app)
    .get('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f/a2ebd737-9faf-4996-b75c-f84db8e8fed7')
    .set('Authorization', `Bearer ${userToken}`)
    .end((error, res) => {
       res.should.have.property('status').eql(200);
      done();
});
}); 
it('user should not get single sales', done => {
  chai.request(app)
    .get('/api/v1/sales/d08a096f-6536-4507-aeca-f18f8234129f/d08a096f-6536-4507-aeca-f18f8234129f')
    .set('Authorization', `Bearer ${userToken}`)
    .end((error, res) => {
       res.should.have.property('status').eql(404);
      done();
});
}); 
});