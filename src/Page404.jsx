import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <h1>404 ページが存在しません。</h1>
      </div>
      <div>
        <button onClick={goBack}>戻る</button>
      </div>
    </>
  );
}
export default Page404;
