var graph = require('@microsoft/microsoft-graph-client');

function getAuthenticatedClient(accessToken) {
    // Initialize Graph client
    const client = graph.Client.init({
        // Use the provided access token to authenticate
        // requests
        authProvider: (done) => {
            done(null, accessToken.accessToken);
        }
    });

    return client;
}

// Getting the user's information 
export async function getUserDetails(accessToken) {
    const client = getAuthenticatedClient(accessToken);

    const user = await client.api('/me').get();
    return user;
}


// Setting current date 
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd; // Getting current date


// Getting calendar information 
export async function getEvents(accessToken) {
    const client = getAuthenticatedClient(accessToken);

    const events = await client
        // .api('/me/calendars')
        .api('/me/calendarView?startDateTime=' + today + 'T01:00:00.0000000&endDateTime=' + today + 'T19:00:00.0000000')
        .select('subject,organizer,start,end')
        .header('Prefer', 'outlook.timezone="pacific standard time"')
        .orderby('start/dateTime asc')
        .get();

    return events;
}