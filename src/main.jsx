import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LikedQuotes from './components/LikedQuotes.jsx'

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/likedquotes",
    element: <LikedQuotes />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>,
)
