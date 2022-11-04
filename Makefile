build_run:
	docker-compose -f docker-compose.yml up --build

run:
	docker-compose -f docker-compose.yml up

build_run_dev:
	docker-compose -f docker-compose.dev.yml up --build

run_dev:
	docker-compose -f docker-compose.dev.yml up

stop:
	docker-compose down