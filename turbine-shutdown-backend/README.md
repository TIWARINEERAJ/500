# Turbine Shutdown SOP Backend Service

This is the backend service for the Turbine Shutdown Standard Operating Procedure automation system.

## Features

- RESTful API for managing turbine shutdown procedures
- Real-time sensor data validation
- User authentication and authorization
- Audit logging
- Integration with plant control systems

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Build the project: `npm run build`
5. Start the server: `npm start`

For development:
```
npm run dev
```

## Testing

Run unit tests:
```
npm test
```

## Environment Variables

See `.env.example` for required environment variables.

## API Documentation

The API is documented using OpenAPI/Swagger. After starting the server, access the documentation at:

`http://localhost:3000/api-docs`
