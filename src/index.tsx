import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import {App} from './App'

import { Provider } from 'react-redux'

import { store } from './store'

const MOUNT_POINT = document.getElementById('root')

try {
  if (!MOUNT_POINT) {
    throw new Error('#root mount point not found')
  }

  const root = ReactDOM.createRoot(MOUNT_POINT)
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
} catch (error) {
  console.error((error as Error).message);
}
