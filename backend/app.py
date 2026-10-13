import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import router

app = FastAPI(title="Portfolio AI API")

origins = {
    "http://localhost:3000",
    "https://humble-space-umbrella-jjx9qxqv7jxqcqpw9-3000.app.github.dev",
}

for variable in ("FRONTEND_URL", "FRONTEND_ORIGINS"):
    values = os.getenv(variable, "")
    origins.update(
        origin.strip().rstrip("/")
        for origin in values.split(",")
        if origin.strip()
    )

app.add_middleware(
    CORSMiddleware,
    allow_origins=sorted(origins),
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
)

app.include_router(router)


@app.get("/")
def root():
    return {"message": "Portfolio AI Backend Running 🚀"}
