-- Schedules Table (Optional)
CREATE TABLE schedules (
    id  SERIAL PRIMARY KEY,
    schedule_date DATE NOT NULL,
    available_seats INT NOT NULL
);