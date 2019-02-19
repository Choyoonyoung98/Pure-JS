# DOM

<p><h2>DOM 접근 메소드</h2></p>
<p><h4>Element.getElementById('id')</h4>:id값으로 태그 불러오기</p>

<p><code><pre>
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

headerTitle.textContent = 'Hello'; //header-title의 아이디를 가진 태그의 textContent를 Hello로 바꾼다.
headerTitle.innerHTML = 'Goodbye'; //overload
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px black';//style에도 접근 가능
</pre></code></p>

<hr>
