import React from 'react'
import loginSction from 'styles/c-loginSection.scss'

const LoginSection = (props) => (
    <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: loginSction }} />
        <div className={props.cName}>
            {props.children}
        </div>
    </React.Fragment>
)

export default LoginSection;