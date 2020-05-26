import React from 'react'
import { fetchCompetingLeagues } from '../../actions/user_actions'

class MainPage extends React.Component {
  constructor(props){
    const { currentUserId, fetchLeagues } = props;
    super(props);
    
    const competingLeagues = fetchCompetingLeagues(currentUserId);
    this.competing = competingLeagues.responseJSON;
    this.state = {
      loading: true
    };
    fetchLeagues().then(this.setState({loading: false}));
  }

  renderSpinner = () => {
    return(
      <div className="loading-indicator">
        Loading...
      </div>
    );
  }

  renderPage = () => {
    return(
      <div className="rendered-page">

      </div>
    );
  }

  render(){
    const { ownedLeagues } = this.props;
    const loading = this.state;
    return(
      <div className="MainPage">
        {
          loading
            ? this.renderSpinner()
            : this.renderPage()
        }
      </div>
    );
  }
}

export default MainPage;