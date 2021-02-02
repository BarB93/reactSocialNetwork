import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img alt='img' src="https://icons-for-free.com/iconfiles/png/512/internet+media+network+social+vk+web+icon-1320194042400488353.png" />
            <div className={s.loginBlock}>
                { props.isAuth ? <div>Вы вошли как: {props.login}</div> :<NavLink to={'/login'}>Войти</NavLink>}
            </div>
        </header>
    )
}

export default Header