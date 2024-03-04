
import { nameCourse } from "../../Info/Info"

function ArrCourse(){
    const OneCourse = (props) =>{
        return(
            <div className="OneCourse"> {props.name}</div>
        )

    }

    return(

        <div className="ArrayCourse">
            {nameCourse.map((one)=>{
                return(
                <OneCourse name ={one} />)

            })}
        </div>
    )
}



export default function Main(){

    return(
     <ArrCourse />
    )
}