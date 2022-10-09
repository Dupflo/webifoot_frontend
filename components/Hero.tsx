import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeroSvg from '../assets/svg/hero.svg'
import { Button } from '@common/Button'

const Hero = () => {
  return (
    <div className="px-12 pt-48 pb-20 relative overflow-hidden bg-white flex items-center justify-between">
      <div>
        <div className=" relative pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl uppercase font-semibold leading-tight tracking-tight text-dark sm:text-5xl md:text-5xl">
                <span className="block xl:inline">
                  Votre site web de club <br />
                  en{' '}
                </span>
                <span className="block text-primary xl:inline">5 minutes</span>
              </h1>
              <p className="mt-3 text-base  text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-lg lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button ariaLabel="Démarrer maintenant">Démarrer maintenant</Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant={Button.variant.SECONDARY} ariaLabel="Démarrer maintenant">
                    Démo
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="-mt-44">
        <HeroSvg />
      </div>
    </div>
  )
}

export default Hero
