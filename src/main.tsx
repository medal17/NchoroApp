import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </BrowserRouter>
)
