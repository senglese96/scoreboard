import React from 'react'
import { fetchCompetingLeagues } from '../../actions/user_actions'

class MainPage extends React.Component {
  constructor(props){
    const { currentUserId } = props
    super(props)
    
    const competingLeagues = fetchCompetingLeagues(currentUserId);
    this.competing = Object.keys(competingLeagues.responseJSON);
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