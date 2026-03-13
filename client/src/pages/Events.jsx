import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [filterLocation, setFilterLocation] = useState('All')

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents();
                setEvents(eventsData);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        };
        const fetchLocations = async () => {
            try {
                const locData = await LocationsAPI.getAllLocations();
                setLocations(locData);
            } catch (error) {
                console.error("Failed to fetch locations:", error);
            }
        };
        fetchEvents();
        fetchLocations();
    }, []);

    return (
        <div className='events-page'>
            <header style={{ backgroundColor: 'transparent', padding: '0', margin: '20px 40px', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', width: '100%', maxWidth: '800px' }}>
                    <select
                        value={filterLocation}
                        onChange={(e) => setFilterLocation(e.target.value)}
                        style={{ margin: '0', backgroundColor: 'white', color: 'black', width: '300px' }}
                    >
                        <option value="All">See events at...</option>
                        {locations.map(loc => (
                            <option key={loc.id} value={loc.id}>{loc.name}</option>
                        ))}
                    </select>
                    <button style={{ margin: '0', whiteSpace: 'nowrap', width: '250px' }} onClick={() => setFilterLocation('All')}>
                        SHOW ALL EVENTS
                    </button>
                </div>
            </header>
            <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    events && events.length > 0 ? events
                        .filter(event => filterLocation === 'All' || String(event.location_id) === String(filterLocation))
                        .map((event, index) =>
                            <Event
                                key={event.id}
                                id={event.id}
                                title={event.title}
                                date={event.date}
                                time={event.time}
                                image={event.image}
                            />
                        ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events
