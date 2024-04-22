import HomeContainer from "./HomeStyle/HomeContainer.js";
import Title from "./Temporarily/Title";
import HomeGrid from "./HomeStyle/HomeGrid.js";
import { useEffect, useState } from "react";
import groupfile from "../api.json";

function Home() {
  const [totalData, setTotalData] = useState([]);
  const [colors, setColors] = useState(["#FFFFFF", "#000000"]);

  useEffect(() => {
    setTotalData(groupfile);
    setColors((prevColors) => {
      const reversedColors = [prevColors[1], prevColors[0]];
      return reversedColors;
    });
  }, [totalData]);

  return (
    <HomeContainer>
      <Title>Animation</Title>
      <HomeGrid>
        {totalData.map((item, index) => (
          <div
            className="book"
            key={item.id}
            style={{
              backgroundColor: colors[index % 2],
              color: colors[index % 2] === "#FFFFFF" ? "#000000" : "#FFFFFF",
            }}
          >
            <h1>{item.title}</h1>
          </div>
        ))}
      </HomeGrid>
    </HomeContainer>
  );
}

export default Home;
