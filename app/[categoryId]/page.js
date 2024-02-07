import { PLP } from "../PLP";

import styles from "../page.module.css";

export const dynamic = "force-dynamic";

export default function Home({ params }) {
  return (
    <main className={styles.main}>
      <PLP categoryId={params.categoryId} />
    </main>
  );
}
