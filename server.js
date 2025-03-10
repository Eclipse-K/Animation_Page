const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
const PORT = 5001;
const filePath = "./src/api.json"; // ✅ api.json의 경로 수정

app.use(express.json());
app.use(cors());

// 🔹 서버 시작 시 api.json이 없으면 자동 생성
if (!fs.existsSync(filePath)) {
  console.log("⚠️ api.json 파일이 존재하지 않음. 새 파일을 생성합니다.");
  fs.writeFileSync(filePath, "[]", "utf8"); // 빈 배열을 가진 JSON 파일 생성
}

// 🔹 새로운 데이터 추가 API
app.post("/api/add", (req, res) => {
  //   console.log("🔹 새로운 요청 받음:", req.body);

  const newItem = { id: uuidv4(), ...req.body };

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("❌ 파일 읽기 오류:", err);
      return res.status(500).json({ error: "파일 읽기 오류" });
    }

    try {
      const jsonData = JSON.parse(data);
      jsonData.push(newItem);

      fs.writeFile(
        filePath,
        JSON.stringify(jsonData, null, 2),
        "utf8",
        (err) => {
          if (err) {
            console.error("❌ 파일 저장 오류:", err);
            return res.status(500).json({ error: "파일 저장 오류" });
          }

          res.json({ success: true, newItem });
        }
      );
    } catch (error) {
      console.error("❌ JSON 파싱 오류:", error);
      res.status(500).json({ error: "JSON 파싱 오류" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${PORT}`);
});
