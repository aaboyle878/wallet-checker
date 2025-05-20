# Wallet-checker

This repo contains a simple front and backend service for use with the chainalysis api. It will display a simple webpage allowing users to input the wallet address they want to screen and return a JSON output if there are any imposed sanctions.

For local builds the backend will use the API-Key passed in the .env file however when using with docker this must be passed using --build-arg API_KEY= 