import globalscss from './globals.css'
import ReduxProvider from "../redux/redux_client_component"
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Montserrat font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-montserrat">
        <ReduxProvider>
          {children}
        </ReduxProvider>
        </body>
    </html>
  )
}