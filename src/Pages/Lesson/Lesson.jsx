import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import InfoCourse from "../../Info/InfoModule.json";
import "./Lesson.scss"

export default  function Lesson(){
    const Info = JSON.parse(JSON.stringify(InfoCourse));
    const [searchParams, setSearchParams] = useSearchParams();
    const nameMod = searchParams.get("nameModule");
    const synth = window.speechSynthesis;
    return(
<<<<<<< Updated upstream
    <>
        <h2>Домашнее </h2>
        <p>
            text
        </p>
        <button> Изучено</button>
    </>)
=======
    <div className="Lesson">
        {
            Info.data.map((one)=>{
                if(one.name == nameMod){
                    localStorage.setItem(one.name,1);
                    localStorage.setItem(one.count, Number(localStorage.getItem(one.count))+1);
                    localStorage.setItem(one.name,1);
                    const utterance = new SpeechSynthesisUtterance(one.textModule);
                    return(
                    <div>
                        <h1>{one.name}</h1>
                        <button onClick={(e)=>{e.preventDefault();synth.speak(utterance);}}>Озвучить</button>
                        <button onClick={(e)=>{e.preventDefault();synth.cancel();}}>Остановить</button>
                        <h3 className="Text">{one.textModule}</h3>
                    </div>
                    )
                }
            })
        }
    </div>
    )
>>>>>>> Stashed changes
}