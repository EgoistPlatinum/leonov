import React from "react";
import {Grid, GridItem, Typography, Logo} from "fronton-react";
import Header from "../../Elements/Header/Header"
import style from "./MainPage.module.scss";

const MainPage = () => {
    return (
        <Grid areas={['header header header', 'aside main main', 'footer footer footer']} gap="space-100">
            <GridItem className={style.header} area="header">
                <Header/>
            </GridItem>
            <GridItem className={style.aside} area="aside">
                <Typography variant="20" size="body_short">
                    aside
                </Typography>
            </GridItem>
            <GridItem className={style.main} area="main">
                <Typography variant="20" size="body_short">
                    <Logo variant="monochrome" />
                </Typography>
            </GridItem>
            <GridItem className={style.footer} area="footer">
                <Typography variant="20" size="body_short">
                    footer
                </Typography>
            </GridItem>
        </Grid>
    );
}

export default MainPage;