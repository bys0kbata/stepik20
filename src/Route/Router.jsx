import { Route, Routes } from "react-router-dom";
import Lesson from "../Pages/Lesson/Lesson";
import Main from "../Pages/Main/Main";

export default function RouterLocation(){
    return(
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/lesson/*" element={<Lesson />}/>
        </Routes>
    )
}