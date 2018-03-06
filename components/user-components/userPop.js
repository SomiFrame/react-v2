import React from 'react'

import popBoxCss from 'styles/c-userPop.scss'

class PopBox extends React.Component {
    constructor(props) {
        super(props);
        this.closePop = this.closePop.bind(this);
    }
    closePop(e) {
        const pop = document.getElementById('PopBox');
        if(pop.style.display=="none") {
            pop.style.display="block";
        } else {
            pop.style.display="none";
        }
    }
    render() {
        return(
            <div className="PopBox" id="PopBox">
                <style dangerouslySetInnerHTML={{ __html: popBoxCss }} />
                <div className="pop-box-container">
                    <div className="pop-box-title">
                        {this.props.title}
                        <a onClick={this.closePop}>
                            <img src="/static/images/v2-getmore.png"/>
                        </a>
                    </div>
                    <div className="pop-box-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export {PopBox};