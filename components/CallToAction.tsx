import React from 'react'
import { Button } from './common/Button'

const CallToAction = () => {
  return (
    <section className="py-12 -mt-44 max-w-screen-xl mx-auto">
      <div className="bg-primary min-h-full h-[350px] rounded-3xl  text-white flex flex-col items-center justify-center">
        <h2 className="text-4xl font-medium mb-3">Prenez en main l’image web de votre club</h2>
        <p className="mb-5">À partir de 19,90€ par mois</p>
        <Button variant={Button.variant.SECONDARY} ariaLabel="Testez gratuitement pendant 30 jours">
          Testez gratuitement pendant 30 jours
        </Button>
      </div>
    </section>
  )
}

export default CallToAction
