import { pool } from './database.js';
import dotenv from 'dotenv';

// Ensure environment variables are loaded if we run this script standalone
dotenv.config({ path: '../.env' });

const locationsData = [
    {
        name: 'Echo Lounge',
        address: '1323 N Stemmons Fwy',
        city: 'Dallas',
        state: 'TX',
        zip: '75207',
        image: 'https://assets.livenationcdn.com/uploads/the-echo_pr.jpg'
    },
    {
        name: 'House of Blues',
        address: '2200 N Lamar St',
        city: 'Dallas',
        state: 'TX',
        zip: '75202',
        image: 'https://mavenprodcontent.blob.core.windows.net/media/houseofblues_dal/FormsHeaders/Venue_1000x650.png'
    },
    {
        name: 'The Pavilion',
        address: '300 W Las Colinas Blvd',
        city: 'Irving',
        state: 'TX',
        zip: '75039',
        image: 'https://img.partyslate.com/companies-cover-image/6784/image-51be6498-b9d8-4a67-86c2-1d7e471bcaa9.jpg?tr=w-1920'
    },
    {
        name: 'American Airlines Center',
        address: '2500 Victory Ave',
        city: 'Dallas',
        state: 'TX',
        zip: '75219',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/American_Airlines_Center_%286246886325%29_cropped.jpg'
    }
];

const eventsData = [
    {
        title: 'Hillsong United Tour',
        date: '2026-05-10',
        time: '20:00:00',
        image: 'https://i8.amplience.net/i/naras/hillsong-worship_MI0004723224-MN0001084567',
        location_id: 1 // Echo Lounge
    },
    {
        title: 'Elevation Worship Live',
        date: '2026-06-15',
        time: '19:30:00',
        image: 'https://i.pinimg.com/736x/ed/1f/b7/ed1fb7d40ab461368ceb36f86843ef72.jpg',
        location_id: 2 // House of Blues
    },
    {
        title: 'Lecrae Concert',
        date: '2026-07-20',
        time: '22:00:00',
        image: 'https://i.pinimg.com/736x/d6/4c/8a/d64c8a9956b3924e2f60d7d91f8438c4.jpg',
        location_id: 3 // The Pavilion
    },
    {
        title: 'Maverick City Music',
        date: '2026-08-05',
        time: '19:00:00',
        image: 'https://i.pinimg.com/736x/04/47/08/04470878d064143afca24a13ed5b2168.jpg',
        location_id: 4 // American Airlines Center
    },
    {
        title: 'Phil Wickham Worship Night',
        date: '2026-09-12',
        time: '18:30:00',
        image: 'https://i.pinimg.com/736x/af/20/5f/af205f754b44841f84a443029e5e8b2c.jpg',
        location_id: 1 // Echo Lounge
    },
    {
        title: 'Casting Crowns Concert',
        date: '2026-10-02',
        time: '19:00:00',
        image: 'https://i.pinimg.com/1200x/d1/10/02/d110025a8fffcf659ac7755000d587c5.jpg',
        location_id: 2 // House of Blues
    },
    {
        title: 'Lauren Daigle World Tour',
        date: '2026-11-20',
        time: '20:00:00',
        image: 'https://i.pinimg.com/736x/c0/39/fc/c039fce0c839fba64766e4c52d04ca3e.jpg',
        location_id: 3 // The Pavilion
    },
    {
        title: 'Bethel Music Live Recording',
        date: '2026-12-15',
        time: '18:00:00',
        image: 'https://i.pinimg.com/736x/02/a8/6e/02a86e3a0524f3f5496c9f28976b144f.jpg',
        location_id: 4 // American Airlines Center
    }
];

const createTables = async () => {
    const createLocationsTableQuery = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations CASCADE;
        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            zip VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `;

    const createEventsTableQuery = `
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            image VARCHAR(255) NOT NULL,
            location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE
        )
    `;

    try {
        await pool.query(createLocationsTableQuery);
        console.log('🎉 locations table created successfully');
        await pool.query(createEventsTableQuery);
        console.log('🎉 events table created successfully');
    } catch (err) {
        console.error('⚠️ error creating tables', err);
    }
};

const sendLocationsData = async () => {
    for (const location of locationsData) {
        const insertQuery = {
            text: 'INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)'
        };

        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ ${location.name} added successfully`);
        } catch (err) {
            console.error('⚠️ error inserting location', err);
        }
    }
};

const seedEventsTable = async () => {
    for (const event of eventsData) {
        const insertQuery = {
            text: 'INSERT INTO events (title, date, time, image, location_id) VALUES ($1, $2, $3, $4, $5)'
        };

        const values = [
            event.title,
            event.date,
            event.time,
            event.image,
            event.location_id
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ ${event.title} added successfully`);
        } catch (err) {
            console.error('⚠️ error inserting event', err);
        }
    }
};

const seedAll = async () => {
    await createTables();
    await sendLocationsData();
    await seedEventsTable();
};

seedAll();
