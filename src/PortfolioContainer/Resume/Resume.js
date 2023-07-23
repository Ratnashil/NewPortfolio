import React, { useState} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
// import ScrollService from '../../utilities/ScrollService';
// import Animations from '../../utilities/Animations';
import "./Resume.css";


const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    // let fadeInScreenHandler = (screen) => {
    //     if (screen.fadeInScreen !== props.id)
    //         return;
    //     Animations.animations.fadeInScreen(props.id);
    // };
    // const fadeInSubscription =
    //     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming skills", logoSrc: "programming-skills.svg" },
        { label: "Project", logoSrc: "projects.svg" },
        { label: "Intrests", logoSrc: "interests.svg" },
    ];

    const programmingSkillDetails = [
        { skill: "Core Java", ratingPercentage: 70 },
        { skill: "JavaScript", ratingPercentage: 60 },
        { skill: "ReactJs", ratingPercentage: 75 },
        { skill: "MySQL", ratingPercentage: 65 },
        { skill: "MongoDB", ratingPercentage: 50 },
        { skill: "RestAPI", ratingPercentage: 70 },
        { skill: "HTML/CSS", ratingPercentage: 60 },
        { skill: "SpringBoot", ratingPercentage: 60 },
        { skill: "Redux", ratingPercentage: 60 },
   
    ];

    const projectDetails = [
        {
            title: "Personal portfolio website",
            duration: { fromDate: "2022", toDate: "Present" },
            description: "A personal Portfolio website to showcase all my details and project at one place.",
            subHeading: "Technology used: React JS, RxJs, Axios, Node.js, Express.js"
        },
        {
            title: "Build RestAPI to perfom backend operations.",
            duration: { fromDate: "2021", toDate: "2022" },
            description: "A RestAPI which perform CURD operation in backend using springBoot",
            subHeading: "Technology used: Core Java, MySql, SpringBoot, JSON "
        },
        {
            title: "RO Monitoring System",
            duration: { fromDate: "2019", toDate: "2020" },
            description: "A personal Portfolio website to showcase all my details and project at one place.",
            subHeading: "Technology used: Embedded C, JSON, Circuit Design"
        },
    ];


    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
                heading={"SavitriBai Phule Univercity, Pune"}
                subHeading={"BE in Electronics and Telecommunication"}
                fromDate={"2014"}
                toDate={"2018"}
            />
            <ResumeHeading
                heading={"Goverment Polytechnic, Brahmapuri"}
                subHeading={"Diploma in Electronics and Telecommunication"}
                fromDate={"2011"}
                toDate={"2014"}
            />
        </div>,

        <div className='resume-screen-container' key='work-experience'>
            <ResumeHeading
                heading={"Mantra Labs, Bengaluru"}
                subHeading={"Software Engineer"}
                fromDate={"Nov 2022"}
                toDate={"Present"}
            />
            <ResumeHeading
                heading={"Gloify, Bengaluru"}
                subHeading={"Java Programmer"}
                fromDate={"April 2022"}
                toDate={"Nov 2022"}
            />
             <ResumeHeading
                heading={"Argus System, Pune"}
                subHeading={"Software Developer"}
                fromDate={"Nov 2020"}
                toDate={"April 2022"}
            />
        </div>,


        <div className='resume-screen-container programming-skills-container'
            key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                    <span>{skill.skill}</span>
                    <div className='skill-percentage'>
                        <div style={{ width: skill.ratingPercentage + "%" }}
                            className='active-percentage-bar'>
                        </div>
                    </div>
                </div>
            ))}
        </div>,

        <div className='resume-screen-container' key='projects'>
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                />
            )
            )}
        </div>,

        <div className='resume-screen-container' key="intrests">
            <ResumeHeading
                heading="Music"
                description="I like music because it keeps me calm and cool, It makes me happy."
            />
            <ResumeHeading
                heading="Chess & Cricket"
                description="I enjoy being physically active, and spend a lot of time playing sports and team games."
            />
            <ResumeHeading
                heading="Travaling"
                description="I’m an outgoing person, and like hanging out with friends."
            />
            <ResumeHeading
                heading="Robotics"
                description="I’m a creative person, and like doing things with my hands."
            />
        </div>
        ,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCrousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCrousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}>

                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt='B' />

                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((resumeDetails) => resumeDetails)}
            </div>
        );
    };

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My  Formal Bio Details'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
