import { memo } from "react";
import MenuAdmin from "../menuAdmin";
import HeaderAdmin from "../headerAdmin";
import { Grid } from '@mantine/core';

const MasterLayoutAdmin = ({ children, ...props }) => {
    return (
        <div {...props}>
            <HeaderAdmin />
            <Grid>
                <MenuAdmin />
                {children}
            </Grid>
        </div>
    );
};

export default memo(MasterLayoutAdmin);