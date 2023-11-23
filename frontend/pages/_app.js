import '../styles/globals.css';
import {NextUIProvider} from "@nextui-org/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {ResponsiveProvider} from "../components/providers/context";


export default function App({Component, pageProps}) {
  return (
      <ResponsiveProvider>
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
      </ResponsiveProvider>
  )
}