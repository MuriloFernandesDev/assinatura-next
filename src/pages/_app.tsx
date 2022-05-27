import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { Content } from '../components/Content'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <Content/>
  <Footer/>
  <Component {...pageProps} />
  </>
}

export default MyApp
