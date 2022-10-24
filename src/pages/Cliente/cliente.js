import Navegador from '../components/Navegador';
import CadCliente from './components/CadCliente';

export default function Cliente() {
   var id0 = prompt("Digite um ID 0:");
   var id1 = prompt("Digite um ID 1:");
   var id2 = prompt("Digite um ID 2:");
    return (
        <div>
            <Navegador />
            <CadCliente id = { id0 } />
            <CadCliente id = { id1 } />
            <CadCliente id = { id2 } />
        </div>
    )
}