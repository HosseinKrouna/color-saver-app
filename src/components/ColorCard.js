import React from "react";
import styled from "styled-components";

const colors = [
  {
    id: "1",
    colorCode: "#ccc",
  },
  {
    id: "2",
    colorCode: "#54FF9F",
  },
  {
    id: "3",
    colorCode: "#ee1289",
  },
  {
    id: "4",
    colorCode: "#FFFF00",
  },
];

export default function ColorCard(id, colorCode) {
  return (
    <StyledList>
      {colors.map(({ id, colorCode }) => (
        <ListItem style={{ backgroundColor: colorCode }} key={id}>
          {colorCode}
        </ListItem>
      ))}
    </StyledList>
  );
}

const ListItem = styled.li`
  border: 1px solid black;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;
