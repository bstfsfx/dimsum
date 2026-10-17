# What's missing from this Vercel deploy

- ❌ **No MongoDB** — Vercel doesn't host DBs. To enable dynamic content:
  1. Create a free cluster on [MongoDB Atlas](https://cloud.mongodb.com)
  2. In Vercel dashboard → Settings → Environment Variables, add `MONGODB_URI`
  3. (Optional) Update `api/content/[endpoint].js` to read from DB when the URI is set
- ❌ **No orders/inquiries persistence** — those endpoints are still in `server/` for local dev, but not exposed in Vercel
- The Express `server/` folder remains for local development (`npm run dev`)
