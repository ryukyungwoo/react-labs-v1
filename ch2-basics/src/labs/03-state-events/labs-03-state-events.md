# labs-03-state-events.md

## 문제 1. useState로 카운터 만들기

- `Counter.tsx`에 함수형 컴포넌트 `Counter`를 만드세요.
- useState를 사용해 `count`라는 상태를 0으로 초기화하고, 현재 값을 화면에 보여주세요.
- `[+1]`, `[-1]` 버튼을 만들어 각각 누를 때마다 count가 1씩 증가/감소하게 하세요.

---

## 문제 2. 버튼으로 상태 토글 및 조건부 렌더링

- `ToggleMessage.tsx`에 함수형 컴포넌트 `ToggleMessage`를 만드세요.
- useState로 `isVisible` 상태(boolean, 초기값: false)를 만들고,
- “메시지 보기/숨기기” 버튼 클릭 시 isVisible 값을 반전(toggle)시키세요.
- isVisible이 true일 때만 `<p>비밀 메시지입니다!</p>`를 화면에 조건부 렌더링 하세요.

---

## 문제 3. 배열 상태값과 리스트 동적 추가/삭제

- `TodoList.tsx`에 함수형 컴포넌트 `TodoList`를 만드세요.
- useState로 `todos` 배열 상태를 선언하세요. (각 항목 `{ id: number, text: string }`)
- input과 “추가” 버튼을 만들어, 할 일을 입력하고 버튼을 누르면 리스트에 새 할 일이 추가되게 하세요.
- 각 할 일 옆에 “삭제” 버튼도 구현하여, 해당 할 일이 리스트에서 제거되게 하세요.
- todos 배열을 map으로 `<li>` 리스트로 렌더링하세요. (key 필수)
- todos가 비어 있으면 “할 일이 없습니다.”로 조건부 렌더링 하세요.

---

## 문제 4. 부모 컴포넌트에서 자식 리스트에 데이터/함수 props 전달 (삭제 기능 포함)

- `UserList.tsx`와 `UserItem.tsx` 파일을 만드세요.
- UserList에서 users 배열 상태를 관리 (`useState`)
  ```ts
  const [users, setUsers] = useState([
    { id: 1, name: "윤유저" },
    { id: 2, name: "김유저" },
  ]);
  ```
