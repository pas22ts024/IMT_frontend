import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {T_Category} from "modules/types.ts";
import "./styles.css"

interface Props {
    selectedCategory: T_Category | null
}

const Breadcrumbs = ({ selectedCategory }: Props) => {

    const location = useLocation()

    return (
        <Breadcrumb className="fs-5">
			{location.pathname == "/" &&
				<BreadcrumbItem>
					<Link to="/">
						Главная
					</Link>
				</BreadcrumbItem>
			}
			{location.pathname.includes("/categorys") &&
                <BreadcrumbItem active>
                    <Link to="/categorys">
						Пациенты
                    </Link>
                </BreadcrumbItem>
			}
            {selectedCategory &&
                <BreadcrumbItem active>
                    <Link to={location.pathname}>
                        { selectedCategory.name }
                    </Link>
                </BreadcrumbItem>
            }
			<BreadcrumbItem />
        </Breadcrumb>
    );
};

export default Breadcrumbs