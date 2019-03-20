const should = require('chai').should()
const _ = require('../')

describe('chunk', function() {
  describe('#Chunk()', function() {
    it('should return the correct value', function() {
      const chunkArray = _.chunk([1,2,3,4,5,6],5)
      
      chunkArray.should.be.a('array')
      chunkArray.should.have.lengthOf(2)
      chunkArray.should.eql([[1,2,3,4,5], [6]])
    })
  })
})