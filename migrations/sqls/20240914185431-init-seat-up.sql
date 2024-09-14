CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    bus_id INT, -- Foreign key references buses table
    train_id INT, -- Foreign key references trains table (optional if applicable)
    seat_number VARCHAR(10) NOT NULL,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
