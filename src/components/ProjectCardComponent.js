import React from 'react';
import styled from "@emotion/styled";
import "../style/jeff-dev-site.css";

const ProjectCardTitleHeader = styled.header`
    z-index: 1;
    display: flex;
    flex:1;
    justify-content: center;
    align-content: flex-end;
    text-align: center;
    color: #000;
    background-color: #fff;
    // border: 1px solid black;
    border-bottom: 1px solid #5c5b5e;;
    border-top: 1px solid #5c5b5e;
    font-weight: bold;
    font-size: 16px;
    font-family: Quantico, sans-serif;
    width:100%;
    height: undefined; 
    position: absolute;
    top:0;
    padding: 2px;
    margin-bottom: 1rem;
`

const ProjectCardFooter = styled.footer`
    display: flex;
    flex:1;
    justify-content: center;
    align-content: flex-end;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: white;
    width:100%;
    background-color: rgba(0,0,0,1);
`

const ProjectImageContainer =  styled.div`
    display: flex;
    flex:1;
    width:100%;
    height: 100%;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    background-repeat: no-repeat;
    background-position: center; 
    position: relative;
    background-size: ${props => props.backImageSize ? props.backImageSize : 'cover'};
    background-color: ${props =>
    props.backColor ? props.backColor : 'transparent'};  
`

const ProjectSummary = styled.div`
    display: flex;
 
    width:100%;
    height: auto;
    align-content: flex-start;
    align-items: center;
    justify-content: space-around;
    text-align: left;
    padding: 5px;
    margin-top: 20px;
    overflow: auto;
     @media (max-width: 450px) {
        padding: 10px;
        padding-top: 180px;
     }
    
`

const ProjectFeature = styled.li`
    // color: #850f0d;
    color: #596f85;
    font-size: 16px;
    font-family: 'Quantico', sans-serif;
    list-style-type: square;
    @media (max-width: 1100px) {
        font-size: 18px;
     }
      @media (max-width: 500px) {
        font-size: 16px;
     }
      @media (max-width: 450px) {
        font-size: 15px;
     }
     @media (max-width: 375px) {
        color: black;
     }
`

const ProjectCardComponent = (props) =>


    <div className={"card-container"}>
        <div className={"card"}>
            <div className={"back"}>
                <ProjectCardTitleHeader>{props.backTitle}</ProjectCardTitleHeader>
                <ProjectSummary>
                        <ul style={{textAlign: 'left', paddingLeft: 15, paddingTop: 30}}>
                            {props.featureList
                                ?(
                                    props.featureList.map((feature, index) => (
                                        <ProjectFeature key={index}>
                                            {feature.name}
                                        </ProjectFeature>
                                    ))
                                )
                                :
                                null
                            }
                        </ul>
                </ProjectSummary>

                        {props.projectLink ? props.projectLink : null}

            </div>

            <div className={"front"}>
                <ProjectCardTitleHeader>
                    {props.title}
                </ProjectCardTitleHeader>

                <ProjectImageContainer
                    backColor={props.backColor}
                    backImageSize={props.backImageSize}
                    style={{backgroundImage: `url(${props.projectImage})`}}>
                </ProjectImageContainer>

                <ProjectCardFooter>
                    {props.projectType}
                </ProjectCardFooter>

            </div>

        </div>
    </div>


export default ProjectCardComponent;