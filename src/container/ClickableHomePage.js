import { connect } from 'react-redux/es'

import Home from '../components/Home'
import { fetchApiRequested } from '../actions/home'
import { getHealth } from '../selectors/Home'

export const mapStateToProps = state => ({
    home: getHealth(state)
})

export const mapDispatchToProps = dispatch => {
   return {
     getApiRequest: () => {
       return dispatch(fetchApiRequested())
     }
   }
}

const ClickableHomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)



export default ClickableHomePage
