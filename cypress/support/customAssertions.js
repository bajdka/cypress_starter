const removeCurrencySymbol = (priceString) => {
  const value = priceString.replace(/$/g, '')
  return value
}

const isPriceCorrect = (_chai, utils) => {
  function assertPrice(expectedString) {
    const element = this._obj
    const actual = removeCurrencySymbol(element.text())
    const expected = expectedString

    this.assert(
      actual === expected,
      'expected #{this} to have price #{exp}, but the price was #{act}',
      'expected #{this} not to have price #{exp}',
      expected,
      actual,
    )
  }

  _chai.Assertion.addMethod('price', assertPrice)
}

chai.use(isPriceCorrect)
