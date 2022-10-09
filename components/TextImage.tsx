import React from 'react'
import PlayerSvg from '@assets/svg/player.svg'
import { Button } from './common/Button'

const TextImage = () => {
  return (
    <div className="px-12 py-10 flex items-center space-x-10 w-full">
      <div className="text-dark max-w-3xl">
        <h2 className="text-4xl font-semibold mb-3">Pourquoi Webifoot ?</h2>
        <p className="mb-8 text-lg leading-relaxed">
          Ils existe de nombreuses solutions pour créer un site web pour votre club de foot : Wordpress, Wix…. Vous pouvez également faire appel à une agence dédié. Toutes ces
          solutions représenteront un compte important pour obtenir des fonctionnalités équivalente à Webifoot. De plus Webifoot est développé en France et dispose d’un support
          français. Faîtes le bon choix !
        </p>
        <Button ariaLabel="Lire le comparatif">Lire le comparatif</Button>
      </div>
      <div className="flex-1">
        <PlayerSvg className="mx-auto" />
      </div>
    </div>
  )
}

export default TextImage
