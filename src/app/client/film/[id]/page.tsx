"use client";

import Character from "@/components/Character";
import Film from "@/components/Film";
import { graphql } from "@/graphql";
import { useQuery } from "@/lib/api";
import { useParams } from "next/navigation";

const query = graphql(/* GraphQL */ `
  query ClientFilmQuery($id: ID!) {
    film(id: $id) {
      ...FilmCard
    }
  }
`);

export default function FilmPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id);

  const { data } = useQuery(query, { id });

  if (!data) {
    return (
      <main className="container mx-auto">
        <h1 className="text-4xl text-bold">Loading</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto">
      {data.film && <Film film={data.film} />}
      <Characters />
    </main>
  );
}

function Characters() {
  const params = useParams();
  const id = decodeURIComponent(params.id);

  const { data } = useQuery(
    graphql(/* GraphQL */ `
      query ClientFilmCharactersQuery($id: ID!) {
        film(id: $id) {
          id
          characterConnection {
            characters {
              id
              ...CharacterItem
            }
          }
        }
      }
    `),
    { id }
  );
  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.film?.characterConnection?.characters?.map(
        (c) => c && <Character character={c} key={c.id} />
      )}
    </div>
  );
}
