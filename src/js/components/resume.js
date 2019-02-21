import React from 'react';

class ResumeButton extends React.Component {

    constructor(props) {

        super(props);

    }

    onClickResume = () => {

        if(this.props.onClickResume) {

            this.props.onClickResume();

        }

    }

    render() {

        return (
            <button onClick={this.onClickResume}>Resume</button>
        );

    }

}

export default ResumeButton;
