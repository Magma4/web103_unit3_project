const getAllLocations = async () => {
    try {
        const response = await fetch('/locations');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching all locations', error);
        throw error;
    }
}

const getLocationById = async (id) => {
    try {
        const response = await fetch(`/locations/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching location by id: ${id}`, error);
        throw error;
    }
}

export default {
    getAllLocations,
    getLocationById
}
