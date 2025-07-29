# intelldocs-ai

## Overview
A robust end-to-end platform for extracting, analyzing, and summarizing business documents (invoices, contracts, proposals) using GenAI and OCR. Designed for individual, small & large-scale enterprise use, with role-based access, approval workflows, analytics, and production-ready deployment.

## Problem Statement
Enterprises deal with vast amounts of business documents. Manual extraction, analysis, and summarization are time-consuming and error-prone. There’s a need for an end-to-end, scalable, and secure platform that leverages GenAI and OCR to automate these processes, provide actionable insights, and support enterprise workflows.


## Solution
**intelldocs-ai** enables:
- Secure document upload and parsing (OCR)
- GenAI-powered summarization and key insight extraction
- Role-based authentication and approval workflows (JWT)
- Analytics dashboard for document intelligence
- Scalable, microservices-based architecture
- Document/user metadata storage in MongoDB/Postgres
- Real GenAI model integration (OpenAI, HuggingFace)
- Approval flows and notifications
- Dockerized for production deployment

## Tech Stack
- **Frontend:** Next.js, TypeScript, Redux Toolkit
- **Backend:** Node.js (Express, JWT, MongoDB, Postgres), Python (GenAI + NLP, Flask)
- **Databases:** MongoDB (metadata), PostgreSQL (user/data)
- **AI Integration:** OpenAI/GPT, HuggingFace
- **OCR:** Tesseract.js or Azure Form Recognizer

## Code Structure
See [CODE_STRUCTURE.md](./CODE_STRUCTURE.md)

## Example Usage
1. Login with your role (admin/user) via the web UI (JWT auth).
2. Upload a document (invoice, contract, etc.) via the web UI.
3. Backend Node.js service orchestrates:
   - Stores document/user metadata in MongoDB/Postgres
   - Calls Python OCR microservice to extract text
   - Calls Python GenAI microservice to summarize and extract insights
   - Handles approval flows and notifications
4. Results (summary, insights) are shown in the UI.
5. Analytics dashboard displays document stats and approval status.

## How to Run

### Prerequisites
- Node.js, Python 3.8+, MongoDB, PostgreSQL
- Install Tesseract OCR (for pytesseract)
- Python: `pip install -r backend/python/requirements.txt`
- Node: `npm install` in both backend/node and frontend/nextjs

### Steps
1. **Start MongoDB and PostgreSQL** (for metadata and user/data storage)
2. **Start Python OCR Service**
   ```bash
   cd backend/python
   python ocr_service.py
   ```
3. **Start Python GenAI Service**
   ```bash
   cd backend/python
   python genai_nlp.py
   ```
4. **Start Node.js Backend**
   ```bash
   cd backend/node
   npm install
   npm start
   ```
5. **Start Next.js Frontend**
   ```bash
   cd frontend/nextjs
   npm install
   npm run dev
   ```
6. **Open Frontend**
   - Go to `http://localhost:3000` in your browser.
7. **Production Deployment**
   - Use provided Dockerfiles in each service directory for containerized deployment.

## Leadership & Scalability
- **Cross-functional Team:** Led engineers, data scientists, and product managers to deliver a secure, scalable platform.
- **Safe AI Integration:** Used prompt engineering, output validation, and audit logs for responsible GenAI use.
- **Scalable Microservices:** Each AI/NLP/OCR service is independently deployable and horizontally scalable.
- **Role-based Security:** JWT authentication and role-based access for all endpoints.
- **Analytics & Approval:** Real-time dashboard and approval flows for enterprise compliance.

---
For more details, see [CODE_STRUCTURE.md](./CODE_STRUCTURE.md)
