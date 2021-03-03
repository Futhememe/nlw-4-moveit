import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/Futhememe.png" alt="profile"/>
      <div>
        <strong>Gustavo Souza</strong>
        <p>
          <img src="icons/level.svg" alt="up"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}