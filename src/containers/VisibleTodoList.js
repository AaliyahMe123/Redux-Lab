import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as TodoActions from '../actions/TdodActions'
import List from '../components/List'

class List extends Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  render() {
    const ListItems = this.props.list.map( (item. id) => {
      return (
        <li key={id}>
          {item}
        </li>
      )
    })
    return (
      <div>
        <List addItem={this.props.actions.addToList} />
        <h2>List of Todos</h2>
        <ol>
          {ListItems}
        </ol>
      </div>
    )
  }
}
function mapStateToProps(state, props){
  return {
    list: state.list
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ListActions, dispatch)
  }
}
const wrapperFunction = connect(mapStateToProps, mapDispatchToProps)
const wrappedComponent = wrapperFunction(List)

export default wrappedComponent
