from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy import create_engine, ForeignKey, String, Boolean
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship, sessionmaker, Session
import os

# Modern SQLAlchemy 2.0 Base Class
class Base(DeclarativeBase):
    pass

# Database configuration
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Database models using 2.0 syntax
class PartnershipsDB(Base):
    __tablename__ = "partnerships"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    early_adopter: Mapped[bool] = mapped_column(default=False)
    tech_partner: Mapped[bool] = mapped_column(default=False)
    cofounder: Mapped[bool] = mapped_column(default=False)
    investor: Mapped[bool] = mapped_column(default=False)

class UserDB(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(50))
    email: Mapped[str] = mapped_column(String(100), unique=True, index=True)
    phone: Mapped[str] = mapped_column(String(20), nullable=True)
    linkedin: Mapped[str] = mapped_column(String(100), nullable=True)
    use_case: Mapped[str] = mapped_column("use_case", String(50))  # Explicit column name mapping
    partnerships: Mapped[PartnershipsDB] = relationship(uselist=False)

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
    phone: str | None = None
    linkedin: str | None = None
    useCase: str  # CamelCase for JSON input
    partnerships: Partnerships

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# FastAPI app
app = FastAPI()

@app.get("/")
def health_check():
    return "200"

@app.post("/api/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    try:
        # Convert Pydantic model to ORM model
        db_partnerships = PartnershipsDB(**user.partnerships.dict())
        db_user = UserDB(
            name=user.name,
            email=user.email,
            phone=user.phone,
            linkedin=user.linkedin,
            use_case=user.useCase,  # Map camelCase to snake_case
            partnerships=db_partnerships
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return {"message": "Signup successful", "id": db_user.id}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail=str(e))
