build_run:
	docker-compose -f docker-compose.yml down
	docker-compose -f docker-compose.yml up --build

run:
	docker-compose -f docker-compose.yml down
	docker-compose -f docker-compose.yml up

stop:
	docker-compose -f docker-compose.yml down

build_run_dev:
	docker-compose -f docker-compose.dev.yml down
	docker-compose -f docker-compose.dev.yml up --build

run_dev:
	docker-compose -f docker-compose.dev.yml down
	docker-compose -f docker-compose.dev.yml up

stop_dev:
	docker-compose -f docker-compose.dev.yml down
