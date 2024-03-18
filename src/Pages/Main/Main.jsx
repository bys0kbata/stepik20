
import { useState } from "react"
import { nameCourse } from "../../Info/Info"
import  {HTMLModule} from "../../Info/Info"
import "./Main.scss"


function ArrCourse(){
    const [ModuleVis, setMV]  = useState(false);
   
    const OneCourse = (props) =>{
        return(
            <div>
                <div className="OneCourse"> <button onClick={()=>{e.preventDefault(); setMV(true);}}> ▷ </button >{props.name}</div>
                <MenuTeamCourse menu={props.menu} />
            </div>
        )

    }
    const MenuTeamCourse=(props)=>{
        return(
            <div className="AllModule" >
                {props.menu.map((Module)=>{
                    return(
                        <button onClick={()=>{console.log("/");}}>{Module}</button>
                    )
                })}
            </div>
        )
    }

    return(

        <div className="ArrayCourse">
            {nameCourse.map((one)=>{
                return(<>
                <OneCourse name ={one} menu ={HTMLModule}/>
                </>)

            })}
        </div>
    )
}



export default function Main(){

    return(<>
     <ArrCourse />
     </>
    )
}