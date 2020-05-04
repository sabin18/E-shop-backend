import chai from 'chai';
import chaiHttp from 'chai-http';
import app from  '../index';
import { describe, it } from 'mocha';

chai.should();
chai.use(chaiHttp);

describe('admin Test',()=>{
it('admin should view all user', done => {
    chai.request(app)
      .get('/api/v1/auth/users')
      .end((error, res) => {
         res.should.have.property('status').eql(200);
         res.body.should.have.property('message').eql('all users!');
        done();
});
});
});