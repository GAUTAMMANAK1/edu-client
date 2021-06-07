import React from "react";
import { AppBar, Box, FormControl, IconButton, makeStyles, NativeSelect } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import GridOnIcon from "@material-ui/icons/GridOn";

const filterList = [
  "Web Development",
  "Android Dev",
  "AI",
  "ML",
  "Devops",
  "NextJS",
  "React",
  "Programming",
  "Android",
  "Kotlin",
  "C/C++",
  "Python",
];

function WishlistFilterBar() {
  const classes = useStyles();
  const [state, setState] = React.useState("all");

  const handleChange = (event) => {
    setState(event.target.value);
    console.log(event.target.value);
  };

  return (
    <AppBar position="static" className={classes.container}>
      <FormControl className={classes.formControl}>
        <FilterListIcon className={classes.filterIcon} />
        <NativeSelect className={classes.dropdown} value={state} onChange={handleChange}>
          <option value="" disabled>
            Filter
          </option>
          {filterList.map((items, index) => (
            <option key={index} value={items}>
              {items}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <Box flexGrow={1} />
      {[1, 2].map((items, index) => (
        <Box key={index}>
          <IconButton>
            <GridOnIcon />
          </IconButton>
        </Box>
      ))}
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50px",
    backgroundColor: "#F8F8F8",
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    borderRadius: "5px",
    alignItems: "center",
  },
  dropdown: {
    margin: theme.spacing(1),
    textTransform: "none",
    padding: theme.spacing(1),
    borderRadius: "5px",
    "&.MuiInput-underline:before": {
      display: "none",
    },
    "&.MuiInput-underline:after": {
      display: "none",
    },
  },
  filterIcon: {
    color: "#333",
    marginLeft: theme.spacing(2),
  },
  formControl: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "#fff",
    margin: 8,
    borderRadius: "5px",
    height: 50,
  },
}));
export default WishlistFilterBar;
