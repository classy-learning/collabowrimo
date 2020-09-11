/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClause = /* GraphQL */ `
  mutation CreateClause(
    $input: CreateClauseInput!
    $condition: ModelClauseConditionInput
  ) {
    createClause(input: $input, condition: $condition) {
      id
      parentId
      children {
        items {
          id
          parentId
          text
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      text
      color
      createdAt
      updatedAt
    }
  }
`;
export const updateClause = /* GraphQL */ `
  mutation UpdateClause(
    $input: UpdateClauseInput!
    $condition: ModelClauseConditionInput
  ) {
    updateClause(input: $input, condition: $condition) {
      id
      parentId
      children {
        items {
          id
          parentId
          text
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      text
      color
      createdAt
      updatedAt
    }
  }
`;
export const deleteClause = /* GraphQL */ `
  mutation DeleteClause(
    $input: DeleteClauseInput!
    $condition: ModelClauseConditionInput
  ) {
    deleteClause(input: $input, condition: $condition) {
      id
      parentId
      children {
        items {
          id
          parentId
          text
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      text
      color
      createdAt
      updatedAt
    }
  }
`;
