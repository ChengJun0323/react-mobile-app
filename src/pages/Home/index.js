import { connect } from "react-redux";
import {HomeWrapper} from "./style";

const Home = (props) => {

  const {
    userInfo
  } = props;

  return (
    <HomeWrapper>
      <div>HOME, {userInfo.name}</div>
    </HomeWrapper>
  )
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo
})

export default connect(mapStateToProps)(Home);
