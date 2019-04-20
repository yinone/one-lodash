const should = require('chai').should()
const _ = require('../../dist')

describe('drop', function() {
  describe('#Drop()', function() {
    it('should return the correct value', function() {
      const returnArray = _.drop([1,2,3,4])
      const fillArray = _.drop([1,2,3,4], 0)
      const anotherArr = _.drop([1,2,3,4], 5)
      const noFillArr = _.drop([1,2,3,4], -1)

      returnArray.should.be.a('array')
      returnArray.should.have.lengthOf(3)
      returnArray.should.eql([2, 3, 4])

      fillArray.should.eql([1,2,3,4])
      anotherArr.should.eql([])
      noFillArr.should.eql([])
    })
  })
})