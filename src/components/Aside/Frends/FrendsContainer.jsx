import Frends from "./Frends";
import {connect} from "react-redux";

    const mapStateToProps = (state) =>({
        state: state.aside
    })

    const mapDispatchToProps = () => ({

    })

    const FrendsContainer = connect(mapStateToProps, mapDispatchToProps)(Frends)


export default FrendsContainer