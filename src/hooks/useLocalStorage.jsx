function useLocalStorage(key, initialValue, action = 'set') {
  if (typeof window !== 'undefined') {
    if (action === 'set') {
      window.localStorage.setItem(key, JSON.stringify(initialValue))
    } else if (action === 'get') {
      window.localStorage.getItem(key)
    }
  }
}

export default useLocalStorage
