# 베이스 이미지 선택
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치를 위해 package.json과 package-lock.json을 복사
COPY package*.json ./

# 의존성 설치
RUN npm install --production

# 프로젝트 파일 복사
COPY . .

# NestJS 앱을 실행할 포트
EXPOSE 3000

# 애플리케이션 실행 명령어
CMD ["npm", "run", "start:prod"]
