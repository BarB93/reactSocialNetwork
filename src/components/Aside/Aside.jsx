import s from './Aside.module.css'
import Navbar from "./Navbar/Navbar";
import FrendsContainer from "./Frends/FrendsContainer";


const Aside = () => {

    return (
        <aside className={s.aside}>
            <Navbar />
            <FrendsContainer />
        </aside>
    )
};

export default Aside