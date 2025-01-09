import {Box, Modal} from "@mui/material";
import {CloseIcon} from "assets/index";
import {Typography} from "ui/index";
import classes from "./ModalComponent.module.scss";
import {useMediaQuery} from "utils/helpers/useMedia.js";

export const ModalComponent = ({open, closeModal, student}) => {
    const isSmall=useMediaQuery("(max-width: 900px)");

    return (
        <Modal open={open} onClose={closeModal}>
            <div className={classes.box}>
                <div className={classes.boxInner}>
                    <div className={classes.boxInnerLeft}>
                            <img src={student.image} alt={student.title}/>

                    </div>
                    <div className={classes.boxInnerRight}>
                        <Typography variant="h3" weight="semiBold">
                            {student.title}
                        </Typography>
                        <Typography variant="h5" weight="regular" className={classes.scroll}>
                            {student.description}
                        </Typography>
                    </div>
                </div>
                <Box
                    component="button"
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                    onClick={closeModal}
                >
                    <CloseIcon size={isSmall? 28: 32}/>
                </Box>
            </div>
        </Modal>
    );
};
