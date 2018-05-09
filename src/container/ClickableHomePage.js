import { connect } from 'react-redux/es'

import Home from '../components/Home'
import { fetchHealthApiRequested } from '../actions/home'
import { getHome } from '../selectors/Home'

export const mapStateToProps = state => ({
    home: getHome(state),
})

export const mapDispatchToProps = dispatch => {
   return {
     getApiRequest: () => {
       return dispatch(fetchHealthApiRequested())
     }
   }
}

const ClickableHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)



export default ClickableHomePage
