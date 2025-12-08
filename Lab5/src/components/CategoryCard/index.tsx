import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import mockImage from "assets/mock.png";
import {Link} from "react-router-dom";
import {T_Category} from "modules/types.ts";

interface CategoryCardProps {
    category: T_Category,
    isMock: boolean
}

const CategoryCard = ({category, isMock}: CategoryCardProps) => {
    return (
        <Card key={category.id} style={{width: '18rem', margin: "0 auto 50px", height: "calc(100% - 50px)" }}>
            <CardImg
                src={isMock ? mockImage as string : category.image}
                style={{"height": "200px"}}
            />
            <CardBody className="d-flex flex-column justify-content-between">
                <CardTitle tag="h5">
                    {category.name}
                </CardTitle>
                <CardText>
                    Пол: {category.sex} 
                </CardText>
                <Link to={`/categorys/${category.id}`}>
                    <Button color="primary">
                        Открыть
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default CategoryCard
