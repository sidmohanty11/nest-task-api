# run the container
docker run --name postgres-nest -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

# stop the container
docker container stop postgres-nest

# delete
docker container rm postgres-nest