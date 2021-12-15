import React from "react";
import { Grid, GridItem } from "fronton-react";
import Header from "../../Elements/Header/Header";
import style from "./MainPage.module.scss";

const MainPage = () => {
  let inputText = document.getElementById("inputTest");
  console.log(inputText);

  return (
    <Grid areas={["header header header", "main main main"]} gap="space-100">
      <GridItem className={style.header} area="header">
        <Header />
      </GridItem>
      <GridItem className={style.main} area="main" />
    </Grid>
  );
};

export default MainPage;
