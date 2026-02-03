import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFoundPage() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.subtitle}>
          The page you are looking for does not exist or was moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" prefetch={false}>Go home</Link>
          <Link href="/dashboard" prefetch={false}>
            Open dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
