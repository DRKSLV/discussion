import App from 'next/app';
import "../style/global.sass";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  export default MyApp
  