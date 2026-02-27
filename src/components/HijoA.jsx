import {memo} from "react";

const HijoA = memo(function HijoA(){
    console.log("Render HijoA");
    return <p>Hijo A</p>
});

export default HijoA;