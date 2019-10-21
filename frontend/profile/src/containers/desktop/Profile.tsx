import { connect } from 'react-redux'
import { setProfile, updateProfile } from '../../actions/profile'
import List from '../../components/desktop/Profile'

export default connect(
  state => ({
    profile: state.profile,
  }),
  dispatch => ({
    setProfile: profile => dispatch(setProfile(profile)),
    updateProfile: () => dispatch(updateProfile()),
  }),
)(List)
