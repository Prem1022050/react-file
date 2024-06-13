import Admin from "./Admin"
import User from "./User"
import st from './Conditionalrender.module.css'
function Conditionalrender(props)
{
   

return(
   <ul>
   <li className={st.g}>id {props.id} ,Brand {props.brand}</li>
   </ul>
)
}
export default Conditionalrender;