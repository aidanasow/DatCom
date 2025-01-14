import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";

export const PaginationComponent = ({ count, onChange }) => {
    // if (count<1 || count===1) return null;
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
          "& .Mui-selected": {
            backgroundColor: "var(--color-primary)",
            color: "white",
            "&:hover": {
              backgroundColor: "var(--color-primary)",
            },
          },
          "& .MuiPaginationItem-previousNext": {
            color: "var(--color-primary)",
          },
        }}
      />
    </Box>
  );
};
