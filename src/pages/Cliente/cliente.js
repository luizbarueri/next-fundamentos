import Navegador from '../components/Navegador';
import CadCliente from './components/CadCliente';

export default function Cliente(props) {
   var idCli = 3 //prompt("Digite um ID:")
    return (
        <div>
            <Navegador />
            <CadCliente id = { idCli-3 } />
            <CadCliente id = { idCli-2 } />
            <CadCliente id = { idCli-1 } />
        </div>
    )
}