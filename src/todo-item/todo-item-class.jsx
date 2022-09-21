import React from 'react'

class ToDoItemClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 0, clickNum: 0 }
    //this.time = 0
    console.log('instance created')
  }
  //Lifecycle method
  componentDidMount() {
    console.log('component initialized')
    //fetch, other init logic: timer

    this.intervalId = setInterval(() => {
      this.setState({ time: this.state.time + 1 })

      // this.time++
    }, 1000)
  }

  componentDidUpdate() {
    console.log('component updated ')
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
    console.log('component will be destroyed ')
  }

  handleButtonClick() {
    //hibás:
    // this.state = {
    //   ...this.state,
    //   clickNum: this.state.clickNum + 1,
    // }

    // this.setState({
    //   clickNum: this.state.clickNum + 1,
    // })

    this.setState((prevState) => ({
      clickNum: prevState.clickNum + 1,
    }))
  }

  render() {
    const { todoItemData } = this.props

    return (
      <div className={`data `}>
        <h3>{this.state.time}</h3>
        {/* <h3>{this.time}</h3> */}
        <p>
          {todoItemData.id} : {todoItemData.completed.toString()}
        </p>
        <input type='checkbox' name='goodValue' onChange={(event) => console.log(event.target.checked)} />
        <input
          type='button'
          value={`pressed me: ${this.state.clickNum}`}
          onClick={() => {
            this.handleButtonClick()
          }}
        />
      </div>
    )
  }
}

export default ToDoItemClass
