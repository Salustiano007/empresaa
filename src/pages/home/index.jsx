import './index.scss';



export default function home(){

    const Div1 = () => <div className='barra'>   <a  className='link' href='#'>Sobre Nós</a>
    <a  className='link' href='#'>Orçamento</a>
    <a  className='link' href='#'>Contato</a>
    <a  className='link' href='#'>Suporte</a>
    <img className='img' src='https://cdn.discordapp.com/attachments/1255626890610213066/1256416740196483083/LOGO.png?ex=6713b005&is=67125e85&hm=6d849073462eebc4e7f4dcfd77c5f32193a3bc865b4940f59fa6e76d6d7f239f&' alt='' />
    </div>

    const Div2 = () =>   <div className='a'>
    <img className='foto' src='https://www.next4.com.br/wp-content/themes/yootheme/cache/25/desenvolvimento-de-sites-2591cf1d.webp' />
    <h1 className='text'>Planejamento e <br></br> Desenvolvimento de <br></br> Websites</h1>
    </div>

    const Div3 = () => <div className='b'>
        <h1 className='texto'>São mais de 18 anos desenvolvendo projetos Web que geram resultados para as <br></br> empresas. <br></br>Desenvolvimento de Sites focados em Posicionamento da Marca no Google e <br></br> Geração de Leads.
        </h1>
       
    <a className='botao' href='#'>Entre em contato</a>
    
    </div>
 
  
        

    return(
    <>
         <Div1 />
         <Div2 />
         <Div3 />
     </> 
         
)       
}