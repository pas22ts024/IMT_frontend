import {Route, Routes} from "react-router-dom";
import {Container, Row} from "reactstrap";
import "./styles.css"
import HomePage from "pages/HomePage/HomePage.tsx";
import LoginPage from "pages/LoginPage/LoginPage.tsx";
import RegisterPage from "pages/RegisterPage/RegisterPage.tsx";
import CategorysListPage from "pages/CategorysListPage/CategorysListPage.tsx";
import CategoryPage from "pages/CategoryPage/CategoryPage.tsx";
import ImtsPage from "pages/ImtsPage/ImtsPage.tsx";
import ImtPage from "pages/ImtPage/ImtPage.tsx";
import ProfilePage from "pages/ProfilePage/ProfilePage.tsx";
import Header from "components/Header/Header.tsx";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs.tsx";
import {useEffect, useState} from "react";
import {fetchUserInfo} from "store/slices/userSlice.ts";
import {useAppDispatch} from "store/store.ts";

function App() {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(fetchUserInfo())
            setIsLoading(false)
        }

        void fetchUser()
    }, []);

    if (isLoading) {
        return
    }

    return (
        <div>
            <Header />
            <Container className="pt-4">
                <Row className="mb-3">
                    <Breadcrumbs />
                </Row>
                <Row>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login/" element={<LoginPage />} />
                        <Route path="/register/" element={<RegisterPage />} />
                        <Route path="/categorys/" element={<CategorysListPage />} />
                        <Route path="/categorys/:id/" element={<CategoryPage />} />
                        <Route path="/imts/" element={<ImtsPage />} />
                        <Route path="/imts/:id/" element={<ImtPage />} />
                        <Route path="/profile/" element={<ProfilePage />} />
                    </Routes>
                </Row>
            </Container>
        </div>
    )
}

export default App
