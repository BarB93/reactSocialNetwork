import s from './Frends.module.css'
import Frend from "../Frend/Frend";


const Frends = (props) => {

    let frends = props.state.frends.map((frend, index) => {

        return <Frend avatar={frend.avatar} name={frend.name} id={frend.id}/>
    }).slice(0, 3)

    return (
               <div className={s.frends}>
                    <h4>Друзья</h4>
                    <div className={s.frends_items}>
                        {frends}
                    </div>
                </div>
            )




};

export default Frends