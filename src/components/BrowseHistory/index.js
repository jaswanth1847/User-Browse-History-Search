

import {Component} from "react"
class BrowseHistory extends Component{
    deleteBtnElement=()=>{
        const {eachItem, deleteItem} = this.props
        deleteItem(eachItem.id)
    }

    render(){
        const {eachItem} = this.props
        const {time,imgIcon,name,imgUrl} = eachItem

        return(
            <li>
                <p>{time}</p>
                <p>{imgIcon}</p>
                <p>{name}</p>
                <p>{imgUrl}</p>
                <button onClick={this.deleteBtnElement}><i class="fa-solid fa-trash"></i></button>
            </li>
        )
    }
}
export default BrowseHistory