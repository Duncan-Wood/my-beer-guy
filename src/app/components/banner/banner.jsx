import Image from "next/image";
import styles from "./banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.container}>
      {/* left half */}
      <Link href="/">
        <div className={styles.name}>
          <Image
            src="/mybeerguylogo.svg"
            width={75}
            height={75}
            alt="My Beer Guy Logo"
            priority
          />
          <h1>My Beer Guy</h1>
        </div>
      </Link>

      {/* right half */}
      <div>
        <ul className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {/* <Link href="/">Wholesale</Link> */}
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
