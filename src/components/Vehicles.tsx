import { graphql, FragmentType, useFragment } from "@/graphql";

const fragment = graphql(/* GraphQL */ `
  fragment VehicleItem on Vehicle {
    name
    model
  }
`);

type Props = {
  vehicle: FragmentType<typeof fragment>;
};

export default function Vehicle(props: Props) {
  const vehicle = useFragment(fragment, props.vehicle);
  return (
    <div className="flex">
      <div className="font-semibold text-sm text-slate-500">
        {vehicle.name} - <span className="font-normal">{vehicle.model}</span>
      </div>
    </div>
  );
}
