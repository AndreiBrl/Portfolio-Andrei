import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {


    return (
        <div className={styles.container}>

            <div className={styles.sub_container}>
                <h1>Andrei Barbuto</h1>
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