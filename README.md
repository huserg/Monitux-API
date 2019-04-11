# Monitux API

This is a Debian / Ubuntu node.JS API to monitor the processes that runs on your machine. 

It delivers a list of processes and their status in JSON. You can select them for monitoring to have a smaller list of your preferred processes.

## Installation 

Create a database with the `database_creation_script.sql`

Create the `config/const.js` file from `config/const.example.js`

Install npm dependencies

    npm install
    
## TODO 

### Secure API

Implement a co mmand to generate an API KEY

Store the key in a Config table in DB 

Change requests by HTTPS Post request with key in header

Check if key is valid

