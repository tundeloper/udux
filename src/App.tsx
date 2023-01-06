// import 'bootstrap/dist/css/bootstrap.css'
import Auth from "./component/auth/auth"
import Live from "./component/live-stream/live"
import Gbedu from "./component/gbedu/gbedu"
import Faqs from "./component/Faqs/faqs"
import { Route, Routes } from "react-router-dom"
const App = () => {
    return<>
    <Routes>
        <Route path="/live-stream" element={<Live />}/>
        <Route path="/faqs" element={<Faqs />}/>
        <Route path="/gbedu" element={<Gbedu />}/>
        <Route path="/auth" element={<Auth />}/>
    </Routes>
    </>
}

export default App