import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";

export const PaginationComponent = ({ count, onChange, page }) => {
    if (count < 1 || count === 1) return null;
    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
            }}
        >
            <Pagination
                count={count}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={onChange}
                size="large"
                sx={{
                    textAlign: "center",
                    "& .MuiPaginationItem-root": {
                        color: "var(--color-black)",
                        border: "1px solid var(--color-primary)",
                        "&:hover": {
                            backgroundColor: "var(--color-primary)",
                            color: "var(--color-white)",
                        },
                    },
                    ".Mui-selected": {
                        backgroundColor: "#02468d",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "var(--color-primary)",
                        },
                    },
                    ".css-39f4bj-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
                        backgroundColor: "var(--color-primary)"
                    },
                    "& .MuiPaginationItem-previousNext": {
                        color: "var(--color-primary)",
                    },
                }}
            />
        </Box>
    );
};
