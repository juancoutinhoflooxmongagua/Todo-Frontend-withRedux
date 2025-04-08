import React from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './main/App'
import reducers from './main/reducers'

const store = createStore(reducers)
const root = createRoot(document.getElementById('app'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
