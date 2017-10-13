import React, {Component} from 'react'

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      listItems:[
        {todo: "Get 10 Hours of some Z time"},
        {todo: "Buy nerf bullets from walmart"},
        {todo: "Finish Big Mouth on Netflix"},
        {todo: "Teach Your Pet Some Discipline She's Outta Control"}
      ]
    }
  }
  render(){
    const listItems = this.state.listItems.map( (item, id) => {
      return (
        <li key={id}>
          {item}
          <button onClick={() => this.props.addItem(item)}>Add Todo?</button>
          <button onClick={() => this.props.deleteItem(item)}>Remove Todo?</button>
          <button onClick={() => this.markItem(item)}>Todo Complete!</button>
        </li>
      )
    })
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}
export default List
