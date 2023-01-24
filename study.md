- Node.js로 인해 많은 application이 만들어짐.
- npm과 yarn은 큰 차이는 없지만 npm은 node.js 설치시에 같이 설치됌.
- npm 은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. : 패키지 공유가 용이하다.
- package.js main을 패키지의 main file로 설정.
- script에 여러가지 script를 생성 가능.
- node_moduels : npm이 설치한 모든 패키지가 저장된다.
- dependency : express가 필요한 패키지들. 여러개가 설치되는 이유, 내 파일에도 dependency를 넣어줌 : express.
  - Github에 nodemodule을 안 올려도 된다. npm i
- devDependency : 개발자에게 필요한 dependency, dependency : 프로젝트가 필요함.
- package-lock.json : 버전을 lock 시켜서, 맞는 버전의 package가 설치되게 해준다.
- package.json이 닫혀있거나, 저장된 상태에서 npm i 할 것.
- babel : node.js가 이해하지 못하는 최신 js 코드를 컴파일.
- nodemon은 파일이 수정되는 것을 읽어주는 package.
- server는 항상 켜져있는 컴퓨터. server는 request를 listen하고 respond 한다.
- callback : server가 시작될 때 작동하는 함수. 어떤 port를 listen 할 지 알려줌.
- request 이후 response 해야함.
- respose.end : request를 end 해준다.
- express로 서버 만들기는 간단하다.
- request 받고, response를 보내준다.
- app.use - middle ware 사용하게 해줌. 함수 먼저 실행 -> get url
- controller (req, res)
- middleware : 일반 controller와 비슷 but next()를 포함한다.
- PORT 4000이 백엔드 convention
- get을 하면 서버가 사용자에게 보내진다.
- route : "/" or "/login"
- 마지막 response 포함 middleware에는 next를 생략.
- 먼저 코드를 작성하고, 그 다음에 clean 한다. 코드를 작성한 시간만큼 이용.
- 모듈들은 독립되어있다.
- import 하기 전에 export 해야한다.
- default export : import 시 이름 변경 가능. 여러개 export 했을 때 안됨.
- 정규표현식: https://joooing.tistory.com/entry/match-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D

## Morgan

Node.js 웹 서버에 들어오는 요청을, 명령창(shell)에 출력해주는 Node.js 패키지.

## PUG

- PUG : template Engine / html을 간단하게 쓰게해준다. pug -> html
- CWD : current working directory : node.js를 시작하는 곳, package.json 위치
- 파일명은 모두 소문자가 앞에 오게 한다.
- '#' : PUG 변수라고 알려줌 (nodejs.에 알려줌)
- 구조를 먼저 만들고, CSS
- mvp.css html태그에 몇 가지 기본 스타일을 입혀준다.
- =을 붙이면 variable로 인식한다.
- each element in elements : convention
- 똑같은 구조의 block 이지만 다른 데이터를 넣을 때 -mixin
- relative url: "url" - 현재 부모에서 url , absolute url: "/url" - from root

## HTTP METHOD

GET : data를 가져옴, url에 들어간다.
POST : 데이터베이스에 전송할 떄.

-res.redirect: 지정된 url로 이동.

-app.use(express.urlencoded({extended: true}));
: js의 form을 이해하게 해준다.

## MongoDB

document-based DB - JSON - like document, obj처럼

## Mongoose

MongoDB를 node.js와 연결, Javascript를 사용.
data를 불러오고 나서 render 해야함. - callback: 다른 함수의 인자로써 이용되는 함수,

## CRUD

CREAT, READ, UPDATE, DELETE

- pre save middleware
- GET method로 얻은 form은 query로 얻을 수 있다.
- regular expression으로 검색을 구현한다.
  $regex: new RegExp(keyword, "i") : i는 대소문자 구분

- hash function: deterministic function(결정적 함수)
  bcrypt.js
  hash를 여러번 해서 더 어렵게 만든다. (saltRound)

- monodb $or: 조건 또는
  const exists = await User.exists({ $or: [{ username }, { email }] });

- POST 200 : OK
  status 400 : 브라우저가 history를 저장하지 않게 해준다.
  어떤 status를 보낼지 상황에 따라 나눠야한다.

- Session: (middle ware)
  memory, history between browser and backend
  browser의 아이디를 백엔드에 보내줄 수 있다.