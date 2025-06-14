import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './api/queryConfig.ts'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
