## Bottom Video

Cocos Creator에서의 `cc.VideoPlayer`는 HTML5 DOM을 이용해 비디오를 재생한다. 즉, `<video>` 태그를 이용하는 방식이기 때문에 비디오 플레이어는 반드시 항상 아래 레이어이거나, 항상 위 레이어에 위치한다.

`cc.VideoPlayer`는 기본값으로 항상 위 레이어에 위치한다. 만약 **Stay On Bottom** 속성을 활성화하고 싶다면, 주 렌더링을 담당하는 `cc.Camera` 컴포넌트의 **Background Color**의 투명도를 0으로 설정, `cc.macro.ENABLE_TRANSPARENT_CANVAS`를 `true`로 설정해야 한다.
