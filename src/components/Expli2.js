import React from 'react'
import { ArrowPathIcon, UserIcon, TrophyIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Tirada Personalizada y Privada',
    description:
      '¿Preguntas personales? Ofrecemos lecturas de Tarot diseñadas específicamente para tus dudas. Tres cartas se seleccionan en privacidad, proporcionándote una visión personalizada, sin juicios y enfocada en tus inquietudes.',
    icon: UserIcon,
  },
  {
    name: 'Claridad en linea para cualquier pregunta',
    description:
      '¿Necesitas respuestas ahora? En Futuro Astral, las respuestas no pueden esperar. Nuestras lecturas de Tarot son inmediatas y accesibles, dándote las respuestas que buscas a cualquier pregunta, justo cuando las necesitas.',
    icon: TrophyIcon,
  },
  {
    name: 'Pasado, Presente y Futuro',
    description:
      '¿Preocupaciones sobre el pasado, presente o futuro? Las tres cartas en nuestras lecturas representan cada uno de estos aspectos, ofreciéndote una visión completa y asequible de tu situación.  Moldea tu futuro en linea.',
    icon: ArrowPathIcon,
  },
]
export function Expli2() {
    return (
        <div className="py-24 overflow-hidden bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-100 via-purple-100 to-indigo-100 sm:py-32">
            <div className="px-6 ml-16 opacity-100 max-w-7xl lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-red-600">Tirada de 3 cartas: Arcanos Mayores</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tarot Futuro Astral: Tu Guía Personal al Futuro</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                            ¿Necesitas orientación? Nuestras lecturas de tarot de 3 cartas son rápidas, baratas y están a un clic de distancia.
                            </p>
                            <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute w-5 h-5 text-red-600 left-1 top-1" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        src="https://static.wixstatic.com/media/5e1df2_1d168ae7d3ba4b4e955bbe3642f3502f~mv2.png"
                        alt="FuturoAstral_1"
                        className="w-[48rem] max-w-none  sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442} />
                </div>
            </div>
        </div>
    )
}
