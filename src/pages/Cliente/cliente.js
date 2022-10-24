import Navegador from '../components/Navegador';
import CadCliente from './components/CadCliente';

export default function Cliente() {
   //const id = prompt("Digite um ID 0 a 2:");
   //var id1 = prompt("Digite um ID 1:");
   //var id2 = prompt("Digite um ID 2:");
    return (
        <div>
            <Navegador />
            <CadCliente id = '0'/>
            {/* <CadCliente />
            <CadCliente /> */}
        </div>
    )
}