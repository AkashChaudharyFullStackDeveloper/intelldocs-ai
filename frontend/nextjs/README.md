# Frontend Usage Guide


## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---
For API details, see backend `api-docs.yaml` (OpenAPI/Swagger).

## Features
- **Login/Register:** Authenticate as user/admin (JWT)
- **Upload Document:** Upload and analyze business documents
- **Dashboard:** View analytics and document stats
- **Approval Flow:** Approve/reject documents (admin)
- **Notifications:** See notifications for your account

## Usage Example

### Register
```
POST /api/register
{
  "username": "user1",
  "password": "pass123",
  "role": "user"
}
```

### Login
```
POST /api/users/login
{
  "username": "user1",
  "password": "pass123"
}
```

### Upload Document
- Login to get JWT token
- Use the UI to upload a file, or:
```
POST /api/documents/upload
Headers: Authorization: Bearer <token>
FormData: file=<yourfile>
```

### Approval/Notification
- Admin can approve/reject via UI or API
- Users see notifications in the dashboard

---
For API details, see backend `api-docs.yaml` (OpenAPI/Swagger).
