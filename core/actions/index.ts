
export const setIsLogged = (store, isLogged) => {
  console.log(`Setting isLogged:`)
  console.log(isLogged)
  store.setState({ isLogged })
}

export const setUser = (store, user) => {
  console.log(`Setting user:`)
  console.log(user)
  store.setState({ user })
}
