import React , {Component} from "react";
import PropType from 'prop-types'
class Git extends Component {
    constructor(props){
    super(props)
    this.state = {
        id:5,
        persons:this.props.name,
        Page:this.props.age
    }
}

    handleClick = () =>{
        console.log('clicked',this)
        this.setState({
            persons:"Changed  Now"
        })
    }

    handleDelete = (id,e) =>{
         console.log(id)
          console.log(e)
            console.log(e.altKey)
         this.setState({
             id:" "
         })
    }

   
     render(){
         return (
             <>
              <h2>{this.state.id}</h2>
             <h2>{this.state.Page}</h2>
             <h2>{this.state.persons}</h2>
             <button onClick={this.handleClick}>{this.state.persons}</button>
             <button onClick={e => {this.handleDelete(this.state.id, e)}}>Delete</button>
             </>
         )
     }
}



Git.propTypes = {
    Page:PropType.string
}


export default Git