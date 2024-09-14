CREATE TABLE trains (
    id SERIAL PRIMARY KEY,
    train_name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL, -- e.g., Sleeper, AC, etc.
    departure_time TIMESTAMP NOT NULL,
    arrival_time TIMESTAMP NOT NULL,
    from_location INT, -- References locations table
    to_location INT,   -- References locations table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);