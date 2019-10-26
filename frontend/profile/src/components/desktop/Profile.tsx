import React, { Fragment } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { Text } from '@ui/text'
import messages from '../../messages'

interface Profile {
  firstName: string
  lastName: string
}

interface Props {
  profile: Profile
  setProfile: (Profile) => void,
  updateProfile: () => void,
  intl: InjectedIntl
}

const Profile = ({ profile, setProfile, updateProfile, intl }: Props) => (
  <Column>
    <Layout basis={60} />
    <Row>
      <Layout basis='10%' />
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.firstName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row>
      <Layout basis='10%' />
      <Layout basis={360}>
        <Input
          type='email'
          border='lightGray'
          value={profile.firstName}
          onChange={value => setProfile({ firstName: value, lastName: profile.lastName })}
          placeholder={intl.formatMessage(messages.firstName)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row>
      <Layout basis='10%' />
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.lastName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row>
      <Layout basis='10%' />
      <Layout basis={360}>
        <Input
          type='password'
          border='lightGray'
          value={profile.lastName}
          onChange={value => setProfile({ firstName: profile.firstName, lastName: value })}
          placeholder={intl.formatMessage(messages.lastName)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row>
      <Layout basis='10%' />
      <Layout basis={360}>
        <Button text disabled={!profile.firstName || !profile.lastName} onClick={updateProfile}>
          {intl.formatMessage(messages.update)}
        </Button>
      </Layout>
    </Row>
  </Column>
)

export default injectIntl(Profile)
