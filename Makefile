start-pg:
	./backend/scripts/start_pg.sh

reset-pg:
	./backend/scripts/reset_pg.sh

dev:
	( cd ./backend ; npm run start)

stop-pg:
	docker stop test-payment-form-postgres