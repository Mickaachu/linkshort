import '@/styles/globals.css'
import Layout from '../components/styles/layout/layout.jsx'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
