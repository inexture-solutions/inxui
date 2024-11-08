import React from "react"
import { useApiTokenEffect } from "./useApiTokenStore"

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useApiTokenEffect()
    return <>{children}</>
}