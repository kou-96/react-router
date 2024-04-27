import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Textpage() {
  const [searchParams] = useSearchParams();
  const letter = searchParams.get("letter");
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/page3");
  };

  return (
    <>
      <div>
        <h1>{letter}</h1>
      </div>
      <div style={{ margin: 50 }}>
        <button type="submit" onClick={goBack}>
          戻る
        </button>
      </div>
    </>
  );
}

export default Textpage;
