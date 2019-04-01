# Web

<p><h3>task.json 기본 템플릿(MAC)</h3></p>

```
{
    "version": "0.1.0",
    "command": "Chrome",
    "osx": {
        "command": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    },
    "args": [
        "${file}"
    ]
}
```

<hr>

<h3>html 기본 템플릿</h3>
```
<!DOCTYPE html>
<html>
    <head>
       <title>write your page title</title>
    </head>
    <body>
    </body>

</html>

```

<hr>
<p><b>href</b></p>
        <ol>
                <li>절대경로: http://www.google/com/ - 다른 웹 사이트의 페이지</li>
                <li>상대 경로: ../doc/info.html - 웹 사이트 안에서의 다른 페이지</li>
                <li>내부 파일: #archor1 - 현재 페이지 안의 다른 위치</li>
        </ol>
        <p><b>target</b>(target은 생략 가능)</p>
        <ol>
                <li>_blank: 새로운 윈도우에서 새로운 페이지를 연다.</li>
                <li>_self: 현재 윈도우에 새로운 페이지를 적재한다.</li>
                <li>_parent: 부모 프레임에 새로운 페이지를 적재한다.</li>
                <li>_top: 현재 윈도우에 새로운 페이지를 적재하고 모든 프레임을 취소한다.</li>
                <em>모든 프레임을 취소한다는 말이 무슨 뜻인지 이해하지 못함</em>
        </ol>

<hr>

<h3>데이터를 보내는 방법</h3>
<p>action: 입력을 처리하는 서버 스크립트의 주소를 적는다.</p>
<p>method: 입력 데이터가 서버로 보내지는 방법을 기술한다.</p>

```
<form action="input.jsp" method="post">
        <input type="text" name="input" />
        <input type="submit">
</form>
```
<p><h4>GET방식과 POST방식</h4></p>
<ul>
<li><b>GET방식</b></li>
<p>URL주소 뒤에 parameter를 붙여서 데이터를 전달하는 방식.</p>
  
```
https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=html
 ```
<p>?를 기준으로, 앞이 baseURL+localURL, 뒤에 오는 것이 parameter이다. </p>
<em>주소만 보면 누구나 데이터 파악이 가능하기 때문에 비밀이 보장되지않는다. 따라서 일반적으로 패스워드 데이터를 GET방식으로 보내지 않는다.</em>
<br>

<li><b>POST방식</b></li>
<p>사용자가 입력한 데이터를 URL 주소에 붙이지 않고 HTTP Request header에 포함시켜 전송하는 방식.</p>
</ul>
