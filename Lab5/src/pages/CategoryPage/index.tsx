import * as React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {T_Category} from "src/modules/types.ts";
import {Col, Container, Row} from "reactstrap";
import {CategoryMocks} from "src/modules/mocks.ts";
import mockImage from "assets/mock.png";

type Props = {
    selectedCategory: T_Category | null,
    setSelectedCategory: React.Dispatch<React.SetStateAction<T_Category | null>>,
}

const CategoryPage = ({selectedCategory, setSelectedCategory}: Props) => {
    const [isMock, setIsMock] = useState(false);

    const { id } = useParams<{id: string}>();

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/categorys/${id}`)
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
            void fetchData()
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
                    <img
                        alt=""
                        src={isMock ? mockImage as string : selectedCategory.image}
                        className="w-100"
                    />
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
