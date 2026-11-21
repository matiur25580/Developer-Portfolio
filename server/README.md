# Portfolio API configuration

The Express API runs from this directory. Configure the following environment variables in the API host before using the admin message inbox:

- `MONGO_URI`: MongoDB connection string.
- `ADMIN_PASS`: a unique, high-entropy admin password. There is no built-in/default password.
- `ADMIN_SESSION_SECRET`: a separate random secret of at least 32 characters used to sign short-lived admin sessions.
- `PORT`: optional; defaults to `5000`.

Generate a session secret with:

```sh
node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"
```

The admin login endpoint is `POST /api/contact/admin/login` with JSON `{"password":"..."}`. It returns a bearer token that expires after 15 minutes. Send it as `Authorization: Bearer <token>` when listing or deleting contact messages. Login attempts are limited per client IP. If either admin secret is missing, all admin authentication endpoints fail closed with HTTP 503.

Never commit production secrets to this repository. Rotate both admin secrets if they have ever been exposed.
