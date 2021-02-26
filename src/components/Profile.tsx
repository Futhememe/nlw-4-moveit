import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/Futhememe.png" alt="profile"/>
      <div>
        <strong>Gustavo Souza</strong>
        <p>
          <img src="icons/level.svg" alt="up"/>
          Level 1
        </p>
      </div>
    </div>
  );
}