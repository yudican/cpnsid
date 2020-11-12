import Document, { Head, Html, Main, NextScript } from "next/document";
import { color } from "../config/color";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    let props = { ...initialProps };
    console.log(props);
    return props;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />
          <link rel="stylesheet" href="/static/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/assets/css/atlantis.css" />
          <link rel="stylesheet" href="/static/assets/css/styles.css" />
          {/* <link rel="stylesheet" href="/static/assets/css/main.css" /> */}

          {/* font */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
            rel="stylesheet"
          />

          <title>React</title>
          <script
            type="text/javascript"
            src="/static/assets/js/core/jquery.3.2.1.min.js"
          ></script>

          <script
            type="text/javascript"
            src="/static/assets/js/core/popper.min.js"
          ></script>

          <script
            type="text/javascript"
            src="/static/assets/js/core/bootstrap.min.js"
          ></script>

          <script
            type="text/javascript"
            src="/static/assets/js/plugin/jquery-ui-1.12.1.custom/jquery-ui.min.js"
          ></script>

          <script
            type="text/javascript"
            src="/static/assets/js/plugin/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js"
          ></script>

          <script
            type="text/javascript"
            src="/static/assets/js/plugin/bootstrap-toggle/bootstrap-toggle.min.js"
          ></script>

          <script
            type="text/javascript"
            src="/static/assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js"
          ></script>

          <script
            type="text/javascript"
            src="/static/assets/js/atlantis.min.js"
          ></script>
          <script
            type="text/javascript"
            src="/static/assets/js/demo2.js"
          ></script>
          <script
            type="text/javascript"
            src="/static/assets/js/plugin/datatables/datatables.min.js"
          ></script>
          
        </Head>
        <body style={{ backgroundColor: color.GREY }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
