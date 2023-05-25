# How To Run
### Requirements
- docker 
- firebase account
- nodejs
- firebase credidential json file

### Application Structure

    Sum(parent directory)
        - interface (sub directory responisible for holding our react files)
            - src
                - app.js
                - ...
            - node_modules
            - public
            - Dockerfile
            - ...

        - server (sub directory responisible for holding our react files)
            - creds.json
            - Dockerfile
            - app.js
            - package.json

        - docker-compose.yml
        
### Build & RUN
call this command in the project main directory or where the docker-compose.yml is:

    `docker-compose up --build`