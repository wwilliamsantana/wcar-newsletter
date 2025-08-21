import { InputWrapper } from './components/Input-wrapper'

export default function NewsletterHome() {
  return (
    <main className="h-screen flex justify-center mt-32 ">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-xl">
          Notícias de Carros para quem não tem tempo de procurar.
        </h1>
        <p className="mt-4 text-sm">
          Junte-se à nossa turma de 104.686 leitores ativos:
        </p>
        <InputWrapper className="mt-4" />
        <button className="w-72 mt-2 rounded py-2 text-white font-semibold bg-green-600">
          Inscreva-se!
        </button>
      </div>
    </main>
  )
}
