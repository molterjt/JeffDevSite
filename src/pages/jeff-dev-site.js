import React from "react"
import { Link } from "gatsby"
import "../style/testLayout.css";
import styled from "@emotion/styled"

/******** Components *************/
import Layout from '../components/layout';
import ModalController from '../components/ModalController';
import ProjectCardComponent from '../components/ProjectCardComponent';
import Gallery from '../components/Gallery';

/******** Pictures *************/
import myBackGround from '../images/JeffOregon.jpeg';
import profile from '../images/Jeff_Kofenya.jpg';
import elephantTree from '../images/theelephanttree.png';

/******** MiamiOH_Fit *************/
import MiamiOHFit_Home from '../images/MiamiOHFit_homeScreen.png';
import login_screen from '../images/MiamiOH_Fit_Login.png';
import home_screen from '../images/MiamiOH_Fit_HomeScreen.png';
import exercise_sample from '../images/MiamiOH_Fit_Exercise.png';
import map_screen from '../images/MiamiOH_Fit_Map.png';
import event_screen from '../images/MiamiOH_Fit_EventEx.png';
import display_shot from '../images/MiamiOH_Fit_Display.png';
import trainer_screen from '../images/MiamiOH_Fit_TrainerProfile.png';
import program_screen from '../images/MiamiOH_Fit_Programs.png';
import workouts_screen from '../images/MiamiOH_Fit_Workouts.png';

/********Logos*************/
import NodeJS from '../images/nodeJS.png';
import PythonLogo from '../images/python-logo.png';
import ReactLogo from '../images/React-Logo.png';
import GraphQL_Logo from '../images/graphQL-logo.png';
import HTML5_Logo from '../images/HTML-5-01.png';
import Redux_Logo from '../images/redux-logo.png';
import NodeJSLogo from '../images/Node-JS-02.png';
import graphCoolLogo from '../images/Graphcool-Logo.png';
import GatsbyLogo from '../images/gatsby-icon.png'
import ReactNativeLogo from '../images/reactNativeLogo.png'


/******** MF_Admin *************/
import MF_News from '../images/MiamiOH_Fit_Admin/MF_Admin_News.png';
import MF_Home from '../images/MiamiOH_Fit_Admin/MF_Admin_Home.png';
import MF_Event from '../images/MiamiOH_Fit_Admin/MF_Admin_Event.png';
import MF_Gallery from '../images/MiamiOH_Fit_Admin/MF_Admin_Gallery.png';
import MF_Facility from '../images/MiamiOH_Fit_Admin/MF_Admin_Facilities.png';
import MF_GF from '../images/MiamiOH_Fit_Admin/MF_Admin_GroupFit.png';

/******** MF_Admin *************/
import Tasked_Recording from '../images/Tasked/Tasked_Recording.mp4';
import Tasked_Complete from '../images/Tasked/Tasked_TaskComplete.png';
import MiamiOHFitAdmin_GF from '../images/MiamiOHFitAdmin_GroupFit.png';

/******** Member_Map *************/
import FitnessMemMap from '../images/FitnessMembershipMap2.png';
import MM_Full from '../images/MemberMap/MM_Full.png';
import MM_Zoom from '../images/MemberMap/MM_Zoom.png';
import MM_Recording from '../images/MemberMap/ProgramMapVideo.mp4';

/******** Meal Builder *************/
import Meal_Create from '../images/Meals/Meal_CreateMeal.png';
import Meal_Search from '../images/Meals/Meal_Search.png';
import Meal_NutrData from '../images/Meals/Meal_NutrientData.png';
import Meal_Om from '../images/Meals/Meal_Omelette.png';
import nutritionSearch from '../images/NutritionSearch.png';



import LinkedIn from '../images/LinkedInLogo.png';
import whiteInsta from '../images/white-insta.png';

import toast from '../images/toast.jpg'


const TopLevelContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin:0;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        flex-direction: column;
     }
`
const NavContainer = styled.div`
    z-index: 9;
    width: 100%;
    display: none;
    flex-direction:row;
    justify-content: space-around;
    align-items: flex-end;
    position: fixed;
    top:0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    flex:1;
    transition: top 0.2s ease-in-out;
    @media (max-width: 700px) {
        display: flex;
        position: fixed;
     }
`
const NavContainer2 = styled.div`
    z-index: 9;
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: flex-end;
    height: 30px;
    background-color: rgba(0,0,0,0.7);
    flex:1;
    transition: top 0.2s ease-in-out;
    @media (max-width: 700px) {
        display: none;
        position: fixed;
     }
`
const NavItem = styled.div`
    color: #fff;
    font-family: Courier, sans-serif;
    font-size: 14px;
    margin: 20;
    width: 75%;
    text-align:center;
    border: 1px solid black;
    cursor: pointer;
    &: hover{
        background-color: rgba(50,90,50,0.4);
    } 
`

const LeftProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    @media (max-width: 700px) {
        height: 100%;
        width: 100%;
        flex:1;
     }
    flex: 3;
    background-image: url( ${myBackGround} );
    background-repeat: no-repeat;
    background-position: center; 
    position: relative;
    background-size: cover;
    background-blend-mode: darken;
    background-color: rgba(0,0,0,0.5);
    align-content: center;
    justify-content: space-around;
`

const RightContentContainer = styled.div`
    flex-direction: column;
    height: 100vh;
    display: block;
    flex: 10;
    align-content: center;
    justify-content: space-evenly;
    overflow: auto;
    background-color: rgba(0,0,0,0.8);
    overflow-scrolling: auto;
    scroll-behavior: smooth;
     @media (max-width: 700px) {
        overflow: hidden;
        height: auto;
    }
`

const SectionTitle = styled.h3`
    text-align: left;
    margin: 1rem;
    padding 1rem;
    color: #A5A4A6;
    font-family:  "Quantico", sans-serif;
    font-size: 18px; 
`

const IntroSection = styled.section`
    display: flex;
    flex:1;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1rem;
    color: #fff;
    font-family:  Courier, sans-serif;
    font-size: 18px;
`
const ProfilePicContainer = styled.div`
    display: flex;
    flex: 1;
    margin-top: 1rem;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    
    @media (max-width: 700px) {
        display: block;
    }
  
`
const Avatar = styled.img`
 
  flex-grow:0;
  flex-shrink:0;
  flex-basis:100px;
  display:flex;
  min-height: 40%;
  box-shadow: 0 5px 5px rgba(50,50,93,.2),0 8px 5px rgba(0,0,0,.1);
  width:120px;
  height: 180px;
  margin: 1rem;
  border-radius: 50%;
  border: 3px solid black;
  @media (max-width: 700px) {
        height: 140px;
        width: 130px;
  }
`

const ProfileSummaryContainer = styled.div `
    display: flex;
    flex: 2;
    margin: 0;
    width: 100%;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    text-align: right;
    color: white;
    height: auto;
   
    @media (max-width: 700px) {
        flex:1;
        margin: 1rem;
    }
    
`

const ProfileSummary = styled.p`
    color: white;
    font-size: 18px;
    font-family:  "Big Caslon", sans-serif;
    text-align: right;
    justify-content: flex-start;
    align-self: right;
    margin: 1rem auto;
    padding: 1rem;
`

const ProfileConnectionsContainer = styled.footer`
    display: flex;
    margin-top: 2rem;
    margin: 1rem;
    flex:1;
    flex-direction: row;
    width: 100%;
    align-content: center;
    justify-content: space-around;
    text-align: bottom;
    position: absolute;
    bottom:0; 
    @media (max-width: 700px) {
        padding: 1rem;
        flex-direction: column;
    }
`
const ProfileConnection = styled.div`
    display: flex;
    flex:1;
    align-self: center;
    align-content: center;
    justify-content: space-evenly;
    text-align: center;
    color: white;
    @media (max-width: 700px) {
       align-self: flex-end;
       align-content: flex-end;
       justify-content: flex-start;
       text-align: right;
       margin-right: 1em;
       
       
    }
`
const RecentWorkSection = styled.section`
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
    height: auto;
`
const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    // flex: 1;
    padding: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`
const ProjectLink = styled.a`
    color: #3bb507;
`
const FormContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    width:46%;
    margin: 1em;
    flex: auto;
    height: 100%;

    font-family:  Courier, sans-serif;
    font-size: 14px;
    
`
const ContactSection = styled.section`
    display: flex;
    flex:1;
    justify-content: center;
    flex-direction:column;
    overflow: auto;
`

const SectionBreak = styled.div`
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align:center;
    color: #A5A4A6;
    margin: 20px;
`

const CardContainer = styled.div`
    flex-direction: column;
    width: 45%;
    height: auto;
    min-height: 300px;
    margin: 1rem;
    display: flex;
    @media (max-width: 1100px) {
       width: 70%;
    }
    @media (max-width: 800px) {
       width: 95%;
    }
`

const ProjectCardModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    // flex: 1;
    padding: 1rem;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
`

const MiamiOHFitDisplay = styled.div`
    height: 500px;
    width: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-image: url( ${display_shot} );
    background-repeat: no-repeat;
    background-position: center; 
    position: relative;
    background-size: contain;
    border: 3px groove black;
    background-color: white;
`

const ProjectModalSection = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    margin-top: 5px;
    width: 100%;
    background-color: white;
    @media (max-width: 700px){
        flex-direction: column;
    }  
`
const ProjectModalSectionText = styled.p`
    margin-left: 20px;
    color: #850f0d;
    font-family: Quantico, sans-serif;
    font-size: 14px;
`
const ProjectModalTitleHeader = styled.h2`
    margin-top: 30px;
    font-family: Quantico, sans-serif;
    font-size: 50px;
    color: #850f0d;
    background-color: white;
`
const ProjectModalSummary = styled.div`
    display: flex;
    flex-direction: column;
    flew-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin-top: 5px;
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    padding: 10px;
    width:100%;
`


// const TestPage = () => (
class TestPage extends React.Component{
    constructor(){
        super();
        this.aboutRef = React.createRef();
        this.projectsRef = React.createRef();
        this.connectRef = React.createRef();
    }
    scrollToMyRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    render(){
        return(
            <TopLevelContainer>
                {/*****LEFT CONTAINER******/}
                <LeftProfileContainer>

                    <ProfilePicContainer>
                        <Avatar
                            src={profile}
                        />
                        <p style={{fontSize: 20, textShadow: '2px 1px black', marginLeft: '2rem', alignSelf: 'flex-start', color:'#fff', fontFamily:'Quantico, sans-serif'

                        }}><strong>Jeff Molter</strong> </p>
                        <p style={{fontSize: 20, textShadow: '2px 1px black', marginLeft: '2rem', marginTop: -20, alignSelf: 'flex-start', color:'#fff', fontFamily:'Quantico, sans-serif'

                        }}><strong>Full-Stack Developer</strong></p>


                    </ProfilePicContainer>
                    <ProfileSummaryContainer>

                    </ProfileSummaryContainer>

                    <ProfileConnectionsContainer>
                        <ProfileConnection>
                            <a href={"https://www.linkedin.com/in/jeffrey-molter-8741a627/"}>
                                <img src={LinkedIn} width={90} alt={'LinkedIn Logo'}/>
                            </a>
                        </ProfileConnection>

                        <ProfileConnection>
                            <a style={{color:'white'}} href={"http://www.instagram.com/jeffreyT513"}>
                                <img src={whiteInsta} width={30} alt={'LinkedIn Logo'}/>                        </a>
                        </ProfileConnection>

                    </ProfileConnectionsContainer>
                </LeftProfileContainer>

                {/*****RIGHT CONTAINER******/}

                <RightContentContainer>
                    <NavContainer>
                        <NavItem onClick={() => this.scrollToMyRef(this.aboutRef) }>About</NavItem>
                        <NavItem onClick={() => this.scrollToMyRef(this.projectsRef) }>Projects</NavItem>
                        <NavItem onClick={() => this.scrollToMyRef(this.connectRef) }>Connect</NavItem>
                    </NavContainer>
                    <IntroSection ref={this.aboutRef}>
                        <SectionTitle>About</SectionTitle>
                        <p>
                            Greetings,
                        </p>
                        <p>
                            I am a full-stack developer with a focus and appreciation for the React & React Native frameworks with back-end support with GraphQL and server-less infrastructure.
                            Additionally, I enjoy working with Python and its extensive libraries.  Most of my academic programming was completed with Java and C++.
                        </p>
                        <p>
                            However, one of my greatest strengths and hobbies is learning - so I am always open for exploring new technologies as I continue grow and sharpen my skills.
                        </p>
                        <p>
                            Time outside of development and programming is put into Brazilian Jiu-Jitsu, strength training, traveling, and enjoying the great outdoors.
                        </p>
                        <p>
                            If you would like to work together, let's get connected!
                        </p>
                        <p>
                            Be well,
                        </p>
                        <p>
                            Jeff
                        </p>
                    </IntroSection>
                    <SectionBreak>___</SectionBreak>

                    <RecentWorkSection ref={this.projectsRef}>
                        <SectionTitle>Recent Projects</SectionTitle>

                        <ProjectCardContainer>
                            { /*********  The Elephant Tree ************/}
                            <CardContainer>
                                <ModalController
                                    buttonLabel={'View Site'}
                                    backColor={'black'}
                                >
                                    <iframe
                                        src={'http://www.theElephantTree.org'}
                                        style={{
                                            height:'100%',
                                            width:'100%',
                                        }}
                                    />
                                </ModalController>
                                <ProjectCardComponent
                                    style={{zIndex:-1}}
                                    title={'The Elephant Tree'}
                                    backTitle={'Features'}
                                    projectImage={elephantTree}
                                    projectType={'Yoga/Mindfulness Business Static Website'}
                                    projectLink={
                                        <a href={'http://www.theElephantTree.org'}>http://www.theElephantTree.org</a>
                                    }
                                    featureList={
                                        [
                                            {'name': 'Parallax Scrolling'},
                                            {'name': 'Instagram Feed & Goolge Calendar Integration'},
                                            {'name': 'News Letter Subscribe Pop-Up'},
                                            {'name': 'Responsive Design'},
                                            {'name': 'Tech Stack: HTML, Javascript, jQuery, CSS, Bootstrap'},
                                        ]
                                    }

                                />


                            </CardContainer>
                            {/*********  MiamiOH Fit *************/}
                            <CardContainer>
                                <ModalController
                                    buttonLabel={'Learn More'}
                                    backColor={'rgba(0,0,0,0.8)'}
                                >
                                    <ProjectCardModalContainer>

                                        <MiamiOHFitDisplay>
                                            <ProjectModalTitleHeader>MiamiOH Fit</ProjectModalTitleHeader>
                                        </MiamiOHFitDisplay>

                                        <ProjectModalSummary>
                                            <p>The MiamiOH Fit is a mobile application designed to promote and manage fitness programs while capturing patron engagement. It was designed for Miami University's Recreation Center.</p>
                                            <p>A beta version was completed for both iOS & Android mobile phones or tablets - released respectively through the Apple Store and the Google Play Store.</p>
                                        </ProjectModalSummary>

                                        <ProjectModalSection >
                                            <div style={{
                                                backgroundImage: `url(${login_screen})`,
                                                backgroundSize: 'contain',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                height: 500,
                                                width: '50%',
                                                textAlign:'right',
                                            }}
                                            >
                                            </div>
                                            <div style={{width: '50%', flexDirection:'column', display:'flex', marginTop: 10, marginRight:20}}>

                                                <h5 style={{textDecoration: 'underline', alignSelf:'flex-start'}}>Technology</h5>
                                                <div style={{textAlign: 'left', justifyContent:'space-between', flexDirection:'row', display:'flex', flexWrap:'wrap'}}>
                                                    <ProjectModalSectionText>-React Native</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Expo</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-GraphQL</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Apollo Client</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-GraphCool BaaS</ProjectModalSectionText>
                                                </div>

                                                <h5 style={{textDecoration: 'underline',  alignSelf:'flex-start'}}>Availability</h5>
                                                <div style={{textAlign: 'left',  justifyContent:'flex-start', alignItems: 'flex-start', flexDirection:'row', display:'flex'}}>
                                                    <ProjectModalSectionText>-iOS</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Android</ProjectModalSectionText>
                                                </div>

                                                <h5 style={{textDecoration: 'underline',  alignSelf:'flex-start'}}>Screens:</h5>
                                                <div style={{textAlign: 'left', justifyContent: 'space-between',  flexWrap:'wrap', flexDirection:'row', display:'flex'}}>
                                                    <ProjectModalSectionText>-Login/Registration</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Home</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Workouts/Exercises</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Group Fit Schedule</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Programs & Registration</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Events</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Trainers/Instructors</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Facility Maps</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Profile/Settings</ProjectModalSectionText>
                                                </div>
                                            </div>
                                        </ProjectModalSection>

                                        <ProjectModalSection>
                                            <Gallery images={[
                                                exercise_sample,
                                                workouts_screen,
                                                event_screen,
                                                map_screen,
                                                login_screen,
                                                home_screen,
                                                program_screen,
                                                trainer_screen,
                                            ]}/>
                                        </ProjectModalSection>
                                    </ProjectCardModalContainer>
                                </ModalController>
                                <ProjectCardComponent
                                    style={{zIndex:-1}}
                                    title={'MiamiOH Fit'}
                                    backTitle={'Features'}
                                    projectImage={MiamiOHFit_Home}
                                    projectType={'Fitness Program Management React Native App'}
                                    backImageSize={'33%'}
                                    backColor={'#fff'}
                                    featureList={
                                        [
                                            {'name': 'Tech Stack: React Native, Expo, GraphQL, Apollo-Client, GraphCool BaaS'},
                                            {'name': 'Registration & User Persistence'},
                                            {'name': 'GraphQL Schema Design'},
                                            {'name': 'Apollo Client & GraphQL Mutations & Queries'},
                                            {'name': 'Drag-To-Refresh & Geo-location'},
                                        ]
                                    }
                                />
                            </CardContainer>
                            {/*********  MiamiOH Fit Admin Web ReactJS App *************/}
                            <CardContainer>
                                <ModalController
                                    buttonLabel={'Learn More'}
                                    backColor={'rgba(0,0,0,0.8)'}
                                >
                                    <ProjectCardModalContainer>
                                        <ProjectModalTitleHeader>MiamiOH Fit Admin Web App</ProjectModalTitleHeader>
                                        <div style={{
                                            height: 500,
                                            width: '100%',
                                            flexDirection:'column',
                                            alignItems: 'center',
                                            justifyContent:'center',
                                            backgroundImage: `url(${MF_GF})`,
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition:'center',
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '3px groove black',

                                        }}>

                                        </div>
                                        <ProjectModalSummary>
                                            <p>
                                                MiamiOH Fit Admin is a companion to the MiamiOH Fit Mobile App -
                                                designed to dynamically manage the data pushed out to the mobile app by way
                                                of a shared GraphQL-Endpoint.
                                            </p>
                                            <p>
                                                The web app is hosted on an Amazon Web Services S3 bucket.  It is route-protected;
                                                only allows two defined login credentials to access pages and perform read/write operations.
                                            </p>
                                            <p>
                                                The primary function of the web app is to perform CRUD operations & provide data insights and
                                                analysis.
                                            </p>
                                        </ProjectModalSummary>

                                        <ProjectModalSection >
                                            <div style={
                                                {width: '100%',
                                                    flexDirection:'column',
                                                    flexWrap:'wrap',
                                                    display:'flex',
                                                    marginTop: 10,
                                                    marginRight:20,
                                                    marginLeft: 10,
                                                }}>

                                                <h5 style={{textDecoration: 'underline', alignSelf:'flex-start'}}>Technology</h5>
                                                <div style={{textAlign: 'left', justifyContent:'space-evenly', flexDirection:'row', display:'flex', flexWrap:'wrap'}}>
                                                    <ProjectModalSectionText>-React</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-GraphQL</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Apollo-Client</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-GraphCool BaaS</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-AWS-Amplify</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-React-Router-Dom</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-React-Bootstrap</ProjectModalSectionText>
                                                </div>
                                            </div>
                                        </ProjectModalSection>

                                        <ProjectModalSection>
                                            <Gallery
                                                images={[
                                                    MF_News,
                                                    MF_GF,
                                                    MF_Event,
                                                    MF_Gallery,
                                                    MF_Facility,
                                                    MF_Home
                                                ]}
                                                galleryImageWidth={'100%'}
                                            />
                                        </ProjectModalSection>
                                    </ProjectCardModalContainer>
                                </ModalController>
                                <ProjectCardComponent
                                    style={{zIndex:-1}}
                                    title={'MiamiOH Fit Admin Web App'}
                                    backTitle={'Features'}
                                    projectType={'Companion Content Management ReactJS App for MiamiOH Fit Mobile'}
                                    projectImage={MiamiOHFitAdmin_GF}
                                    backImageSize={'100%'}
                                    backColor={'#7d8484'}
                                    featureList={
                                        [
                                            {'name': 'Tech Stack:  ReactJS, GraphQL, Apollo-Client, AWS-Amplify, Bootstrap, CSS'},
                                            {'name': 'AWS Authentication & Login'},
                                            {'name': 'Protected Route Control via React-Router-Dom'},
                                            {'name': 'Dynamic Data Control on shared GraphQL endpoint with MiamiOH Fit Mobile App'},
                                        ]
                                    }
                                />
                            </CardContainer>
                            {/*********  Tasked *************/}
                            <CardContainer>
                                <ModalController
                                    buttonLabel={'Learn More'}
                                    backColor={'rgba(0,0,0,0.8)'}
                                >
                                    <ProjectCardModalContainer>
                                        <ProjectModalTitleHeader>Tasked</ProjectModalTitleHeader>
                                        <div style={{
                                            height: 500,
                                            width: '100%',
                                            flexDirection:'column',
                                            alignItems: 'center',
                                            justifyContent:'center',
                                            backgroundImage: `url(${Tasked_Complete})`,
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition:'center',
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '3px groove black',

                                        }}/>

                                        <ProjectModalSummary>
                                            <p>
                                                Tasked is a task and time management web app designed to deliver a very clean and intuitive UX experience.
                                            </p>
                                            <p>
                                                Each task can be created, edited, completed, deleted, and re-arranged (just click and drag to your preferred order).  Additionally, each task can have
                                                their own related timer to help keep you focused and on pace for completing your daily goals/tasks.
                                            </p>
                                        </ProjectModalSummary>

                                        <ProjectModalSection >
                                            <div style={
                                                {width: '100%',
                                                    flexDirection:'column',
                                                    flexWrap:'wrap',
                                                    display:'flex',
                                                    marginTop: 10,
                                                    marginRight:20,
                                                    marginLeft: 10,
                                                }}>

                                                <h5 style={{textDecoration: 'underline', alignSelf:'flex-start'}}>Technology</h5>
                                                <div style={{textAlign: 'left', justifyContent:'space-evenly', flexDirection:'row', display:'flex', flexWrap:'wrap'}}>
                                                    <ProjectModalSectionText>-React</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Redux</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-React-Redux</ProjectModalSectionText>
                                                    <ProjectModalSectionText>-Material Design BootStrap-React</ProjectModalSectionText>
                                                </div>
                                            </div>
                                        </ProjectModalSection>

                                        <ProjectModalSection>
                                            <Gallery
                                                galleryVideoWidth={'100%'}
                                                galleryVideoHeight={'90%'}
                                                appRecording={Tasked_Recording}
                                            />
                                        </ProjectModalSection>
                                    </ProjectCardModalContainer>
                                </ModalController>
                                <ProjectCardComponent
                                    style={{zIndex:-1}}
                                    title={'Tasked'}
                                    projectImage={Tasked_Complete}
                                    backTitle={'Features'}
                                    projectType={'Task Management React/Redux App'}
                                    featureList={
                                        [
                                            {'name': 'Tech Stack:  ReactJS, Redux, React-Redux, Material Design Bootstrap-React'},
                                            {'name': 'Drag & Drop Re-Ordering'},
                                            {'name': 'Redux state Management'},
                                            {'name': 'Multiple Timer Management'},
                                        ]
                                    }

                                />
                            </CardContainer>
                            {/*********  Nutrition Meal Builder *************/}
                            <CardContainer>
                                <ModalController
                                    buttonLabel={'Learn More'}
                                    backColor={'rgba(0,0,0,0.8)'}
                                >
                                    <ProjectCardModalContainer>
                                        <ProjectModalTitleHeader>Nutrition Meal Builder</ProjectModalTitleHeader>
                                        <div style={{
                                            height: 500,
                                            width: '100%',
                                            flexDirection:'column',
                                            alignItems: 'center',
                                            justifyContent:'center',
                                            backgroundImage: `url(${Meal_Om})`,
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition:'center',
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '3px groove black',

                                        }}/>

                                        <ProjectModalSummary>
                                            <p>
                                                Web application designed to customize meals and accumulate each meal and days nutrient intake.
                                            </p>
                                            <p>
                                                Nutrient data is pulled through the USDA's Food Composition Database API.
                                            </p>
                                            <p>
                                                When meals are created, quantities can be specified and categorically defined as a Foundation, Pre-Workout, Post-Workout, Snack, or a Cheat meal.
                                            </p>
                                            <p style={{fontStyle: 'italic'}}>
                                                Project is still in progress
                                            </p>
                                        </ProjectModalSummary>

                                        <ProjectModalSection >
                                            <div style={
                                                {width: '100%',
                                                    flexDirection:'column',
                                                    flexWrap:'wrap',
                                                    display:'flex',
                                                    marginTop: 10,
                                                    marginRight:20,
                                                    marginLeft: 10,
                                                }}>

                                                <h5 style={{textDecoration: 'underline', alignSelf:'flex-start'}}>Technology</h5>
                                                <div style={{textAlign: 'left', justifyContent:'space-evenly', flexDirection:'row', display:'flex', flexWrap:'wrap'}}>
                                                    <ProjectModalSectionText>- React</ProjectModalSectionText>
                                                    <ProjectModalSectionText>- Material Design BootStrap-React</ProjectModalSectionText>
                                                    <ProjectModalSectionText>- CSS</ProjectModalSectionText>
                                                </div>
                                            </div>
                                        </ProjectModalSection>

                                        <ProjectModalSection>
                                            <Gallery
                                                images={[
                                                    Meal_Search,
                                                    Meal_NutrData,
                                                    Meal_Create
                                                ]}
                                                galleryImageWidth={'100%'}
                                            />
                                        </ProjectModalSection>
                                    </ProjectCardModalContainer>
                                </ModalController>
                                <ProjectCardComponent
                                    style={{zIndex:-1}}
                                    title={'Nutrition Meal Builder'}
                                    backTitle={'Features'}
                                    projectImage={nutritionSearch}
                                    projectType={'Nutrition Search & Meal Builder ReactJS App'}
                                    featureList={
                                        [
                                            {'name': 'Tech Stack: ReactJS, Material Design Bootstrap-React, CSS '},
                                            {'name': 'USDA Food Database API'},
                                            {'name': 'Axios Requests'},
                                            {'name': '*Still Under Construction'},
                                        ]
                                    }


                                />
                            </CardContainer>
                            {/*********  Data Visualization Membership Map *************/}
                            <CardContainer>
                                <ModalController
                                    buttonLabel={'Learn More'}
                                    backColor={'rgba(0,0,0,0.8)'}
                                >
                                    <ProjectCardModalContainer>
                                        <ProjectModalTitleHeader>Data Visualization Membership Map</ProjectModalTitleHeader>
                                        <div style={{
                                            height: 500,
                                            width: '100%',
                                            flexDirection:'column',
                                            alignItems: 'center',
                                            justifyContent:'center',
                                            backgroundImage: `url(${MM_Zoom})`,
                                            backgroundRepeat:'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition:'center',
                                            backgroundColor: 'rgba(0,0,0,0.8)',
                                            border: '3px groove black',

                                        }}/>

                                        <ProjectModalSummary>
                                            <p>
                                                Fitness program member data visualized by addresses geo-coded to coordinates.
                                            </p>
                                            <p>
                                                Membership type identified by type and category - represented by distinctive pins and colors.
                                            </p>
                                            <p>
                                                Data was cleaned and structured utilizing Python Jupyter Notebooks, relying on the NumPy and Pandas libraries.  Data rows fed through
                                                a function converting addresses to longitude and latitude  coordiantes by way of GeoPy-GeoCoder.  Data was then exported as JSON to be rendered
                                                with React & React-Map-GL
                                            </p>
                                        </ProjectModalSummary>

                                        <ProjectModalSection >
                                            <div style={
                                                {width: '100%',
                                                    flexDirection:'column',
                                                    flexWrap:'wrap',
                                                    display:'flex',
                                                    marginTop: 10,
                                                    marginRight:20,
                                                    marginLeft: 10,
                                                }}>

                                                <h5 style={{textDecoration: 'underline', alignSelf:'flex-start'}}>Technology</h5>
                                                <div style={{textAlign: 'left', justifyContent:'space-evenly', flexDirection:'row', display:'flex', flexWrap:'wrap'}}>
                                                    <ProjectModalSectionText>- React</ProjectModalSectionText>
                                                    <ProjectModalSectionText>- React-Map-GL & MapBox</ProjectModalSectionText>
                                                    <ProjectModalSectionText>- Python</ProjectModalSectionText>
                                                    <ProjectModalSectionText>- GeoPy-GeoCoder</ProjectModalSectionText>
                                                    <ProjectModalSectionText>- Jupyter Notebook</ProjectModalSectionText>
                                                    <ProjectModalSectionText>- NumPy & Pandas</ProjectModalSectionText>
                                                </div>
                                            </div>
                                        </ProjectModalSection>

                                        <ProjectModalSection>
                                            <Gallery
                                                galleryVideoWidth={'100%'}
                                                galleryVideoHeight={'90%'}
                                                appRecording={MM_Recording}
                                            />
                                        </ProjectModalSection>
                                    </ProjectCardModalContainer>
                                </ModalController>
                                <ProjectCardComponent
                                    style={{zIndex:-1}}
                                    title={'Data Visualization Membership Map'}
                                    backTitle={'Features'}
                                    projectType={'Geo-Coded Membership Data Python/React'}
                                    projectImage={FitnessMemMap}
                                    backImageSize={'100%'}
                                    backColor={'#7d8484'}
                                    featureList={
                                        [
                                            {'name': 'Tech Stack: ReactJS, React-Map-GL, Python, GeoPy-GeoCoder' },
                                            {'name': 'Data cleaned and organized with Python Jupyter Notebook, NumPy, & Pandas'},
                                            {'name': 'Membership data geo-coded with GeoPy-GeoCoder'},
                                            {'name': 'Map rendered through React-Map-GL & MapBox'},
                                        ]
                                    }
                                />
                            </CardContainer>

                        </ProjectCardContainer>
                    </RecentWorkSection>
                    <SectionBreak>___</SectionBreak>
                    <ContactSection ref={this.connectRef}>
                        <SectionTitle>Get Connected</SectionTitle>

                        <form
                            method="post" action="#"
                            name="contact"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            style={{border: '1px solid #A5A4A6', margin: 15}}
                        >
                            <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                <FormContainer>
                                    <div style={{width: '100%', padding:10, }}>
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="contact" />
                                        <label  style={{color: '#A5A4A6', display:'flex', justifyContent:'flex-start'}} htmlFor="name">Name</label>
                                        <input  style={{ width: '75%'}} type="text" name="name" id="name" />
                                    </div>

                                    <div style={{width: '100%',  padding:10,}}>
                                        <label  style={{color: '#A5A4A6',display:'flex', justifyContent:'flex-start'}} htmlFor="email">Email</label>
                                        <input style={{width: '75%'}} type="text" name="email" id="email" />
                                    </div>
                                </FormContainer>
                                <FormContainer>
                                    <div style={{width: '100%', padding:10,}}>
                                        <label style={{color: '#A5A4A6', display:'flex', justifyContent:'flex-start'}} htmlFor="message">Message</label>
                                        <textarea  style={{width:'95%'}} name="message" id="message" rows="10" />
                                    </div>
                                </FormContainer>
                                <FormContainer>
                                    <div style={{width: '100%', flexDirection:'row', display:'flex', justifyContent:'center'}}>
                                        <div className="actions">

                                            <input style={{margin: '1rem', borderRadius: '15%'}} type="submit" value="Send Message" className="special" />
                                            <input style={{margin: '1rem', borderRadius: '15%'}}  type="reset" value="Clear" />
                                        </div>
                                    </div>
                                </FormContainer>
                            </div>
                        </form>



                    </ContactSection>
                    <footer style={{
                        justifyContent:'flex-end',
                        display: 'flex',
                        position: 'relative',
                        bottom: 0,
                        right: 20,
                        color: '#A5A4A6',
                        padding: 5,


                    }}>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org" style={{marginLeft: 7}}>Gatsby</a>
                    </footer>

                </RightContentContainer>

            </TopLevelContainer>



        )
    }




}
export default TestPage;
