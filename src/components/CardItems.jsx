import {Button, Card, Carousel, Image, Typography} from 'antd';
import {Layout} from 'antd';
import {Link} from 'react-router-dom';

const {Content} = Layout;
const {Title} = Typography;

const projects = [
    {
        title: 'Holidaze',
        subtitle: 'Project Exam 2',
        description: `Exam project for "Frontend Development 2" at Noroff. Website for fictional venue booking app "Holidaze" using React, AntDesign and Netlify. Includes home, profile, and venue detail pages.`,
        media: [
            './assets/media/project_exam_2_home.png',
            './assets/media/project_exam_2_details.png',
            './assets/media/project_exam_2_profile.png',
        ],
        urls: [
            {name: 'GitHub', url: 'https://github.com/siljeangelvik/react-antd-holidaze-exam'},
            {name: 'Live Demo', url: 'https://exam-holidaze.netlify.app/'},
        ],
    },
    {
        title: 'uShop',
        subtitle: 'JavaScript Frameworks CA',
        description: 'A simple e-commerce app that fetches and displays data from an API. Users can add/remove items from the cart, which is saved in local storage. Item details are also available. (mobile-first-approach).',
        media: [
            './assets/media/javascript_frameworks_home.png',
            './assets/media/javascript_frameworks_details.png',
            './assets/media/javascript_frameworks_contact.png',
        ],
        urls: [
            {name: 'GitHub', url: 'https://github.com/siljeangelvik/react-ts-shopping-cart'},
            {name: 'Live Demo', url: 'https://react-ts-ecom-cart.netlify.app/'},
        ],
    },
    {
        title: 'Asta Auction',
        subtitle: 'Semester Project 2',
        description: 'Web app for Asta Auction, an auction house. Built with JavaScript and TailwindCSS, it\'s responsive and works on mobile, tablet, and desktop (mobile-first-approach).',
        media: [
            './assets/media/semester_project_2_home.png',
            './assets/media/semester_project_2_details.png',
            './assets/media/semester_project_2_profile.png',
        ],
        urls: [
            {name: 'GitHub', url: 'https://github.com/siljeangelvik/semesterproject2'},
            {name: 'Live Demo', url: 'https://silje-semesterproject2.netlify.app/'},
        ],
    },
    {
        title: 'First Portfolio',
        subtitle: 'Industry Knowledge CA',
        description: 'Explore my old portfolio, a stepping stone in my early web development journey. Gain industry knowledge and discover diverse web design techniques through this project.',
        media: [
            './assets/media/industry_knowledge_home.png',
            './assets/media/industry_knowledge_portfolio.png',
            './assets/media/industry_knowledge_contact.png',
        ],
        urls: [
            {name: 'GitHub', url: 'https://github.com/siljeangelvik/ca-portfolio-vite'},
            {name: 'Live Demo', url: 'https://siljeangelvik.netlify.app/'},
        ],
    },
    {
        title: 'ByLan',
        subtitle: 'Project Exam 1',
        description: 'Exam project for "Frontend Development 1" at Noroff. Website for external customer "ByLan", which is a voluntary organization focused on creating a positive community for all gamers.',
        media: [
            './assets/media/project_exam_1_home.png',
            './assets/media/project_exam_1_details.png',
            './assets/media/project_exam_1_about.png',
        ],
        urls: [
            {name: 'GitHub', url: ''},
            {name: 'Live Demo', url: 'https://www.bylan.net/'},
        ],
    },
    {
        title: 'Nice Cream',
        subtitle: 'JavaScript 2',
        description: 'Course Assigment for JavaScript 2 FED - 2. The project is a web application for a fictional ice cream shop called Nice Cream, where buyer can choose ice cream flavour, size and/or sprinkles.',
        media: [
            './assets/media/javascript2_resit_home.png',
            './assets/media/javascript2_resit_cart.png',
            './assets/media/javascript2_resit_payment.png',
        ],
        urls: [
            {name: 'GitHub', url: 'https://github.com/siljeangelvik/vite-project-ca-js2'},
            {name: 'Live Demo', url: 'https://vite-project-ca-js2.netlify.app/'},
        ],
    },
    {
        title: 'Valorant',
        subtitle: 'JavaScript 1',
        description: 'Course Assigment for JavaScript 1 FED - 1. The project was to get data from an API and display it on a website. I chose to use the Valorant API and display the agents and their abilities.',
        media: [
            './assets/media/javascript1_home.png',
            './assets/media/javascript1_details.png',
            './assets/media/javascript1_contact.png',
        ],
        urls: [
            {name: 'GitHub', url: 'https://github.com/siljeangelvik/js1-ma3-api'},
            {name: 'Live Demo', url: 'https://javascript1-ca.netlify.app/'},
        ],
    },
];

function CardItems({isDarkMode}) {
    const listItems = projects.map((project, index) => {
        return (
            <Card
                key={index}
                style={{
                    width: '320px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                    transition: '0.3s',
                }}
                cover={project.media.length > 0 ? (
                    <Carousel
                        autoplay
                        autoplaySpeed={3000}
                        pauseOnHover={true}
                        style={{
                            overflow: 'hidden',
                            borderRadius: '5px',
                        }}
                    >
                        {project.media.map((media, index) => {
                            return (
                                <Image
                                    key={index}
                                    src={project.media[index]}
                                    alt={project.title}
                                    width="100%"
                                    loading="lazy"
                                    aria-label={project.title}
                                />
                            );
                        })}
                    </Carousel>
                ) : (
                    <Image
                        src={project.media[0]}
                        alt={project.title}
                        width="100%"
                        loading="lazy"
                        aria-label={project.title}
                    />
                )}
            >
                <Link to={project.urls[1].url}>
                    <Title level={4}>
                        {project.title}
                    </Title>
                    <Title level={5} style={{color: '#888'}}>
                        {project.subtitle}
                    </Title>
                    <Content>
                        <Typography>
                            {project.description}
                        </Typography>
                    </Content>
                </Link>
                <div
                    className="theme-switch-container"
                    style={{
                        marginTop: 'auto',
                        paddingTop: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button
                        className={`primary-button ${isDarkMode ? 'dark' : 'light'}`}
                        href={project.urls[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{width: '45%', borderRadius: '0'}}
                    >
                        {project.urls[1].name}
                    </Button>
                    <Button
                        className={`secondary-button ${isDarkMode ? 'dark' : 'light'}`}
                        href={project.urls[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{width: '50%'}}
                    >
                        {project.urls[0].name}
                    </Button>
                </div>
            </Card>
        );
    });
    return (
        <>
            {listItems}
        </>
    );
}

export default CardItems;