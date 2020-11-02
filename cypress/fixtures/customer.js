const basicCustomer = properties => {
  const customer = {
    email: 'some.email@test.eu',
    phone: '+49500500500'
  }

  return { ...customer, ...properties }
}

const extendedCustomer = properties => {
  const customer = basicCustomer({
    additionalProperties: 'some test value'
  })

  return { ...customer, ...properties }
}

module.exports = {
  basicCustomer,
  extendedCustomer
}
