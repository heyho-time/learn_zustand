# zustand

yarn

---

create 이용해 스토어 생성.

```jsx
import create from "zustand";

const useStore = create(() => ({
  count: 2,
}));
```

---

```jsx
function App() {
  const { count } = useStore();

  return (
    <div className="App">
      <p style={{ fontSize: 100 }}>구독자 {count}</p> /
      <button
        onClick={() => {
          useStore.setState({ count: count - 1 });
        }}
      >
        버튼
      </button>
      <Card />
    </div>
  );
}
```

이딴식으로 스테이트 업데이트 해줄 수도 있지만 컴포넌트 많아지고 여러군데서 변화를주면
에러의 온상이 된다함.
스테이트 변경방법들을 함수로 스토어 안에 미리 만들어놓고 사용.

```jsx
const useStore = create((set) => ({
  count: 2,
  증가() {
    set((state) => ({ count: state.count + 1 }));
  },
}));

function App() {
  const { count, 증가 } = useStore();

  return (
    <div className="App">
      <p style={{ fontSize: 100 }}>구독자 {count}</p>
      <button onClick={() => 증가()}>버튼</button>
      <Card />
    </div>
  );
}
```

state가 많아지면 store2를 만들수도 있다.

```jsx
const useStore = create((set) => ({
  count: 2,
  증가() {
    set((state) => ({ count: state.count + 1 }));
  },
}));

const useStore2 = create((set) => ({
  name: "heyho",
  감소() {
    set((state) => ({ count: state.count - 1 }));
  },
}));
```
