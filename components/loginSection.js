import React from 'react'
import loginSction from 'styles/c-loginSection.scss'

//登陆和注册界面公用的部分组建块
const LoginSection = (props) => (
    <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: loginSction }} />
        <div className={props.cName}>
            {props.children}
        </div>
    </React.Fragment>
)

export default LoginSection;