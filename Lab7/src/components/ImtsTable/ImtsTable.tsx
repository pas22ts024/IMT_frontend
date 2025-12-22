import {Imt, Imts} from "src/api/Api.ts";
import {Col, Row} from "reactstrap";
import ImtCard from "components/ImtCard/ImtCard.tsx";

type Props = {
    imts:Imts[]
}

const ImtsTable = ({imts}:Props) => {
    return (
        <div>
            <Row className="mb-3 p-2">
                <Col md="1" className="d-flex justify-content-center">
                    <h5 className="text-center">№</h5>
                </Col>
                <Col md="1" className="d-flex justify-content-center">
                    <h5 className="text-center">Статус</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Вычисленно</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Дата создания</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Дата формирования</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Дата завершения</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Действие</h5>
                </Col>
            </Row>
            {imts.map((imt:Imt) => (
                <Row key={imt.id} className="d-flex justify-content-center mb-3">
                    <ImtCard imt={imt} />
                </Row>
            ))}
        </div>
    )
};

export default ImtsTable
