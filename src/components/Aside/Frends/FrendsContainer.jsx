import Frends from "./Frends";
import {connect} from "react-redux";

    const mapStateToProps = (state) =>({
        state: state.aside
    })

    const mapDispatchToProps = (dispatch) => ({

    })

    const FrendsContainer = connect(mapStateToProps, mapDispatchToProps)(Frends)


export default FrendsContainer