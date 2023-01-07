import Auth from "./component/auth/auth"
import Live from "./component/live-stream/live"
import Gbedu from "./component/gbedu/gbedu"
import Faqs from "./component/Faqs/faqs"
import Home from "./component/Home/home"
import { Route, Routes } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"
import audio from './burna-mix.mp4'
const App = () => {
    return<>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/live-stream" element={<Live />}/>
        <Route path="/faqs" element={<Faqs />}/>
        <Route path="/gbedu" element={<Gbedu />}/>
        <Route path="/auth" element={<Auth />}/>
    </Routes>
    <audio src={audio} controls autoPlay loop></audio>
    <ReactAudioPlayer src={audio} autoPlay controls/>
    </>
}

export default App