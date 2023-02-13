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

## Session:

- memory, history between browser and backend
- browser의 아이디를 백엔드에 보내서 저장할 수 있다.
- 고유아이디 - user끼리 구분 가능.
- local은 pug에서 따로 추가없이 접근 가능하다. locals. 안 붙여도 됌. res.locals

# Login 구현: session, cookies, locals

1. express-session middleware 이용 : 매 request할 때마다 브라우저에 cookie 전달.

- cookie는 request와 함께 전송.

2. cookie: 백엔드가 브라우저에게 주는 정보, 매번 req 할 때, 브라우저는 알아서 cookie같이 보냄.
3. 웹서버(백엔드)에 session, 브라우저에는 session ID를 가지는 cookie
4. 브라우저마다 req.session이 다르다. (session이 다르기 떄문) - 브라우저 처음 실행시에 새로운 sessionID를 얻는다.
5. Session은 object다. 임의로 추가 가능.
6. Session data는 쿠키에 저장되지 않고, 백엔드의 wjwkdehlsek. 쿠키에는 session ID.
7. session.saveUnitialized : session을 변경하지 않을때도 저장.
8. 브라우저에서는 token방식이 아니어도 잘 작동함.

## Github Login

user를 github로 보낸다.

## Node-fetch

- fetch는 브라우저에만 존재하기 때문. 자바스크립트와 nodejs는 다른 플랫폼이다.
- github에 user보냄, user : yes, access_token

* Router를 보호하는 middleware, 로그인이 되었을 때만, edit-profile에 접근할 수 있어야한다.

## File Upload

- multer : input으로 avatar를 받아 uploads 폴더에 저장 후, postEdit에 파일 전달.
- DB에 파일을 저장을 하면 안된다. 대신 폴더에 파일을 저장하고, DB에는 그 파일의 위치만 저장한다.
- app.use("/uploads", express.static(uploads)) : static: 노출시킨다.
- upload폴더를 만드는법: 서버에 저장하는 방법, 별로 좋지 않다.

## User Profile

- public일때는 url에서 user_id를 가져온다.

## Video Owner

- populate를 하면 reference된(ObjectId) object가 그대로 전달이 된다.
- double populate: path: 가장먼저 populate, 그 뒤에 populate~

## Bugfix

- hash가 save 할 때마다 되는 것을 해결. isModified("password") : password가 바뀔 때만
- edit,delete video가 owner일 때만 접속가능해야함.
- 프론트에서 가린다고 하더라도, 백엔드에서도 보호해줘야한다.

## Webpack

- js, scss (sexy code)를 javascript, css (boring code)로 변경함. 업계표준, 대체제로 gulp가 있음. 직접사용할 일이 없다. React에서 Webpack이 내장되어있음. 직접 노출시키지 않는다.
- entry: source code
- use는 역순으로 진행된다.use: ["styles-loader", "css-loader", "sass-loader"],

## Views API

- Wetube: SSR(Server Side Rendering): 벡엔드에서 렌더링을 해줌. 요즘에는 React - FrontEnd, NodeJS - backEnd
- 여기서는 templete을 rendering 하지 않는 방법으로 진행
- video만의 event를 이용한다. (https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)
- data attribute : html에서 데이터를 저장.
- render or redirect를 하지 않고, 변경 할 때, status(200)만 보낼 때는 sendStatus, return 해줌.

## Video Recorder

- mediaDevices: 마이크, 카메라와 같은 미디어 장비에 접근 하도록한다.
- removeEventListener -> addEventListner: 절차적으로 가능

## Webassembly Video Transcode

- FFmpeg: 미디어 파일 압축, 포맷 변환, 추출, 스크린샷 등 여러가지 기능 가능.
- URL을 통해, 해당 파일을 가르키는 URL생성 가능.
- video + thumbnail을 post해야함. req.files로 여러개 받을 수 있음

## Flash Messages

- Flash message middleware를 install -> use 하는 과정

## Comment Section

- text에 접근 할 수 있는 middleware use (text)
- request body에 obj를 보내야할 때, string으로 보낸다.
- JSON.stringify : JS OBJ -> String, JSOBJ가 아니다. string을 JSON으로 바꿔주는 Express middleware : JSON
- express에게 json을 보낸다는 것을 알려줘야함. headers : "Content-Type" : "application/json"
- fetch를 통해, cookie를 보내게 된다.

## Deployment

> Build Server

- 서버를 아마존에 보내줘야한다. babel-node: 자바스크립트 코드를 실행시켜줌. but performance 문제, babel CLI사용.
- babel은 backend만 build 하도록 한다.
- 개발할때는 babel을 통해 node.js가 이해하도록하고, 개발을 완료했을 때는 build를 하고나서, build/init.js를 node로 실행.
- pug파일 들은 옮겨지지 않는다. (front) 하지만, 폴더위치가 cwd부터 시작이므로, 접근 가능. 이를 변경 해줘야함.

> Build Assets

- webpack의 watch 기능은 development모드에서만 true로 해준다. 즉 command에 watch를 따로 구분하여 추가해준다.

> Heroku

- 웹사이트를 쉽게 배포할 수 있는 사이트.
- Heroku에 백엔드를 업로드하기 위해 두가지 방법, 1. Heroku Git, 2. Github
- Heroku Remote를 만들어서 push, commit을 할 수 있다.
- Heroku는 오직 내 git history만 볼 수 있다. 즉 커밋을 해야한다.
