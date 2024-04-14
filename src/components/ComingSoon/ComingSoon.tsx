import Image from "next/image";
import styles from "./ComingSoon.module.scss";

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h1>Mosher Center</h1>
        <h3>Skin Cancer Center</h3>
        <Image
          src="/images/dr.jpg"
          alt="Dr. J Suzanne Mosher, MD, FAAD"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default ComingSoon;
