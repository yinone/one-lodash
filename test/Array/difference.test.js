const should = require('chai').should()
const _ = require('../../dist')

describe('difference', function() {
  describe('#Difference()', function() {
    it('should return the correct value', function() {
      const returnArray = _.difference([1,2,3,4])
      const fillArray = _.difference([1,2,3,4, -0], [0])
      const anotherArr = _.difference([1,2,3,4], [1, 2])
      const noFillArr = _.difference([1,2,3,4], [1,2,3,4,5])

      returnArray.should.be.a('array')
      returnArray.should.have.lengthOf(4)
      returnArray.should.eql([1, 2, 3, 4])

      fillArray.should.eql([1,2,3,4])
      anotherArr.should.eql([3, 4])
      noFillArr.should.eql([])
    })
  })
})