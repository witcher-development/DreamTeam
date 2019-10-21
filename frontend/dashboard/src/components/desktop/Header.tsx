import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Layout } from '@ui/layout'
import { Header as HeaderBase } from '@ui/header'
import { Link, RouteLink } from '@ui/link'
import messages from '../../messages'

interface Props {
  intl: InjectedIntl
  onLogout: () => void
}

const Header = ({ intl, onLogout }: Props) => (
  <HeaderBase>
    <Layout basis='10%' />
    <RouteLink to='/profile' color='ebony' hoverColor='lightGray'>
      {intl.formatMessage(messages.profile)}
    </RouteLink>
    <Layout grow={1} />
    <Link onClick={onLogout} size='s' weight='medium' hoverColor='blueBayoux'>
      {intl.formatMessage(messages.exit)}
    </Link>
    <Layout basis='10%' />
  </HeaderBase>
)

export default injectIntl(Header)
