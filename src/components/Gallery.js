import React from 'react';
import PropTypes from 'prop-types';
import "../style/jeff-dev-site.css";


export default class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentImage: 0,
        }
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);

    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1){
          return
        }

        this.gotoNext();
    }
    handleClickBack(){
        if(this.state.currentImage === 0){
            return
        }
        this.gotoPrevious()
    }
    renderCircleCounter(){
        const {images} = this.props;
        if(!images) return;


        return(
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                {images.map((obj, index) => (

                    <button
                        onClick={() => this.gotoImage(index)}
                        key={index}
                        style={{
                        height: 16,
                        width: 16,
                        borderRadius: '50%',
                        border: '1px solid white',
                        backgroundColor: (
                            this.state.currentImage === index
                                ? 'rgba(250,250,250,0.2)'
                                : 'rgba(0,0,0,0.7)'
                        ),
                        marginRight:20,
                        marginTop: 25,
                        position: 'relative',
                        alignSelf:'center',
                        top: -60,
                        zIndex: '9'
                    }}/>
                )
                )}
            </div>

        )

    }
    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <div key={i}
                     style={{
                         display:'flex',
                         flexDirection:'row',
                         right: (i * 50),
                         zIndex: (images.length - i),
                         position: 'absolute',
                         justifyContent:'center',
                         alignContent:'center',
                         alignItems: 'center',

                     }}
                >
                    <img src={obj} style={{width: 150, height: 300}} />
                </div>
            );
        });

        return (
            <div style={{zIndex: 0}}>
                {gallery}
            </div>
        );
    }

    render(){
        return(

                <div
                    className={'gradient-modal-gallery2'}
                    style={{
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    backgroundBlendMode: 'screen',
                    width: '100%'
                }}>

                    {this.props.images
                        ? <button
                            style={{
                                display: 'flex',
                                position: 'relative',

                                float:'left',
                                alignSelf:'center',
                                height: 30,
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                width:'7%',
                                marginLeft: 25,
                                textAlign:'center',
                                justifyContent:'center'
                            }}
                            onClick={() => this.handleClickBack()}
                        >
                            {`<<`}
                        </button>
                        : null


                    }



                        {this.props.images
                            ? (
                                <div
                                    style={{
                                        width:'70%',
                                        display:'flex',
                                        flexDirection:'column',
                                        justifyContent:'center',
                                        alignItems:'center',

                                    }}>
                                    <img
                                        src={this.props.images[this.state.currentImage]}
                                        className={'gallery-image'}
                                        style={{
                                            width: (this.props.galleryImageWidth ),
                                            height: (this.props.galleryImageHeight ),
                                        }}
                                    />
                                    {this.renderCircleCounter()}
                                </div>
                            )
                            : null
                        }
                        {this.props.appRecording
                            ?  (
                                <div
                                    style={{
                                        width:'90%',
                                        display:'flex',
                                        flexDirection:'column',
                                        justifyContent:'center',
                                        alignItems:'center',

                                    }}>
                                        <video
                                            loop
                                            autoplay
                                            controls
                                            style={{
                                                width: (this.props.galleryVideoWidth ),
                                                height: (this.props.galleryVideoHeight ),
                                            }}
                                            src={this.props.appRecording}>

                                        </video>
                                </div>)
                            : null

                        }
                    {this.props.images
                        ? <button
                            style={{
                                display: 'flex',
                                position: 'relative',
                                float: 'right',
                                alignSelf: 'center',
                                height: 30,
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.4)',
                                width:'7%',
                                marginRight: 25,
                                textAlign:'center',
                                justifyContent:'center'
                            }}
                            onClick={() => this.handleClickImage()}
                        >
                            {`>>`}
                        </button>
                        : null

                    }


                </div>



        );
    }
}
Gallery.propTypes = {
    images: PropTypes.array,

}