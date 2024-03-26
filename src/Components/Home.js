import HomeContainer from "./HomeStyle/HomeContainer.js";
import Title from "./Temporarily/Title";
import HomeGrid from "./HomeStyle/HomeGrid.js";
import { useEffect, useState } from "react";
import groupfile from "../api.json";

function Home() {
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    setTotalData(groupfile);
  }, []);

  return (
    <HomeContainer>
      <Title>Animation</Title>
      <HomeGrid>
        {totalData.map((item) => (
          <div className="book" key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </HomeGrid>
    </HomeContainer>
  );
}

export default Home;
