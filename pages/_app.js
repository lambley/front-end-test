// custom app wrapper to include boostrap globally
// see here for more details: https://nextjs.org/docs/basic-features/built-in-css-support
import 'bootstrap/dist/css/bootstrap.css';
import '/public/static/css/index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const _App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default _App;
