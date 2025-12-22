import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Col, Container, Row} from "reactstrap";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {fetchCategory, removeSelectedCategory} from "store/slices/categorysSlice.ts";

const CategoryPage = () => {
    const { id } = useParams<{id: string}>();

    const dispatch = useAppDispatch()

    const {category} = useAppSelector((state) => state.categorys)

    useEffect(() => {
        id && dispatch(fetchCategory(id))
        return () => {
            dispatch(removeSelectedCategory())
        }
    }, []);

    if (!category) {
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
                        src={category.image}
                        className="w-100"
                    />
                </Col>
                <Col md="6">
                    <h1 className="mb-3">{category.name}</h1>
                    <p className="fs-5">Пол: {category.sex} </p>
                </Col>
            </Row>
        </Container>
    );
};

export default CategoryPage
