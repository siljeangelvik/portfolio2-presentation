import {Button, Card, Carousel, Image, Typography} from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Content } = Layout;
const { Title } = Typography;

const data = {
    title: 'Asta Auction',
    subtitle: 'Semester Project 2',
    description: 'Web app for Asta Auction, an auction house. Built with JavaScript and TailwindCSS, it\'s responsive and works on mobile, tablet, and desktop (mobile-first approach).',
    media: [
        './media/semester_project_2_home.png',
        './media/semester_project_2_details.png',
        './media/semester_project_2_profile.png',
    ],
    urls: [
        {
            name: 'GitHub',
            url: 'https://github.com/siljeangelvik/semesterproject2'
        },
        {
            name: 'Live Demo',
            url: 'https://silje-semesterproject2.netlify.app/'
        },

    ],

};

export default function AuctionHouse() {
    return (
        <>
            <Card
                style={{
                    width: '320px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                    transition: '0.3s',
                    borderRadius: '5px',
                }}
                cover={data.media.length > 0 ? (
                    <Carousel
                        autoplay
                        autoplaySpeed={3000}
                        pauseOnHover={true}
                        style={{
                            overflow: 'hidden',
                            borderRadius: '5px',
                        }}
                    >
                        {data.media.map((media, index) => {
                            return (
                                <Image
                                    key={index}
                                    src={media}
                                    alt={data.title}
                                    width="100%"
                                    loading="lazy"
                                    aria-label={data.title}
                                />
                            );
                        })}
                    </Carousel>
                ) : (
                    <Image
                        src={data.media[0]}
                        alt={data.title}
                        width="100%"
                        loading="lazy"
                        aria-label={data.title}
                    />
                )}
            >
                <Link to={data.urls[1].url}>
                    <Title
                        level={4}
                   >
                        {data.title}
                    </Title>
                    <Title level={5} style={{ color: '#888' }}>
                        {data.subtitle}
                    </Title>
                    <Content>
                        <Typography>
                            {data.description}
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
                        href={data.urls[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: '45%' }}
                    >
                        {data.urls[1].name}
                    </Button>
                    <Button
                        type="primary"
                        href={data.urls[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ width: '50%' }}
                    >
                        {data.urls[0].name}
                    </Button>
                </div>
            </Card>
        </>
    );
};