import React from 'react';
import { NavLink} from 'react-router-dom';
import {generateBreadcrumbs} from "utils/constants/Constants.jsx";
import {Container, Typography} from "ui/index";
import {ArrowRight} from "assets/icons/ArrowRight.jsx";
import classes from "./Breadcrumbs.module.scss";
import {useMediaQuery} from "utils/helpers/useMedia.js";
import {useTranslation} from "react-i18next";

const Breadcrumbs = ({ breadcrumbKey, thirdElement }) => {
    const { t } = useTranslation();
    const breadcrumbs = generateBreadcrumbs(breadcrumbKey, thirdElement);
    const isDesktop=useMediaQuery("(min-width: 900px)");

    if (!isDesktop) return null;
    return (
        <Container>
            <nav aria-label="breadcrumbs">
                <ul className={classes.breadcrumbs}>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <li key={index}>
                            {breadcrumb.route ? (
                                <NavLink className={classes.link} to={breadcrumb.route}>
                                    <Typography truncate={30} variant={"h6"} color={breadcrumb.isActive? " ":"gray2"}>
                                        {t(breadcrumb.text)}
                                    </Typography>
                                    {index < breadcrumbs.length - 1 && (
                                        <ArrowRight color={"#828282"} size={14} />
                                    )}
                                </NavLink>
                            ) : (
                                <Typography truncate={30} variant={"h6"} color={breadcrumb.isActive? "":"gray2"}>
                                    {t(breadcrumb.text)}
                                </Typography>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </Container>
    );
};

export default Breadcrumbs;
