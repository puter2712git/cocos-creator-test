## Async & Await

게임 및 콘텐츠를 개발할 때, 특정 행동을 한 다음에 액션이 나타나게 하는 등의 절차적인 기획이 다수 존재한다. 이를 콜백 함수로 전부 사용하면 코드 가독성이 떨어져서, `async`, `await`을 활용한다.

Cocos Creator에서 `async`, `await`에 어울리는 적당한 `delay` 함수가 없기에, 이를 `cc.Tween` API를 통해 따로 만들어서 사용한다.
