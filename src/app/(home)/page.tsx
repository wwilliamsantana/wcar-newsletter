import Image from 'next/image'
import { InputWrapper } from './components/Input-wrapper'

export default function NewsletterHome() {
  return (
    <main className="h-screen flex justify-center mt-32 ">
      <div className="flex flex-col items-center">
        <Image
          className="w-28 rounded-full"
          src={'/speedometer.png'}
          width={500}
          height={500}
          alt="speedmeter car"
        />
        <h1 className="font-semibold text-xl">
          Notícias de Carros para quem não tem tempo de procurar.
        </h1>
        <p className="mt-4 text-sm">
          Junte-se à nossa turma de 104.686 leitores ativos:
        </p>
        <div className="flex gap-3 mt-3">
          <InputWrapper />
          <button className="rounded px-2 text-white font-semibold bg-yellow-600">
            Inscreva-se!
          </button>
        </div>
      </div>
    </main>
  )
}
