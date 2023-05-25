# Stage 1: Build the React app
FROM node:14 as build

WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Stage 2: Serve the built app with a lightweight HTTP server
FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/build /app/build

RUN npm install -g serve

ENTRYPOINT [ "serve" ]

CMD ["-p", "3000", "-s", "/app/build"]
