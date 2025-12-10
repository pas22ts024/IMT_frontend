import * as React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {CardImg, Col, Container, Row} from "reactstrap";
import mockImage from "assets/mock.png";
import {T_Category} from "modules/types.ts";
import {CategoryMocks} from "modules/mocks.ts";

type Props = {
    selectedCategory: T_Category | null,
    setSelectedCategory: React.Dispatch<React.SetStateAction<T_Category | null>>,
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const CategoryPage = ({selectedCategory, setSelectedCategory, isMock, setIsMock}: Props) => {
    const { id } = useParams<{id: string}>();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/categorys/${id}`)
            const data = await response.json()
            setSelectedCategory(data)
        } catch {
            createMock()
        }
    }

    const createMock = () => {
        setIsMock(true)
        setSelectedCategory(CategoryMocks.find(category => category?.id == parseInt(id as string)) as T_Category)
    }

    useEffect(() => {
        if (!isMock) {
            fetchData()
        } else {
            createMock()
        }

        return () => setSelectedCategory(null)
    }, []);

    if (!selectedCategory) {
        return (
            <div>

            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md="6">
                    <CardImg src={isMock ? mockImage as string : selectedCategory.image} className="mb-3" />
                </Col>
                <Col md="6">
                    <h1 className="mb-3">{selectedCategory.name}</h1>
                    <p className="fs-5">Возраст: {selectedCategory.age}</p>
                    <p className="fs-5">Пол: {selectedCategory.sex} </p>
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryPage
