import os

os.environ["HF_HUB_OFFLINE"] = "1"
os.environ["TRANSFORMERS_OFFLINE"] = "1"

from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

from config import (
    GROQ_API_KEY,
    MODEL_NAME,
    EMBEDDING_MODEL,
    FAISS_PATH,
)

# ------------------------
# Embeddings
# ------------------------

embeddings = HuggingFaceEmbeddings(
    model_name=EMBEDDING_MODEL
)

# ------------------------
# Load Vector Database
# ------------------------

vectorstore = FAISS.load_local(
    FAISS_PATH,
    embeddings,
    allow_dangerous_deserialization=True,
)

retriever = vectorstore.as_retriever(
    search_kwargs={"k":4}
)

# ------------------------
# LLM
# ------------------------

llm = ChatGroq(
    api_key=GROQ_API_KEY,
    model=MODEL_NAME,
)

# ------------------------
# Prompt
# ------------------------

prompt = ChatPromptTemplate.from_template(
"""
You are Achesomie's professional AI portfolio assistant.

Answer ONLY using the context below.

If the answer isn't contained in the context, reply:

"I don't have enough information about that yet."

Context:

{context}

Question:

{question}
"""
)

# ------------------------
# Helper
# ------------------------

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

# ------------------------
# Chain
# ------------------------

assistant = (
    {
        "context": retriever | format_docs,
        "question": RunnablePassthrough(),
    }
    | prompt
    | llm
    | StrOutputParser()
)