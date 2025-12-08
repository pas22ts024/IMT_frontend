import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import {T_Category} from "src/modules/types.ts";
import CategoryCard from "components/CategoryCard";
import Cart from "components/Cart/Cart.tsx";
import {CategoryMocks} from "src/modules/mocks.ts";
import {FormEvent, useEffect, useState} from "react";
import "./styles.css"

const CategorysListPage = () => {
    const [categorys, setCategorys] = useState<T_Category[]>([])
    const [categoryName, setCategoryName] = useState<string>("")
    const [isMock, setIsMock] = useState(false);

    const fetchCategorysData = async () => {
        try {
            const response = await fetch(`/api/categorys/?category_name=${categoryName.toLowerCase()}`)
            const data = await response.json()
            setCategorys(data)
            setIsMock(false)
        } catch {
            createMocks()
        }
    }

    const fetchCartData = async () => {
        try {
            await fetch(`/api/imts/cart/`)
        } catch {
            createMocks()
        }
    }

    const createMocks = () => {
        setIsMock(true)
        setCategorys(CategoryMocks.filter(category => category.name.toLowerCase().includes(categoryName.toLowerCase())))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        if (isMock) {
            createMocks()
        } else {
            await fetchCategorysData()
        }
    }

    useEffect(() => {
        void fetchCategorysData()
        void fetchCartData()
    }, []);

    return (
        <Container>
            <Row className="mb-5">
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md="8">
                                <Input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Поиск..."></Input>
                            </Col>
                            <Col>
                                <Button color="primary" className="w-100 search-btn">Поиск</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col className="d-flex flex-row justify-content-end" md="6">
                    <Cart />
                </Col>
            </Row>
            <Row>
                {categorys?.map(category => (
                    <Col key={category.id} xs="4">
                        <CategoryCard category={category} isMock={isMock} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CategorysListPage
