import { useState } from "react";
import classes from "./Universities.module.scss";
import { Typography, Container, CustomCard } from "ui/index";
import { useUniversitiesStore } from "./store/useUniversitiesStore";
import { PaginationComponent } from "modules/PaginationComponent/PaginationComponent";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { Search } from "assets/index";
import Breadcrumbs from "ui/Breadcrumbs/Breadcrumbs.jsx";
import {Loader} from "pages/Loader/Loader.jsx";
import {useTranslation} from "react-i18next";

export const Universities = () => {
    const {t}=useTranslation();
  const [offset, setOffset] = useState(0);
  const [state, setState] = useState({
    search: "",
    country: "",
    programm: "",
  });
  const limit = 12;

  const { universities, countryList, programmList, count, loading } =
    useUniversitiesStore(offset, limit, state);

  const onChange = (_, page) => {
    setOffset((page - 1) * limit);
  };
    console.log(count)
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
    if (loading) return <Loader/>
  return (
      <>
          <Breadcrumbs breadcrumbKey={"universities"}/>
          <div className={classes.wrapper}>
              <Container>
                  <Typography variant="heading">{t("titles.universities")} </Typography>
                  <div className={classes.searchBar}>
                      <TextField
                          name="search"
                          label={t("search.search")}
                          variant="outlined"
                          value={state.search}
                          onChange={handleInputChange}
                          sx={{
                              textAlign: "start",
                              width: {xs: "100%", sm: "420px"},
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
                                              <Search/>
                                          </div>
                                      </InputAdornment>
                                  ),
                              },
                          }}
                      />

                      <TextField
                          name="country"
                          label={t("search.country")}
                          select
                          defaultValue=""
                          value={state.country}
                          onChange={handleInputChange}
                          sx={{
                              width: {xs: "45%", sm: "120px"},
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
                      >
                          {countryList.map((option) => (
                              <MenuItem key={option.id} value={option.id}>
                                  {option.title}
                              </MenuItem>
                          ))}
                      </TextField>

                      <TextField
                          name="programm"
                          label={t("search.eduProgram")}
                          select
                          defaultValue=""
                          value={state.programm}
                          onChange={handleInputChange}
                          sx={{
                              width: {xs: "45%", sm: "230px"},
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
                      >
                          {programmList.map((option) => (
                              <MenuItem key={option.id} value={option.id}>
                                  {option.title}
                              </MenuItem>
                          ))}
                      </TextField>
                  </div>
                  <div className={classes.cardWrapper}>
                      {universities.length>0? universities.map((item, key) => (
                          <CustomCard
                              key={key}
                              variant="students"
                              title={item.title}
                              image={item.image}
                              description={item.description}
                              isUni
                              link={`/universities/${item.id}`}
                          />
                      )) : <Typography>{t("titles.noData")}</Typography>}
                  </div>

                  <PaginationComponent count={count} onChange={onChange}/>
              </Container>
          </div>
      </>

  );
};
