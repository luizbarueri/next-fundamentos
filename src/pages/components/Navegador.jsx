import Link from 'next/link'
import style from '../css/Navegador.module.css'

export default function Navegador(props) {

    return (
        <div className={style.menu_bar}>
            <Link href = '/' status = {true}> Home</Link>
            <Link href = '/Cliente/cliente' status = {true}>Cliente</Link>
            <Link href = '/sobre/sobre' status = {true}> Sobre</Link>
            <Link href = '/estoque/produtos' status = {true}>Produtos</Link>
            <Link href = '/mapa3d.html' status = {true}>Mapa 3D</Link>
            <Link href = '/meumapa.html' status = {true}>Meu Mapa</Link>

        </div>
    )
    
}