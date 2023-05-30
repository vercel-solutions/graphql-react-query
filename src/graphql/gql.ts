/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query ClientFilmQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmCard\n    }\n  }\n": types.ClientFilmQueryDocument,
    "\n      query ClientFilmCharactersQuery($id: ID!) {\n        film(id: $id) {\n          id\n          characterConnection {\n            characters {\n              id\n              ...CharacterItem\n            }\n          }\n        }\n      }\n    ": types.ClientFilmCharactersQueryDocument,
    "\n  query AllFilmsClientQuery {\n    allFilms {\n      edges {\n        node {\n          id\n          ...FilmCard\n        }\n      }\n    }\n  }\n": types.AllFilmsClientQueryDocument,
    "\n  query FilmServerQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmCard\n    }\n  }\n": types.FilmServerQueryDocument,
    "\n      query FilmServerCharactersQuery($id: ID!) {\n        film(id: $id) {\n          id\n          characterConnection {\n            characters {\n              id\n              ...CharacterItem\n            }\n          }\n        }\n      }\n    ": types.FilmServerCharactersQueryDocument,
    "\n  query AllFilmsServerQuery {\n    allFilms {\n      films {\n        id\n        ...FilmCard\n      }\n    }\n  }\n": types.AllFilmsServerQueryDocument,
    "\n  fragment CharacterItem on Person {\n    id\n    name\n    homeworld {\n      id\n      name\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        ...VehicleItem\n      }\n    }\n  }\n": types.CharacterItemFragmentDoc,
    "\n  fragment FilmCard on Film {\n    id\n    title\n    director\n    releaseDate\n    producers\n    episodeID\n  }\n": types.FilmCardFragmentDoc,
    "\n  fragment VehicleItem on Vehicle {\n    name\n    model\n  }\n": types.VehicleItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ClientFilmQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmCard\n    }\n  }\n"): (typeof documents)["\n  query ClientFilmQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmCard\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query ClientFilmCharactersQuery($id: ID!) {\n        film(id: $id) {\n          id\n          characterConnection {\n            characters {\n              id\n              ...CharacterItem\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query ClientFilmCharactersQuery($id: ID!) {\n        film(id: $id) {\n          id\n          characterConnection {\n            characters {\n              id\n              ...CharacterItem\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllFilmsClientQuery {\n    allFilms {\n      edges {\n        node {\n          id\n          ...FilmCard\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllFilmsClientQuery {\n    allFilms {\n      edges {\n        node {\n          id\n          ...FilmCard\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FilmServerQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmCard\n    }\n  }\n"): (typeof documents)["\n  query FilmServerQuery($id: ID!) {\n    film(id: $id) {\n      ...FilmCard\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query FilmServerCharactersQuery($id: ID!) {\n        film(id: $id) {\n          id\n          characterConnection {\n            characters {\n              id\n              ...CharacterItem\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query FilmServerCharactersQuery($id: ID!) {\n        film(id: $id) {\n          id\n          characterConnection {\n            characters {\n              id\n              ...CharacterItem\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllFilmsServerQuery {\n    allFilms {\n      films {\n        id\n        ...FilmCard\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllFilmsServerQuery {\n    allFilms {\n      films {\n        id\n        ...FilmCard\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterItem on Person {\n    id\n    name\n    homeworld {\n      id\n      name\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        ...VehicleItem\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CharacterItem on Person {\n    id\n    name\n    homeworld {\n      id\n      name\n    }\n    vehicleConnection {\n      vehicles {\n        id\n        ...VehicleItem\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FilmCard on Film {\n    id\n    title\n    director\n    releaseDate\n    producers\n    episodeID\n  }\n"): (typeof documents)["\n  fragment FilmCard on Film {\n    id\n    title\n    director\n    releaseDate\n    producers\n    episodeID\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment VehicleItem on Vehicle {\n    name\n    model\n  }\n"): (typeof documents)["\n  fragment VehicleItem on Vehicle {\n    name\n    model\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;