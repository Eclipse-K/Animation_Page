import HomeContainer from "./HomeStyle/HomeContainer.js";
import Title from "./Temporarily/Title";
import HomeGrid from "./HomeStyle/HomeGrid.js";
import { useEffect, useState } from "react";
import groupfile from "../api.json";

function Home() {
  const [totalData, setTotalData] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const generateRandomColor = () => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    };

    const newColors = [];
    while (newColors.length < totalData.length) {
      newColors.push(generateRandomColor());
    }
    setColors(newColors);

    setTotalData(groupfile);
  }, [totalData]);

  return (
    <HomeContainer>
      <Title>Animation</Title>
      <HomeGrid>
        {totalData.map((item, index) => (
          <div
            className="book"
            key={item.id}
            style={{ backgroundColor: colors[index] }}
          >
            <h1>{item.title}</h1>
          </div>
        ))}
      </HomeGrid>
    </HomeContainer>
  );
}

export default Home;
