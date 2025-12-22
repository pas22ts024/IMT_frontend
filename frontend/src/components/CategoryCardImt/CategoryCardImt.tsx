import {Button, Card, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {useState} from "react";
import CustomInput from "components/CustomInput/CustomInput.tsx";
import {removeCategoryFromDraftImt, updateCategoryValue} from "store/slices/imtsSlice.ts";
import {CategoryItemSerializerWithCalc} from "src/api/Api.ts";
import {formatfactor} from "utils/utils.ts";

type Props = {
    category: CategoryItemSerializerWithCalc,
    isInDraftImtPage?: boolean
}

const CategoryCardImt = ({category, isInDraftImtPage=false}:Props) => {

    const dispatch = useAppDispatch()

    const {is_superuser=false} = useAppSelector((state) => state.user)

    const [local_weight, setLocal_weight] = useState(category.weight)
    const [local_height, setLocal_height] = useState(category.height)

    const handleRemoveFromDraftImt = async () => {
        await dispatch(removeCategoryFromDraftImt(category.id))
    }

    const handleSavemmfield = async () => {
        if (local_weight && local_height) {
            dispatch(updateCategoryValue({
                category_id: category.id,
                weight: local_weight,
                height: local_height
            }))
        }
    }

    return (
        <Card key={category.id}>
            <Row className="p-2">
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CardImg
                        src={category.image}
                        style={{"width": "100%"}}
                    />
                </Col>
                <Col md={1} className="d-flex justify-content-center align-items-center">
                    <CardTitle tag="h5">
                        {category.name}
                    </CardTitle>
                </Col>
                <Col md={1} className="d-flex justify-content-center align-items-center">
                    <CardText className="text-center">
                        {category.sex} 
                    </CardText>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CustomInput type="number" value={local_weight || 0} setValue={setLocal_weight} disabled={!isInDraftImtPage || is_superuser}/>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CustomInput type="number" value={local_height || 0} setValue={setLocal_height} disabled={!isInDraftImtPage || is_superuser}/>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CustomInput type="text" value={formatfactor(category.factor)} disabled={true}/>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                    {!isInDraftImtPage &&
                        <Link to={`/categorys/${category.id}`}>
                            <Button color="primary" type="button">
                                Открыть
                            </Button>
                        </Link>
                    }
                    {isInDraftImtPage &&
                        <Button color="danger" onClick={handleRemoveFromDraftImt}>
                            Удалить
                        </Button>
                    }
                    {isInDraftImtPage &&
                        <Button color="success" onClick={handleSavemmfield}>
                            Сохранить
                        </Button>
                    }
                </Col>
            </Row>
        </Card>
    );
};

export default CategoryCardImt
