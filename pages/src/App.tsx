import Header from "components/Header/Header.tsx";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs.tsx";
import CategoryPage from "pages/CategoryPage/CategoryPage.tsx";
import CategorysListPage from "pages/CategorysListPage/CategorysListPage.tsx";
import {Route, Routes} from "react-router-dom";
import {Container, Row} from "reactstrap";
import HomePage from "pages/HomePage/HomePage.tsx";
import {useState} from "react";
import {T_Category} from "modules/types.ts";

function App() {

    const [categorys, setCategorys] = useState<T_Category[]>([])

    const [selectedCategory, setSelectedCategory] = useState<T_Category | null>(null)

    const [isMock, setIsMock] = useState(false);

    return (
        <>
            <Header/>
            <Container className="pt-4">
                <Row className="mb-3">
                    <Breadcrumbs selectedCategory={selectedCategory}/>
                </Row>
                <Row>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/categorys/" element={<CategorysListPage categorys={categorys} setCategorys={setCategorys} isMock={isMock} setIsMock={setIsMock} />} />
                        <Route path="/categorys/:id" element={<CategoryPage selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} isMock={isMock} setIsMock={setIsMock} />} />
                    </Routes>
                </Row>
            </Container>
        </>
    )
}

export default App
