import styles from "./ComingSoon.module.scss";

const ComingSoon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image} />
      <div className={styles.info}>
        <h1>Mosher Center</h1>
        <h4>Mohs and Dermatologic Surgery</h4>
        <p>Coming July 2024</p>
      </div>
    </div>
  );
};

export default ComingSoon;
