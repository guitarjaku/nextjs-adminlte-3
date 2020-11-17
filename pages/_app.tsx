import App from "next/app";
import Head from "next/head";
import AdminHOC from "../components/layouts/admin.hoc";
import { CounterProvider } from "../store/CounterProvider";
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

    if (router.asPath === "/login") {
      return (
        <>
          <Head>
            <title>Website</title>
          </Head>
          <Component {...pageProps} />
        </>
      );
    } else {
      return (
        <AdminHOC>
          <Head>
            <title>Website</title>
          </Head>
          <CounterProvider>
            <Component {...pageProps} />
          </CounterProvider>
        </AdminHOC>
      );
    }
  }
}
