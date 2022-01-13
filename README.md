# Game - Halloween after

[DEMO](https://pedantic-hoover-11fbeb.netlify.app)

## stack
`html` `css` `javascript`



## learned
1. `getBoundingClientRect`: 요소의 크기와 뷰포트에 상대적인 위치를 알 수 있습니다. 메서드를 통해 게임 존의 넓이와 높이를 구해 아이템의 위치를 게임 존 기준으로 랜덤 배치 할 수 있었습니다.
2.  dom을 조작하고 이벤트 메서드를 사용해 기능을 만들었습니다. 
3. `setInterval`을 통해 타이머 카운트를 낼 수 있고 `clearInterval`로 타이머를 정지 시킬 수 있습니다. 
4. Audio 객체를 이용해 음악을 실행하고 정지할 수 있습니다.
### + 리팩토링
- 작성했던 코드들을 클래스로 모듈화 작업을 했습니다. 각각의 기능별로 코드가 구분되어 있으니 가독성이 좋았습니다.
- `this 바인딩`: this 바인딩 문제를 처음 접하게 되었습니다. 클릭 이벤트의 인자로 전해준 콜백함수와 클래스 객체를 바인딩 해주었습니다. 
    - [this 바인딩 기술블로그 작성](https://usiyoung.github.io/2022/01/10/this%20바인딩/)
- `builder pattern` : 프로젝트중 생성자에 3개의 인자가 모두 숫자인 클래스가 있습니다. 
이렇게 생성자 인자에 숫자만 기입되어 있는 경우 순서를 잊어버릴수도 있고 그 숫자가 무엇을 의미하는지 가독성에도 좋지않습니다. builder pattern을 사용하면 
  - 클래스를 외부에 노출하지 되며
  - 오브젝트 생성시 가독성에도 좋습니다.
  
  
 

