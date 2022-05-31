import FogueteImg from '../../../public/foguete.png'
import CartaoImg from '../../../public/cartao.png'
import CelularImg from '../../../public/celular.png'
import SacolaImg from '../../../public/sacola.png'
import CelBuyImg from '../../../public/celularbuyphone.png'

import Image from 'next/image'

export function Content() {
  return (
<>
    <div className="bg-green-0300">
<div className="mx-auto max-w-5xl relative px-4 py-6 flex flex-col sm md:flex-row">
  <div className='w-full h-auto'>
<Image src={FogueteImg} layout='responsive' placeholder='blur' className="flex h-auto w-full" alt="Foguete" />
</div>

<div className="text-indigo-loja flex flex-col justify-center">
<h1 className="text-5xl font-bold leading-none pb-2 text-indigo-900">Faça parte do plano Premium</h1>
<p className='mt-6 text-indigo-900'>Nosso Plano Premium possibilita uma experiência completa de match com TAXA ZERO. Você só precisa fazer alguns cliques do seu computador que nós cuidamos de tudo!</p>
<a href="#" className="w-max mt-10 bg-indigo-loja px-6 py-3 text-gray-100 rounded-full">Assinar Premium(esgotado)</a>
</div>

</div>
</div>

<>
<div className='mx-auto max-w-5xl relative px-4 pb-12'>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
 <div className="text-white flex flex-col justify-between items-center mt-12">
 <div className='w-64 h-auto'>
   <Image src={CartaoImg} layout='responsive' placeholder='blur' className="w-64 mt-12" alt="icon cartao" />
   </div>
    <span className="text-lg text-center mt-12">Aumente seus lucros com o cartão de crédito.</span>
 </div>
 <div className="text-white flex flex-col justify-between items-center">
   <div className='w-64 h-auto'>
   <Image src={CelularImg} layout='responsive' placeholder='blur' className='w-64' alt="icon celular"/>
   </div>
   <span className="text-lg text-center mt-4">Receba o dinheiro de suas vendas em 30 dias.</span>
</div>
<div className="text-white flex flex-col justify-between items-center mt-12">
<div className='w-64 h-auto'>
   <Image src={SacolaImg} layout='responsive' placeholder='blur' className="w-64 mt-12" alt="icon sacola" />
   </div>
    <span className="text-lg text-center mt-12">O produto é enviado para o cliente com segurança.</span>
 </div>
</div>
</div>            
</>

<div className="mx-auto max-w-5xl relative px-4 pb-12">
  <h1 className="text-center text-5xl text-green-0300 font-bold leading-none mt-20">Vantagens de ser Premium</h1>

<div className="flex flex-col md:flex-row gap-6 mt-20">
  <div className="bg-purple-600 text-white flex flex-col md:w-1/3 h-auto p-4 relative rounded-xl justify-between">
    <div>
    <h3 className="font-bold text-2xl my-4">Free</h3>
    <h4 className="text-3xl pb-8">R$0,00</h4>
    <p className="text-lg">
      Nessa modalidade, os milheiros contam com as funcionalidades
      básicas da plataforma.
    </p>
    <ul className="mt-10 list-disc ml-6 mb-24">
      <li>Lista de pedidos</li>
      <li>Match com segurança</li>
      <li>Recebe em 30 dias</li>
      <li>Taxa de 7.5 por pedido</li>
    </ul>
  </div>
  <div className="flex justify-center">
    <a href="https://pedidos.buyphone.com.br" className="rounded-3xl text-indigo-loja px-6 py-3 bg-gray-100 flex">Cadastre-se grátis</a>
  </div>
  </div>

  <div className="bg-green-0300 text-indigo-loja flex flex-col md:w-1/3 h-auto p-4 relative rounded-xl justify-between">
    <div>
    <h3 className="font-bold text-2xl my-4 text-indigo-900">Premium</h3>
    <h4 className="text-3xl pb-8 text-indigo-900">R$ 299,00</h4>
    <p className="text-lg text-indigo-900">
      Nesse plano o milheiro tem direito a isenção da taxa cobrada pelos serviços de pagamentos e logística durante um ano.
    </p>
    <ul className="mt-10 list-disc ml-6 mb-24 text-indigo-900">
      <li className='text-indigo-900'>Lista de pedidos</li> 
      <li className='text-indigo-900'>Match com segurança</li> 
      <li className='text-indigo-900'>Recebe em 30 dias</li> 
      <li className='text-indigo-900'>Taxa ZERO</li> 
      <li className='text-indigo-900'>Painel de indicadores</li> 
      <li className='text-indigo-900'>Suporte personalizado</li>
      </ul>
  </div>
  <div className="flex justify-center">
    <a href="https://pedidos.buyphone.com.br" className="rounded-3xl text-green-0300 px-6 py-3 bg-indigo-loja flex">Esgotado</a>
  </div>
  </div>

  <div className="bg-purple-600 text-white flex flex-col md:w-1/3 h-auto p-4 relative rounded-xl justify-between">
    <div>
    <h3 className="font-bold text-2xl my-4">Free</h3>
    <h4 className="text-3xl pb-8">R$VIP</h4>
    <p className="text-lg">
      Nessa modalidade, o milheiro que indicar 5 revendedores de iPhones para se cadastrarem em nosso ecossistema, ganhará o acesso VIP com isenção de anuidade e Taxa zero nos serviços.
    </p>
    <ul className="mt-10 list-disc ml-6 mb-24">
      <li>Lista de pedidos</li> 
      <li>Match com segurança</li> 
      <li>Recebe em 30 dias</li> 
      <li>Taxa ZERO</li> 
      <li>Painel de indicadores</li> 
      <li>Suporte personalizado</li>
      <li>Assessoria contábil</li>
      <li>Indique e ganhe</li>
    </ul>
  </div>
  <div className="flex justify-center">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEQPFWUSl-3pXFQ0QUZlom0yMwBihSN0JZ01b3ipPq3Sc54g/viewform" className="rounded-3xl text-indigo-loja px-6 py-3 bg-gray-100 flex">Lista de espera</a>
  </div>
  </div>
  </div>
<div className="flex align-center mt-20 justify-center">
<div className='w-full h-auto'>
<Image src={CelBuyImg} layout='responsive' placeholder='blur' className="flex h-auto w-full" alt="icon Celular Buy Phone" />
</div>
</div>

<div className="flex flex-col gap-6 mt-20 text-white lg xl md:flex-row">
  <div className="lg xs xl:w-1/2 flex sm:w-100">
    <h1 className="text-6xl md:text-8xl text-white">O Match Perfeito!</h1>
  </div>
  <div className="lg xs xl:w-1/2 flex flex-col justify-center text-white">
    <span className="text-justify text-lg leading-2 ">Estamos criando um ecossistema de infinitas possibilidades, pois acreditamos que com inovação podemos democratizar o mercado de produtos proporcionando aos envolvidos liberdade e economia! Usamos a tecnologia para dar o match de quem deseja comprar com quem deseja vender.
    </span>
    <a href="https://pedidos.buyphone.com.br" className="w-max mt-10 text-indigo-loja px-6 py-3 bg-green-0300 rounded-full">Assinar Premium(esgotado)</a>
  </div>
</div>

</div>
</>
  )
}