import React, { useContext } from 'react'

import Context from "context/app.context";

export default function Brand() {
    const { name } = useContext(Context);
    
    return (
        <div className="o-brand">
            <img
                alt={name}
                src={"assets/images/giffy-150x150_w.png"}
            />
            {name}
        </div>
    )
}
