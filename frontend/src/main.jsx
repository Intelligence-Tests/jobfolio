import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ClerkProvider } from '@clerk/clerk-react'
const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env
const publishableKey = VITE_CLERK_PUBLISHABLE_KEY;

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Toaster />
        </PersistGate>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)

