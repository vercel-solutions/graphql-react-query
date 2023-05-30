import { graphql, FragmentType, useFragment } from "@/graphql";

const fragment = graphql(/* GraphQL */ `
  fragment FilmCard on Film {
    id
    title
    director
    releaseDate
    producers
    episodeID
  }
`);

type Props = {
  film: FragmentType<typeof fragment>;
};

export default function Film(props: Props) {
  const film = useFragment(fragment, props.film);
  return (
    <article className="flex items-start space-x-6 py-6">
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 truncate pr-20">
          {film.title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            Episode {film.episodeID}
          </div>
          <div className="px-1.5 ring-1 ring-slate-200 rounded">
            {film.director}
          </div>
          <div className="ml-2">{film.releaseDate}</div>
          <div className="flex-none w-full mt-2 font-normal text-slate-400">
            Producers: {film.producers?.join(", ")}
          </div>
        </dl>
      </div>
    </article>
  );
}
