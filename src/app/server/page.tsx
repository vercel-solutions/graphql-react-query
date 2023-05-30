import Film from "@/components/Film";
import { graphql } from "@/graphql";
import { fetchQuery } from "@/lib/api";
import Link from "next/link";

export const dynamic = "force-dynamic";

const query = graphql(/* GraphQL */ `
  query AllFilmsServerQuery {
    allFilms {
      films {
        id
        ...FilmCard
      }
    }
  }
`);

export default async function Home() {
  const data = await fetchQuery(query, {});

  return (
    <main>
      <div className="flex mb-8 items-baseline gap-2">
        <h1 className="text-3xl ">Movies</h1>
        <h2 className="text-xl">Server</h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {data.allFilms?.films?.map(
            (film) =>
              film && (
                <Link href={"/server/film/" + film.id} key={film.id}>
                  <div className="rounded-lg shadow-lg p-4">
                    <Film film={film} />
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </main>
  );
}
