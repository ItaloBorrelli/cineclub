# CineClub

Prerequisites:

- docker
- git
- make

To install and run:

```
git clone git@github.com:ItaloBorrelli/cineclub.git
mv cineclub {install_dir}
cd {install_dir}/cineclub
make build && make run
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
