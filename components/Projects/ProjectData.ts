
export const projects = [
    {
        id: "vault-ai",
        name: "vault-ai/",
        title: "Vault AI — Universal Document Agent",
        image: "/projects/vault-ai.png",

        description:
            "A privacy-focused document intelligence application built during the TAG AI Engineering Bootcamp. Users can query documents using locally hosted LLMs, retrieve relevant passages with source citations, and compare information across multiple documents.",

        highlights: [
            "Local LLM Inference with Ollama",
            "Llama 3.2:3b",
            "PDF, PPTX and TXT Support",
            "Source-Grounded Answers",
            "Multi-Document Comparison",
            "Chroma Retrieval with Reranking",
            "React and FastAPI",
            "Team Project — 2nd Place",
        ],

        stack: [
            "Python",
            "FastAPI",
            "React",
            "Ollama",
            "Llama 3.2:3b",
            "Chroma",
        ],

        github:
            "https://github.com/tag-ecosystemai/c1-accelerators-project-1",

        demo: "",
    },

    {
        id: "talentmatch-ai",
        name: "talentmatch-ai/",
        title: "TalentMatch AI — Resume-to-Job Matching",

        image: "/projects/Talentmatch-ai.png",

        description:
            "A team-built recruitment matching platform developed during the TAG AI Engineering Bootcamp. It evaluates resumes against job requirements using weighted criteria, helping recruiters understand how candidate profiles align with a role.",

        highlights: [
            "Skills Match — 40%",
            "Experience Match — 25%",
            "Responsibilities Match — 15%",
            "Education Match — 10%",
            "Preferences Match — 10%",
            "Explainable Matching Criteria",
            "FastAPI Backend",
            "React and TypeScript Frontend",
        ],

        stack: [
            "Python",
            "FastAPI",
            "React",
            "TypeScript",
            "SQLAlchemy",
            "PostgreSQL",
        ],

        github:
            "https://github.com/tag-ecosystemai/c1-accelerators-project-2",

        demo: "",
    },

    {
        id: "sentinel-ai",
        name: "sentinel-ai/",
        title: "SentinelAI — Supply-Chain Intelligence",

        image: "/projects/sentinel-ai.jpg",

        description:
            "A supply-chain disruption intelligence project developed during the TAG AI Engineering Bootcamp. The solution focuses on investigating shipment risks using shipment data and supporting evidence, with an emphasis on explainable findings and a practical SaaS workflow.",

        highlights: [
            "Shipment Risk Investigation",
            "Supply-Chain Disruption Analysis",
            "Shipment CSV and Excel Workflow",
            "Canonical Shipment Data",
            "Evidence-Based Risk Assessment",
            "AI Agent Engineering",
            "FastAPI Backend",
            "Team Accelerators",
        ],

        stack: [
            "Python",
            "FastAPI",
            "Pandas",
            "SQLAlchemy",
            "LLM Agents",
            "RAG",
        ],

        github:
            "https://github.com/tag-ecosystemai/c1-accelerators-project-3",

        demo: "https://sentinelai.wonderfulpebble-77e0325a.uksouth.azurecontainerapps.io/",
    },
];
