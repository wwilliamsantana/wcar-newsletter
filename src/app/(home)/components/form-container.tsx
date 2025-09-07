'use client'

import { SendEmailAction, SendEmailState } from '@/app/actions/send-email'
import { InputWrapper } from './input-wrapper'
import { useActionState } from 'react'

const initialState: SendEmailState = {
  message: '',
  isError: false,
}

export function FormContainer() {
  const [state, formAction, pending] = useActionState(
    SendEmailAction,
    initialState,
  )

  return (
    <>
      <form action={formAction} className="flex gap-3 mt-3">
        <InputWrapper type="email" name="email" id="email" required />
        <button
          disabled={pending}
          type="submit"
          className="rounded px-2 text-white font-semibold bg-yellow-600 disabled:bg-yellow-800"
        >
          Inscreva-se!
        </button>
      </form>

      {state.message && (
        <p style={{ color: state.isError ? 'red' : 'green' }}>
          {state.message}
        </p>
      )}
    </>
  )
}
