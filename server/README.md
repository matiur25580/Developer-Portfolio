# Portfolio API configuration

The Express API runs from this directory.

## Required environment

- `MONGO_URI`: MongoDB connection string. The server refuses to start if it is missing or the database connection fails.
- `PORT`: optional HTTP port; defaults to `5000`.
- `FRONTEND_ORIGINS`: optional comma-separated list of exact browser origins allowed by CORS. Defaults to `https://developer-portfolio-client.vercel.app`. Add the exact production and preview origins used by your frontend host; do not use a wildcard.
- `ADMIN_PASS`: unique, high-entropy admin password. There is no built-in/default password.
- `ADMIN_SESSION_SECRET`: a separate random secret of at least 32 characters used to sign short-lived admin sessions.

Generate a session secret with:

```sh
node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"
```

If either admin secret is missing, admin login, message listing and deletion fail closed with HTTP 503. The login endpoint is `POST /api/contact/admin/login` with JSON `{"password":"..."}`. It returns a bearer token that expires after 15 minutes. Send it as `Authorization: Bearer <token>` when listing or deleting messages.

Login attempts and public contact submissions are limited to five requests per client IP per 15 minutes. These in-memory limits protect a single running instance; if you scale the API to multiple instances, move rate-limit state to a shared store such as Redis.

The health endpoint returns HTTP 200 only when MongoDB is connected, and HTTP 503 otherwise. Contact message listing and deletion always require a valid signed admin token. Public contact input is validated and bounded, and API errors do not expose database details.

Run backend security regression tests with:

```sh
npm test
```

Never commit production secrets to this repository. Rotate both admin secrets if they have ever been exposed.
