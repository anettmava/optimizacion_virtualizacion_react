import {memo} from "react";

const HijoC = memo(function HijoC(){
    console.log("Render HijoC");
    return <p>Hijo C</p>
});

export default HijoC;