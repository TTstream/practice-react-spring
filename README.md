# `정리`

## react-spring 연동 
1. Spring 파일 다운로드
2. Spring 에서 터미널 접속 후 react파일 다운 npx create-react-app@5.0.1 frontend
3. frontend 파일의 위치를 Spring의 src/main/frontend에 위치시키기
4. frontend 파일의 package.json에서 "eslintConfig" 위에 "proxy": "http://localhost:8080", 작성 및 spring properties의 server.port=8080 작성
5. Spring 코드 작성 및 react코드 작성해서 연동되는지 확인해보기
6. react,spring 이 두 개를 실행해야 작동

## 오류 모음 및 해결방법
[ @RestController 인식 안되는 오류 ] </br>
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
=> 위의 코드에서 <artifactId>안에 spring-boot-starter-web 이 맞는지 확인 틀리면 수정 후 Maven Reload

[ frontend 파일 깃허브 업로드 오류 ] </br>
=> frontend 파일의 위치를 src/main/frontend에 위치시켜야 깃허브에 업로드가 된다.

