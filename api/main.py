from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship
import os

# Database configuration
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Database models
class PartnershipsDB(Base):
    __tablename__ = "partnerships"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    early_adopter = Column(Boolean)
    tech_partner = Column(Boolean)
    cofounder = Column(Boolean)
    investor = Column(Boolean)

class UserDB(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    linkedin = Column(String)
    use_case = Column(String)
    partnerships = relationship("PartnershipsDB", uselist=False)

Base.metadata.create_all(bind=engine)

# Pydantic schemas
class Partnerships(BaseModel):
    earlyAdopter: bool
    techPartner: bool
    cofounder: bool
    investor: bool

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    linkedin: str
    useCase: str
    partnerships: Partnerships

# CRUD operations
def create_user(db: Session, user: UserCreate):
    db_partnerships = PartnershipsDB(**user.partnerships.dict())
    db_user = UserDB(
        name=user.name,
        email=user.email,
        phone=user.phone,
        linkedin=user.linkedin,
        use_case=user.useCase,
        partnerships=db_partnerships
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# FastAPI app
app = FastAPI()

@app.get("/")
def root():
    return "200"

@app.post("/api/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    try:
        db_user = create_user(db, user)
        return {"message": "Signup successful", "id": db_user.id}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))
