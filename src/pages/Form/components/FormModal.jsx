import React from 'react';
import {Box, Modal} from "@mui/material";
import {Typography} from "ui/Typography/Typography.jsx";
import classes from "pages/Form/Form.module.scss";
import {Button} from "ui/Button/Button.jsx";
import {t} from "i18next";
import {Link} from "react-router-dom";
import {PATHS} from "utils/constants/Constants.jsx";

const FormModal = ({open, setOpen}) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "30%",
                    minWidth: "300px",
                    borderRadius: "20px",
                    background: "var(--color-white)",
                    border: "none",
                    outline: "none",
                    p: 5,
                    textAlign: "center",
                }}
            >
                <Box component="div">
                    <Typography
                        variant="h5"
                        weight="semiBold"
                        className={classes.modalTitle}
                    >
                        {t("titles.modal")}
                    </Typography>
                    <Button className={classes.modalBtn}>
                        <Link to={PATHS.home}>
                            <Typography variant="h5" weight="semiBold">
                                {t("buttonsText.goToHome")}
                            </Typography>
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default FormModal;