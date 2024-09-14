-- Schedules Table (Optional)
CREATE TABLE schedules (
    id  SERIAL PRIMARY KEY,
    bus_id INT, -- Foreign key references buses table
    train_id INT, -- Foreign key references trains table
    schedule_date DATE NOT NULL,
    available_seats INT NOT NULL
);