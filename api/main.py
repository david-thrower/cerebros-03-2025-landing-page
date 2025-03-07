
from fastapi import FastAPI, Form
from pydantic import BaseModel, EmailStr
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String, Boolean, Text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

app = FastAPI()

# Database setup
database_url = "sqlite:///./test.db"
engine = create_engine(database_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Pydantic models
class SignUpModel(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    linkedin: Optional[str] = None
    use_case: str
    early_adopter: bool = False
    tech_partner: bool = False
    cofounder: bool = False
    investor: bool = False

# Database model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    linkedin = Column(String)
    use_case = Column(Text)
    early_adopter = Column(Boolean, default=False)
    tech_partner = Column(Boolean, default=False)
    cofounder = Column(Boolean, default=False)
    investor = Column(Boolean, default=False)

Base.metadata.create_all(bind=engine)

@app.post("/signup")
async def signup(
    name: str = Form(...),
    email: EmailStr = Form(...),
    phone: Optional[str] = Form(None),
    linkedin: Optional[str] = Form(None),
    use_case: str = Form(...),
    early_adopter: bool = Form(False),
    tech_partner: bool = Form(False),
    cofounder: bool = Form(False),
    investor: bool = Form(False),
):
    signup_data = SignUpModel(
        name=name,
        email=email,
        phone=phone,
        linkedin=linkedin,
        use_case=use_case,
        early_adopter=early_adopter,
        tech_partner=tech_partner,
        cofounder=cofounder,
        investor=investor,
    )

    # Save data to the database
    db = SessionLocal()
    user = User(**signup_data.dict())
    db.add(user)
    db.commit()
    db.refresh(user)

    return {"message": "Signup successful"}
