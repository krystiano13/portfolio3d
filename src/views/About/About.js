import React from "react";

const About = ({ triggerAnimation }) => {

    React.useEffect(() => {
        triggerAnimation(1);
    },[]);

    return (
        <></>
    )
}

export { About };