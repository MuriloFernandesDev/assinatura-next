import LogoImg from '../../../public/logo.png'
import Image from 'next/image'

export function Footer() {
  return (
<div className="bg-black">
  <div className="mx-auto max-w-5xl relative px-4 py-6">
    <div className="flex justify-center mt-10 flex-col text-gray-100 ">
    <h1 className="text-5xl text-center font-bold leading-none text-testimonials">Depoimentos</h1>
    <span className="pt-10 text-testimonials">Quer saber do que somos capazes? Confira o que nossos clientes têm a dizer sobre nós. Adoramos receber o feedback dos clientes para melhorar nosso trabalho. Leia as avaliações abaixo.</span>
    </div>
    
    <div className='flex flex-col gap-5 pt-10'>
        <div className="flex flex-col md:flex-row items-center">
            <iframe loading="lazy" src="https://www.youtube.com/embed/Npmw1UcMnxM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <span className="text-justify px-3 md:pl-16 text-testimonials">
                "Comprei dois celulares, um pra mim e um pra minha irmã, dois iPhones 11. O preço é muito abaixo. Vale muito a pena!"
                <br /><br />@lyvianagib
            </span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center ">
            <iframe loading="lazy" src="https://www.youtube.com/embed/t3U1o2I9WvI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <span className="text-justify px-3 md:pl-16 text-testimonials">
                        "Um preço muito bom, paguei muito barato no iPhone original lacrado!"
                        <br /><br />@luizpuertas
            </span>
        </div>

                <div className="flex flex-col md:flex-row items-center">
                    <iframe loading="lazy" src="https://www.youtube.com/embed/w1Sv0QIFxyA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <span className="text-justify px-3 md:pl-16 text-testimonials">
                        ""Celular zero, lacrado na caixa! Pesquisei bastante em vários lugares e o preço deles é bem abaixo do mercado.""
                        <br /><br />@gabrielpessoamartins
                    </span>
                </div>
                </div>

    <div className="flex flex-col justify-between text-center items-center p-2 mt-6 lg xl md:flex-row
    lg xl md:text-left">

      
      <div className='flex flex-col'>
      <div className='w-64 h-auto'>
      <Image src={LogoImg} layout= 'fixed' placeholder='blur' alt="logo" className="object-contain" />
      </div>
      <p className="text-gray-100 text-sm">Todos os direitos reservados</p>
      </div>
      <div className="flex flex-col text-gray-500">
      <a href="https://www.instagram.com/buyphone.match/" className="text-gray-100 p-2">Nosso Instagram</a>
      <a href="https://pedidos.buyphone.com.br p-2" className="text-gray-100 p-2">Cadastre-se</a>
      <a href="#" className="text-gray-100 p-2">Torne-se Premium (Esgotado)</a>
      </div>

    </div>
  
 
  
  </div>
  </div>
  );
}