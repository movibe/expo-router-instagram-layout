export const firstName = (name: string) => name?.split(' ')?.[0]

export const cleanProperties = (properties: Record<string, any>) => {
  const clean = {} as Record<string, any>
  Object.keys(properties).forEach(key => {
    if (properties[key] !== undefined) {
      clean[key] = properties[key]
    }
    if (typeof properties[key] === 'object') {
      clean[key] = JSON.stringify(properties[key])
    }
  })
  return clean
}

export const digitsOnly = (string: string) => string.replace(/\D/g, '')

export const replaceUrlValues = (url: string, queryParams: { [key: string]: string }): string => {
  for (const key in queryParams) {
    const pattern = `{${key}}`
    url = decodeURI(url).replace(pattern, queryParams[key])
  }
  return encodeURI(url)
}

export const replaceValues = (text: string, queryParams: { [key: string]: string }): string => {
  for (const key in queryParams) {
    const pattern = `{${key}}`
    text = text.replace(pattern, queryParams[key])
  }
  return text
}

export const currencyFormat = (amount: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  }).format(amount / 100)
}

export const printPhone = (phone: string): string => {
  if (!phone || phone.length < 11) throw new Error('invalid phone length')
  return `(${phone.slice(-11, -9)}) ${phone.slice(-9, -4)}-${phone.slice(-4)}`
}

export const formatCpf = (cpf: string): string =>
  cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

export const formatCep = (cep: string): string => cep.replace(/(\d{5})(\d{3})/, '$1-$2')

export function compareVersions(
  v1: string = '2.0.0',
  comparator: string = '>',
  v2: string = '1.0.0'
): boolean {
  const comparators = ['==', '===', '<', '<=', '>', '>=', '!=', '!==']

  if (!comparators.includes(comparator)) {
    throw new Error('Invalid comparator')
  }

  const v1parts = v1.split('.').map(part => parseInt(part, 10))
  const v2parts = v2.split('.').map(part => parseInt(part, 10))

  for (let i = 0; i < Math.max(v1parts.length, v2parts.length); i++) {
    const part1 = v1parts[i] || 0
    const part2 = v2parts[i] || 0

    if (part1 !== part2) {
      switch (comparator) {
        case '==':
        case '===':
          return false
        case '<':
          return part1 < part2
        case '<=':
          return part1 <= part2
        case '>':
          return part1 > part2
        case '>=':
          return part1 >= part2
        case '!=':
        case '!==':
          return true
      }
    }
  }

  switch (comparator) {
    case '==':
    case '===':
    case '>=':
    case '<=':
      return true
    case '<':
      return false
    case '>':
      return true
    case '!=':
    case '!==':
      return false
    default:
      return false
  }
}

export const parseStringToType = (value: string | boolean): boolean | string => {
  if (typeof value === 'boolean' || typeof value === 'number') return value

  const v = typeof value === 'string' ? value.toLowerCase().toString() : value
  if (v === 'true' || v === 'false') return v === 'true'

  return value
}
