import Character from "@/components/Character";
import Film from "@/components/Film";
import { graphql } from "@/graphql";
import { fetchQuery } from "@/lib/api";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const query = graphql(/* GraphQL */ `
  query FilmServerQuery($id: ID!) {
    film(id: $id) {
      ...FilmCard
    }
  }
`);

export default async function FilmPage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id);

  const data = await fetchQuery(query, { id });

  return (
    <main>
      {data.film && <Film film={data.film} />}
      <Suspense fallback={<h1>Loading characters</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <Characters filmId={id} />
      </Suspense>
    </main>
  );
}

async function Characters({ filmId }: { filmId: string }) {
  const data = await fetchQuery(
    graphql(/* GraphQL */ `
      query FilmServerCharactersQuery($id: ID!) {
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
    { id: filmId }
  );

  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.film?.characterConnection?.characters?.map(
        (c) => c && <Character character={c} key={c.id} />
      )}
    </div>
  );
}
