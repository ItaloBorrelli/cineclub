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
vim .env
# add required secrets to .env:
# ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, API_HOST, API_PORT, DB_PORT, WEB_PORT
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
docker image rm cineclub_web_app
docker image rm cineclub_api_server
docker image rm mongo
```

###### Not recommended

If you really want to remove all the data in the database you've created and start from scratch you can remove the mongo volumes with:

```
docker volume rm mongo_data_dev
docker volume rm mongo_data
docker volume rm mongo_config
```
