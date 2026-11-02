# CONFAM — AI-Assisted Medicine Verification

## Project overview

CONFAM is an independent AI-assisted medicine-package and regulatory
evidence checker for Nigeria, developed by Achesomie as a solo capstone.

Tagline: "NAFDAC verifies the number. CONFAM verifies the product."

GitHub repository:
https://github.com/Achese-creator/Confam

CONFAM is not a NAFDAC product, official service, or endorsed system.

## Problem being addressed

A medicine package can display a registration number that appears valid,
but that number may belong to a different medicine.

Checking whether a registration number exists is not enough. The product
identity and other claims printed on the package also need to be compared
with the available registration evidence.

CONFAM helps identify inconsistencies between medicine-package claims
and available Nigerian medicine registration records and safety alerts.

## How it works

1. A user submits photographs of a medicine package.
2. The AI extraction workflow identifies relevant product information.
3. Extracted information is returned in a structured format.
4. Pydantic validation checks the structure of the extracted data.
5. The user can review the extracted information.
6. Backend verification logic compares relevant claims against available
   registration records and safety evidence.
7. The application presents discrepancies and supporting evidence.

The multi-image extraction workflow supports up to six images in a
single request.

## Information examined

Depending on image quality and available records, CONFAM can examine:

- Product name and identity.
- NAFDAC registration number (NRN).
- Product strength.
- Dosage form.
- Route of administration.
- Manufacturer or regulatory holder/marketer information.
- Relevant registration and safety-alert evidence.

## Example verification scenario

A demonstration involving a BETACLOX package identified a registration
number associated with a Mebendazole 500mg record.

This illustrates the central problem CONFAM addresses: a registration
number may correspond to a different product from the one printed on
the package.

The example is an illustration of a product-record mismatch, not a
general claim about every product carrying that name.

## Technical architecture

- Python backend.
- FastAPI REST API.
- React frontend.
- Gemini-powered structured image extraction.
- Pydantic schemas and validation.
- User review of extracted package information.
- Deterministic backend comparison logic.
- Live registry lookup with curated local-data fallback.
- Agent-based tool calling.
- SQLite demo data layer.
- Telegram bot interface for submitting package images and receiving
  results.

## AI engineering design

CONFAM separates AI extraction from verification.

The language model interprets package photographs and extracts claims
into structured fields. Backend verification logic then compares those
claims against available records.

This separation is important: an LLM-generated extraction is not itself
proof that a medicine is registered or authentic.

## Main capabilities

- Multi-photo medicine-package extraction.
- Structured extraction and schema validation.
- User review of extracted information.
- Registration-number and product-detail comparison.
- Evidence-aware reporting.
- Registry lookup with curated local fallback.
- Agent-based tool calling.
- Telegram bot access.

## Developer contribution

CONFAM is Achesomie's solo capstone. He developed the application
across its AI extraction workflow, backend verification, API,
frontend integration, and Telegram interface.

The project demonstrates applied AI engineering, multimodal
information extraction, structured LLM outputs, backend development,
tool calling, and evidence-grounded application design.

## Limitations and responsible use

- CONFAM is independent and is not affiliated with or endorsed by NAFDAC.
- Available registry evidence may not represent complete or current
  official registry coverage.
- Curated local records are used as a fallback when applicable.
- A mismatch is a reason for further investigation, not proof that a
  medicine is counterfeit.
- A clean result does not prove that a medicine is genuine, safe, or
  approved.
- Not every package date or batch detail is independently verified
  against official records.
- Image quality and AI extraction errors can affect results.
- Users should consult authoritative sources and qualified professionals
  when making medicine-safety decisions.

## Chatbot response guidance

When asked about CONFAM, explain its purpose, photo-based extraction,
structured validation, deterministic comparison, evidence reporting,
registry lookup, and Telegram interface.

Clearly distinguish AI extraction from backend verification. Do not
claim that CONFAM is an official NAFDAC service, guarantees authenticity,
or provides complete regulatory coverage.
