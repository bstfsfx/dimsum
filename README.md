# 港味到家 — Hong Kong Dim Sum (MERN)

A faithful React + Vite + Express + MongoDB rebuild of the `dimsum.png`
landing page.

```
dimsum/
├── client/      # React + Vite frontend (port 5173)
├── server/      # Express + MongoDB backend (port 5000)
└── package.json # concurrently runner
```

## Quick start

```bash
# 1) install everything
npm run install:all

# 2) start dev (server + client together)
npm run dev
```

- Frontend → http://localhost:5173
- Backend  → http://localhost:5050
- Health   → http://localhost:5050/api/health
- Content API (one shot) → http://localhost:5050/api/content/all

## Architecture

| Layer    | Stack                                        |
| -------- | -------------------------------------------- |
| Frontend | React 18, Vite 5, react-icons                |
| Backend  | Node 18+, Express 4, Mongoose 8, CORS, morgan|
| Storage  | MongoDB (graceful fallback to static data)   |

## API surface

| Method | Path                       | Description                       |
| ------ | -------------------------- | --------------------------------- |
| GET    | `/api/health`              | health check                      |
| GET    | `/api/content/hero`        | hero copy, image, badges, CTA     |
| GET    | `/api/content/pain-points` | pain-point cards                  |
| GET    | `/api/content/products`    | product cards                     |
| GET    | `/api/content/solution`    | solution copy + 4-step images     |
| GET    | `/api/content/service-icons` | 5-icon service row              |
| GET    | `/api/content/testimonials` | reviews                          |
| GET    | `/api/content/faqs`        | FAQ items                         |
| GET    | `/api/content/all`         | everything in one call            |
| POST   | `/api/orders`              | create order (in-memory store)    |
| POST   | `/api/inquiries`           | contact-form submission           |

All GETs gracefully fall back to the data in `server/src/data/fallback.js`
when MongoDB isn't reachable so the UI always renders.

## Seeding MongoDB

```bash
# local MongoDB on default port
npm run seed
```

## Production build

```bash
npm run build   # builds the React app into client/dist
npm start       # serves both API and built SPA from the Express server
```