import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {


    return (
        <div className={styles.container}>
            <div className={styles.sub_container}>
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
                        <div>

                            <h1> Bem vindo, Visitante</h1>
                        </div>
                        <p>Aqui compartilho todas as minhas criações</p>
                    </div>
                    <Image
                        src='/img/katana.png'
                        alt='Logo'
                        width={200}
                        height={200}
                        className={styles.katana}
                    ></Image>
                </div>
            </div>

            <div className={styles.sub_container}>
                <h1 className={styles.title1}>Andrei Barbuto.</h1>
                <div>
                    <div>
                        <div className={styles.teste11}>   <Image
                            src='/img/git.png'
                            alt='Logo'
                            width={200}
                            height={200}
                            className={styles.menuRedesGit}
                        ></Image></div>
                        <div className={styles.teste11}><Image
                            src='/img/wpp.png'
                            alt='Logo'
                            width={200}
                            height={200}
                            className={styles.menuRedesWpp}
                        ></Image></div>
                        <div className={styles.teste11}><Image
                            src='/img/linkedin.png'
                            alt='Logo'
                            width={200}
                            height={200}
                            className={styles.menuRedesWpp}
                        ></Image></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>

                        <h2 className={styles.title1}>バルブト アンドレイ</h2>
                        <h2 className={styles.title1}>Desenvolvedor Web.</h2>
                        <h2 className={styles.title1}>Designer.</h2>
                        <h2 className={styles.title1}>Escritor.</h2>
                    </div>

                </div>
                    <h1 >Projetos</h1>
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


            <div className={styles.sub_container}>

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
                        src='/img/teste.jpeg'
                        alt='Logo'
                        width={200}
                        height={200}
                        className={styles.boxImage}
                    >

                    </Image>
                </div>



            </div>
        </div>
    )
}