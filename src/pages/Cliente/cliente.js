import Navegador from '../components/Navegador';
import CadCliente from './components/CadCliente';

export default function Cliente() {
   const usuariosID = [0,1,2];
    return (
        <div>
            <Navegador />
            <CadCliente id = {usuariosID[0]}/>
            <CadCliente id = {usuariosID[1]}/>
            <CadCliente id = {usuariosID[2]}/>
        </div>
    )
}