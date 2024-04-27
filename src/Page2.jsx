import { useNavigate } from "react-router-dom";

function Page2() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>Page 2</h1>
      </div>
      <div>
        <button onClick={goBack}>戻る</button>
      </div>
    </>
  );
}
export default Page2;
