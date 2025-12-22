import {Imt, Imts} from "src/api/Api.ts";
import {Row} from "reactstrap";
import ImtCard from "components/ImtCard/ImtCard.tsx";

type Props = {
    imts:Imts[]
}

const ImtsTable = ({imts}:Props) => {
    return (
        <div>
            {imts.map((imt:Imt) => (
                <Row key={imt.id} className="d-flex justify-content-center mb-3">
                    <ImtCard imt={imt} />
                </Row>
            ))}
        </div>
    )
};

export default ImtsTable
