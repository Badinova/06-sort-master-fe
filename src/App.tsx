import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Containers from "./pages/Containers";
import CreateContainerForm from "./components/CreateContainerForm";
import Items from "./pages/Items.tsx";
import CreateItemPage from "./pages/CreateItemPage.tsx";
import ItemDetailPage from "./pages/ItemDetailPage.tsx";
import Adverts from "./pages/Adverts.tsx";

function App() {
    return (
        <div>
            <nav></nav>
            <Layout>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/containers" element={<Containers/>}/>
                    <Route path="/container-form" element={<CreateContainerForm/>}/>
                    <Route path="/items" element={<Items/>}/>
                    {/*<Route path="/item-form/:containerId" element={<CreateItemPage />} />*/}
                    <Route path="/items/:id" element={<ItemDetailPage />} />
                    <Route path="/adverts" element={<Adverts/>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
