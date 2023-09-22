import { height } from "@mui/system";
import { memo } from "react";
import Footer from "../footer";
import Header from "../header";

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            <div style={{ height: "84px" }}></div>
            {children}
            <Footer />
        </div >
    );
};

export default memo(MasterLayout);