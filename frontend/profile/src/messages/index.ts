import { defineMessages } from 'react-intl'

export const namespace = '@frontend/profile'

export default defineMessages({
  firstName: {
    id: `${namespace}.first`,
    defaultMessage: 'имя',
  },
  lastName: {
    id: `${namespace}.last`,
    defaultMessage: 'фамилия',
  },
  update: {
    id: `${namespace}.update`,
    defaultMessage: 'обновить',
  },
})
