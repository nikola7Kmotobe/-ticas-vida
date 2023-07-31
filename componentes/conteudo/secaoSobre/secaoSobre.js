import './secaoSobre.css'
export default function Ssobre() {
  return (
    <section className="secaoSobre sect-resp sec-resp-dois-">
      <h3 className='subtitulo-class-res'>QUEM SOMOS NÓS?</h3>
        <p className="parag-class parag-class-res">
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo. Nossas Filiais Hoje temos mais
          de 20 filiais pelo Brasil e na América Atendimento flexível Nossa
          equipe possui é treinada para te atender
        </p>
      <div className="limitar-secao cards-sobre cards-resp-2">
            <div className='cards cards-img'>
                <img src="/assets/loja.png" alt="imagem de remedios" className='img-sobre'/>
            </div>
            <div  className='cards cards_alinhamento card-res cards-img'>
                <h3 className='subtitulo-class subtitulo-class-res'>Nossas Filiais</h3>
                <p className='p-class parag-class-res'>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>
         <div  className='cards cards_alinhamento card-res cards-img'>
                <h3 className='subtitulo-class subtitulo-class-res'>Atendimento flexível</h3>
                <p className='p-class parag-class-res'>Nossa equipe possui é treinada para te atender</p>
            </div>
            <div  className='cards cards-img'> 
                <img src="/assets/atendimento.png" alt="Moça atendendo" className='img-sobre'/>
            </div>
           
      </div>
    </section>
  );
}
