# WEB103 Project 3 - *UnityGrid Plaza*

Submitted by: **Raymond Frimpong Amoateng**

About this web app: **UnityGrid Plaza is a virtual community space that allows users to explore and filter upcoming gospel and worship events across various iconic venues. It features an interactive React frontend that visualizes event data served from a custom Express backend connected to a PostgreSQL database.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.*
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Custom CSS styling with flexbox layouts and custom borders/shadows to match the application's aesthetic.
- [x] Seeding script connects to Render and populates the database with real venue and artist images.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./walkthrough.gif' title='Video Walkthrough' width='800' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/)


## Notes

Challenges included handling Unsplash API image loading changes that blocked direct-linking and fixing date format edge-cases that caused the countdown functionality to render "NaN".

## License

Copyright [2026] [Raymond Frimpong Amoateng]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
