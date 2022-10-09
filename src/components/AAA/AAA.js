import React from 'react';

const AAA = ({ring}) => {
    return (
        <div>
            <h6>AAA</h6>
            {/* props drilling er maddhome 1st e activity theke One e giyeche then props kore A er moddhe giyechen then props kore AAA er moddhe dekhano hoyeche */}
            <p><small>Gift: {ring}</small></p>
        </div>
    );
};

export default AAA;