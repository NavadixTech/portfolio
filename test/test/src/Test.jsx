import React, { useEffect, useState } from "react";
const Test = (props) => {
    const [state, setState] = useState(null);
    useEffect(() => {
        setState("oui");
    }, [])
    return (
        <div>
        </div>
    )
}

export default Test;