import {Button, Card, Carousel, Image, Typography} from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Content } = Layout;
const { Title } = Typography;

const data = {
    title: 'uShop',
    subtitle: 'JavaScript Frameworks CA',
    description: 'A simple e-commerce app that fetches and displays data from an API. Users can add/remove items from the cart, which is saved in local storage. Item details are also available.',
    media: [
        './media/javascript_frameworks_home.png',
        './media/javascript_frameworks_details.png',
        './media/javascript_frameworks_contact.png',
    ],
    urls: [
        {
            name: 'GitHub',
            url: 'https://github.com/siljeangelvik/react-ts-shopping-cart'
        },
        {
            name: 'Live Demo',
            url: 'https://react-ts-ecom-cart.netlify.app/'
        },

    ],

};

export default function OnlineShop() {

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