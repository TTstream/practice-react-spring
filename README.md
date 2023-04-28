# `정리`

## :pushpin: react-spring 연동 
1. Spring 파일 다운로드
2. Spring 에서 터미널 접속 후 react파일 다운 npx create-react-app@5.0.1 frontend
3. frontend 파일의 위치를 Spring의 src/main/frontend에 위치시키기
4. frontend 파일의 package.json에서 "eslintConfig" 위에 "proxy": "http://localhost:8080", 작성 및 spring properties의 server.port=8080 작성
5. Spring 코드 작성 및 react코드 작성해서 연동되는지 확인해보기
6. 백엔드 API 호출하려면 Spring 실행하기

OR

react,spring 각 파일들 따로 실행

## :x: 오류 모음 및 해결방법
### [ @RestController 인식 안되는 오류 ] </br>
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
=> 위의 코드에서 <artifactId>안에 spring-boot-starter-web 이 맞는지 확인 틀리면 수정 후 Maven Reload

### [ frontend 파일 깃허브 업로드 오류 ] </br>
=> frontend 파일의 위치를 src/main/frontend에 위치시켜야 깃허브에 업로드가 된다.

### [ react npm start 오류 ]
```
오류 내용
Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
 - options.allowedHosts[0] should be a non-empty string.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! frontend@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the frontend@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
```

=> package.json 파일에 아래 코드를 추가해서 해결되었다.
```
"options": {
    "allowedHosts": [
      "localhost",
      ".localhost"
    ],
    "proxy": "https://localhost:8080/"
  }
  
OR

"options": {
    "allowedHosts": "all",
    "proxy": "https://localhost:8080/"
  }
  
```
## :bookmark: 참조
FULLSTACK CRUD Playlist 영상 : https://www.youtube.com/playlist?list=PL1oBBulPlvs84AmRmT-_3dGz4KHYuINsj

리액트 라우터 기본 사용방법 : https://jinyisland.kr/post/react-router/

##  :running: 진행사항
IntelliSense for CSS class names in HTML 확장 프로그램 다운 => CSS 입력시 자동완성 기능
