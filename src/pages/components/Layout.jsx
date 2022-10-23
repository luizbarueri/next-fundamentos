import Image from 'next/image';
import style from '../css/layout.module.css';
import Link from 'next/link'

export default function Layout(props) {

    return (
        <div className={style.layout}>
            <div className={style.cabecalho}>
                <h1>{props.titulo ?? 'Falta titulo em props'}</h1>
                <Link href = '/index.html'>Comprar</Link>
            </div>
            <div className={style.conteudo}>
                <Image src='/img/logo.png' alt="Logo" height={200} width={200}></Image>
                {props.children}
            </div>
        </div>
    )
}