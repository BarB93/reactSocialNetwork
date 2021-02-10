import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink></li>
            <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink></li>
            <li className={s.item}><NavLink to="/news" activeClassName={s.active}>Новости</NavLink></li>
            <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Музыка</NavLink></li>
            <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Найти друзей</NavLink></li>
            {/*<li className={s.item}><a href="#">Настройки</a></li>*/}

        </nav>
    )
};

export default Navbar