import LogoImg from '../../../public/logo.png'
import Image from 'next/image'

export function Footer() {
  return (
<div className="bg-black">
  <div className="mx-auto max-w-5xl relative px-4 py-6">
    <div className="flex justify-center mt-10 flex-col text-gray-100 ">
    <h1 className="text-5xl text-center font-bold leading-none">Depoimentos</h1>
    <span className="pt-10">Quer saber do que somos capazes? Confira o que nossos clientes têm a dizer sobre nós. Adoramos receber o feedback dos clientes para melhorar nosso trabalho. Leia as avaliações abaixo.</span>
    </div>
    <div className="flex justify-center pt-10">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TC8NS93zPMY" frameBorder="0" allowFullScreen></iframe>
    </div>
    <div className="flex justify-between content-center pt-10">
      <div>
      <Image src={LogoImg} className="contain"/>

      <p className="text-gray-100 text-sm">Todos os direitos reservados</p>
      </div>
      <div className="flex flex-col text-gray-500">
      <a href="https://www.instagram.com/buyphone.match/" className="text-gray-100">Nosso Instagram</a>
      <a href="https://pedidos.buyphone.com.br" className="text-gray-100">Cadastre-se</a>
      <a href="#" className="text-gray-100">Torne-se Premium (Esgotado)</a>
      </div>
    </div>
  
 
  
  </div>
  </div>
  );
}