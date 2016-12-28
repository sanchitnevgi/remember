import { generate } from 'shortid'

const makeTodo = text => ({ id: generate(), text, completed: false })

export { makeTodo }
