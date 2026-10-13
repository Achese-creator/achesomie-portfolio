# TalentMatch AI — Resume-to-Job Matching

## Project identity
TalentMatch AI is a recruitment matching platform developed by Team
Accelerators during the TAG AI Engineering Bootcamp Project 2.

Alternative names: TalentMatch, TalentMatch AI, resume matching, CV-to-job
matching, candidate-job matching, recruitment matching.

## Problem
Recruiters need to evaluate candidates against job requirements. Reviewing
many resumes manually can be time-consuming, and an unexplained overall
score may not show why a candidate matches a role.

## Purpose
TalentMatch AI is designed to compare candidate resumes with a job's
requirements and make the matching criteria more understandable to
recruiters.

## Matching criteria
The project's specified weighted criteria are:

- Skills match: 40%.
- Experience match: 25%.
- Responsibilities match: 15%.
- Education match: 10%.
- Preferred criteria match: 10%.

The weights total 100%. They describe the project's matching framework;
they should not be interpreted as proof of a particular candidate's
real-world suitability or future job performance.

## Technology and architecture
The planned project stack includes:
- Backend: Python and FastAPI.
- Frontend: React and TypeScript with Vite.
- ORM: SQLAlchemy.
- Database: PostgreSQL.

The application is intended to connect the candidate-matching workflow
with a recruiter-facing interface.

## Explainability
The weighted criteria are intended to help explain how a candidate profile
aligns with job requirements, rather than relying only on an unexplained
single score. The score depends on the project's matching logic and the
information available in the candidate's resume and job description.

## Team and personal contribution
TalentMatch AI was developed as a team project by Team Accelerators during
the TAG AI Engineering Bootcamp Project 2.

The team project involved resume-to-job matching and a full-stack
application architecture. Do not infer specific individual contributions
for Achesomie unless they are documented elsewhere in the portfolio's
knowledge sources.

## Repository
https://github.com/tag-ecosystemai/c1-accelerators-project-2

## Limitations and responsible interpretation
A match score is decision support, not a hiring decision. Resume information
may be incomplete or inaccurate, and weighted criteria can reflect the
assumptions built into the matching system. The score should not be treated
as an objective measure of a person's worth or guaranteed job performance.

## Answering guidance
When asked how TalentMatch AI works, explain the five weighted matching
criteria and the intended recruitment workflow. Describe technologies as
the project's stack, but do not claim that every planned integration,
database operation, or feature was completed unless verified.
