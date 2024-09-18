CREATE TABLE trains (
    id SERIAL PRIMARY KEY,
    train_name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL, -- e.g., Sleeper, AC, etc.
    departure_time TIMESTAMP NOT NULL,
    arrival_time TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);