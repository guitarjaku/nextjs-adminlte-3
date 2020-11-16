import App from "next/app";
import Head from "next/head";
import AdminHOC from "../components/layouts/admin.hoc";
// import NProgress from "nprogress";

// NProgress.configure({
//   showSpinner: false,
// });

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => {
//   window.scrollTo(0, 0);
//   NProgress.done();
// });
// Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    console.log(router.pathname);

    return (
      <AdminHOC>
        <Head>
          <title>Website</title>
        </Head>
        <Component {...pageProps} />
      </AdminHOC>
    );
  }
}
