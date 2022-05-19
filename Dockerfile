FROM mcr.microsoft.com/playwright:v1.22.0-focal
ENV CI=true
WORKDIR /testspace
COPY . .
RUN npm ci
RUN npx playwright install
CMD npx playwright test
