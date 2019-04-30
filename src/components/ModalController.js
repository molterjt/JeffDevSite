import React from 'react';
import PropTypes from 'prop-types';
import ModalBox from './ModalBox';
import "../style/jeff-dev-site.css";

export default class ModalController extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showModal: false,
        };
    }
    toggleModal(){
        this.setState({ showModal: !this.state.showModal})
    }
    render(){
        return(
            <div style={{width: '100%'}}>
                <button
                    type={'button'}
                    className={'modal-button'}
                    onClick={() => this.toggleModal()}
                >
                    {this.props.buttonLabel}
                </button>
                {
                    this.state.showModal && (
                        <ModalBox
                            style={{zIndex:2}}
                            onCloseRequest={()=>this.toggleModal()}
                            backColor={this.props.backColor}
                            modalTextColor={this.props.modalTextColor}
                        >
                            {this.props.children}
                        </ModalBox>
                    )
                }

            </div>
        );
    }
}
ModalController.propTypes = {
    buttonLabel: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    backColor: PropTypes.string,
    modalTextColor: PropTypes.string,
};




