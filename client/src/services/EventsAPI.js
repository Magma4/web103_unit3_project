const getAllEvents = async () => {
    try {
        const response = await fetch('/events');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all events', error);
        throw error;
    }
}

const getEventsById = async (id) => {
    try {
        const response = await fetch(`/events/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching event by id: ${id}`, error);
        throw error;
    }
}

const getEventsByLocationId = async (locationId) => {
    try {
        const response = await fetch(`/events/location/${locationId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching events for location: ${locationId}`, error);
        throw error;
    }
}

export default {
    getAllEvents,
    getEventsById,
    getEventsByLocationId
}
