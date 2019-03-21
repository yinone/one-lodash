const should = require('chai').should()
const _ = require('../')

describe('compact', function() {
  describe('#Compact()', function() {
    it('should return the correct value', function() {
      const compactArray = _.compact([1,2,3,4,5,6,null,false,'',undefined,NaN,0])
      
      compactArray.should.be.a('array')
      compactArray.should.have.lengthOf(6)
      compactArray.should.eql([1,2,3,4,5,6])
    })
  })
})