import { Route, Routes } from "react-router-dom";
import Lesson from "../Pages/Lesson/Lesson";
import Main, { Input } from "../Pages/Main/Main";




export default function RouterLocation(){

    return(
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/lesson/*" element={<Lesson />}/>
        </Routes>
    )}
export  function RouterLoc(){

        return(
            <Routes>
                <Route path="/" element={<Input />}/>

            </Routes>
        )}