#!/bin/bash

echo "Starting the PostgreSQL container";
docker run --name postgres-container -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres

# Wait for the container to be up and running
sleep 5

echo  "Connecting to the PostgreSQL container and generating todolist database";
docker exec -i postgres-container psql -U postgres <<-EOSQL
CREATE DATABASE todolist;
\c todolist
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
EOSQL
