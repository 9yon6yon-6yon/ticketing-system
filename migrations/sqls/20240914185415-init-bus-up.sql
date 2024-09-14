-- Buses Table
CREATE TABLE buses (
    id SERIAL PRIMARY KEY,
    bus_name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL, -- e.g., AC, non-AC
    departure_time TIMESTAMP NOT NULL,
    arrival_time TIMESTAMP NOT NULL,
    from_location INT, -- References locations table
    to_location INT,   -- References locations table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
