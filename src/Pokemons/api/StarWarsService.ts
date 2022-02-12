import starWarsCharacters, { StarWarsCharacter } from "./starwarscharacters";

function later<T = unknown>(delay: number, mockData: T): Promise<T> {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(mockData);
    }, delay);
  });
}

export function getCharactersAPI(): Promise<StarWarsCharacter[]> {
  return later<StarWarsCharacter[]>(2000, starWarsCharacters);
}
