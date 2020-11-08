import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }

   render() {
      return (
         <Html>
            <Head>
               <link rel="stylesheet" type="text/css" href="https://js.api.here.com/v3/3.0/mapsjs-ui.css?dp-version=1526040296" />
               <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js" type="text/javascript" charSet="utf-8"></script>
               <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js" type="text/javascript" charSet="utf-8"></script>
               <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"></script>
               <script type="text/javascript" src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"></script>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument