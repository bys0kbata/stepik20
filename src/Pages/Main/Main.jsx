
import InfoCourse from "../../Info/InfoJson.json";
import "./Main.scss"
import { useNavigate } from "react-router-dom";


function ArrCourse(){
    const nav = useNavigate();
    const Info = JSON.parse(JSON.stringify(InfoCourse));
    console.log(Info);
    const OneCourse = (props) =>{
        const count = localStorage.getItem(props.count);
        return(
            <div>
                <div className="OneCourse"> <button onClick={()=>{e.preventDefault();}}> ▷ </button >{props.name} <div className="progress">{count/2}/{props.allmodule}</div></div>
                <MenuTeamCourse menu={props.menu} />
            </div>
        )

    }
    const MenuTeamCourse=(props)=>{

        return(
            <div className="AllModule" >
                {props.menu.map((Module)=>{
                    const check = localStorage.getItem(Module);

                    if(check == 0)
                    return(
                        <button  onClick={()=>{
                            nav(`/lesson?nameModule=${Module}`); 
                        }
                        }>{Module}</button>
                    )
                })}
            </div>
        )
    }
    return(

        <div className="ArrayCourse">
            {Info.data.map((one)=>{
                return(<>
                <OneCourse key={one.id} name ={one.name} menu ={one.nameModule} allmodule ={one.AllModule} count = {one.count}/>
                </>)

            })}
        </div>
    )
}

export  function Input(){
    const Info = JSON.parse(JSON.stringify(InfoCourse));
    const onbtn=()=>{
        Info.data.map((one)=>{
            one.nameModule.map((two)=>{
            localStorage.setItem(`${two}`, 0);})
        })
        localStorage.setItem("countHTML", 0);
        localStorage.setItem("countCSS", 0);
        localStorage.setItem("countJS", 0);
        localStorage.setItem("isAuth", 1);
        location.reload();  
        
    }
    return(
        <div className="Input">
            <h1>Учись вместе с нами верстке!!</h1>
            <button className="btnInput" onClick={(e)=>{e.preventDefault();onbtn();}}>Войти</button>
        </div>

    )
}



export default function Main(){
    return(
        <>
            <ArrCourse />
        </>
    )
}