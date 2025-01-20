import { useState } from "react";
import classes from "./Universities.module.scss";
import {Typography, Container, CustomCard, Button, Breadcrumbs} from "ui/index";
import { useUniversitiesStore } from "./store/useUniversitiesStore";
import { PaginationComponent } from "modules/index";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { Search } from "assets/index";
import { Loader } from "pages/Loader/Loader.jsx";
import { useTranslation } from "react-i18next";
import {UseSize} from "utils/helpers/useSize.jsx";

export const Universities = () => {
    const { t } = useTranslation();
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [state, setState] = useState({
        search: "",
        country: "",
        programm: "",
    });
    const [tempSearch, setTempSearch] = useState("");
    const { tablet}=UseSize();
    let limit = 12;
    if (tablet) limit=6;

    const { universities, countryList, programmList, count, loading } =
        useUniversitiesStore(offset, limit, state);

    const onChange = (_, page) => {
        setOffset((page - 1) * limit);
        setCurrentPage(page);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSearchChange = (e) => {
        setTempSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setState((prevState) => ({
            ...prevState,
            search: tempSearch,
        }));
    };
    const clearInput=()=>{
        setTempSearch("");
        setState((prevState) => ({
            ...prevState,
            search: " ",
        }));
    }

    if (loading) return <Loader />;
    return (
        <>
            <Breadcrumbs breadcrumbKey={"universities"} />
            <div className={classes.wrapper}>
                <Container>
                    <Typography variant="heading">{t("titles.universities")} </Typography>
                    <div className={classes.searchBar}>
                        <form onSubmit={handleSearchSubmit}>
                            <TextField
                                name="search"
                                label={t("search.search")}
                                variant="outlined"
                                value={tempSearch}
                                onChange={handleSearchChange}
                                sx={{
                                    textAlign: "start",
                                    width: { xs: "100%", sm: "420px" },
                                    "& .MuiOutlinedInput-root": {
                                        height: "45px",
                                        borderRadius: "8px",
                                        background: "var(--color-white)",
                                        outline: "none",
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "10px",
                                    },
                                    "& .MuiInputLabel-root": {
                                        lineHeight: "1.2",
                                        top: "-4px",
                                    },
                                    "& .MuiInputLabel-shrink": {
                                        top: "0px",
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <div className={classes.icon}>
                                                    {
                                                        tempSearch!==""?
                                                            <div onClick={clearInput}
                                                                    style={{cursor: "pointer"}}>&#10006;</div>
                                                            :  <Search/>
                                                    }
                                                </div>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </form>
                        <TextField
                            name="country"
                            select
                            value={state.country}
                            onChange={handleFilterChange}
                            sx={{
                                width: { xs: "45%", sm: "120px" },
                                "& .MuiOutlinedInput-root": {
                                    height: "45px",
                                    borderRadius: "8px",
                                    background: "var(--color-white)",
                                    outline: "none",
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "10px",
                                },
                                "& .MuiInputLabel-root": {
                                    lineHeight: "1.2",
                                    top: "-4px",
                                },
                                "& .MuiInputLabel-shrink": {
                                    top: "0px",
                                },
                            }}
                            SelectProps={{
                                displayEmpty: true,
                            }}
                        >
                            <MenuItem value="" disabled>
                                {t("titles.country")}
                            </MenuItem>
                            {countryList.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.title}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            name="programm"
                            select
                            value={state.programm}
                            onChange={handleFilterChange}
                            sx={{
                                width: { xs: "45%", sm: "230px" },
                                "& .MuiOutlinedInput-root": {
                                    height: "45px",
                                    borderRadius: "8px",
                                    background: "var(--color-white)",
                                    outline: "none",
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: "10px",
                                },
                                "& .MuiInputLabel-root": {
                                    lineHeight: "1.2",
                                    top: "-4px",
                                },
                                "& .MuiInputLabel-shrink": {
                                    top: "0px",
                                },
                            }}
                            SelectProps={{
                                displayEmpty: true,
                            }}
                        >
                            <MenuItem value="" disabled>
                                {t("search.eduProgram")}
                            </MenuItem>
                            {programmList.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.title}
                                </MenuItem>
                            ))}
                        </TextField>
                        <button className={classes.clearButton}  onClick={()=>{setState({
                            search: "",
                            country: "",
                            programm: "",
                        })}}>
                            <Typography > x</Typography>
                        </button>
                    </div>
                    <div className={classes.cardWrapper}>
                        {universities.length > 0 ? (
                            universities.map((item, key) => (
                                <CustomCard
                                    key={key}
                                    variant="students"
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    link={`/universities/${item.id}`}
                                />
                            ))
                        ) : (
                            <Typography>{t("titles.noData")}</Typography>
                        )}
                    </div>
                    <PaginationComponent page={currentPage} count={count} onChange={onChange} />
                </Container>
            </div>
        </>
    );
};
