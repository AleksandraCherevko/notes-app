import Link from 'next/link';
import css from './not-found.module.css'

const NotFound = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h1 className={css.title}>404</h1>
        <p className={css.text}>
          Sorry, the page you&#39;re looking for doesn&#39;t exist.
        </p>
        <Link href="/" className={css.button}>
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
