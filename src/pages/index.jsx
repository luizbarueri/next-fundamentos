import Image from 'next/image';
import Navegador from './components/Navegador';
import Quadro from './components/Quadro';
import styles from './Estiloso.module.css';

export default function Home() {
    return (
        <div className={styles.body}>
            <Navegador />
            <header className={styles.header}>
                <div>
                    <Image className={styles.logo}
                        // Absolute URL
                        src='/img/logo.png'
                        alt='Logo Moto'
                        width={200}
                        height={200}
                    />
                </div>
                <h1 className={styles.titulo}>Enduro Racing</h1>

            </header>
           <section>
                <Quadro titulo = "Comida caseira" foto = '/img/comida.png' preco = "20,00"/>
                <Quadro titulo = "Qrcode" foto = "/img/qrcode.png" preco="15,56" />
           </section>
        </div>
        
    )
}