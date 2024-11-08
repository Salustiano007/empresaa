import './index.scss';



export default function home(){

    const Div1 = () => <div className='barra'> 
    <a id='revoltadin' className='link' href='#'>Sobre Nós</a>
    <a id='revoltadin2' className='link' href='#'>Orçamento</a>
    <a id='revoltadin3' className='link' href='#'>Contato</a>
    <a id='revoltadin4' className='link' href='#'>Suporte</a>
    <img className='img' src='https://cdn.discordapp.com/attachments/1255626890610213066/1256416740196483083/LOGO.png?ex=6713b005&is=67125e85&hm=6d849073462eebc4e7f4dcfd77c5f32193a3bc865b4940f59fa6e76d6d7f239f&' alt='' />
    </div>

    const Div2 = () =>   <div className='a'>
    <img className='foto' src='https://www.next4.com.br/wp-content/themes/yootheme/cache/25/desenvolvimento-de-sites-2591cf1d.webp' />
    <h1 id='text' className='text'>Planejamento e <br></br> Desenvolvimento de <br></br> Websites</h1>
    </div>

    const Div3 = () => <div className='b'>
        <h1 className='texto'>São mais de 18 anos desenvolvendo projetos Web que geram resultados para as <br></br> empresas. <br></br>Desenvolvimento de Sites focados em Posicionamento da Marca no Google e <br></br> Geração de Leads.
        </h1>
    </div>
    
    const Div4 = () => {
        const numero = '5511947538104'; // Substitua pelo número de destino
        const mensagem = 'Boa Tarde, Gostaria de fazer um orçamento';
  
    // Codifica a mensagem para URL
     const mensagemCodificada = encodeURIComponent(mensagem);
     const urlWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada}`

     return (
        <a href={urlWhatsApp} id='botaoss' className="whats-link" target="_blank" rel="noopener noreferrer">
          Entre em Contato
        </a>
       );
    }
            
    
  
    const Div5 = () => <div className='faixa-verde'> 
        <h1 id='kakaka'>Venha fazer seu <br></br>orçamento!</h1>

        <button id="botaoo" className="contact-button">
                Orçamento para desenvolvimento de sites 
            </button>
    </div>    

    const Div6 = () => <div className='imagem-redonda'>
            <img id='redondo' src='/assets/images/image.png' alt='a'></img>

            <h1 className='textos'>Você vai receber não apenas um <br/> 
                orçamento para o <br/>
                desenvolvimento do sites <br/>
                para sua empresa, mas uma <br/>
                consultoria completa <br/>
                para sua empresa se posicionar <br/>
                corretamente frente ao seu <br/>
                público-alvo. <br/>
                Essa é a nossa proposta! Gerar <br/>
                mais leads qualificados através <br/>
                do site da sua empresa.</h1>
    </div>

    const Div7 = () => <div className='homens'>
               <img className='lalai' id="homens1" src='/assets/images/homenzinhos-removebg-preview.png' alt='a'></img>  
               <h1 className='app'>Nosso núcleo de desenvolvimento <br/>digital chega a qualquer resultado <br/>
               visual. O cliente informa o que deseja e <br/>nós criamos as amostras para a sua <br/>aprovação.</h1>
    </div>
       
       const Div8 = () => <div className='menzinho'>
       <img className='lalau' id="homens1" src='/assets/images/homenzinhos-removebg-preview.png' alt='a'></img>  
       <h1 className='app'>Prazos menores, maior <br/>
       organização, qualidade e níveis <br/> 
       de excelência que somente <br/>
       profissionais especializados
       <br/> podem oferecer. </h1>
       </div>

        const Div9 = () => <div className='calendario'>
        <img className='santos' id="homens1" src='/assets/images/calendario.png' alt='a'></img>  
        <h1 className='app'>Prazos menores, maior <br/>
        organização, qualidade e níveis <br/> 
        de excelência que somente <br/>
        profissionais especializados
        <br/> podem oferecer.</h1>
        </div>

        

        const Div10 = () => <div className='final'>
            <a className='linkk' id='link1' href='#'>Inicio</a>
            <a className='linkk' id='link2' href='#'>Sobre Nós</a>
            <img id='img1' src='/assets/images/logo-empresa.png'/>
           <a className='linkk' id='link3' href='#'>Suporte</a>
           <a className='linkk' id='link4' href='#'>Informações</a>
        </div>

   

  
       
    


    return(
    <>
         <Div1 />
         <Div2 />
         <Div3 />
         <Div4 />
         <Div5 />
         <Div6 />
         <Div7 />
         <Div8 />
         <Div9 />
         <Div10/>
        
        
     </> 
         
)       
}