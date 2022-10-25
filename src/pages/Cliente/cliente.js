import Navegador from '../components/Navegador';
import CadCliente from './components/CadCliente';

export default function Cliente(props) {
   //const usuariosID = props.id; //[0,1,2];
    return (
        <div>
            <Navegador />
            <CadCliente id = '2' />
            <CadCliente id = '0'/>
            <CadCliente id = '1'/>
        </div>
    )
}