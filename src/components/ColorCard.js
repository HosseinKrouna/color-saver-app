import React from "react";
import styled from "styled-components";

const colors = [
  {
    id: "1",
    colorCode: "#ccc",
    name: "gray80",
  },
  {
    id: "2",
    colorCode: "#54FF9F",
    name: "SeaGreen1",
  },
  {
    id: "3",
    colorCode: "#ee1289",
    name: "DeepPink2",
  },
  {
    id: "4",
    colorCode: "#FFFF00",
    name: "yellow",
  },
];

export default function ColorCard() {
  return (
    <StyledList>
      {colors.map(({ id, colorCode, name }) => (
        <CardStyle>
          <CardItem
            onClick={() => {
              navigator.clipboard.writeText(colorCode);
            }}
            style={{ backgroundColor: colorCode }}
            key={id}
            name={name}
            colorCode={colorCode}
          >
            <Colorname>{name}</Colorname>
            <DescriptionStyle>{colorCode}</DescriptionStyle>
          </CardItem>
        </CardStyle>
      ))}
    </StyledList>
  );
}

//TODO - position Colorname seperate from description
const Colorname = styled.p`
  font-size: large;
  font-weight: 700;
`;

const CardItem = styled.div`
  height: 300px;
  width: 200px;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

const CardStyle = styled.section`
  cursor: pointer;
  display: flex;
  padding: 5px;
`;
//TODO - auto sizing depended of div-element
const DescriptionStyle = styled.p`
  padding: 10px;
  margin: 0;
  border-radius: 10px;
  background-color: white;
  border: 1px solid black;
  font-weight: bold;
`;
