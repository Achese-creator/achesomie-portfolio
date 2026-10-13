from pathlib import Path

from langchain_community.document_loaders import (
    DirectoryLoader,
    PyPDFLoader,
    TextLoader,
)

BACKEND_DIR = Path(__file__).resolve().parents[1]


def load_documents():
    docs = []

    # Load Markdown knowledge from backend/data/
    data_path = BACKEND_DIR / "data"

    if data_path.exists():
        loader = DirectoryLoader(
            str(data_path),
            glob="**/*.md",
            loader_cls=TextLoader,
            loader_kwargs={"encoding": "utf-8"},
        )
        docs.extend(loader.load())

    # Load project knowledge from backend/projects/
    projects_path = BACKEND_DIR / "projects"

    if projects_path.exists():
        loader = DirectoryLoader(
            str(projects_path),
            glob="**/*.md",
            loader_cls=TextLoader,
            loader_kwargs={"encoding": "utf-8"},
        )
        docs.extend(loader.load())

    # Load the CV PDF if it exists and is not empty
    resume_path = data_path / "YifieyehAcheseIntern_1page.pdf"

    if resume_path.exists() and resume_path.stat().st_size > 0:
        docs.extend(PyPDFLoader(str(resume_path)).load())

    if not docs:
        raise ValueError(
            f"No knowledge documents found under {data_path} "
            f"or {projects_path}"
        )

    return docs
