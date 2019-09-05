import React from 'react';
import { Table } from 'reactstrap';
import moment from 'moment';
import config from '../Config';
import { getEvents } from '../GraphService';
import Clock from './Clock';
import Room from './Room';
import Footer from './Footer';
import TopBar from './TopBar';


// Helper function to format Graph date/time
function formatDateTime(dateTime) {
  return moment.utc(dateTime).format('M/D/YY h:mm a');
}

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    try {
      // Get the user's access token
      var accessToken = await window.msal.acquireTokenSilent({
        scopes: config.scopes
      });
      // Get the user's events
      var events = await getEvents(accessToken);

      //Testing sending email 
      // var email = await postEmail(accessToken);

      // Update the array of events in state
      this.setState({ events: events.value });
    }
    catch (err) {
      this.props.showError('ERROR', JSON.stringify(err));
    }
  }


  render() {
    return (
      <div>
        <TopBar/>
        <Room />
        <Footer/>

      </div>
    );
  }
}

