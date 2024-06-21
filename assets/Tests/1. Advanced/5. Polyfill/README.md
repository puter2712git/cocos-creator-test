## Polyfill

JavaScript 객체의 특성상 이미 정의된 클래스일지라도 메서드를 추가 정의할 수 있다.

`CustomNodeDeclaration`은 VSCode에서의 코드 자동 완성을 위한 선언 파일이고, `CustomNodePlugin`은 실제 메서드의 정의를 적어둔 파일이다.

플러그인으로서 생성된 JavaScript는 에디터 상에서 잊지 않고 **Import As Plugin**을 체크해야 한다.
