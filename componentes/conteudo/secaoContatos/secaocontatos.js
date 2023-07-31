import './secaoContatos.css'
export default function Scontato() {
  return (
    <section className='class-section sect-res-consp'>
      <div className='limitar-secao m'>
        <h3>Fale conosco</h3>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
          Contato
        </p>
      </div>
      <div className='class-diva'>
        <div>
          <h5>Contato</h5>
          <ul className='class-ul'>
            <li className='li'><img src="/assets/local.png" className='img'/> Nova Iguaçu, RJ</li>
            <li className='li'><img src="/assets/telefone.png" className='img'/> (21) 9999-9999</li>
            <li className='li'><img src="/assets/email.png" className='img'/>contato@oticavida.com</li>
          </ul>
        </div>
        <div>
          <h5>Nossas Redes Sociais</h5>
          <ul className='class-ul'>
            <li className='li'><img src="/assets/fb.png" className='img'/> /OticaVida</li>
            <li className='li'><img src="/assets/ig.png" className='img'/> contato@oticavida.com</li>
            <li className='li'><img src="/assets/tt.png" className='img'/> @oticavidarj</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
