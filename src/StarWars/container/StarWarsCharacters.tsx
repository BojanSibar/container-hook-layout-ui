import React, { ReactElement, useCallback, useState } from "react";
import { getCharactersAPI } from "../api/StarWarsService";
import { Button } from "../component/PrimitiveComponents";
import StarWarsCharacterList from "../component/StarWarsCharacterList";
import { StarWarsLetters } from "../component/StarWarsLetters";
import useFetch from "../hook/useFetch";
import { GridAndListLayout, LayoutVariant } from "../layout/GridAndListLayout";

export default function StarWarsCharacters(): ReactElement {
  const [viewOption, setViewOption] = useState("list" as LayoutVariant);
  const { data, status } = useFetch(() => getCharactersAPI());

  const onViewOptionButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setViewOption(e.currentTarget.value as LayoutVariant);
    },
    []
  );

  // if (["init", "fetching"].includes(status)) return <div>LoAdInG....</div>;

  return (
    <GridAndListLayout
      headerNode={
        <>
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
          <StarWarsLetters
            title="A new hope"
            subTitle="new subtitle"
            description="Cao Marija, drago mi je da si izdvojila malo vremena da pogledas ovo, znam da sada kucam ovo. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </>
      }
      variant={viewOption}
      bodyNode={
        ["init", "fetching"].includes(status) ? (
          <div>LoAdInG....</div>
        ) : (
          data?.map((item) => {
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
          })
        )
      }
    />
  );
}
