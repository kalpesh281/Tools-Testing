# CICD

A practice project for learning **CI/CD with GitHub Actions**, using a Node.js + Express backend containerized with Docker.

## Project Structure

```
CICD/
└── Nodejs/
    ├── app.js                # Express app — defines routes, exports app
    ├── index.js              # Server entry point — starts app.listen()
    ├── tests/
    │   └── app.test.js       # Jest + Supertest test suite
    ├── Dockerfile            # Container build instructions
    ├── docker-compose.yml    # Service orchestration
    └── package.json
```

## API Endpoints

| Method | Route          | Description                          |
|--------|----------------|--------------------------------------|
| GET    | `/`            | Welcome message                      |
| GET    | `/health`      | Health check — returns `OK`          |
| GET    | `/hello`       | Returns `Hello, World!`              |
| GET    | `/api/status`  | JSON service status (for CI checks)  |

## Getting Started

```bash
cd Nodejs
npm install
npm start          # runs on http://localhost:8008
```

## Running Tests

```bash
cd Nodejs
npm test
```

Uses **Jest** + **Supertest** to test all endpoints in-memory.

## Docker

```bash
cd Nodejs
docker-compose up --build      # build and start
docker-compose down            # stop and clean up
```

## CI/CD

GitHub Actions runs the test suite automatically on every push and pull
request. See `.github/workflows/` for the pipeline definition.
