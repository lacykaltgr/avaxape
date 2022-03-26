import ErrorBoundary from '../components/error-boundary/ErrorBoundary'
import { AuthProvider } from '../context/auth/authContext'
import { AvaxApeProvider } from '../context/avaxape/avaxapeContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AvaxApeProvider>
          <Component {...pageProps} />
        </AvaxApeProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default MyApp
