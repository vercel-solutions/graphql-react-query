import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient, Variables } from "graphql-request";
import { useQuery as useQueryOriginal } from "@tanstack/react-query";
import { Kind } from "graphql";
import invariant from "tiny-invariant";
import { UseQueryResult } from "react-query";

const endpoint = "https://swapi-graphql.eskerda.vercel.app";

const client = new GraphQLClient(endpoint, { fetch });

async function sleep(ms: number = 1000) {
  await new Promise<void>((res) => setTimeout(() => res(), ms));
}

export async function fetchQuery<T, V extends Variables | undefined>(
  query: TypedDocumentNode<T, V>,
  variables: V
) {
  return await client.request(query, variables);
}

export function useQuery<T, V extends Variables | undefined>(
  query: TypedDocumentNode<T, V>,
  variables: V,
  options: Parameters<typeof useQueryOriginal>[2] = undefined
): UseQueryResult<T> {
  const operation = query.definitions.find(
    (doc) => doc.kind === Kind.OPERATION_DEFINITION
  );
  invariant(operation, "Operation should be defined");
  invariant(
    operation.kind === Kind.OPERATION_DEFINITION &&
      operation.name?.value !== undefined,
    "Operation should have a name"
  );
  // @ts-expect-error
  return useQueryOriginal(
    [operation.name.value, variables],
    async () => {
      return client.request(query, variables);
    },
    options
  );
}
