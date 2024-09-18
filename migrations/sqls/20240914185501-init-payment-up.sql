-- Payments Table
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    payment_status VARCHAR(50) NOT NULL, -- e.g., Success, Failed
    payment_method VARCHAR(50), -- e.g., Credit Card, Cash
    transaction_id VARCHAR(100) UNIQUE NOT NULL,
    payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);