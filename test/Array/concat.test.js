const should = require('chai').should()
const _ = require('../../dist')

describe('concat', function() {
  describe('#Concat()', function() {
    it('should return the correct value', function() {
      const returnArray = _.concat([1,2,3,0],2,[3],[[2,3,5],[[3,4]]])
      
      returnArray.should.be.a('array')
      returnArray.should.have.lengthOf(8)
      returnArray.should.eql([1,2,3,0,2,3,[2,3,5],[[3,4]]])
    })
  })
})