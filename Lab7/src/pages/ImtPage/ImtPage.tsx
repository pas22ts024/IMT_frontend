import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "store/store.ts";
import {
    deleteDraftImt,
    fetchImt,
    removeImt,
    sendDraftImt,
    updateImt
} from "store/slices/imtsSlice.ts";
import {Button, Col, Form, Row} from "reactstrap";
import {E_ImtStatus} from "modules/types.ts";
import {CategoryItem} from "src/api/Api.ts";
import CategoryCardImt from "components/CategoryCardImt/CategoryCardImt.tsx";
import {CustomDropdownBoolean} from "components/CustomDropdownBoolean/CustomDropdownBoolean.tsx";

const ImtPage = () => {
    const { id } = useParams<{id: string}>();

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {is_authenticated} = useAppSelector((state) => state.user)

    const imt = useAppSelector((state) => state.imts.imt)

    const [related, setRelated] = useState(imt?.related || 0)

    const [saveMM, setSaveMM] = useState<boolean>(false)

    useEffect(() => {
        if (!is_authenticated) {
            navigate("/")
        }
    }, [is_authenticated]);

    useEffect(() => {
        if (id && is_authenticated) {
            dispatch(fetchImt(id))
        }
        return () => {
            dispatch(removeImt())
        }
    }, []);

    useEffect(() => {
        setRelated(imt?.related || 0)
    }, [imt]);

    const sendImt = async (e:React.FormEvent) => {
        e.preventDefault()

        await saveImt()

        await dispatch(sendDraftImt())

        navigate("/imts/")
    }

    const saveImt = async (e?:React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault()

        const data = {
            related
        }

        await dispatch(updateImt(data))
        setSaveMM(value => !value)
    }

    const saveImtMM = () => {
        setSaveMM(value => !value)
    }

    const saveImtField = async () => {
        const data = {
            related
        }

        await dispatch(updateImt(data))
    }

    const deleteImt = async () => {
        await dispatch(deleteDraftImt())
        navigate("/categorys/")
    }

    if (!imt) {
        return (
            <div>

            </div>
        )
    }

    const isDraft = imt.status == E_ImtStatus.Draft

    return (
        <Form onSubmit={sendImt} className="pb-5">
            <h2 className="mb-5">{isDraft ? "Черновой заключение" : `Заключение №${id}` }</h2>
            <Row className="mb-5 fs-5 w-25">
                <CustomDropdownBoolean label="Являются ли пациенты родсвенниками?" selectedItem={related} setSelectedItem={setRelated} disabled={!isDraft}/>
            </Row>
            <Row className="mb-3 p-2">
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Картинка</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Название</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Пол</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Рост</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">ИМТ</h5>
                </Col>
                <Col md="2" className="d-flex justify-content-center">
                    <h5 className="text-center">Действие</h5>
                </Col>
            </Row>
            <Row>
                {imt.categorys && imt.categorys.length > 0 ? imt.categorys.map((category:CategoryItem) => (
                    <Row key={category.id} className="d-flex justify-content-center mb-3">
                        <CategoryCardImt category={category} showRemoveBtn={isDraft} editMM={isDraft} saveMM={saveMM} />
                    </Row>
                )) :
                    <h3 className="text-center">Список пуст</h3>
                }
            </Row>
            {isDraft &&
                <Row className="mt-5">
                    <Col className="d-flex gap-5 justify-content-center">
                        <Button color="success" className="fs-4" onClick={saveImt}>Сохранить</Button>
                        <Button color="success" className="fs-4" onClick={saveImtMM}>Сохранить м-м</Button>
                        <Button color="success" className="fs-4" onClick={saveImtField}>Сохранить родственность</Button>
                        <Button color="primary" className="fs-4" type="submit">Отправить</Button>
                        <Button color="danger" className="fs-4" onClick={deleteImt}>Удалить</Button>
                    </Col>
                </Row>
            }
        </Form>
    );
};

export default ImtPage
