# SentinelAI — Supply-Chain Disruption Intelligence

## Project identity
SentinelAI is a supply-chain disruption intelligence project developed by
Team Accelerators during the TAG AI Engineering Bootcamp Project 3.

Alternative names: SentinelAI, Sentinel AI, supply-chain intelligence,
shipment risk investigation, supply-chain disruption agent.

## Problem
Supply-chain teams need to identify and investigate shipment risks and
potential disruptions. Shipment records alone may not explain why a
shipment is at risk or what supporting evidence is relevant.

## Project direction
The project's intended workflow centres on shipment-level risk
investigation using shipment data and supporting evidence, with an emphasis
on explainable findings and a practical SaaS-style experience.

The planned MVP workflow includes:
1. Upload shipment data in CSV or Excel format.
2. Parse, map, validate, and normalize shipment records into a canonical
   shipment schema.
3. Review shipment records in a workspace or shipment dashboard.
4. Select a shipment for an AI-assisted investigation.
5. Use relevant evidence and knowledge sources to support the findings.

These are the documented project direction and intended workflow. Do not
assume every step is implemented or deployed without checking the actual
repository and demo.

## Data
The project work included the DataCo Supply Chain dataset, a large dataset
of supply-chain and order information. The dataset was explored for
shipment and delivery-risk analysis.

The existence of this dataset does not by itself establish the accuracy of
any model, the reliability of a risk score, or the completion of a
production-ready prediction pipeline.

## AI engineering direction
The project focuses on AI-agent-assisted investigation and evidence-based
risk analysis. Retrieval-augmented generation (RAG) is part of the
technical direction for bringing relevant supporting knowledge into an
investigation.

Relevant technical areas include:
- Python and FastAPI.
- Data ingestion and normalization with tools such as Pandas.
- Shipment and report persistence using database models and SQLAlchemy.
- LLM-agent workflows.
- Retrieval-augmented generation for supporting evidence.

These describe the project's architecture and direction, not a guarantee
that every component is fully implemented.

## Team and personal contribution
SentinelAI was developed by Team Accelerators during TAG AI Engineering
Bootcamp Project 3.

Achesomie served as the AI/agent lead and ML lead, with plans to support
the RAG work as well.

## Design priorities
- Investigate risk at the shipment level.
- Make findings explainable and evidence-aware.
- Support structured shipment data.
- Build toward a usable SaaS workflow.
- Avoid presenting unsupported conclusions as verified facts.

## Repository
https://github.com/tag-ecosystemai/c1-accelerators-project-3

## Limitations and responsible interpretation
AI-generated findings should not be treated as confirmed disruptions without
supporting evidence. Dataset patterns do not automatically generalize to
current real-world shipments. Distinguish intended workflows from verified
implementation and avoid inventing model metrics or deployment status.

## Answering guidance
When asked about SentinelAI, explain the supply-chain problem, shipment
investigation workflow, DataCo dataset, AI-agent direction, and Achesomie's
AI/agent and ML leadership role. Be explicit when discussing features that
were planned rather than verified as complete.
