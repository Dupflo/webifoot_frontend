import React, { ReactNode } from 'react'
import { CalendarIcon, RectangleGroupIcon, ShoppingBagIcon, NewspaperIcon, PlayCircleIcon, UsersIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export function FeatureCard({ title, description, icon, isComingSoon }: { title: string; description: string; icon: ReactNode; isComingSoon?: boolean }) {
  return (
    <div>
      <div className="relative z-10 text-white bg-primary w-10 h-10 flex items-center justify-center rounded-md mx-auto -mb-5">
        <span className="w-7 h-7">{icon}</span>
      </div>
      <div className="bg-white rounded-lg pt-10 p-3 pb-5 text-center min-h-full">
        <h3 className="text-lg mb-1">{title}</h3>
        {isComingSoon && <span className="px-2 py-1 text-xxs font-normal text-yellow-700 uppercase bg-yellow-200 rounded-md">Bientôt Disponible</span>}
        <p className="mt-2 text-base text-gray">{description}</p>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <div className="bg-light pt-20 pb-40 px-12">
      <h3 className="text-4xl text-dark font-medium mb-3 text-center">Une plateforme toutes en un</h3>
      <p className="text-center text-gray text-lg max-w-sm mx-auto mt-5">Webifoot est un outil pensé pour votre club avec de nombreuses fonctionnalités</p>
      <div className="grid grid-cols-4 gap-8 py-20">
        <FeatureCard
          icon={<RectangleGroupIcon />}
          title="Un site à votre image"
          description="Ajouter votre logo, votre nom de 
domaine et personnalisé les couleurs de 
votre site pour le rendre unique 
et authentique en quelques clics"
        />
        <FeatureCard
          icon={<UserGroupIcon />}
          title="Gestion d’équipes"
          description="Regrouper les informations de toutes 
vos équipes, classements, résultats, 
convocations…"
        />

        <FeatureCard
          icon={<ArrowPathIcon />}
          title="Mise en jour gratuite et permanente"
          description="Webifoot évolue et fait évoluer votre site sans supplément dans votre abonnement. Nous vous garantissons un site constamment à jour"
        />
        <FeatureCard
          icon={<CalendarIcon />}
          title="Évènements"
          description="Créer et afficher les prochains
évènements de votre club à ne pas
manquer"
        />
        <FeatureCard
          icon={<UsersIcon />}
          title="Mettez en avant vos partenaires"
          description="Nous connaissons l’importance des
sponsors et partenaires dans le
fonctionnement d’un club. Dédiez leurs 
un emplacement sur votre site"
        />
        <FeatureCard
          icon={<NewspaperIcon />}
          title="Blog Intégré"
          description="Animez la vie digitale de votre club en 
rédigeant des actualités en tout genre"
        />
        <FeatureCard
          icon={<ShoppingBagIcon />}
          title="Boutique en ligne"
          description="Tenez informez les supporters qui n’ont 
pas pu se rendre au stade de l’évolution 
du score de vos équipes"
          isComingSoon
        />
        <FeatureCard
          icon={<PlayCircleIcon />}
          title="Live match commentaire"
          description="Tenez informez les supporters qui n’ont 
pas pu se rendre au stade de l’évolution 
du score de vos équipes"
          isComingSoon
        />
      </div>{' '}
    </div>
  )
}

export default Features
