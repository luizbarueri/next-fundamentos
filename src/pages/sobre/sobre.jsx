import Navegador from '../components/Navegador'
import style from './css/Sobre.module.css';

export default function Sobre() {
    var lista = []
    const teste = () =>  {
        for (var i = 0; i < 10; i++) {
            lista.push(i)
            
        }
        return lista
    }

    return (
        <>
            <Navegador />
            {/* <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/luizbarueri/cl94p0rdr000w14tmir971tpm.html?title=false&access_token=pk.eyJ1IjoibHVpemJhcnVlcmkiLCJhIjoiY2t3cW92czJmMG1yejJ4cWd4eTV6Z2FpZiJ9.BpYTVqy6xGXSrUGTHKEF8g&zoomwheel=false#2/20/0" title="Satellite Streets" style="border:none;"></iframe> */}

            <div style = {{
                display:'block',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <p className={style.p_texto}>Esta página é sobre Next e React</p>
    
                <p className={style.p_texto}>{teste()}</p>
                <p>Cade o mapa??</p>
            </div>
        </>
        
    )
}