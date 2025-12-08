import {useState} from "react";
import Header from "components/Header";
import Breadcrumbs from "components/Breadcrumbs";
import CategoryPage from "pages/CategoryPage";
import CategorysListPage from "pages/CategorysListPage";
import {Route, Routes} from "react-router-dom";
import {T_Category} from "src/modules/types.ts";
import {Container, Row} from "reactstrap";
import HomePage from "pages/HomePage";
import "./styles.css"

function App() {

    const [selectedCategory, setSelectedCategory] = useState<T_Category | null>(null)

    return (
        <div>
            <Header/>
            <Container className="pt-4">
                <Row className="mb-3">
                    <Breadcrumbs selectedCategory={selectedCategory} />
                </Row>
                <Row>
                    <Routes>
						<Route path="/" element={<HomePage />} />
                        <Route path="/categorys/" element={<CategorysListPage />} />
                        <Route path="/categorys/:id" element={<CategoryPage selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} />
                    </Routes>
                </Row>
            </Container>
        </div>
    )
}

export default App
