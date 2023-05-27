import styles from "../styleComponents/Main.module.css";
export const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.myH1}>Главная</h1>
      <p className={styles.myP}>
        в задании не указано, что отображать на этой странице
      </p>
    </div>
  );
};
