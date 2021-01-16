import s from './Frends.module.css'
import Frend from "../Frend/Frend";


const Frends = (props) => {

    let frends = props.frends.map((frend,index) => {
        const avatar = frend.avatar || 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'

        return <Frend avatar={avatar} name={frend.name} id={frend.id}/>
    }).slice(0,3)




    return (
        <div className={s.frends}>
            <h4>Друзья</h4>
            <div className={s.frends_items} >
                {frends}
            </div>
        </div>
    )
};

export default Frends