import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {Imts} from "src/api/Api.ts";
import {formatDate} from "utils/utils.ts";
import {Link} from "react-router-dom";

type Props = {
    imt: Imts
}

const STATUSES:Record<number, string> = {
    1: "Введен",
    2: "В работе",
    3: "Завершен",
    4: "Отменён",
    5: "Удалён"
}

const ImtCard = ({imt}:Props) => {
    return (
        <Card>
            <Row className="p-2">
                <Col md={1} className="d-flex justify-content-center align-items-center">
                    <CardText>{imt.id}</CardText>
                </Col>
                <Col md={1} className="d-flex justify-content-center align-items-center">
                    <CardTitle tag="h5">
                        {STATUSES[imt.status as unknown as number]}
                    </CardTitle>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    {imt.status === 3 &&
                        <CardText className="text-center">
                            {imt.categorys_calculated} / {imt.categorys_count}
                        </CardText>
                    }
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center">
                    <CardText className="text-center">
                        {formatDate(imt.date_created as string)}
                    </CardText>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                    <CardText className="text-center">
                        {formatDate(imt.date_formation as string)}
                    </CardText>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                    <CardText className="text-center">
                        {formatDate(imt.date_complete as string)}
                    </CardText>
                </Col>
                <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                    <Link to={`/imts/${imt.id}`}>
                        <Button color="primary" type="button">
                            Открыть
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Card>
    )
}

export default ImtCard
