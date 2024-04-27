import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Page3() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setText(text);
    setText("");
    navigate(`/page3/textpage?letter=${text}`);
  };
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>入力フォーム</h1>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>投稿</button>
      </div>
      <div style={{ margin: 50 }}>
        <button type="submit" onClick={goBack}>
          戻る
        </button>
      </div>
    </>
  );
}
export default Page3;
