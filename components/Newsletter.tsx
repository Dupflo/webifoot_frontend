import Image from 'next/image'
import React from 'react'
import { Button } from './common/Button'
import CageSvg from '@assets/svg/cage.svg'

const Newsletter = () => {
  return (
    <section className="relative pt-52 pb-20 px-12   mx-auto bg-light">
      <div className="absolute right-0 px-12 top-10">
        <CageSvg />
      </div>
      <div className="relative z-10 bg-primary min-h-full h-[350px] max-w-[1090px] mx-auto rounded-3xl  text-white flex flex-col items-center justify-center">
        <h2 className="text-4xl font-medium mb-3">Rejoignez les waiting list</h2>
        <p className="mb-5">Et soyez informé de notre lancement</p>
        <div className="flex space-x-2">
          <input type="text" className="h-12 rounded-lg w-[330px] p-4" placeholder="john@doe.com" />
          <Button variant={Button.variant.SECONDARY} ariaLabel="Envoyer">
            Envoyer
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
