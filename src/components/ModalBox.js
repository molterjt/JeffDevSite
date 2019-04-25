import React from 'react';
import PropTypes from 'prop-types';


class Modal extends React.Component{
    constructor(props){
        super(props);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    componentWillMount(){
        window.addEventListener('keyup', this.handleKeyUp, false);
        document.addEventListener('click', this.handleOutsideClick, false);
    }
    componentWillUnmount(){
        window.removeEventListener('keyup', this.handleKeyUp, false);
        document.removeEventListener('click', this.handleOutsideClick, false);
    }
    handleKeyUp(e) {
        const { onCloseRequest } = this.props;
        const keys = {
            27: () => {
                e.preventDefault();
                onCloseRequest();
                window.removeEventListener('keyup', this.handleKeyUp, false);
            },
        };

        if (keys[e.keyCode]) { keys[e.keyCode](); }
    }

    handleOutsideClick(e){

        if(!this.modal.contains(e.target)){
           this.props.onCloseRequest();
           document.removeEventListener('click', this.handleOutsideClick, false);
        }
    }
    render() {
        return (
            <div
                ref={node => (this.modal = node)}
                style={{
                    height: '90%',
                    width: '75%',
                    zIndex: 'auto',
                    border: '1px solid red',
                    justifyContent:'center',
                    display: 'flex',
                    flexWrap:'wrap',
                    flexDirection:'column',
                    flex: 1,
                    alignContent:'center',
                    position: 'absolute',
                    top: 0,
                    left: '12.5%',
                    //padding: 20,
                    margin: 20,
                    overflow: 'scroll',
                    backgroundColor: (this.props.backColor ? this.props.backColor : '#fff'),

                    color: (this.props.modalTextColor ? this.props.modalTextColor : '#000'),
                }}

            >
                <div style={{height: '100%', width:'100%'}}>

                        <div
                            style={{height: '100%', width:'100%', textAlign:'center', display:'block',}}
                        >

                                {this.props.children}


                        </div>

                        <button
                            type={'button'}
                            style={{position:'absolute', top: 0, right:0}}
                            onClick={this.props.onCloseRequest}
                        >
                            x
                        </button>

                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    onCloseRequest: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    backColor: PropTypes.string,
    modalTextColor: PropTypes.string,
};

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
                    onClick={() => this.toggleModal()}
                >
                    {this.props.buttonLabel}
                </button>
                {
                    this.state.showModal && (
                        <Modal
                            onCloseRequest={()=>this.toggleModal()}
                            backColor={this.props.backColor}
                            modalTextColor={this.props.modalTextColor}
                        >
                            {this.props.children}
                    ,    </Modal>
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




