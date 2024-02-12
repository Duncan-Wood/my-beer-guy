import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
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
      <div >
        <ul className={styles.links}>
          <li>Home</li>
          <li>About</li>
          {/* <li>Wholesale</li> */}
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
