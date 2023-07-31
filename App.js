import './App.css';
import Topo from './componentes/topo/topo';
import Conteudo_principal from './componentes/conteudo';
import Rodape from './componentes/rodape/rodape';
function App() {
  return (
    <div>
      <Topo />      
      <Conteudo_principal />
      <Rodape />
    </div>
  );
}

export default App;
