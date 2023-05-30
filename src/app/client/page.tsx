"use client";
import { graphql } from "@/graphql";
import Film from "@/components/Film";
import { useQuery } from "@/lib/api";
import Link from "next/link";

const filmsQuery = graphql(/* GraphQL */ `
  query AllFilmsClientQuery {
    allFilms {
      edges {
        node {
          id
          ...FilmCard
        }
      }
    }
  }
`);

export default function ClientPage() {
  const { data } = useQuery(filmsQuery, {});

  return (
    <main>
      <div className="flex mb-8 items-baseline gap-2">
        <h1 className="text-3xl ">Movies</h1>
        <h2 className="text-xl">Client</h2>
      </div>
      {data ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {data.allFilms?.edges?.map(
            (e) =>
              e?.node && (
                <Link href={"/client/film/" + e.node.id} key={e.node.id}>
                  <div className="rounded-lg shadow-lg p-4">
                    <Film film={e?.node} />
                  </div>
                </Link>
              )
          )}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
}
