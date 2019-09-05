import React from 'react';
import { getCalendars } from '../GraphService';
import config from '../Config';
import moment from 'moment';
import { Table } from 'reactstrap'
import './RoomStyle.css';
import { Jumbotron } from 'reactstrap';


// Helper function to format Graph date/time
function formatDateTime(dateTime) {
    return moment.utc(dateTime).format('M/D h:mm a');
}

class Room extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calendars: [],
        };
    }

    async componentDidMount() {
        try {
            // Get the user's access token
            var accessToken = await window.msal.acquireTokenSilent({
                scopes: config.scopes
            });
            //TESTING GETTING CALENDARS 
            var calendars = await getCalendars(accessToken);
            this.setState({ calendars: calendars.value });
        }
        catch (err) {
            this.props.showError('ERROR', JSON.stringify(err));
        }
    }

    render() {
        // waiting for api to load json data 
        if (this.state.calendars[0] !== undefined) {
            console.log("SHE DONE")
            var data = []
            data.push(this.state.calendars[0].scheduleItems)
            var temp = data[0]
            console.log(data)

            return (
                <div className="tron">
                    <div className="thing">
                        {/* <h3>{temp[0].location}</h3> */}
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">Organizer</th>
                                    <th scope="col">Start</th>
                                    <th scope="col">End</th>
                                </tr>
                            </thead>
                            <tbody className="makeScroll">
                                {temp.map(
                                    (event, index) => {
                                        return (
                                            <tr key={index}>
                                                <td >{event.subject}</td>
                                                <td >{formatDateTime(event.start.dateTime)}</td>
                                                <td >{formatDateTime(event.end.dateTime)}</td>

                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        } else {
            return (
                // Loading screen
                <div>loading</div>
            )
        }
    }
}


export default Room