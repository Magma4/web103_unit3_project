import express from 'express';
import { getEvents, getEventById, getEventsByLocationId } from '../controllers/events.js';

const router = express.Router();

// Route to get all events
router.get('/', getEvents);

// Route to get a specific event by ID
router.get('/:id', getEventById);

// Route to get events by a specific location ID
router.get('/location/:location_id', getEventsByLocationId);

export default router;
