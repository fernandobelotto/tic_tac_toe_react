import {
  Button,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Grid = Array<Array<"X" | "O" | " ">>;
export const Home = () => {
  const [grid, setGrid] = useState<Grid>([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);

  const [turn, setTurn] = useState<"X" | "O">("X");

  const [winner, setWinner] = useState<"X" | "O" | null>(null);

  const checkWinner = () => {
    const checkRow = (row: any) => {
      if (row[0] === row[1] && row[1] === row[2] && row[0] !== " ") {
        setWinner(row[0]);
      }
    };

    const checkCol = (col: any) => {
      if (
        grid[0][col] === grid[1][col] &&
        grid[1][col] === grid[2][col] &&
        grid[0][col] !== " "
      ) {
        setWinner(grid[0][col] as any); // fix ts error
      }
    };

    const checkDiagonal = () => {
      if (
        grid[0][0] === grid[1][1] &&
        grid[1][1] === grid[2][2] &&
        grid[0][0] !== " "
      ) {
        setWinner(grid[0][0]);
      }

      if (
        grid[0][2] === grid[1][1] &&
        grid[1][1] === grid[2][0] &&
        grid[0][2] !== " "
      ) {
        setWinner(grid[0][2]);
      }
    };

    grid.forEach(checkRow);
    grid[0].forEach((_, col) => checkCol(col));
    checkDiagonal();
  };

  useEffect(() => {
    checkWinner();
  });

  return (
    <Center h="100vh">
      <VStack spacing={5}>
        <Heading>Tic Tac Toe</Heading>

        <SimpleGrid spacing={2}>
          {grid?.map((row, rowIndex) => (
            <Flex gap={2} key={rowIndex}>
              {row?.map((col, colIndex) => (
                <Button
                  key={colIndex}
                  onClick={() => {
                    const newGrid = [...grid];
                    newGrid[rowIndex][colIndex] = turn;

                    setGrid(newGrid);
                    setTurn((turn: any) => (turn === "X" ? "O" : "X"));
                  }}
                >
                  {col}
                </Button>
              ))}
            </Flex>
          ))}
        </SimpleGrid>
        {winner && <Heading>Winner is {winner}</Heading>}

        <Button
          size="sm"
          onClick={() => {
            setGrid([
              [" ", " ", " "],
              [" ", " ", " "],
              [" ", " ", " "],
            ]);
            setWinner(null);
            setTurn("X");
          }}
        >
          Reset
        </Button>
      </VStack>
    </Center>
  );
};
