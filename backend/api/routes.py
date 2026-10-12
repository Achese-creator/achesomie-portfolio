from fastapi import APIRouter
from pydantic import BaseModel

from services.assistant import assistant

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/chat")
async def chat(request: ChatRequest):

    answer = assistant.invoke(request.question)

    return {
        "answer": answer
    }