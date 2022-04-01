import React from 'react'
import Head from 'next/head'
import HeaderInfo from '../header/HeaderInfo'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import { useAuthContext } from '../../context/auth/authContext'
import { ACCOUNTS_ERROR } from '../../context/auth/authReducer'

import styles from './Layout.module.scss'

export default function Layout({
  children,
  pageImage,
  pageTitle,
  pageDescription,
}) {
  const imageUrl = pageImage || ''
  const { authState } = useAuthContext()

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }
    return child
  })

  const hasAccountError = authState.status === ACCOUNTS_ERROR || authState.error

  return (
    <div className={styles.layout} style={{
      backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
   backgroundSize: "cover",
    backgroundPosition: "0% 0%"}}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta name="og:title" content={pageTitle} />
        <meta name="og:description" content={pageDescription} />
        <meta name="twitter:card" content="summary_large_image" />
         <link rel="icon" href="/apebase.png" />
      </Head>
      <HeaderInfo />
      <Header />

      <main className={styles.layoutMain}>
        {childrenWithProps}
      </main>
      

      <Footer />
    </div>
  )
}
