import { FC } from "react";

import { CharacterListItemProps } from "./CharacterListItem.types";
import Link from "next/link";
import Image from "next/image";

const CharacterListItem: FC<CharacterListItemProps> = ({
  character: { id, name },
  hasImageError,
  setHasImageError,
}) => {
  return (
    <li>
      <Link
        href={`/characters/${id}`}
        className="p-4 w-[157px] rounded shadow bg flex flex-col gap-3 md:w-52 xl:w-[240px]"
      >
        <Image
          src={
            hasImageError
              ? "/images/no-image.webp"
              : `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
          }
          alt={name}
          width={50}
          height={50}
          className="rounded-full w-28 h-28 object-cover md:w-52 md:h-52"
          onError={() => setHasImageError(true)}
        />
        <p className="text-sm text-center line-clamp-1 md:text-base">{name}</p>
      </Link>
    </li>
  );
};

export default CharacterListItem;
