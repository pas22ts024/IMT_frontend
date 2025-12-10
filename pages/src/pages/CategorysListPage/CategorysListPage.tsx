import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import CategoryCard from "components/CategoryCard/CategoryCard.tsx";
import {ChangeEvent, FormEvent, useEffect} from "react";
import * as React from "react";
import {useAppSelector} from "src/store/store.ts";
import {updateCategoryName} from "src/store/slices/categorysSlice.ts";
import {T_Category} from "modules/types.ts";
import {CategoryMocks} from "modules/mocks.ts";
import {useDispatch} from "react-redux";
import "./styles.css"
import Cart from "components/Cart/Cart.tsx";

type Props = {
    categorys: T_Category[],
    setCategorys: React.Dispatch<React.SetStateAction<T_Category[]>>
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const CategorysListPage = ({categorys, setCategorys, isMock, setIsMock}:Props) => {

    const dispatch = useDispatch()

    const {category_name} = useAppSelector((state) => state.categorys)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(updateCategoryName(e.target.value))
    }

    const createMocks = () => {
        setIsMock(true)
        setCategorys(CategoryMocks.filter(category => category.name.toLowerCase().includes(category_name.toLowerCase())))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        await fetchCategorys()
    }

    const fetchCategorys = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/categorys/?category_name=${category_name.toLowerCase()}`)
            const data = await response.json()
            setCategorys(data)
            setIsMock(false)
        } catch {
            createMocks()
        }
    }

    const fetchCartData = async () => {
        try {
            await fetch(`http://localhost:8000/api/imts/cart/`)
        } catch {
            createMocks()
        }
    }

    useEffect(() => {
        void fetchCategorys()
        void fetchCartData()
        return setCategorys([])
    }, []);

    return (
        <Container>
            <Row className="mb-5">
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs="8">
                                <Input value={category_name} onChange={handleChange} placeholder="Поиск..."></Input>
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
                    <Col key={category.id} sm="12" md="6" lg="4">
                        <CategoryCard category={category} isMock={isMock} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CategorysListPage
