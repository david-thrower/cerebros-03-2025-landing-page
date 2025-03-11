from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from sqlalchemy import create_engine, String, Boolean
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, sessionmaker
from os import getenv

POSTGRES_PASSWORD = getenv("POSTGRES_PASSWORD")

# SQLAlchemy 2.0 base class
class Base(DeclarativeBase):
    pass

# Database setup

# SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
# engine = create_engine(SQLALCHEMY_DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

SQLALCHEMY_DATABASE_URL = f"postgresql://postgres:{POSTGRES_PASSWORD}@postgres-service.landingpage.svc.cluster.local:5432/postgres"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Minimal ORM model
class UserDB(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(50))
    email: Mapped[str] = mapped_column(String(100))
    phone: Mapped[Optional[str]] = mapped_column(String(20))
    linkedin: Mapped[Optional[str]] = mapped_column(String(100))
    use_case: Mapped[str] = mapped_column(String(50))
    early_adopter: Mapped[bool]
    tech_partner: Mapped[bool]
    cofounder: Mapped[bool]
    investor: Mapped[bool]

Base.metadata.create_all(bind=engine)

# Pydantic model
class UserCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    linkedin: Optional[str] = None
    useCase: str
    partnerships: dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://cerebros.one"],  # Specific frontend origin
    allow_methods=["POST", "OPTIONS"],        # Required methods
    allow_headers=["Content-Type", "Accept"], # Needed for JSON requests
    expose_headers=["Access-Control-Allow-Origin"],  # Make visible to browsers
    max_age=600                                # Cache preflight response
)

@app.get("/")
def health_check():
    return "200"

@app.post("/api/signup")
def signup(user: UserCreate):
    try:
        with SessionLocal() as db:
            db_user = UserDB(
                name=user.name,
                email=user.email,
                phone=user.phone,
                linkedin=user.linkedin,
                use_case=user.useCase,
                early_adopter=user.partnerships.get("earlyAdopter", False),
                tech_partner=user.partnerships.get("techPartner", False),
                cofounder=user.partnerships.get("cofounder", False),
                investor=user.partnerships.get("investor", False)
            )
            db.add(db_user)
            db.commit()
        return {"message": "Signup successful"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
