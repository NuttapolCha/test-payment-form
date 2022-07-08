start-pg:
	./backend/scripts/start_pg.sh

reset-pg:
	./backend/scripts/reset_pg.sh

be:
	( cd ./backend ; npm run start)

fe:
	( cd ./frontend ; yarn dev -p 3001)

stop-pg:
	docker stop test-payment-form-postgres