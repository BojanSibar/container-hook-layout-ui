import React, { ReactElement, useCallback, useState } from "react";
import { getCharactersAPI } from "../api/StarWarsService";
import { Button } from "../component/PrimitiveComponents";
import StarWarsCharacterList from "../component/StarWarsCharacterList";
import useFetch from "../hook/useFetch";

interface Props {}

export default function StarWarsCharacters({}: Props): ReactElement {
  const [viewOption, setViewOption] = useState("list");
  const { data, status } = useFetch(() => getCharactersAPI());

  const onViewOptionButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e.currentTarget.value);
      setViewOption(e.currentTarget.value);
    },
    []
  );

  if (["init", "fetching"].includes(status)) return <div>LoAdInG....</div>;
  return (
    <div>
      Star wars characters
      <Button
        value="list"
        onClick={onViewOptionButtonClick}
        isSelected={viewOption === "list"}
      >
        list
      </Button>
      <Button
        value="grid"
        onClick={onViewOptionButtonClick}
        isSelected={viewOption === "grid"}
      >
        grid
      </Button>
      {data?.map((item) => {
        return (
          <StarWarsCharacterList
            key={item.id.toString()}
            id={item.id.toString()}
            image={item.image}
            wikiURL={item.wiki}
            name={item.name}
            height={item.height}
            homeWorld={
              Array.isArray(item.homeworld)
                ? item.homeworld.join(",")
                : item.homeworld
            }
            gender={item.gender}
          />
        );
      })}
    </div>
  );
}
