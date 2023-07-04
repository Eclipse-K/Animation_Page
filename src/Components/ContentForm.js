import { useState } from "react";
import ContentInput from "./ContentInput";

function ContentForm() {
  const [aniTitle, setAniTitle] = useState("");
  const [aniYear, setAniYear] = useState("");
  const [aniSince, setAniSince] = useState("");
  const [aniContent, setAniContent] = useState("");

  const handleSubmit = () => {
    // 입력된 내용을 처리하는 로직을 작성합니다.
    // 예를 들어, 서버로 전송하거나 상태를 업데이트할 수 있습니다.
    console.log("제목:", aniTitle);
    console.log("연도:", aniYear);
    console.log("연대:", aniSince);
    console.log("내용:", aniContent);
  };

  return (
    <div>
      <h1>제목을 입력하세요.</h1>
      <ContentInput
        title={aniTitle}
        year={aniYear}
        since={aniSince}
        content={aniContent}
        setTitle={setAniTitle}
        setYear={setAniYear}
        setSince={setAniSince}
        setContent={setAniContent}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ContentForm;
