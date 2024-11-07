import React from 'react'
import { create } from 'zustand'
import { NextAuthReact } from '@inexture/auth'

interface ApiTokenState {
  token: string | null
  setToken: (token: string | null) => void
}

export const useApiTokenStore = create<ApiTokenState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}))

export const useApiTokenEffect = () => {
  const session = NextAuthReact.useSession() as any
  const setToken = useApiTokenStore((state) => state.setToken)

  React.useEffect(() => {
    if (session?.data?.access) {
      setToken(session.data.access)
    }
  }, [session, setToken])
}

// Custom hook to access the token
export const useApiToken = () => useApiTokenStore((state) => state.token)