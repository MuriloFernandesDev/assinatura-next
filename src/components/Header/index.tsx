import LogoImg from '../../../public/logo.png'
import NuvemImg from '../../../public/nuvem.png'
import Image from 'next/image'

export function Header() {
  return (
    <>
    <div className="px-6 py-6 flex justify-between">
      <div className='w-1/5 h-auto'>
      <Image src={LogoImg} layout= 'fixed' placeholder='blur' alt="logo" className="object-contain" />
      </div>
      
      <a href="https://pedidos.buyphone.com.br" className="text-indigo-loja bg-gray-100 px-6 py-3 rounded-full"
      >Login</a>
      </div>
    <div className="mx-auto max-w-5xl relative px-4 mt-10">
        <div className="flex flex-col items-center  xl:flex-row xl:text-start">
          <div className="flex flex-col text-gray-100">
            <h1 className="text-6xl md:text-8xl font-bold leading-none ">
              Seja um assinante Premium
            </h1>
            <p className="mt-6">Promoção de taxa zero por tempo limitado!</p>
            <a href="#" className="w-max mt-10 text-indigo-loja px-6 py-3 bg-gray-100 rounded-full">
              Assinar Premium (Esgotado)
            </a>
          </div>
          <div className='w-full h-auto'>
      <Image src={NuvemImg} layout= 'responsive' placeholder='blur' alt="nuvem" className="object-contain" />
      </div>
          </div>
      </div>
      </>

  )
}