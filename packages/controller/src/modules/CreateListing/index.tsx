import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import {
  CreateListingMutationVariables,
  CreateListingMutation
} from "../../schemaTypes";

const createListingMutation = gql`
  mutation CreateListingMutation(
    $name: String!
    $category: String!
    $description: String!
    $price: Int!
    $beds: Int!
    $guest: Int!
    $latitude: Float!
    $longitude: Float!
    $amenities: [String!]!
  ) {
    createListing(
      input: {
        name: $name
        category: $category
        description: $description
        price: $price
        beds: $beds
        guest: $guest
        latitude: $latitude
        longitude: $longitude
        amenities: $amenities
      }
    )
  }
` as any & React.AbstractView;

export interface WithCreateListing {
  createListing: (variables: CreateListingMutationVariables) => void;
}

export const withCreateListing = graphql<
  any,
  CreateListingMutation,
  CreateListingMutationVariables,
  WithCreateListing
>(createListingMutation, {
  props: ({ mutate }) => ({
    createListing: variables => {
      if (!mutate) {
        return;
      }
      mutate({ variables });
    }
  })
});
