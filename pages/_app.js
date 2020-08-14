import '../style/reset.css';
import '../style/bootstrap-grid.min.css';
import '../style/style.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
