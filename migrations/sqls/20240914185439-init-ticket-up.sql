-- Tickets Table
CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL, -- e.g., Booked, Canceled
    payment_method VARCHAR(50), -- e.g., Credit Card, Cash
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);