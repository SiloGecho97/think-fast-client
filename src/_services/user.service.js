export const getUserFromStorage = () => {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null
}

export const setToLocalStorage = (data) => {
  return localStorage.setItem('info',JSON.stringify(data))
}

export const getFromLocalStorage = () => {
  if(localStorage.getItem('info')){
    return JSON.parse(localStorage.getItem('info'))
  }
}

