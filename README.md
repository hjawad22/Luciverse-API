# Luciverse API

A RESTful backend for **Lucifer quotes**, built with **Express, Knex, and PostgreSQL**.  
Provides endpoints to fetch and add quotes for the **[Luciverse frontend](https://github.com/hjawad22/luciverse)**.

**Deployed API:** [https://luciverse-api.onrender.com/api/quotes](https://luciverse-api.onrender.com/api/quotes)

## Endpoints

- `GET /api/quotes` → Retrieve all quotes  
- `POST /api/quotes` → Add a new quote  

---

## Setup

1. Install dependencies:  

     `npm install`

2. Configuration environment:

    Configure `.env` for local or production database.

3. Run migrations and seeds:

   `npx knex migrate:latest`

   `npx knex seed:run`

## Start server:

   `npm start`

## Notes
Uses a cloud PostgreSQL database (Supabase) for production.
API is fully deployed and ready for frontend integration.








