import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="/static/plugins/fontawesome-free/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
          <link rel="stylesheet" href="/static/dist/css/adminlte.min.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
            rel="stylesheet"
          />

          <script src="static/plugins/jquery/jquery.min.js"></script>
          <script src="static/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="static/dist/js/adminlte.js"></script>
        </Head>
        <body className="hold-transition sidebar-mini sidebar-collapse">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
