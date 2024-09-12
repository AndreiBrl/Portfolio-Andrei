'use client';
import styles from './home.module.css'
import Image from 'next/image'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect } from 'react';
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP);





export default function Home() {

    // animacao titulo vermelho no primeiro sub_container e katana
    const sub_container_1 = useRef(null)
    const tituloVermelho = useRef(null)
    const katana = useRef(null)
    useGSAP(() => {



        gsap.registerPlugin(ScrollTrigger);


        gsap.to(tituloVermelho.current, {
            width: "30vw", // Ajuste para o número total de caixas
            ease: "none",
            scrollTrigger: {
                trigger: sub_container_1.current,
                start: "top top",
                pin: true,
                scrub: 1,
                end: "bottom 200px", // Define o ponto final com base na largura total do conteúdo
                anticipatePin: 1 // Ajuda a evitar problemas de espaçamento
            }
        });
        gsap.to(katana.current, {
            opacity: 1,
            left: "45vw", // Ajuste para o número total de caixas
            ease: "none",

            scrollTrigger: {
                trigger: sub_container_1.current,
                start: "top 100px",

                scrub: 1,
                end: "bottom 50px", // Define o ponto final com base na largura total do conteúdo
                anticipatePin: 1 // Ajuda a evitar problemas de espaçamento
            }
        });

        gsap.fromTo(sub_container_1.current, 
            {
                clipPath: "path('M0,520L60,500C120,480,240,450,360,470C480,490,600,520,720,520C840,520,960,490,1080,490C1200,490,1320,520,1380,530L1440,540L1440,0L0,0Z')"
            }, 
            {
                clipPath: "path('M0,520L60,540C120,560,240,530,360,510C480,490,600,460,720,460C840,460,960,490,1080,490C1200,490,1320,460,1380,450L1440,440L1440,0L0,0Z')",
                scrollTrigger: {
                    trigger: sub_container_1.current,
                    start: "top 100px",
                    scrub: 1,
                    end: "bottom 50px",
                    anticipatePin: 1
                }
            }
        );
        
        
        



    }, []);

    // animacaode rolagem lateral sub_container 2
    const sub_container_2 = useRef()
    const sub_container_2_div = useRef()

    const divTitulos_menuRedes = useRef()
    const titulo_Andrei = useRef()





    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // aplicando split no titulo Andrei
        const split_tituloAndrei = new SplitType(titulo_Andrei.current, { types: 'chars', charClass: 'tituloAndrei' })
        const split_tituloProjetos = new SplitType('.tituloProjetos', { types: 'chars', charClass: 'tituloProjeto' })
        const nomeJapa = new SplitType('.nomeJapa', { types: 'chars', charClass: 'charJapa' })
        const subTitulo = new SplitType('.subTitulo', { types: 'chars', charClass: 'charSubTitulo' })


        gsap.fromTo('.tituloAndrei', {
            y: 50,
            opacity: 0
        }, {
            y: -10,
            opacity: 1,
            stagger: 0.05,
            delay: 0.2,
            ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            scrollTrigger: {
                trigger: '.divTitulos_menuRedes',
                start: "top center",
                scrub: 1,
                end: "bottom 400px",

            }
        });
        // anime nome em japones
        gsap.to('.charJapa', {

            color: "#c03654",
            textShadow: '0 0 5px #c03654, 0 0 10px #c03654, 0 0 15px #c03654',

            stagger: 0.05,
            delay: 0.2,
            ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            scrollTrigger: {
                trigger: '.divTitulos_menuRedes',
                start: "top 200px",
                scrub: 1,
                end: "bottom 300px",

            }
        });
        // anima sub titulos
        gsap.to('.charSubTitulo', {

            color: "white",
            textShadow: '0 0 5px #fff',

            stagger: 0.05,
            delay: 0.2,
            ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            scrollTrigger: {
                trigger: '.divTitulos_menuRedes',
                start: "top center",
                scrub: 1,
                end: "bottom 300px",

            }
        });


        gsap.timeline({
            scrollTrigger: {
                trigger: '.divTitulos_menuRedes',
                start: "top center",
                scrub: 1,
                end: "bottom 450px",

            }
        })
            .fromTo('.quadroMenuRedes', {
                x: -150,
                opacity: 0,
            }, {
                x: -10,
                stagger: 0.05,
                delay: 0.2,

                stagger: 0.1,
                delay: 0.2,
                ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            })
            .to('.quadroMenuRedes', {
                x: 20,
                opacity: 1,
                stagger: 0.05,
                delay: 0.2,
                duration: 1,
            })


            .to('.quadroMenuRedes', {
                stagger: 0.5,
                boxShadow: '0 0 5px #c03654, 0 0 10px #c03654, 0 0 15px #c03654', // Neon intenso
                delay: 0.2,
                duration: 1,
            });


        // animacao div projetos
        gsap.fromTo('.tituloProjeto', {
            y: 50,
            opacity: 0
        }, {
            y: -10,
            opacity: 1,
            stagger: 0.05,
            delay: 0.2,
            ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            scrollTrigger: {
                trigger: '.projetos',
                start: "bottom -500px",
                scrub: 1,
                end: "bottom -800px",

            }
        });


        gsap.timeline({
            scrollTrigger: {
                trigger: '.projetos',
                start: "bottom -500px",
                scrub: 1,
                end: "bottom 800px",

            }
        })
            .fromTo('.home_box__f7Voq', {
                x: -50,
                opacity: 0,
            }, {
                x: -10,
                stagger: 0.09,
                delay: 0.2,

                stagger: 0.1,
                delay: 0.2,
                ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            })
            .to('.home_box__f7Voq', {
                x: 20,
                opacity: 1,
                stagger: 0.09,
                delay: 0.2,
                duration: 1,
            })


            .to('.home_box__f7Voq', {
                stagger: 0.5,
                boxShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white,0 0 20px white', // Neon intenso
                delay: 0.2,
                duration: 1,
            });


        // home_box__f7Voq
        const totalWidth = sub_container_2.current.offsetWidth;
        gsap.to(sub_container_2_div.current, {
            xPercent: -55, // Ajuste para o número total de caixas
            ease: "none",
            scrollTrigger: {
                trigger: sub_container_2.current,
                start: "top top",
                pin: true,
                scrub: 1,
                end: () => `+=${totalWidth}`, // Define o ponto final com base na largura total do conteúdo

            }
        });

    }, []);




    return (
        <div className={styles.container} >
            <div className={styles.sub_container} ref={sub_container_1}>
                {/* <div>
                    <Image
                        src='/img/eu.png'
                        alt='Logo'
                        width={200}
                        height={200}
                        className={styles.imgPerfil}
                    ></Image>
                </div> */}
                <div>
                    <Image
                        src='/img/Aimg.png'
                        alt='Logo'
                        width={200}
                        height={200}
                        className={styles.aImg}
                    ></Image>
                    <div>
                        <div ref={tituloVermelho}>

                            <h1> Bem vindo, Visitante</h1>
                        </div>
                        <p>Aqui compartilho todas as minhas criações</p>
                    </div>
                    <Image
                        ref={katana}
                        src='/img/katana.png'
                        alt='Logo'
                        width={200}
                        height={200}
                        className={styles.katana}
                    ></Image>
                </div>
            </div>

            <div className={styles.sub_container_2} ref={sub_container_2}>
                <div ref={sub_container_2_div}>
                    <div className='divTitulos_menuRedes' ref={divTitulos_menuRedes}>
                        <h1 ref={titulo_Andrei}>Andrei Barbuto.</h1>
                        <div>


                            <div >
                                <div className='quadroMenuRedes' >   <Image
                                    src='/img/git.png'
                                    alt='Logo'
                                    width={200}
                                    height={200}
                                    className={styles.menuRedesGit}
                                ></Image></div>
                                <div className='quadroMenuRedes' ><Image
                                    src='/img/wpp.png'
                                    alt='Logo'
                                    width={200}
                                    height={200}
                                    className={styles.menuRedesWpp}
                                ></Image></div>
                                <div className='quadroMenuRedes'><Image
                                    src='/img/linkedin.png'
                                    alt='Logo'
                                    width={200}
                                    height={200}
                                    className={styles.menuRedesWpp}
                                ></Image></div>
                                {/* <div className='quadroMenuRedes'></div>
                                <div className='quadroMenuRedes'></div>
                                <div className='quadroMenuRedes'></div> */}
                            </div>
                            <div>

                                <h2 className='nomeJapa'>バルブト アンドレイ</h2>
                                <h2 className='subTitulo'>Desenvolvedor Web.</h2>
                                <h2 className='subTitulo'>Designer.</h2>
                                <h2 className='subTitulo'>Escritor.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='projetos'>
                        <h1 className='tituloProjetos'>Projetos</h1>
                        <div>
                            <div className={styles.box}>

                                <Image
                                    src='/img/teste.jpeg'
                                    alt='Logo'
                                    width={200}
                                    height={200}
                                    className={styles.boxImage}
                                >

                                </Image>
                            </div>
                            <div className={styles.box}>

                                <Image
                                    src='/img/teste.jpeg'
                                    alt='Logo'
                                    width={200}
                                    height={200}
                                    className={styles.boxImage}
                                >

                                </Image>
                            </div>
                            <div className={styles.box}>

                                <Image
                                    src='/img/gorila.jpeg'
                                    alt='Logo'
                                    width={200}
                                    height={200}
                                    className={styles.boxImage}
                                >

                                </Image>
                            </div>
                        </div>
                    </div>
                    {/* <div className={`${styles.testeBox} ${styles.yellow}`}>testeBox 3</div>
                    <div className={`${styles.testeBox} ${styles.purple}`}> Box 4</div > */}
                </div >

            </div >
            <div className={styles.bloco1}></div>


            {/* </div > */}

        </div>
    )
}