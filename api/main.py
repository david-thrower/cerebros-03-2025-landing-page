from sqlalchemy.orm import registry, mapped_column, Mapped
from fastapi import FastAPI, Form
from pydantic import BaseModel, EmailStr
from typing import Optional
from sqlalchemy import create_engine, Integer, String, Boolean, Text
from sqlalchemy.orm import sessionmaker

app = FastAPI()

# Database setup
database_url = "sqlite:///./test.db"
engine = create_engine(database_url)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
mapper_registry = registry()
Base = mapper_registry.generate_base()

# Pydantic model
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

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String, index=True)
    email: Mapped[str] = mapped_column(String, unique=True, index=True)
    phone: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    linkedin: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    use_case: Mapped[str] = mapped_column(Text)
    early_adopter: Mapped[bool] = mapped_column(Boolean, default=False)
    tech_partner: Mapped[bool] = mapped_column(Boolean, default=False)
    cofounder: Mapped[bool] = mapped_column(Boolean, default=False)
    investor: Mapped[bool] = mapped_column(Boolean, default=False)

# Create tables
Base.metadata.create_all(bind=engine)

@app.get("/")
async def placeholder():
    return "200"


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
    db.close()

    return {"message": "Signup successful"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
