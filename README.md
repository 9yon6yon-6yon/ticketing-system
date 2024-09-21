# Ticketing System - NestJS Backend

## Project Overview

This project is a NestJS backend for a ticketing system that includes user management, ticket booking, payment processing, buses and trains management, seat configuration, and location search.

### Key Backend Routes:
- **Users**: User management routes for CRUD and login.
- **Tickets**: Ticket booking and management.
- **Payments**: Payment creation and history retrieval.
- **Buses/Trains**: CRUD operations for buses and trains.
- **Seats**: Manage and retrieve seat configurations.
- **Locations**: Manage locations.
- **Search**: Perform searches for buses, trains, and tickets.

---

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).
2. **NestJS CLI**: Install NestJS CLI by running:
   ```bash
   npm i -g @nestjs/cli
   ```
3. **PostgreSQL Database**: Ensure you have PostgreSQL installed and running. You will need to configure the database connection in the src/config file.
4. **Frontend Setup**: The frontend should be built to call the provided API routes.

## Steps to Set Up the Backend

1. **Clone the Repository**
    ```bash
    git clone https://github.com/9yon6yon-6yon/ticketing-system.git
    cd ticketing-system
    ```
2. **Install Dependencies**
    ```bash
    npm install
    ```
3. **Configure Environment Variables**:
Create a `.env` ( e.g. a `.env.example` is given which can be modified ) file at the root of the project and add your PostgreSQL database credentials and Stripe API keys:

    ```bash
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USERNAME=yourusername
    DATABASE_PASSWORD=yourpassword
    DATABASE_NAME=ticketing
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```
4. **Run Database Migrations**
Make sure the database is correctly set up by running migrations:

    ```bash
    npm run typeorm migration:run
    ```
5. **Start the Development Server**
    ```bash
    npm run start:dev
    ```
    This will start the NestJS server on http://localhost:3000.
    You can find the API references with necessary constraints and how values should be passed on http://localhost:3000/api

6. **Frontend Integration**
Ensure your frontend application calls the following backend routes for functionality like user management, ticket booking, and payment processing.

## API Endpoints
**Users:**
- `POST /users:`Create a new user.
- `PUT /users/:id:` Update a user by ID.
- `DELETE /users/:id:` Delete a user by ID.
- `GET /users/:id:` Get a user by ID.
- `POST /users/login:` Login with email and password.

**Tickets:**

- `POST /ticket/create:` Create a new ticket (book a seat).
- Payments:
- `POST /payment/create:` Create a new payment (Stripe integration).
- `GET /payment/history/:`userId: Retrieve the payment history for a user.

**Buses:**

- `POST /buses:` Create a new bus.
- `PUT /buses/:id:` Update a bus by ID.
- `DELETE /buses/:id:` Delete a bus by ID.
- `GET /buses/:id:` Get a bus by ID.
- `GET /buses:` Get all buses.

**Trains:**

- `POST /trains:` Create a new train.
- `PUT /trains/:id:` Update a train by ID.
- `DELETE /trains/:id:` Delete a train by ID.
- `GET /trains/:id:` Get a train by ID.
- `GET /trains:` Get all trains.

**Seats:**
- `POST /admin/seats:` Add seats to buses/trains.
- `PUT /admin/seats/update/:id:` Update seat details.
- `DELETE /admin/seats/delete/:id:` Delete a seat.
- `GET /seats/:id:` Get seat details by ID.
- `GET /seats/bus/:busId:` Get all seats for a specific bus.
- `GET /seats/train/:trainId:` Get all seats for a specific train.
- `PUT /admin/seats/update-config/:id:` Update seat configuration.
- `POST /admin/seats/bus/add-seats/:busId:` Add seat configurations to a bus.

**Locations:**

- `POST /admin/location/add:` Add a new location.
- `PUT /admin/location/:id/update:` Update a location.
- `DELETE /admin/location/:id/delete:` Delete a location.
- `GET /location/:id:` Get location details by ID.
- `GET /locations:` Get all locations.

**Search:**

- `GET /search:` Search for buses, trains, or locations.

## Running the Application in Production

Build the Application:
```bash
npm run build
```
Run in Production Mode:
```bash
npm run start:prod
```
## Common Issues
**Database Connection Errors:** Ensure your PostgreSQL database is running and your `.env` file contains the correct credentials.\
**Stripe Errors:** Ensure that your Stripe API keys are correctly configured in the `.env` file.
## Conclusion
You now have your backend server running with a ticketing system API. The routes for users, tickets, buses, trains, and seats are all ready to be consumed by a frontend.