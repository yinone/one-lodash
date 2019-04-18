const should = require('chai').should()
const _ = require('../../dist')

describe('fill', function() {
  describe('#Fill()', function() {
    it('should return the correct value', function() {
      const returnArray = _.fill([1,2,3,0], '*', 1, 2)
      const fillArray = _.fill([1,2,3,4], '*')
      const anotherArr = _.fill([1,2,3,4], {name: 'eleven'}, 2, 1)

      returnArray.should.be.a('array')
      returnArray.should.have.lengthOf(4)
      returnArray.should.eql([1, '*', 3, 0])

      fillArray.should.eql(['*', '*', '*', '*'])

      anotherArr.should.eql([])
    })
  })
})