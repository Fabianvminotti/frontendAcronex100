import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import{Link} from "react-router-dom"
import '../App.css';




class Items extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return( 
                <tr className="trSearch">                                  
                            <td className="celdaSearch celdaId"> <Link to={`/Machines/${this.props.id}`} >({this.props.id})</Link></td>
                            <td className="celdaSearch celdaDesc"><Link to={`/Machines/${this.props.id}`} >{this.props.descripcion}</Link></td>
                            <td className="celdaSearch celdaStatus"><Link to={`/Machines/${this.props.id}`} >{this.props.status?<div className="statusGreen"></div>:<div className="statusRed"></div>}</Link></td>                    
                    
                </tr>
        )
    } 
        
    

}
export default Items