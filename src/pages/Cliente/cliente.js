import Navegador from '../components/Navegador';
import CadCliente from './components/CadCliente';

export default function Cliente() {
   var id0 = '0';
   var id1 = '1';
   var id2 = '2';  //prompt("Digite um ID:")
    return (
        <div>
            <Navegador />
            <CadCliente id = { id0 } />
            <CadCliente id = { id1 } />
            <CadCliente id = { id2 } />
        </div>
    )
}