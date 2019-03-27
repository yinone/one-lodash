const should = require('chai').should()
const _ = require('../')

describe('compact', function() {
  describe('#Compact()', function() {
    it('should return the correct value', function() {
      const returnArray = _.compact([1,2,3,4,5,6,null,false,'',undefined,NaN,0])
      
      returnArray.should.be.a('array')
      returnArray.should.have.lengthOf(6)
      returnArray.should.eql([1,2,3,4,5,6])
    })
  })
})