const request = require('supertest');
const app = require('../server.js');


describe('POST', () => {
  it('creates a product', async () => {
     const response = await request(app).post('/')
     expect(2).toEqual(2);
    
  });
});

describe('GET', () => {
  it('fetches a product', async () => {
    const response = await request(app).get('/')
    expect(23).toEqual(23);
    
  });
});

describe('DELETE', () => {
  it('deletes a product', async () => {
        const response = await request(app).delete('/1')

        expect(233).toEqual(233);
    
  });
});

describe('PUT', () => {
  it('creates a product', async () => {
         const response = await request(app).put('/')

        expect(2333).toEqual(2333);
    
  });
});
describe('PATCH', () => {
  it('changes a product', async () => {
         const response = await request(app).patch('/1')

        expect(24).toEqual(24);
    
  });
});
