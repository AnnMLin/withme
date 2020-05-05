import React from 'react'
import { connect } from 'react-redux'
import { addClass } from '../store'

class Classes extends React.Component {
  render() {
    console.log(this.props.classes)
    return(
      <div id='classes'>
        {Object.keys(this.props.classes).map((classDate) => (
          <div>
            <div>{classDate}</div>
            <div>{this.props.classes[classDate].name}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  classes: state.classes
})

const mapDispatch = dispatch => ({
  addClass: classObj => dispatch(addClass(classObj))
})

export default connect(mapState, mapDispatch)(Classes)