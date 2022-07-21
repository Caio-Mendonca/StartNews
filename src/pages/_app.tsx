import { AppProps } from "next/app"
import React from "react";
import { Header } from "../components/Header";
import { SessionProvider as NextAuthProvider }  from 'next-auth/react'

import '../styles/global.scss';
function MyApp({ Component, pageProps } : AppProps) {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
    if (loader)
            loader.style.display = 'none';
    }
  }, []);
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <Header/>
        <Component {...pageProps}/>
      </NextAuthProvider>
    </> 
  )
}

export default MyApp
