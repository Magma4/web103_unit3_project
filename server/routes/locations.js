import express from 'express';
import { getLocations, getLocationById } from '../controllers/locations.js';

const router = express.Router();

// Route to get all locations
router.get('/', getLocations);

// Route to get a specific location by ID
router.get('/:id', getLocationById);

export default router;
