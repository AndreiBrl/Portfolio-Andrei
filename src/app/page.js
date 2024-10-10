'use client';
import styles from './home.module.css'
import Image from 'next/image'
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useState } from 'react';
import SplitType from 'split-type'
import { Potta_One } from 'next/font/google';
// import { motion } from 'framer-motion';


gsap.registerPlugin(useGSAP);


const potta = Potta_One({
    subsets: ['latin'],
    weight: ['400']
})



export default function Home() {




    // animacao titulo vermelho no primeiro sub_container 
    const sub_container_1 = useRef(null)
    const tituloVermelho = useRef(null)



    useGSAP(() => {


        gsap.registerPlugin(ScrollTrigger);


        gsap.matchMedia().add("(min-width: 768px)", () => {
            // Animação para telas menores (desk)
            gsap.to(tituloVermelho.current, {
                width: "30vw",
                ease: "none",
                scrollTrigger: {
                    trigger: sub_container_1.current,
                    start: "top top",
                    pin: true,
                    scrub: 1,
                    end: "bottom 200px",
                    anticipatePin: 1
                }
            });
        });

        gsap.matchMedia().add("(max-width: 769px)", () => {
            // Animação para telas maiores (mobile)
            gsap.to(tituloVermelho.current, {
                width: "78vw", // Ajuste para desktops
                ease: "none",
                scrollTrigger: {
                    trigger: sub_container_1.current,
                    start: "top top",
                    pin: true,
                    scrub: 1,
                    end: "bottom 500px",
                    anticipatePin: 1

                }
            });
        });

        // gsap.fromTo(sub_container_1.current,
        //     {
        //         clipPath: "path('M0,500L60,480C120,460,240,430,360,450C480,470,600,500,720,500C840,500,960,470,1080,470C1200,470,1320,500,1380,510L1440,520L1440,0L0,0Z')"
        //     },
        //     {
        //         clipPath: "path('M0,500L60,520C120,540,240,510,360,490C480,470,600,440,720,440C840,440,960,470,1080,470C1200,470,1320,440,1380,430L1440,420L1440,0L0,0Z')",
        //         scrollTrigger: {
        //             trigger: sub_container_1.current,
        //             start: "top 100px",
        //             scrub: 1,
        //             end: "bottom 50px",
        //             anticipatePin: 1
        //         }
        //     }
        // );


        // Adicione a classe ou estilo para garantir que o overflow não apareça
        sub_container_1.current.style.overflow = "hidden";








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
        gsap.matchMedia().add("(min-width: 768px)", () => {
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
                    start: "top 50px",
                    scrub: 1,
                    end: "bottom 300px",

                }
            });
        });

        // anime nome em japones
        gsap.matchMedia().add("(max-width: 768px)", () => {
            gsap.to('.charJapa', {

                color: "#c03654",
                textShadow: '0 0 5px #c03654, 0 0 10px #c03654, 0 0 15px #c03654',

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
            // anima sub titulos
            gsap.to('.charSubTitulo', {

                color: "white",
                textShadow: '0 0 5px #fff',

                stagger: 0.05,
                delay: 0.2,
                ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                scrollTrigger: {
                    trigger: '.divTitulos_menuRedes',
                    start: "top 400px",
                    scrub: 1,
                    end: "bottom 300px",

                }
            });
        });

        // anima redes sociais
        gsap.timeline({
            scrollTrigger: {
                trigger: '.divTitulos_menuRedes',
                start: "top center",
                scrub: 1,
                end: "top 10%",

            }
        })
            .fromTo('.quadroMenuRedes', {
                x: -100,
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
        gsap.matchMedia().add("(min-width: 769px)", () => {

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
                    // boxShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white', // Neon intenso
                    delay: 0.2,
                    duration: 1,
                });

        })
        // animacao div projetos
        gsap.matchMedia().add("(max-width: 769px)", () => {

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
                    start: "top center",
                    scrub: 1,
                    end: "top 300px",


                }
            });



            gsap.timeline({
                scrollTrigger: {
                    trigger: '.projetos',
                    start: "top center",
                    scrub: 1,
                    end: "top 200px",

                }
            })
                .fromTo('.home_box__f7Voq', {

                    opacity: 0,
                }, {

                    opacity: 1,
                    stagger: 0.1,
                    delay: 0.2,
                    ease: "none",
                })


        })


        gsap.matchMedia().add("(min-width: 769px)", () => {
            // home_box__f7Voq
            const totalWidth = sub_container_2.current.offsetWidth;
            gsap.to(sub_container_2_div.current, {
                xPercent: -55, // Ajuste para o número total de caixas
                ease: "none",
                scrollTrigger: {
                    trigger: sub_container_2.current,
                    start: "top top",
                    pin: sub_container_2.current,
                    scrub: 1,
                    end: () => `+=${totalWidth}`, // Define o ponto final com base na largura total do conteúdo

                }
            });
        })

        // Removendo todos os ScrollTriggers ao desmontar o componente
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };


    }, []);



    // animacoes subcontainer 3

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);


        // home_sub_container_3__ccy7G

        gsap.timeline({
            scrollTrigger: {
                trigger: '.home_sub_container_3__ccy7G',
                start: "top 50%",
                scrub: 1,
                end: "top 15%",



            }
        })
            .fromTo('.sub_container_3_gradiente', {
                backgroundColor: 'black'
            }, {
                backgroundImage: 'linear-gradient(to right, #64301a 0%, #3f2a1a 10%, #0b0b0b 100%)',
                duration: 3,
                ease: 'none'
            })
            .to('.sub_container_3_gradiente', {
                backgroundImage: 'linear-gradient(to right, #64301a 0%, #3f2a1a 30%, #0b0b0b 100%)',
                duration: 3,
                ease: 'none'
            })
            .to('.sub_container_3_gradiente', {
                backgroundImage: 'linear-gradient(to right, #64301a 0%, #3f2a1a 40%, #0b0b0b 100%)',
                duration: 3,
                ease: 'none'
            })
            .to('.sub_container_3_gradiente', {
                backgroundImage: 'linear-gradient(to right, #64301a 0%, #3f2a1a 50%, #0b0b0b 100%)',
                duration: 3,
                ease: 'none'
            });



        // animation gorila3
        gsap.fromTo('.home_tribosImg__awwvm', {

            opacity: 0
        }, {

            opacity: 1,
            duration: 1,

            ease: "none",
            scrollTrigger: {
                trigger: '.home_sub_container_3__ccy7G',
                start: "top 50%",
                scrub: 1,
                end: "top 15%",



            }
        });
        // animation titulo tribos
        gsap.fromTo('.home_projetoTribos__ngsMJ', {
            scale: 0.5,
            opacity: 0
        }, {

            scale: 1,
            opacity: 1,
            duration: 1,

            ease: "none",
            scrollTrigger: {
                trigger: '.home_sub_container_3__ccy7G',
                start: "top 50%",
                scrub: 1,
                end: "top 15%",


            }
        });
        // animation titulo tribos
        gsap.fromTo('.home_concepTribos__8VPX6', {
            scale: 0.5,
            opacity: 0
        }, {

            scale: 1,
            opacity: 1,
            duration: 1,

            ease: "none",
            scrollTrigger: {
                trigger: '.home_sub_container_3__ccy7G',
                start: "top 40%",
                scrub: 1,
                end: "top 15%",


            }
        });
        // animation titulo tribos
        gsap.fromTo('.home_tecTribos__qm5OJ', {
            scale: 0.5,
            opacity: 0
        }, {

            scale: 1,
            opacity: 1,
            duration: 1,

            ease: "none",
            scrollTrigger: {
                trigger: '.home_sub_container_3__ccy7G',
                start: "top 30%",
                scrub: 1,
                end: "top 15%",



            }
        });


    }, []);

    // animacoes subcontainer 4

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);



        // animation sistemaCesama1
        gsap.fromTo('.sistemaCesama1', {
            opacity: 0,
            y: 200
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "none", // Easing mais suave
            scrollTrigger: {
                trigger: '.home_sub_container_4__UgBRJ',
                start: "top 50%",
                scrub: 0.5, // Suaviza a animação com um scrub menor
                end: "top 5%",
            }
        });

        // animation sistemaCesama2
        gsap.fromTo('.sistemaCesama2', {
            opacity: 0,
            y: 175 // Distância ajustada
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.home_sub_container_4__UgBRJ',
                start: "top 30%",
                scrub: 0.5,
                end: "top top",
            }
        });

        // animation sistemaCesama3
        gsap.fromTo('.sistemaCesama3', {
            opacity: 0,
            y: 100 // Distância ajustada
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.home_sub_container_4__UgBRJ',
                start: "top 25%",
                scrub: 0.5,
                end: "top top",
            }
        });

        // animation sistemaCesama4
        gsap.fromTo('.sistemaCesama4', {
            opacity: 0,
            y: 50 // Distância ajustada
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.home_sub_container_4__UgBRJ',
                start: "top 20%",
                scrub: 0.5,
                end: "top -10%",
            }
        });


    }, []);

    return (
        <div className={styles.container} >
            <div className={styles.sub_container} ref={sub_container_1}>

                <div>

                    <img
                        loading='lazy'
                        src='/img/menCompleto1.png'
                        alt='Logo'
                        // width={300}
                        // height={300}
                        // quality={100}
                        className={styles.imgMen}
                    ></img>
                    <div>
                        <div ref={tituloVermelho}>

                            <h1> Bem vindo, Visitante</h1>
                        </div>
                        <p>Aqui compartilho todas as minhas criações</p>
                    </div>

                </div>
                <div>

                    <h1>SCROLL DOWN</h1>
                    <Image
                        loading='lazy'
                        src='/img/scrowArrow.png'
                        alt=''
                        width={200}
                        height={200}
                        className={styles.scrowArrow}
                    >


                    </Image>
                </div>
            </div>

            <div className={styles.sub_container_2} ref={sub_container_2}>


                <div ref={sub_container_2_div}>
                    <div className='divTitulos_menuRedes' ref={divTitulos_menuRedes}>
                        <h1 ref={titulo_Andrei}>Andrei Barbuto.</h1>
                        <div style={{ display: 'flex' }}>

                            <div >
                                <div className='quadroMenuRedes' title='GitHub' >
                                    <a href='https://github.com/AndreiBrl' target="_blank">

                                        <Image
                                            loading='lazy'
                                            src='/img/github.png'
                                            alt=''
                                            width={200}
                                            height={200}
                                            quality={100}
                                            className={styles.menuRedesGit}

                                        ></Image>
                                    </a></div>
                                <a href="/curriculo.pdf" download>
                                    <div className='quadroMenuRedes' title='Currículo' >
                                        <Image
                                            loading='lazy'
                                            src='/img/curriculo.png'
                                            alt=''
                                            width={200}
                                            height={200}
                                            quality={100}
                                            className={styles.menuRedesWpp}
                                        ></Image>

                                    </div>
                                </a>
                                <div className='quadroMenuRedes' title='Linkedin'>
                                    <a href='https://www.linkedin.com/in/andreibarbuto/' target='blank'>

                                        <Image
                                            loading='lazy'
                                            src='/img/linkedin.png'
                                            alt=''
                                            width={200}
                                            height={200}
                                            quality={100}
                                            className={styles.menuRedesWpp}
                                        ></Image>
                                    </a>

                                </div>
                                {/* <div className='quadroMenuRedes'></div>
                                <div className='quadroMenuRedes'></div>
                                <div className='quadroMenuRedes'></div> */}
                            </div>
                            <div>

                                <h2 className='nomeJapa'>バルブト アンドレイ</h2>
                                <h2 className='subTitulo'>Desenvolvedor Web.</h2>
                                <h2 className='subTitulo'>Escritor.</h2>
                            </div>
                        </div>
                    </div>
                    <div className='projetos'>
                        <h1 className='tituloProjetos'>Projetos</h1>
                        <div>

                            {/* <div className={styles.box}>

                                    <Image
                                        loading='lazy'
                                        src='/img/teste.jpeg'
                                        alt='Logo'
                                        width={200}
                                        height={200}
                                        className={styles.boxImage}
                                    >

                                    </Image>


                                    <div className={styles.infoProjetos}>
                                        <h1>teste</h1>
                                    </div>
                                </div>
                             */}
                            <a href='#sistemaCesama' style={{ textDecoration: 'none', color: 'inherit' }}>

                                <div className={styles.box}>

                                    <Image
                                        loading='lazy'
                                        src='/img/ete_cesama.png'
                                        alt='Logo'
                                        width={200}
                                        height={200}
                                        quality={100}
                                        className={styles.boxImage}
                                    >

                                    </Image>
                                    <div className={styles.infoProjetos}>
                                        <h1>Sistema para Estação de Esgoto</h1>

                                        <div className={styles.btnAcessar}>
                                            <h1>Acessar</h1>
                                        </div>

                                    </div>
                                </div>
                            </a>

                            <a href='#tribos' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className={styles.box}>


                                    <Image
                                        loading='lazy'
                                        src='/img/gorila.jpeg'
                                        alt='Logo'
                                        width={200}
                                        height={200}
                                        className={styles.boxImage}
                                        quality={100}
                                    ></Image>
                                    <div className={styles.infoProjetos}>
                                        <h1>Projeto Tribos Ancestrais</h1>

                                        <div className={styles.btnAcessar}>
                                            <h1>Acessar</h1>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div >

            </div >
            <div className={styles.sub_container_4} id='sistemaCesama'>
                <div className='sub_container_4_gradiente'>
                    <Image
                        loading='lazy'
                        src='/img/cesamaLogo.png'
                        alt='Logo'
                        width={150}
                        height={100}
                        // className={styles.boxImage}
                        quality={100}
                    ></Image>
                    <div>

                        <div className='sistemaCesama1'>
                            <div>

                                <h6 >O Sistema</h6>
                                <h1 >Gerenciamento de Análises </h1>
                            </div>
                            <iframe width="430" height="215" src="https://www.youtube.com/embed/SbKSVSMG33Y?si=eu1nfMV0ejGvk9GO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='sistemaCesama2'>
                            <div>

                                <h1>Visão Geral </h1>
                            </div>
                            <p>O software foi criado para modernizar e agilizar o trabalho dos funcionários das Estações de Tratamento de Esgoto (ETEs) da Cesama, automatizando a análise de amostras e o registro de dados, antes feito manualmente. Com telas intuitivas, painéis de relatórios e filtros de busca avançados, o sistema facilita as atividades diárias, reduz erros e otimiza o tempo de trabalho. Assim, os usuários têm mais dados organizados, maior eficiência e mais tempo para análise.</p>
                        </div>
                        <div className='sistemaCesama3'>

                            <div>

                                <h1>Telas / Funcionalidades </h1>
                            </div>
                            <div>

                                <p><b>Home:</b> Usuário visualiza as rotinas pendentes e os parâmetros ainda não preenchidos. Podendo acessar cada rotina que seja criador para poder editá-la</p>

                                <p><b>Rotinas (Laboratório e Operação):</b> Usuário preenche os dados de forma flexível e dinâmica, podendo criar observações para cada amostra e adicionar colunas conforme necessário. Cada parâmetro possui sua regra de cálculo.</p>

                                <p><b>Consulta de Rotinas:</b> Usuário pode filtrar de forma avançada e acessar facilmente rotinas pendentes ou finalizadas. </p>

                                <p><b>Relatórios:</b> Usuário cria relatórios externos, podendo preenchê-los de forma aleatória e adicionar observações.</p>

                                <p><b>Consulta de Relatórios:</b> Usuário consulta os relatórios já criados atráves de filtros avançados e dinâmicos.</p>

                                <p><b>Rotina Finalizada:</b> Usuário acessa todos os dados da rotina interna e dos relatórios externos, permitindo comparações e análise simples de dados. (em desenvolvimento).</p>

                            </div>
                        </div>
                        <div className='sistemaCesama4'>

                            <div>

                                <h1>Tecnologias / FrameWorks</h1>
                            </div>
                            <div>

                                <p><b>Python:</b> Utilizada no backend para construir a lógica do sistema de forma eficiente e escalável.</p>

                                <p><b>Django:</b> Framework web que permite o desenvolvimento interativo e ágil, facilitando a criação de aplicações robustas.</p>

                                <p><b>HTML/CSS:</b> Linguagens essenciais para a marcação e estilização do conteúdo, proporcionando uma interface visual atraente e responsiva.</p>

                                <p><b>JavaScript:</b> Usada para manipulação do DOM e chamadas assíncronas ao backend, permitindo interações dinâmicas na interface do usuário.</p>

                                <p><b>Git:</b> Sistema de versionamento de código que possibilita o controle de alterações e colaboração eficiente entre desenvolvedores.</p>

                                <p><b>SQL Server:</b> Banco de dados relacional utilizado para armazenar e gerenciar dados de maneira segura e eficiente.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.sub_container_3} id='tribos'>

                <div className='sub_container_3_gradiente'>

                    {/* <h1  className={potta.className}>
                        TRIBOS ANCESTRAIS
                    </h1> */}
                    <img
                        loading='lazy'
                        src='/img/gorila3.png'
                        alt='Logo'
                        className={styles.tribosImg}
                    ></img>
                    <div className={styles.infosGeraisTribos}>
                        <div className={styles.projetoTribos}>
                            <h6 >O Projeto</h6>
                            <h1 >TRIBOS ANCESTRAIS</h1>

                        </div>
                        <div>

                            {/* <div className={styles.introTribos}>
                                <h1 className={potta.className}>Introdução</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet pretium condimentum. Ut rhoncus faucibus tortor, ut rutrum lectus feugiat sed. Aliquam non sem nisi. Fusce vitae ipsum efficitur, tincidunt elit ut, semper felis. Nullam finibus arcu elit. Vivamus nec rhoncus nisi. Suspendisse potenti. </p>
                            </div> */}
                            <div className={styles.concepTribos}>
                                <h1 className={potta.className}>Concepção e Futuro</h1>
                                <p> O projeto Tribos Ancestrais é uma obra literária de Ficção Científica em construção escrita por mim, a obra é
                                    baseada em toda cultura geek que já vivencei até hoje. A concepção da ideia se deu 2022 onde comecei a escrever de fato.
                                    No final do ano de 2023 decidi divulgar alguns capítulos e para isso iniciei a construção em React.<br></br> <br></br>  O futuro do projeto agora tomará novos rumos, o site será refeito utilizando tecnologias melhores para acomodação de imagens vizando desempenho e usabilidade. Além disso, um novo design de leitura será criado para que os usuários possam ler com facilidade tanto pelo celular quanto pelo computador.  </p>
                            </div>
                        </div>
                        <div className={styles.tecTribos}>
                            <h1 className={potta.className}>Tecnologias </h1>
                            <div>

                                <p> - React</p>
                                <p> - React Reader (descontinuado) </p>
                                <p> - Next (Implementando)</p>
                                <p> - Gsap(Implementando) </p>
                                <p> - Git</p>
                                <p> - Adobe Photoshop</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* </div > */}

        </div>
    )
}