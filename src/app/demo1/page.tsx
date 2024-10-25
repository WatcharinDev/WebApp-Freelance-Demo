
import React from "react";

import ItemUpdate from "./ItemUpdate";
import Navbar from "@/components/navbar/navbar";

interface TabPanelProps {

}



export default function Demo1Page() {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <ItemUpdate></ItemUpdate>
        </React.Fragment>

    )
}
