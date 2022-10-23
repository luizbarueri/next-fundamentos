import Image from 'next/image';
import styles from '../css/Quadro.module.css';

export default function Quadro(props) {
    
    return (
        <>
        <section className={styles.quadro}>
            <span className={styles.span_txt}>{props.titulo}</span>
            <div className={styles.div_quadro}>
                <Image className={styles.logo}
                    // Absolute URL
                    src={props.foto}
                    alt='Logo Comida'
                    width={200}
                    height={200}
                />
            </div>
            <span className={styles.span_txt}>{props.preco}</span>
        </section>
        </>
        
    )
}