export const Storage = {
  load: () => {
    let numbers = JSON.parse( window.localStorage.getItem("ccNumbers") )
    if( !numbers ){
      numbers = Array(365).fill(false)
      Storage.save(numbers)
    }
    return numbers
  },
  save: (numbers) => {
    window.localStorage.setItem( "ccNumbers", JSON.stringify(numbers) )
  }
}
