import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMod = () => {
        this.setState({
                editMode: true
            })
    }
    deactivateEditMod = () => {
        this.setState({
                editMode: false
            })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps,prevState) {

        if(prevProps.status !== this.props.status){
            console.log("in Update")
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        console.log('Render')
        return (
            <div>

                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={
                           this.activateEditMod
                        }>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMod} type="text" value={this.state.status}/>
                    </div>
                }

            </div>
        )

    }
}

export default ProfileStatus