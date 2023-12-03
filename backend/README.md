Docker is not used any more for local development !!!

install & run docker mongo: `docker-compose up -d`
check if it exists: `docker ps | grep mongo`
stop docker mongo: `docker stop mongo`
start docker mongo: `docker start mongo`

Since MONGO_AUTHDATABASE is not working, add user into Mongo, inside Docker image, manually:
1. docker exec -it mongo bash
2. mongo
3. use admin
4. db.createUser({
     user: "admin",
     pwd: "admin",
     roles: [
       { role: "userAdminAnyDatabase", db: "admin" },
       { role: "dbAdminAnyDatabase", db: "admin" },
       { role: "readWriteAnyDatabase", db: "admin" }
     ]
   })

Example of nest CLI:
nest g module person
nest g class person/person.model --no-spec
nest g controller person --no-spec
nest g service company --no-spec
