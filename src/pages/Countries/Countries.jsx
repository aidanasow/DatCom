import {useState} from "react";
import classes from "./Countries.module.scss";
import {Typography, Container, CustomCard} from "ui/index";
import {useCountriesStore} from "./store/useCountriesStore";
import {PaginationComponent} from "modules/PaginationComponent/PaginationComponent";
import Breadcrumbs from "ui/Breadcrumbs/Breadcrumbs.jsx";
import {Loader} from "pages/Loader/Loader.jsx";
import {useTranslation} from "react-i18next";

export const Countries = () => {
    const {t} = useTranslation();
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 8;

    const {countries, count, loading} = useCountriesStore(offset, limit);

    const onChange = (_, page) => {
        setOffset((page - 1) * limit);
        setCurrentPage(page);
    };
    if (loading) return <Loader/>

    return (
        <>
            <Breadcrumbs breadcrumbKey={"countries"}/>
            <div className={classes.wrapper}>
                <Container>
                    <Typography variant="heading">{t("nav.countries")}</Typography>
                    <div className={classes.cardWrapper}>
                        {countries.map((item, key) => (
                            <CustomCard
                                key={key}
                                variant="country"
                                title={item.title}
                                image={item.image}
                                description={item.description}
                                link={`/countries/${item.id}`}
                            />
                        ))}
                    </div>

                    <PaginationComponent page={currentPage} count={count} onChange={onChange}/>
                </Container>
            </div>
        </>

    );
};
