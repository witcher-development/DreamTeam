import gql from 'graphql-tag'
import { auth } from '@frontend/common/src/constants/security'
import { authAction } from '@frontend/common/src/actions/security'
import * as actions from '../constants'
import stub from './stub'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const login = (afterRegister = undefined) => async (
  dispatch,
  getState,
  client,
) => {
  let email
  let password

  if (afterRegister) {
    email = afterRegister.email
    password = afterRegister.password
  } else {
    email = getState().auth.login.email
    password = getState().auth.login.password
  }

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token {
              token
              expiresIn
            }
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })

    if (data.login.errors) {
      throw data.login.errors
    }

    dispatch(authAction(data.login.token))
  } catch (e) {
    dispatch({
      type: actions.setErrors,
      errors: e,
    })
    console.log(getState().auth.login)
  }
}
