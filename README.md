# Game - Halloween after
🦷 할로윈을 보낸 캔디소녀의 뒷 이야기
## stack
`html` `css` `javascript`

![ezgif com-gif-maker](./readme/readme1.gif)

[DEMO]()
## learned
1. `getBoundingClientRect`: 요소의 크기와 뷰포트에 상대적인 위치를 알 수 있습니다. 메서드를 통해 게임 존의 넓이와 높이를 구해 아이템의 위치를 게임 존 기준으로 랜덤 배치 할 수 있었습니다.
2.  dom을 조작하고 이벤트 메서드를 사용해 기능을 만들었습니다. 
3. `setInterval`을 통해 타이머 카운트를 낼 수 있고 `clearInterval`로 타이머를 정지 시킬 수 있습니다. 
4. Audio 객체를 이용해 음악을 실행하고 정지할 수 있습니다.
### + 리팩토링
- 작성한 코드를 클래스로 각각 나누어 만들었습니다.
- `바인딩`: 클릭 이벤트 함수를 작성했는데 클래스 정보가 콜백으로 전달되지 않아 에러가 났었습니다. 바인딩 문제라는 것을 접하게 되어 클래스와 함수를 묶어주는 방법을 알게 되었습니다.
- `builder pattern` 을 이용해 오브젝트의 가독성을 높여주었습니다.

