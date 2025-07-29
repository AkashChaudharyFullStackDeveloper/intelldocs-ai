# Code Structure for intelldocs-ai

```
intelldocs-ai/
│
├── backend/
│   ├── node/                # Node.js Express API (user mgmt, workflow, orchestration, JWT, MongoDB)
│   │   ├── src/
│   │   │   ├── controllers/         # Business logic (user, document, approval)
│   │   │   ├── routes/              # Express routes (user, document, dashboard)
│   │   │   ├── middleware/          # JWT auth, role-based access
│   │   │   ├── models/              # Mongoose models (User, Document)
│   │   │   └── app.js               # Main Express app
│   │   ├── package.json
│   │   └── Dockerfile
│   ├── python/              # Python microservices (GenAI, NLP, OCR)
│   │   ├── genai_nlp.py             # GenAI/NLP microservice (OpenAI, HuggingFace)
│   │   ├── ocr_service.py           # OCR microservice
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   ├── mongo/               # MongoDB setup (metadata)
│   └── postgres/            # PostgreSQL setup (users/data)
│
├── frontend/
│   ├── nextjs/              # Next.js + TypeScript + Redux Toolkit
│   │   ├── pages/                   # Main pages (index.tsx, login, dashboard)
│   │   ├── components/              # UI components (Dashboard, Approval, Notifications)
│   │   ├── store/                   # Redux Toolkit store (auth, docs, analytics)
│   │   ├── package.json
│   │   └── Dockerfile
│
├── README.md
└── CODE_STRUCTURE.md
```
