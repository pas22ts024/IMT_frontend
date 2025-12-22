import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {Imts} from "src/api/Api.ts";
import {formatDate} from "utils/utils.ts";
import {Link} from "react-router-dom";
import {acceptImt, fetchImts, rejectImt} from "store/slices/imtsSlice.ts";
import {E_ImtStatus} from "modules/types.ts";
import {useAppDispatch, useAppSelector} from "store/store.ts";

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
    const {is_superuser} = useAppSelector((state) => state.user)

    const dispatch = useAppDispatch()

    const handleAcceptImt = async () => {
        await dispatch(acceptImt(imt.id.toString()))
        await dispatch(fetchImts())
    }

    const handleRejectImt = async () => {
        await dispatch(rejectImt(imt.id.toString()))
        await dispatch(fetchImts())
    }

    const isInWork = imt.status == E_ImtStatus.InWork

    if (is_superuser) {
        return (
            <Card>
                <Row>
                    <Col md={12}>
                        <Row className="p-2">
                            <CardTitle tag="h5">id: {imt.id}</CardTitle>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row className="p-2">
                            <Col md={1} className="d-flex justify-content-center align-items-center">
                                <Row>
                                    <Col md={12}>
                                        <CardTitle tag="h5" className="text-center">
                                            {STATUSES[imt.status as unknown as number]}
                                        </CardTitle>
                                    </Col>
                                    <Col md={12}>
                                        <CardText className="text-center">Статус</CardText>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={2} className="d-flex justify-content-center align-items-center">
                                {imt.status === 3 &&
                                    <Row>
                                        <Col md={12}>
                                            <CardTitle tag="h5" className="text-center">
                                                {imt.categorys_calculated} / {imt.categorys_count}
                                            </CardTitle>
                                        </Col>
                                        <Col md={12}>
                                            <CardText className="text-center">Расчитано</CardText>
                                        </Col>
                                    </Row>
                                }
                            </Col>
                            <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                                <Row>
                                    <Col md={12}>
                                        <CardTitle tag="h5" className="text-center">
                                            {formatDate(imt.date_formation as string, true)}
                                        </CardTitle>
                                    </Col>
                                    <Col md={12}>
                                        <CardText className="text-center">Дата формирования</CardText>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                                {imt.date_complete &&
                                    <Row>
                                        <Col md={12}>
                                            <CardTitle tag="h5" className="text-center">
                                                {formatDate(imt.date_complete as string, true)}
                                            </CardTitle>
                                        </Col>
                                        <Col md={12}>
                                            <CardText className="text-center">Дата завершения</CardText>
                                        </Col>
                                    </Row>
                                }
                            </Col>
                            <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                                <Link to={`/imts/${imt.id}`}>
                                    <Button color="primary" type="button">
                                        Открыть
                                    </Button>
                                </Link>
                            </Col>
                            <Col md={1} className="d-flex justify-content-center align-items-center gap-3">
                                <Row>
                                    <Col md={12}>
                                        <CardTitle tag="h5" className="text-center">
                                            {imt.owner}
                                        </CardTitle>
                                    </Col>
                                    <Col md={12}>
                                        Создатель
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1} className="d-flex justify-content-center align-items-center gap-3">
                                {isInWork &&
                                    <Row>
                                        <Button color="success" type="button" onClick={handleAcceptImt}>
                                            Завершить
                                        </Button>
                                    </Row>
                                }
                            </Col>
                            <Col md={1} className="d-flex justify-content-center align-items-center gap-3">
                                {isInWork &&
                                    <Button color="danger" type="button" onClick={handleRejectImt}>
                                        Отклонить
                                    </Button>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        )
    }

    return (
        <Card>
            <Row>
                <Col md={12}>
                    <Row className="p-2">
                        <CardTitle tag="h5">id: {imt.id}</CardTitle>
                    </Row>
                </Col>
                <Col md={12}>
                    <Row className="p-2">
                        <Col md={2} className="d-flex justify-content-center align-items-center">
                            <Row>
                                <Col md={12}>
                                    <CardTitle tag="h5" className="text-center">
                                        {STATUSES[imt.status as unknown as number]}
                                    </CardTitle>
                                </Col>
                                <Col md={12}>
                                    <CardText className="text-center">Статус</CardText>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="d-flex justify-content-center align-items-center">
                            {imt.status === 3 &&
                                <Row>
                                    <Col md={12}>
                                        <CardTitle tag="h5" className="text-center">
                                            {imt.categorys_calculated} / {imt.categorys_count}
                                        </CardTitle>
                                    </Col>
                                    <Col md={12}>
                                        <CardText className="text-center">Расчитано</CardText>
                                    </Col>
                                </Row>
                            }
                        </Col>
                        <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                            <Row>
                                <Col md={12}>
                                    <CardTitle tag="h5" className="text-center">
                                        {formatDate(imt.date_created as string, true)}
                                    </CardTitle>
                                </Col>
                                <Col md={12}>
                                    <CardText className="text-center">Дата создания</CardText>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                            <Row>
                                <Col md={12}>
                                    <CardTitle tag="h5" className="text-center">
                                        {formatDate(imt.date_formation as string, true)}
                                    </CardTitle>
                                </Col>
                                <Col md={12}>
                                    <CardText className="text-center">Дата формирования</CardText>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                            {imt.date_complete &&
                                <Row>
                                    <Col md={12}>
                                        <CardTitle tag="h5" className="text-center">
                                            {formatDate(imt.date_complete as string, true)}
                                        </CardTitle>
                                    </Col>
                                    <Col md={12}>
                                        <CardText className="text-center">Дата завершения</CardText>
                                    </Col>
                                </Row>
                            }
                        </Col>
                        <Col md={2} className="d-flex justify-content-center align-items-center gap-3">
                            <Link to={`/imts/${imt.id}`}>
                                <Button color="primary" type="button">
                                    Открыть
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default ImtCard
