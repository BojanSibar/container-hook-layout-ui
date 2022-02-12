import React from "react";
import StarWarsCharacterListLayout from "../layout/StarWarsCharacterListLayout";
import { Image, Link } from "./PrimitiveComponents";

type Props = {
  id: string;
  name: string;
  image: string;
  height: number;
  homeWorld: string;
  gender: string;
  wikiURL: string;
};

function StarWarsCharacterList({
  id,
  name,
  image,
  height,
  homeWorld,
  gender,
  wikiURL,
}: Props) {
  return (
    <StarWarsCharacterListLayout
      imageNode={<Image src={image} alt={name} />}
      titleNode={<h4>{name}</h4>}
      learnMoreNode={
        <Link href={wikiURL} target="_blank" rel="noreferrer">
          learn more
        </Link>
      }
      heightNode={<h5>{height} cm</h5>}
      homeWorldNode={<h5>Home world: {homeWorld.toUpperCase()}</h5>}
      genderNode={<h5>{gender}</h5>}
    />
  );
}

export default StarWarsCharacterList;
