import { connect } from 'react-redux'
import { logout } from '@frontend/common/src/actions/security'
import Header from '../../components/desktop/Header'

export default connect(
  state => ({}),
  dispatch => ({
    onLogout: () => dispatch(logout()),
  }),
)(Header)
