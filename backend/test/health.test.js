const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Health endpoint', () => {
  it('GET /api/health should return ok', (done) => {
    chai.request(server)
      .get('/api/health')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status', 'ok');
        done();
      });
  });
});
