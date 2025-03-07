FROM python:3.9-slim 

# 3.14.0a5-bookworm

# Install Rust and Cargo
# RUN apt-get update && apt-get install -y curl \
#    && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y \
#    && source $HOME/.cargo/env

WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
ENTRYPOINT ["uvicorn", "main:app", "--", "--host", "0.0.0.0", "--port", "8000", "--reload"]

