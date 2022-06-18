import {Routes, Route, useLocation} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

import './App.scss';

import {useAppSelector} from "./store/redux-hooks";

export const LocationDisplay = () => {
    const location = useLocation()

    return <div data-testid="location-display">{location.pathname}</div>
}

function App() {

    const users = useAppSelector(state => state.crud);

    return (
        <div className={"App"}>
            <div className={"container"}>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route
                            index
                            element={<Home/>}
                        />
                        <Route
                            path={"/contacts"}
                            element={<Contacts users={users} />}
                        />
                        <Route
                            path={"/about"}
                            element={<About/>}/>
                    </Route>
                    <Route
                        path={"*"}
                        element={<NotFound/>}
                    />
                </Routes>
                <LocationDisplay />
            </div>
        </div>
    );
}

export default App;
