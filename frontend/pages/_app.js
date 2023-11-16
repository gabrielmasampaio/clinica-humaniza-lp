import '../styles/globals.css';
import {NextUIProvider} from "@nextui-org/react";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function App({Component, pageProps}) {
  return (
      <NextUIProvider>
          <Component {...pageProps} />
      </NextUIProvider>
  )
}