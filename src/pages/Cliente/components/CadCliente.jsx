import style from '../css/cadCliente.module.css'
import db from '../../api/db.json';

//const dados = [JSON.parse(...db)];


export default function CadCliente(props) {
    const dados = JSON.parse(JSON.stringify(db))
    
    const i = 0; //parseInt(props.id);

    const _id = dados[i].id
    const nome = dados[i].nome
    const placa = dados[i].placa
    return (
        <div className={style.div_cad}>
            <span className={style.rotulo}>ID:</span><input type="text" className={style.dados} value={_id}/><br></br>
            <span className={style.rotulo}>Nome:</span><input type="text" className={style.dados} value = {nome}/><br></br>
            <span className={style.rotulo}>Placa:</span><input type="text" className={style.dados} value = {placa}/><br></br>
            <hr></hr>
        </div>
    )
}