'use client';
import styles from './home.module.css'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect, useEffect } from 'react';
import { useGSAP } from "@gsap/react"

export default function Teste() {

  const alvo1 = useRef(null)
  const alvo2 = useRef(null)
  const titulo = useRef(null)
  const divtitulo = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.to(titulo.current, {
      color: "red", // Ajuste para o número total de caixas
      ease: "none",
      scrollTrigger: {
        trigger: divtitulo.current,
        start: "top top",
        // horizontal: true,
        // pin: true,
        scrub: 1,
        markers: true,
        end: 'bottom center'

      }
    });


    const totalWidth = alvo1.current.offsetWidth;
    gsap.to(alvo2.current, {
      xPercent: -75, // Ajuste para o número total de caixas
      ease: "none",
      scrollTrigger: {
        trigger: alvo1.current,
        start: "top top",
        pin: true,
        scrub: 1,
        // markers: true,
        end: () => `+=${totalWidth}`, // Define o ponto final com base na largura total do conteúdo
        anticipatePin: 1 // Ajuda a evitar problemas de espaçamento
      }
    });

  });

  return (
    <div className={styles.container2}>

      <div className={styles.bloco1}></div>
      <div className={styles.alvo1} ref={alvo1}>
        <div className={styles.alvo2} ref={alvo2}>
          <div className={`${styles.box} ${styles.blue}`} ref={divtitulo} > <h1 ref={titulo}>AE AE</h1> </div>
          <div className={`${styles.box} ${styles.green}`}>Box 2</div>
          <div className={`${styles.box} ${styles.yellow}`}>Box 3</div>
          <div className={`${styles.box} ${styles.purple}`}> Box 4</div >
        </div >

      </div >
      <div className={styles.bloco1}></div>


    </div >
  )
}