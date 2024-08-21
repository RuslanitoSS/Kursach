import React from "react"

const Login = ({ className, children }) => {
    return (
        <button className={className}>
            {children }
        </button>
    )
}

export default Login