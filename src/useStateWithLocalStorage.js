import React, { useEffect } from "react"

export default function useStateWithLocalStorage(localStorageKey) {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ""
  )

  useEffect(() => {
    localStorage.setItem(localStorageKey, value)
  }, [localStorageKey, value])

  return [value, setValue]
}
