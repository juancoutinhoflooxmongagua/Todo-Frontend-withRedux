import { combineReducers } from 'redux'

const todo = (state = { desc: 'ler livro', list: [{ _id: 1, desc: 'pagar fatura', done: true }] }, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer
