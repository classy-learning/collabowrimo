/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClause = /* GraphQL */ `
  query GetClause($id: ID!) {
    getClause(id: $id) {
      id
      parentId
      children {
        items {
          id
          parentId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listClauses = /* GraphQL */ `
  query ListClauses(
    $filter: ModelClauseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClauses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parentId
        children {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const clausesByParentId = /* GraphQL */ `
  query ClausesByParentId(
    $parentId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelClauseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clausesByParentId(
      parentId: $parentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        parentId
        children {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
