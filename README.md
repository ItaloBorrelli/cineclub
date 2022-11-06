# CineClub

Prerequisites:

- docker
- git
- make

To install:

```
git clone git@github.com:ItaloBorrelli/cineclub.git
mv cineclub {install_dir}
cd {install_dir}/cineclub
vim api/.env
# add required secrets to .env
```

To start dev:

```
make build_run_dev
# if already built can use make run_dev
```

To start prod:

```
make build_run
# if already built can use make run
```

To close:

```
make stop
```

To delete unwanted images:

```
docker image rm web-app
docker image rm api-server
docker image rm mongo
```

###### Not recommended

If you really want to remove all the data in the database you've created and start from scratch you can remove the mongo volume with:

```
docker volume rm cineclub_mongo-data
```
