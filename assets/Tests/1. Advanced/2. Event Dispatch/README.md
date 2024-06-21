## Event Dispatch

게임 개발에서는 컴포넌트 간의 **Loose Coupling**이 중요하다. 하지만 어쩔 수 없이 컴포넌트 간의 상호작용이 필요한 경우가 생기는데, 이럴 때는 이벤트 송신 방식으로 컴포넌트 간의 상호작용을 처리한다.

`dispatchEvent` 메서드는 **dispatch**하는 방식으로 이벤트를 전송한다. 이는 HTML5에서 이벤트가 **bubbling**과 **capturing**되는 것과 유사하게, 노드 트리를 중심으로 이를 수행한다.

[버블링과 캡쳐링 링크](https://ko.javascript.info/bubbling-and-capturing)
