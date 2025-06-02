# labs-02-props.md

## 문제 1. 이름을 받아 인사하는 Greeting 컴포넌트

- `Greeting.tsx` 파일에 함수형 컴포넌트 `Greeting`을 만드세요.
- props로 **`name`(문자열)**을 받아,  
  화면에 **“안녕하세요, {name}님!”** 이라는 문구를 `<p>` 태그로 출력하세요.
- TypeScript의 타입 선언도 반드시 포함하세요.

---

## 문제 2. 객체형 props로 사용자 정보 출력하기

- `Profile.tsx` 파일에 함수형 컴포넌트 `Profile`을 만드세요.
- props로 **user 객체**(이름, 나이)를 받고,  
  구조분해 할당을 사용해 이름과 나이를 각각 화면에 출력하세요.
- `type` 혹은 `interface`를 활용해 타입을 선언하세요.

---

## 문제 3. 선택적 props와 조건부 렌더링

- `Welcome.tsx` 파일에 함수형 컴포넌트 `Welcome`을 만드세요.
- props로 **`nickname`(문자열, 선택적)**을 받아,  
  nickname이 있으면 “환영합니다, {nickname}님!”  
  없으면 “방문자님, 환영합니다!”를 `<p>` 태그로 출력하세요.
- 조건부 렌더링을 반드시 활용하세요.

---

## 문제 4. children을 활용한 Wrapper 컴포넌트

- `Wrapper.tsx` 파일에 함수형 컴포넌트 `Wrapper`를 만드세요.
- props로 **`children`**을 받아,  
  전달받은 모든 children을 굵은 테두리 박스(`div` 등) 안에 출력하세요.
- `<Wrapper>` 태그 사이에 여러 개의 요소를 넣어 사용 예시도 테스트해보세요.

---

## 문제 5. 함수 props(Button 클릭 이벤트 핸들러)

- `Button.tsx` 파일에 함수형 컴포넌트 `Button`을 만드세요.
- props로 **`onClick` 함수**를 받아,  
  버튼 클릭 시 전달받은 함수가 실행되게 하세요.
- 부모 컴포넌트(App 등)에서 alert 또는 console.log로 결과를 확인하세요.

---

## 문제 6. 배열 props를 받아 리스트 렌더링하기

- `UserList.tsx` 파일에 함수형 컴포넌트 `UserList`를 만드세요.
- props로 **users 배열**(각 객체는 `{ id: number, name: string }` 구조)을 받아,  
  map 함수를 이용해 `<li>` 태그로 모든 사용자 이름을 리스트로 출력하세요.
- 각 li에는 반드시 **key 속성**을 사용하세요.

  **[예시 데이터]**

  ```ts
  const users = [
    { id: 1, name: "윤유저" },
    { id: 2, name: "김유저" },
    { id: 3, name: "이유저" },
  ];
  ```
