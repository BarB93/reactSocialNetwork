import s from './Aside.module.css'
import Navbar from "./Navbar/Navbar";
import Frends from "./Frends/Frends";


const Aside = (props) => {

    return (
        <aside className={s.aside}>
            <Navbar />
            <Frends frends={props.state.frends}/>
        </aside>
    )
};

export default Aside