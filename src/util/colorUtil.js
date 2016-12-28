import colorString from 'color-string'

const constrain = (start, value, end) => Math.max(start, Math.min(value, end))

function *getColor() {
  const start = 40, jump = 8
  let i=0
  while(true) {
    yield colorString.to.hex([0, constrain(start, start + i++*jump, 180), 0])
  }
}

export default getColor
