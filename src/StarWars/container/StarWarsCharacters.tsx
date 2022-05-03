import React, { ReactElement, useCallback, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getCharactersAPI } from "../api/StarWarsService";
import { Button } from "../component/PrimitiveComponents";
import StarWarsCharacterList from "../component/StarWarsCharacterList";
import { StarWarsLetters } from "../component/StarWarsLetters";
import useFetch from "../hook/useFetch";
import { GridAndListLayout, LayoutVariant } from "../layout/GridAndListLayout";
import StarWarsCharacterListLayout from "../layout/StarWarsCharacterListLayout";

import "react-loading-skeleton/dist/skeleton.css";

export default function StarWarsCharacters(): ReactElement {
  const [viewOption, setViewOption] = useState("grid" as LayoutVariant);
  const [isAnimationOn, setIsAnimationOn] = useState(false);
  const { data, status } = useFetch(() => getCharactersAPI());

  const onViewOptionButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setViewOption(e.currentTarget.value as LayoutVariant);
    },
    []
  );

  const onAnimationToggle = useCallback(() => {
    setIsAnimationOn(!isAnimationOn);
  }, [isAnimationOn]);

  return (
    <GridAndListLayout
      leftHeaderNode={
        <Button onClick={onAnimationToggle} isSelected={isAnimationOn}>
          animation
        </Button>
      }
      rightHeaderNode={
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
        </>
      }
      animationNode={
        isAnimationOn && (
          <StarWarsLetters
            title="Episode I"
            subTitle="LAYOUT PATTERN"
            description="We know how to separate business logic and UI layer conceptually (component-container pattern) - we would probably do some data fetching and after that iterate over data and render cards for every item. But in this concept which part is responsible of arranging of a cards? To solve this problem let leverage React composition here. There is a lot of typescript involved here but main idea is the same - pass components to layout component. Layout component will take rendering over. For this example we will use one character card as an example. "
          />
        )
      }
      variant={viewOption}
      bodyNode={
        ["init", "fetching"].includes(status)
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <StarWarsCharacterListLayout
                  key={item.toString()}
                  imageNode={<Skeleton width={150} height={150} />}
                  learnMoreNode={<Skeleton width={120} height={50} />}
                  titleNode={<Skeleton width={120} height={50} />}
                  heightNode={<Skeleton width={120} height={30} />}
                  genderNode={<Skeleton width={120} height={30} />}
                  homeWorldNode={<Skeleton width={120} height={30} />}
                />
              );
            })
          : data?.map((item) => {
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
      }
    />
  );
}
