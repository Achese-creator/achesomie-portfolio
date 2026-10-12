from pathlib import Path

from langchain_community.document_loaders import (
    DirectoryLoader,
    PyPDFLoader,
    TextLoader,
)


def load_documents():
    docs = []

    # Markdown files in data/
    data_path = Path("data")

    if data_path.exists():
        loader = DirectoryLoader(
            str(data_path),
            glob="**/*.md",
            loader_cls=TextLoader,
        )
        docs.extend(loader.load())

    # Markdown files in projects/
    projects_path = Path("projects")

    if projects_path.exists():
        loader = DirectoryLoader(
            str(projects_path),
            glob="**/*.md",
            loader_cls=TextLoader,
        )
        docs.extend(loader.load())

   # Resume PDF
resume = data_path / "YifieyehAcheseIntern_1page.pdf"

if resume.exists() and resume.stat().st_size > 0:
    docs.extend(PyPDFLoader(str(resume)).load())