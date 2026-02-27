import {memo} from "react";

const HijoB = memo(function HijoB(){
    console.log("Render HijoB");
    return <p>Hijo B</p>
});

export default HijoB;