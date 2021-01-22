import s from './Aside.module.css'
import Navbar from "./Navbar/Navbar";

const Aside = () => {

    return (
        <aside className={s.aside}>
            <Navbar />
        </aside>
    )
};

export default Aside