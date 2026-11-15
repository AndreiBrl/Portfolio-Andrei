'use client';
import React, { useEffect } from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  useEffect(() => {
    console.log("PASSOU POR AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  }, []);

  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingScreen;
