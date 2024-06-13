import './App.css';
function Fn(props)
{
    //props.Name="aravind";
    var a=<h3>h2 tag</h3>
    const hi=(a,b)=>{
        alert(a)
        alert(b.type)
    }
    return(
        <div className="a">
            <h2>Hope Your Days Get Better Soon</h2>
            {props.Name} {props.city}
            <br></br>
            <button onClick={(a)=>{hi("Hi hello from scope",a)}}>click</button>
        </div>
        
        
    )

}

export default Fn;