# GIF Search App

A simple Express.js web application that allows users to search for GIFs using the Tenor API.

## Features

- Search for GIFs using keywords
- Powered by Tenor API
- Handlebars templating engine
- Responsive web interface

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install express express-handlebars tenorjs
    ```

3. Start the server:
    ```bash
    node app.js
    ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

- Enter a search term in the search box
- View up to 10 GIFs related to your search term
- Results are displayed on the same page

## Dependencies

- `express` - Web framework
- `express-handlebars` - Templating engine
- `tenorjs` - Tenor API client

## File Structure

- `app.js` - Main application file
- `views/` - Handlebars templates
- `public/` - Static files (CSS, JS, images)

## API

This app uses the Tenor API to fetch GIF results. Make sure to replace the API key with your own for production use.