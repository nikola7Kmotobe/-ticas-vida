import './secaoProduto.css';
export default function Sproduto(){
    return(
    <section className="section-produtos sec-resp sec-resp-dois">
      <div>
            <h2>Nossos produtos</h2>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        </div>
        <div className='limitar-secao margen-class'>
            <div className='class-card class-card-resp'>
                <h3 className='subtitulo-card subtitulo-card-res'>Óculos de grau</h3>
                <img className='foto-card img-res' src="/assets/oculos01.png" alt="produto 1"/>
                <p className='paragrafo-card p-res'>R$ 500,00</p>
            </div>  
            <div className='class-card class-card-resp'>
                <h3 className='subtitulo-card subtitulo-card-res'>Óculos transition</h3>
                <img className='foto-card img-res' src="/assets/oculos02.png" alt="produto 1"/>
                <p className='paragrafo-card p-res'>R$ 750,00</p>
            </div>
            <div className='class-card class-card-resp'>
                <h3 className='subtitulo-card subtitulo-card-res'>Óculos de sol</h3>
                <img className='foto-card img-res' src="/assets/oculos03.png" alt="produto 1"/>
                <p className='paragrafo-card p-res'>R$ 700,00</p>
            </div>
            <div className='class-card class-card-resp'>
            <h3 className='subtitulo-card subtitulo-card-res'>Óculos infantil</h3>
                <img className='foto-card img-res' src="/assets/oculos04.png" alt="produto 1"/>
                <p className='paragrafo-card p-res'>R$ 500,00</p>
            </div>
        </div>
        <div>
            <p>Todos os nossos produtos incluem:</p>
            <ul className='lista-class ul-resp'>
                <li>Garantia de 1 ano</li> 
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade</li>
            </ul>
        </div>
    </section>
    );
}