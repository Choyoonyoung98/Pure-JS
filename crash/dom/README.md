# DOM

<h2>DOM 접근 메소드</h2>
<h4>Element.getElementById('id')</h4>:id값으로 태그 불러오기

<h4>[Issue] Element.innerHTML VS Element.textContent</h4>
두 프로퍼티 모두 요소의 콘텐츠에 접근하거나 수정하는 것에 사용한다. 다만, textContent는 HTML 태그를 모두 제거하고 순수한 텍스트 데이터만 제공하며, innerHTML는 HTML 태그를 모두 그대로 제공한다. innerHTML을 통해 HTML 태그를 수정하면 DOM이 그에 맞게 변경되는 것을 확인할 수 있다.
<br/>
꽤 자주, 검색 혹은 요소 안에 텍스트 작성을 위해 사람들이 innerHTML을 사용하지만, textContent가 텍스트를 HTML로 파싱하지 않기 떄문에 종종 더 좋은 성능을 보여준다.

<hr>

<h4>Element.getElementsByClassName</h4>:class값으로  태그 불러오기

<h4>[Issue] Element.getElementById VS Element.getElementByClassName</h4>
Id값은 단일한 하나의 단일한 요소에 대해서만 지정이 되는 반면 className은 여러 개의 요소에 대해서 지정이 될 수 있기 때문에 
getElementByClassName으로 불러온 요소에 대해서는 배열처럼 접근이 가능하다.

<hr>

<h4>Element.getElementsByTagName</h4>:태그 이름으로 태그 불러오기

<hr>

<h4>Element.qurySelector(*)</h4>:query문으로 불러오기. tag값이나 class/id값 등등 모두 selector대상이 될 수 있다.

<hr>

<h4>Element.qurySelectorAll</h4>:query문으로 해당 요소의 전체를 불러온다.





