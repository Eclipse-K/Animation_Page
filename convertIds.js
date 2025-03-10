const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const filePath = "./src/api.json"; // ✅ src 폴더에 있는 api.json 경로

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("❌ 파일 읽기 오류:", err);
    return;
  }

  try {
    let jsonData = JSON.parse(data);

    // 기존 데이터의 id를 UUID로 변경
    jsonData = jsonData.map((item) => ({
      ...item,
      id: uuidv4(), // 새 UUID 생성
    }));

    // 변경된 데이터 다시 저장
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf8", (err) => {
      if (err) {
        console.error("❌ 파일 저장 오류:", err);
      } else {
        console.log("✅ 기존 id 값을 UUID로 변경 완료!");
      }
    });
  } catch (error) {
    console.error("❌ JSON 파싱 오류:", error);
  }
});
