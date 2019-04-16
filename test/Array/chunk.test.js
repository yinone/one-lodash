const should = require('chai').should()
const _ = require('../../dist')

describe('chunk', function() {
  describe('#Chunk()', function() {
    it('should return the correct value', function() {
      const returnArray = _.chunk([1,2,3,4,5,6],5)
      
      returnArray.should.be.a('array')
      returnArray.should.have.lengthOf(2)
      returnArray.should.eql([[1,2,3,4,5], [6]])
    })
  })
})