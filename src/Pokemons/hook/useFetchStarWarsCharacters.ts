import { useState } from "react";
import { StarWarsCharacter } from "../api/starwarscharacters";

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
};
