FROM python:3.14.0a5-bookworm
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
ENTRYPOINT [ "uvicorn", "main:app", "--", "--host", "0.0.0.0", "--port", "8000", "--reload" ]
