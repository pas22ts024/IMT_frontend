import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import React, {ChangeEvent, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {fetchCategorys, updateCategoryName} from "store/slices/categorysSlice.ts";
import CategoryCard from "components/CategoryCard/CategoryCard.tsx";
import Cart from "components/Cart/Cart.tsx";
import {fetchCartData} from "store/slices/imtsSlice.ts";

const CategorysListPage = () => {

    const dispatch = useAppDispatch()

    const {categorys, category_name} = useAppSelector((state) => state.categorys)

    const {is_authenticated, is_superuser} = useAppSelector((state) => state.user)

    const {draft_imt_id, categorys_count} = useAppSelector((state) => state.imts)

    const hasDraft = draft_imt_id !== 0

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(updateCategoryName(e.target.value))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(fetchCategorys())
    }

    useEffect(() => {
        dispatch(fetchCategorys())
        if (is_authenticated) {
            dispatch(fetchCartData())
        }
    }, [])

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
                {is_authenticated && !is_superuser &&
                    <Col className="d-flex flex-row justify-content-end" md="6">
                        <Cart isActive={hasDraft} draft_imt_id={draft_imt_id} categorys_count={categorys_count} />
                    </Col>
                }
            </Row>
            <Row className="mt-5 d-flex">
                {categorys?.map(category => (
                    <Col key={category.id} className="mb-5 d-flex justify-content-center" sm="12" md="6" lg="4">
                        <CategoryCard category={category} showAddBtn={is_authenticated && !is_superuser} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CategorysListPage
