import * as sut from '../format'

test('should format string', () => {
  const result = sut.firstName('John Wick')
  expect(result).toBe('John')
})

test('should clean properties', () => {
  const result = sut.cleanProperties({
    age: undefined,
    distance: 10,
    name: 'John Wick',
    properties: {
      age: undefined,
      distance: 10,
      name: 'John Wick'
    }
  })
  expect(result).toEqual({
    distance: 10,
    name: 'John Wick',
    properties: '{"distance":10,"name":"John Wick"}'
  })
})

test('should return digits only', () => {
  const result = sut.digitsOnly('John Wick 123')
  expect(result).toBe('123')
  expect(result).toMatchSnapshot()
})

describe('currencyFormat', () => {
  it('should format currency', () => {
    const result = sut.currencyFormat(1000)
    expect(result).toBe('R$ 10,00')
    expect(result).toMatchSnapshot()
  })

  it('should format currency R$ 100,00', () => {
    const result = sut.currencyFormat(10000)
    expect(result).toBe('R$ 100,00')
    expect(result).toMatchSnapshot()
  })

  it('should format currency R$ 1.000,00', () => {
    const result = sut.currencyFormat(100000)
    expect(result).toBe('R$ 1.000,00')
    expect(result).toMatchSnapshot()
  })
})

describe('printPhone', () => {
  it('should print phone', () => {
    const result = sut.printPhone('5511999999999')
    expect(result).toBe('(11) 99999-9999')
    expect(result).toMatchSnapshot()
  })

  it('should throw error', () => {
    const error = new Error('invalid phone length')
    expect(() => sut.printPhone('99999')).toThrow(error)
  })
})

describe('formatCpf', () => {
  it('should format cpf', () => {
    const result = sut.formatCpf('12345678909')
    expect(result).toBe('123.456.789-09')
    expect(result).toMatchSnapshot()
  })
})

describe('formatCep', () => {
  it('should format cep', () => {
    const result = sut.formatCep('12345678')
    expect(result).toBe('12345-678')
    expect(result).toMatchSnapshot()
  })
})

describe('compareVersions', () => {
  it('should return true for greater version - 2.0.0 > 1.0.0', () => {
    const result = sut.compareVersions('2.0.0', '>', '1.0.0')
    expect(result).not.toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should return true for greater version - 2.0.0 >= 1.0.0', () => {
    const result = sut.compareVersions('2.0.0', '>=', '2.0.0')
    expect(result).not.toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should return true for greater version - 1.0.0 < 2.0.0', () => {
    const result = sut.compareVersions('1.0.0', '<', '2.0.0')
    expect(result).not.toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should return true for greater version - 1.0.0 <= 2.0.0', () => {
    const result = sut.compareVersions('2.0.0', '<=', '2.0.0')
    expect(result).not.toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should return false for lower version - 1.0.0 > 2.0.0', () => {
    const result = sut.compareVersions('1.0.0', '>', '2.0.0')
    expect(result).toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should return false for lower version - 1.0.0 >= 2.0.0', () => {
    const result = sut.compareVersions('1.0.0', '>=', '2.0.0')
    expect(result).toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should throw for invalid operator - 1.0.0 a 2.0.0', () => {
    const error = new Error('Invalid comparator')
    expect(() => sut.compareVersions('1.0.0', 'a', '2.0.0')).toThrow(error)
  })
})

describe('parseStringToType', () => {
  it('should parse string to type TRUE', () => {
    const result = sut.parseStringToType('TRUE')
    expect(result).not.toBeFalsy()
    expect(result).toMatchSnapshot()
  })
  it('should parse string to type true', () => {
    const result = sut.parseStringToType(true)
    expect(result).not.toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should parse string to type FALSE', () => {
    const result = sut.parseStringToType('FALSE')
    expect(result).toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should parse string to type false', () => {
    const result = sut.parseStringToType(false)
    expect(result).toBeFalsy()
    expect(result).toMatchSnapshot()
  })

  it('should parse string to type 1', () => {
    const result = sut.parseStringToType('1')
    expect(result).toBe('1')
    expect(result).toMatchSnapshot()
  })
})
