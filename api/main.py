from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Minimal database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Simple ORM model
class UserDB(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String, nullable=True)
    linkedin = Column(String, nullable=True)
    use_case = Column(String)
    early_adopter = Column(Boolean)
    tech_partner = Column(Boolean)
    cofounder = Column(Boolean)
    investor = Column(Boolean)

Base.metadata.create_all(bind=engine)

# Simplified Pydantic model
class UserCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    linkedin: Optional[str] = None
    useCase: str
    partnerships: dict  # Accept raw dict instead of nested model

app = FastAPI()

@app.get("/")
def health_check():
    return "200"

@app.post("/api/signup")
def signup(user: UserCreate):
    try:
        # Direct database insertion without ORM
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
        return {"error": str(e)}
