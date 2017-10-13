export const addToList = (item) => {
  console.log('ACTION: adding ${item} to list')

  return{
    type: 'ADD_ITEM'
    item
  }
}

export const deleteFromList = (item) => {
  console.log('ACTION: deleting ${item} from list')

  return{
    type: 'DELETE_ITEM'
    item
  }
}
