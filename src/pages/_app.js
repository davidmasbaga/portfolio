import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import {Roboto} from '@next/font/google'
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'],weight: ['400','700'] })

export default function App({ Component, pageProps }) {
  return (
  <>
 <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>


<NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  </>
  )
}
