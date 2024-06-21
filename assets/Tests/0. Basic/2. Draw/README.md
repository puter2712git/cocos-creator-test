## Draw with Graphics

Cocos Creator에서 사용자가 자유롭게 선을 그리게 하고 싶을 경우에는, 엔진에서 자체 제공하는 `cc.Graphics` 컴포넌트를 활용합니다. <br>
<br>
주의점은 사용자의 터치 좌표와 노드 좌표가 일치하지 않기 때문에, 좌표계를 통일하는 별개의 작업이 추가로 필요합니다. (이 예시에서는 `convertToNodeSpaceAR()` 메서드를 사용합니다.)
