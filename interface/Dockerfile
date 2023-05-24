# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the built app with a lightweight HTTP server
FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/build .

RUN npm install -g serve

CMD ["serve", "-p", "3000", "-s", "."]
