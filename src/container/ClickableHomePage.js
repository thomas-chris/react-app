import { connect } from 'react-redux/es'

import Home from '../components/Home'
import { fetchApiRequested } from '../actions/home'

export const mapStateToProps = state => ({

})

export const mapDispatchToProps = dispatch => {
   return {
     getApiRequest: () => {
       console.log('The action is fired')
       return dispatch(fetchApiRequested())
     }
   }
}

const ClickableHomePage = connect(
  null,
  mapDispatchToProps
)(Home)



export default ClickableHomePage
