build:
	cd api && $(MAKE) build
	cd web && $(MAKE) build

run:
	docker-compose up

stop:
	docker-compose down