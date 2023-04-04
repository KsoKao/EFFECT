import { useEffect, useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log("Counter 컴포넌트가 생성된 상태입니다.");
  }, []);

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {toggle && <Counter />}
      {/* {toggle && <Counter />} 하나일 경우 이런형태로 많이 사용 */}
      {/* {toggle ? <Counter /> : "카운터"} 여러개 일경우 */}
      <button
        onClick={onClickToggle}
        className="bg-blue-300 px-4 py-2 rounded-full text-yellow-200 font-bold mt-4"
      >
        버튼
      </button>
    </div>
  );
}

export default App;
