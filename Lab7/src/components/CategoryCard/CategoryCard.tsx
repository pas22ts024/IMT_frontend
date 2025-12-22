import {Button, Card, CardBody, CardText, CardTitle, Col} from "reactstrap";
import {Link} from "react-router-dom";
import {useAppDispatch} from "store/store.ts";
import {addCategoryToImt} from "store/slices/categorysSlice.ts";
import {fetchCartData} from "store/slices/imtsSlice.ts";
import {CategoryItem} from "src/api/Api.ts";

type Props = {
    category: CategoryItem,
    showAddBtn?: boolean,
    showRemoveBtn?: boolean,
}

const CategoryCard = ({category,  showAddBtn=false}:Props) => {

    const dispatch = useAppDispatch()

    const handeAddToDraftImt = async () => {
        if (category) {
            await dispatch(addCategoryToImt(category.id))
            await dispatch(fetchCartData())
        }
    }

    return (
        <Card key={category.id} style={{width: '18rem' }}>
            <img
                alt=""
                src={category.image}
                style={{"height": "200px"}}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {category.name}
                </CardTitle>
                <CardText>
                    Пол: {category.sex} 
                </CardText>
                <Col className="d-flex justify-content-between">
                    <Link to={`/categorys/${category.id}`}>
                        <Button color="primary" type="button">
                            Открыть
                        </Button>
                    </Link>
                    {showAddBtn &&
                        <Button color="secondary" onClick={handeAddToDraftImt}>
                            Добавить
                        </Button>
                    }
                </Col>
            </CardBody>
        </Card>
    );
};

export default CategoryCard
