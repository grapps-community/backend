# Makefile

# Docker 환경에서 프로젝트 빌드 및 실행
up:
	docker-compose up --build

# Docker 환경에서 백그라운드 실행
up-detached:
	docker-compose up --build -d

# Docker 컨테이너 종료
down:
	docker-compose down

# Docker 컨테이너 로그 확인
logs:
	docker-compose logs -f

# Docker 컨테이너 재시작
restart:
	docker-compose down && docker-compose up --build -d

# Docker 컨테이너 제거 및 캐시 초기화
clean:
	docker-compose down --rmi all --volumes --remove-orphans
