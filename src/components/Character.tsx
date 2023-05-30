import { graphql, FragmentType, useFragment } from "@/graphql";
import Vehicle from "./Vehicles";

const fragment = graphql(/* GraphQL */ `
  fragment CharacterItem on Person {
    id
    name
    homeworld {
      id
      name
    }
    vehicleConnection {
      vehicles {
        id
        ...VehicleItem
      }
    }
  }
`);

type Props = {
  character: FragmentType<typeof fragment>;
};

export default function Character(props: Props) {
  const character = useFragment(fragment, props.character);
  return (
    <div className="shadow-lg rounded-lg p-4">
      <h3 className="font-semibold text-slate-900 truncate pr-20">
        {character.name}
      </h3>
      <p className="text-sm font-medium text-slate-500">
        Planet: {character.homeworld?.name}
      </p>
      <div className="flex flex-col">
        {character.vehicleConnection?.vehicles?.map(
          (v) => v && <Vehicle key={v.id} vehicle={v} />
        )}
      </div>
    </div>
  );
}
