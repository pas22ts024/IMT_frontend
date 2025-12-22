import {Button, Card, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {useEffect, useState} from "react";
import CustomInput from "components/CustomInput/CustomInput.tsx";
import {removeCategoryFromDraftImt, updateCategoryValue} from "store/slices/imtsSlice.ts";
import {CategoryItemSerializerWithCalc} from "src/api/Api.ts";

type Props = {
    category: CategoryItemSerializerWithCalc,
    showAddBtn?: boolean,
    showRemoveBtn?: boolean,
    editMM?: boolean,
    saveMM?: boolean,
}

const CategoryCardImt = ({category, showRemoveBtn=false, editMM=false, saveMM}:Props) => {

    const dispatch = useAppDispatch()

    const {is_superuser=false} = useAppSelector((state) => state.user)

    const [local_mmfield, setLocal_mmfield] = useState(category.weight)

    const handleRemoveFromDraftImt = async () => {
        await dispatch(removeCategoryFromDraftImt(category.id))
    }

    useEffect(() => {
        if (saveMM != null) {
            void updateValue()
        }
    }, [saveMM]);

    const updateValue = async () => {
        if (local_mmfield) {
            dispatch(updateCategoryValue({
                category_id: category.id,
                weight: local_mmfield
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
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CardTitle tag="h5">
                        {category.name}
                    </CardTitle>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CardText className="text-center">
                        {category.sex} 
                    </CardText>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CustomInput type="number" value={local_mmfield || 0} setValue={setLocal_mmfield} disabled={!editMM || is_superuser}/>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CustomInput type="number" value={category.factor || 0} disabled={true}/>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                    <Link to={`/categorys/${category.id}`}>
                        <Button color="primary" type="button">
                            Открыть
                        </Button>
                    </Link>
                    {showRemoveBtn &&
                        <Button color="danger" onClick={handleRemoveFromDraftImt}>
                            Удалить
                        </Button>
                    }
                </Col>
            </Row>
        </Card>
    );
};

export default CategoryCardImt
