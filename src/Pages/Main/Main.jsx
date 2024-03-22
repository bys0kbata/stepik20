
import { useState, useEffect } from "react"
import InfoCourse from "../../Info/InfoJson.json";
import "./Main.scss"
import { useNavigate } from "react-router-dom";


function ArrCourse(){
    const [ModuleVis, setMV]  = useState(false);
    const nav = useNavigate();
    const Info = JSON.parse(JSON.stringify(InfoCourse));
    console.log(Info);
   
    const OneCourse = (props) =>{
        return(
            <div>
                <div className="OneCourse"> <button onClick={()=>{e.preventDefault(); setMV(true);}}> ▷ </button >{props.name} <div className="progress">0/{props.allmodule}</div></div>
                <MenuTeamCourse menu={props.menu} />
            </div>
        )

    }
    const MenuTeamCourse=(props)=>{

        return(
            <div className="AllModule" >
                {props.menu.map((Module)=>{
                    return(
                        <button onClick={()=>{nav("/lesson/1");}}>{Module}</button>
                    )
                })}
            </div>
        )
    }

    return(

        <div className="ArrayCourse">
            {Info.data.map((one)=>{
                return(<>
                <OneCourse key={one.id} name ={one.name} menu ={one.nameModule} allmodule ={one.AllModule}/>
                </>)

            })}
        </div>
    )
}



export default function Main(){
    const ResultModuleHTML = localStorage.getItem("ResultModuleHTML");
    useEffect(()=>{
    if(ResultModuleHTML){
        console.log("HTML изучен");
    }

    },[]);
    return(<>
     <ArrCourse />
     </>
    )
}