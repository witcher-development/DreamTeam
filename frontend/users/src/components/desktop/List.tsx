import React, { Fragment, useState, useEffect } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import messages from '../../messages'
import Filter from '../Filter'

interface Props {
  intl: InjectedIntl
}

const columns = [
  {
    key: 'name',
    title: messages.name,
    width: 300,
  },
  {
    key: 'email',
    title: messages.email,
    width: 200,
  },
  {
    key: 'registeredAt',
    title: messages.registered,
    width: 180,
  },
  {
    key: 'lastLogonAt',
    title: messages.lastLogin,
    width: 160,
  },
]

const List = ({ rows, intl }: Props) => {
  const [options] = useState(
    columns.map(column => ({
      name: intl.formatMessage(column.title),
      value: column.key,
    })),
  )
  const [currentFilter, setFilter] = useState(options[0].value)
  const [filteredRows, setRows] = useState([])

  useEffect(() => {
    if (!rows.length) { return }

    let data = rows
    if (currentFilter === 'name') {
      data = rows.map(row => ({
        ...row,
        name: row.profile ? row.profile.firstName : '',
      }))
    }

    const filtered = data.sort((a, b) => {
      if (a[currentFilter] > b[currentFilter]) {
        return 1
      } else {
        return -1
      }
    })

    setRows(filtered)
  }, [rows, currentFilter])

  return (
    <Column>
      <Layout basis={60} />
      <Row>
        <Layout basis='10%' />
        <Text weight='medium' size='l'>
          {intl.formatMessage(messages.users)}
        </Text>
        <Layout basis='10%' />
      </Row>
      <Layout basis={20} />
      <Row>
        <Layout basis='10%' />
        <Filter
          options={options}
          current={currentFilter}
          onChange={setFilter}
        />
        <Layout basis='10%' />
      </Row>
      <Layout basis={20} />
      <Row>
        <Layout basis='10%' />
        {columns.map((column, i) => (
          <Layout basis={column.width} key={i}>
            <Text size='s' weight='bold' transform='uppercase'>
              {intl.formatMessage(column.title)}
            </Text>
          </Layout>
        ))}
        <Layout basis='10%' />
      </Row>
      <Layout basis={8} />
      {filteredRows.map(({ id, profile, email, registeredAt, lastLogonAt }) => (
        <Fragment key={id}>
          <Row>
            <Layout basis='10%' />
            <Layout basis={8} />
            <Layout basis={280}>
              <Text size='s'>
                {profile ? profile.firstName : '-'}
                <Space />
                {profile ? profile.lastName : '-'}
              </Text>
            </Layout>
            <Layout basis={12} />
            <Layout basis={188}>
              <Text size='s'>{email}</Text>
            </Layout>
            <Layout basis={12} />
            <Layout basis={168}>
              <Text size='s'>{intl.formatDate(registeredAt)}</Text>
            </Layout>
            <Layout basis={12} />
            <Text size='s'>
              {intl.formatDate(lastLogonAt)}
              <Space />
              {intl.formatMessage(messages.at)}
              <Space />
              {intl.formatTime(lastLogonAt)}
            </Text>
            <Layout basis='10%' />
          </Row>
          <Layout basis={12} />
        </Fragment>
      ))}
    </Column>
  )
}

export default injectIntl(List)
