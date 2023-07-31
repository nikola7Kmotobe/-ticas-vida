import SecaoCapa from "./secaoCapa/secaoCapa";
import Sproduto from "./secaoProduto/secaoProduto";
import Ssobre from "./secaoSobre/secaoSobre";
import Scontato from "./secaoContatos/secaocontatos";

export default function Conteudo_principal(){
    return(
        <main>
            <SecaoCapa />
            <Sproduto />
            <Ssobre />
            <Scontato />
        </main>
    );
}