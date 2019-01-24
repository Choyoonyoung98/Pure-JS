# Web
<p><h3>html 기본 템플릿</h3></p>
<p><code><pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;write your page title&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;/body&gt;

&lt;/html&gt;
</pre></code></p>

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
                <li>parent: 부모 프레임에 새로운 페이지를 적재한다.</li>
                <li>_top: 현재 윈도우에 새로운 페이지를 적재하고 모든 프레임을 취소한다.</li>
                <em>모든 프레임을 취소한다는 말이 무슨 뜻인지 이해하지 못함</em>
        </ol>

<hr>

<p><h3>데이터를 보내는 방법</h3></p>
<p><code><pre>
&lt;form action="input.jsp" methid="post"&gt;
        &lt;input type="text" name="input" /&gt;
        &lt;input type="submit"&gt;
&lt;/form&gt;
</pre></code></p>
