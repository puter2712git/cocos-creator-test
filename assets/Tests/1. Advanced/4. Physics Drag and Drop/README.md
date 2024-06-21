## Drag in Physics System

`cc.Rigidbody` 컴포넌트를 가지고 있는 오브젝트를 일반적인 방식으로 드래그할 경우 다른 강체를 통과해 버리는 불상사가 발생할 수 있다.

이를 방지하기 위해, 모든 강체는 웬만하면 `linearVelocity`를 변경하는 것으로 위치를 수정해야 한다.
