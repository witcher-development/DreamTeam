import gql from 'graphql-tag'
import * as actions from '../constants/profile'

export const setProfile = ({ firstName, lastName }) => ({
  type: actions.set,
  profile: {
    firstName,
    lastName,
  },
})

export const updateProfile = () => async (dispatch, getState, client) => {
  try {
    const { firstName, lastName } = getState().profile

    await client.mutate({
      mutation: gql`
      mutation UpdateProfile($input: UpdateProfileInput!) {
        updateProfile(input: $input) {
          errors {
            firstName
            lastName
          }
        }
      }
    `,
      variables: {
        input: {
          firstName,
          lastName,
        },
      },
    })
  } catch (e) {
    console.log(e)
  }
}
