import styles from "./Cars.module.css";

const Cars = () => {
  return (
    <>
      <div id={styles.ferrari}>
        <h2>Ferrari 458</h2>
        <p>R$2,1 milhões</p>
        <p>Motor: 570 cavalos</p>
      </div>
      <div id={styles.civic}>
        <h2>Civic 2008</h2>
        <p>R$42 milhões</p>
        <p>Motor: 350 cavalos</p>
      </div>
      <div id={styles.sentra}>
        <h2>Sentra 2016</h2>
        <p>R$35 milhões</p>
        <p>Motor: 320 cavalos</p>
      </div>
    </>
  );
};

export default Cars;
