import { InputWrapper } from './input-wrapper'

export function FormContainer() {
  return (
    <form className="flex gap-3 mt-3">
      <InputWrapper />
      <button className="rounded px-2 text-white font-semibold bg-yellow-600">
        Inscreva-se!
      </button>
    </form>
  )
}
