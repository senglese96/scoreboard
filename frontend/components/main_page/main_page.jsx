import React from 'react'
import { fetchCompetingLeagues } from '../../actions/user_actions'

class MainPage extends React.Component {
  constructor(props){
    const { currentUserId } = props
    super(props)
    
    const stuff = fetchCompetingLeagues(currentUserId);
    console.log(stuff)
  }

  render(){
    return(
      <div>
        hello there
      </div>
    )
  }
}

export default MainPage