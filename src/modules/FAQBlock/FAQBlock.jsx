import classes from "./FAQBlock.module.scss";
import { Typography } from "ui/index";
import { PlusIcon } from "assets/index";
import { useFAQBlockStore } from "./store/useFAQBlockStore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useMediaQuery } from "utils/helpers/useMedia.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const FAQBlock = () => {
    const { t } = useTranslation();
    const { questions } = useFAQBlockStore();
    const isSmall = useMediaQuery("(max-width: 900px)");

    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <>
            <Typography variant="heading">{t("titles.questions")}</Typography>
            <div className={classes.list}>
                {questions.map((data, index) => (
                    <Accordion
                        square
                        key={index}
                        disableGutters
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                        sx={{
                            border: "none",
                            outline: "none",
                            mb: 3,
                            boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
                            borderRadius: "20px",
                            background: "var(--color-white)",
                            "&:before": {
                                display: "none",
                            },
                        }}
                    >
                        <AccordionSummary
                            className={classes.accordion}
                            expandIcon={<PlusIcon size={isSmall ? 24 : 30} />}
                            sx={{
                                m: 0,
                                "& .MuiAccordionSummary-content": {
                                    margin: 0,
                                    "&.Mui-expanded": {
                                        margin: 0,
                                    },
                                },
                            }}
                        >
                            <Typography variant="h4" weight="bold">
                                {data.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="h5">{data.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </>
    );
};
