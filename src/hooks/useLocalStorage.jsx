function useLocalStorage(key, initialValue) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(initialValue))
  }
}

export default useLocalStorage
