import { defineMessages } from 'react-intl'

export const namespace = '@frontend/dashboard'

export default defineMessages({
  profile: {
    id: `${namespace}.profile`,
    defaultMessage: 'Профиль',
  },
  exit: {
    id: `${namespace}.exit`,
    defaultMessage: 'Выйти',
  },
  copyright: {
    id: `${namespace}.copyright`,
    defaultMessage: 'Atlantis United',
  },
})
