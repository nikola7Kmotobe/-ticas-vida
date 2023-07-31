import './topo.css'
import './topo.css';
export default function Topo(){
    return(
        <header className='topo limitar-secao'>
           <div className='limitar-secao topo_2 topo-res'>
                <div>
                    <img src='assets/logo.png' alt="Example" className='logo'/>
                </div>
                <div>
                    <ul>
                        <li><a href="">PRODUTOS</a></li>
                        <li><a href="">SOBRE</a></li>
                        <li><a href="">CONTATO</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}