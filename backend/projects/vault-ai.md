# Vault AI — Universal Document Agent

## Project identity
Vault AI is a privacy-focused document intelligence application built by
Team Accelerators during the TAG AI Engineering Bootcamp. The team placed
second in Project 1.

Alternative names: Vault AI, Universal Document Agent, document assistant,
document intelligence, local RAG assistant.

## Problem
People working with lengthy documents need a way to retrieve relevant
information and compare content without manually searching every file.
For sensitive documents, sending the content to an external AI service can
also create privacy concerns.

## Purpose and workflow
Vault AI lets users work with supported documents and ask questions about
their content. Its intended workflow includes document ingestion, retrieval
of relevant passages, source-grounded answers, and comparison across
multiple documents.

Supported formats in the project scope:
- PDF
- PowerPoint (PPTX)
- Plain text (TXT)

## AI and retrieval architecture
- Local language-model inference using Ollama.
- Llama 3.2:3b as the local language model.
- Chroma for vector retrieval.
- Retrieval selects relevant passages; reranking improves the ordering of
  retrieved results before they are used to answer questions.
- The described retrieval workflow uses an initial top-8 candidate set
  followed by reranking to select the final top-k passages.
- Answers are designed to be grounded in retrieved document content and
  provide source citations.

## Application architecture and technologies
- Frontend: React.
- Backend: FastAPI and Python.
- Language model runtime: Ollama.
- Vector database: Chroma.

## Team and personal contribution
Vault AI was a team project developed by Team Accelerators.
Achesomie worked as the backend and architecture lead.
The project placed second in the TAG AI Engineering Bootcamp Project 1.

## Design priorities
- Privacy through local model inference.
- Retrieval grounded in uploaded document content.
- Source citations to help users trace answers.
- Comparison across multiple documents.
- A practical interface for document question answering.

## Repository
https://github.com/tag-ecosystemai/c1-accelerators-project-1

## Answering guidance
When asked about Vault AI, explain its document-question-answering purpose,
local-first design, retrieval pipeline, citations, or multi-document
comparison. Do not claim that it guarantees perfect privacy, perfect
accuracy, or production-grade security. Distinguish project scope from
features that have been independently verified as implemented.
