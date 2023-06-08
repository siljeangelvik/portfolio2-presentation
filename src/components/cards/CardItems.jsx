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
            './media/project_exam_2_home.png',
            './media/project_exam_2_details.png',
            './media/project_exam_2_profile.png',
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
            './media/javascript_frameworks_home.png',
            './media/javascript_frameworks_details.png',
            './media/javascript_frameworks_contact.png',
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
            './media/semester_project_2_home.png',
            './media/semester_project_2_details.png',
            './media/semester_project_2_profile.png',
        ],
        urls: [
            {name: 'GitHub', url: 'https://github.com/siljeangelvik/semesterproject2'},
            {name: 'Live Demo', url: 'https://silje-semesterproject2.netlify.app/'},
        ],
    },
];

function CardItems() {
    const listItems = projects.map((project, index) => {
        return (
            <>
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
                        <Title
                            level={4}
                        >
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
                        style={{
                            marginTop: 'auto',
                            paddingTop: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Button
                            type="primary"
                            href={project.urls[1].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{width: '45%'}}
                        >
                            {project.urls[1].name}
                        </Button>
                        <Button
                            type="primary"
                            href={project.urls[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{width: '50%'}}
                        >
                            {project.urls[0].name}
                        </Button>
                    </div>
                </Card>
            </>
        );
    });

    return (
        <>
            {listItems}
        </>
    );
}

export default CardItems;