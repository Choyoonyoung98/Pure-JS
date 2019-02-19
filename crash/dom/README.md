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

<hr>

<h2>DOM 접근 메소드</h2>

<h4>ParentNode</h4>:현재 노드의 부모노드에 접근한다.바로 상위 부모노드 뿐만 아니라 조상노드들에 대해서도 접근은 가능하지만, 잘  사용하지 않는다.

<hr>

<h4>ChildNode VS Children</h4>:부모노드에서 자식노드로도 접근 가능하다. 
ChildNodes를 통한 접근의 경우, '줄바꿈'까지 인식하는 반면 children을 통한 접근은 해당 자식노드만을 출력한다.
HTML code에 반영을 위한 접근이 필요하다면 children을 사용한다.

<hr>

<h4>FirstChild VS FirstElementChild</h4>:첫번째 자식 노드에 대한 접근이 가능하다. 
firstChild를 통한 접근의 경우, first childe node를 element node 또는 text node, comment node로 반환한다.
반면, firstElementChild는 first child node를 element node로만 반환을 한다.(text와 comment nodes를 무시)
따라서 HTML code에 반영을 위한 접근이 필요하다면 firstElementChild을 사용한다.

<hr>

<h4>LastChild VS LastElementChild</h4>:마지막 자식에 대한 접근이 가능하다.
HTML code에 반영을 위한 접근이 필요할 때에는 lastElementChild를 쓴다.

<hr>

<h4>NextSibling VS NextElementSibling</h4>:같은 깊이에 있는 자매 노드 중 본인 노드 기준으로 다음 자매 노드에 대한 접근이 가능하다.
HTML code에 반영을 위한 접근이 필요할 때에는 nextElementChild를 쓴다.

<hr>

<h4>PreviousElementSibling</h4>:같은 깊이에 있는 자매 노드 중 본인 노드 기준으로 이전 자매 노드에 대한 접근이 가능하다.
 

