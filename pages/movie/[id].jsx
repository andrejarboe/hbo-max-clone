import { useRouter } from 'next/router'
import axios from 'axios';
import { useEffect, useState } from 'react';

import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layouts/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/Featuredmedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow"


export default function SingleMediaPage(props) {
    const router = useRouter();
    // const { id } = router.query;

    const [mediaData, setMediaData] = useState(false)
    console.log('****PROPS***');
    console.log(props);
    console.log('****PROPS***');


    useEffect(() => {

        // Make a request for a user with a given ID
        axios.get(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=8d976d47d1b80d5a77b6ec844f4b541f&language=en-US`)
            .then(function (response) {
                // handle success
                setMediaData(response.data)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log('error');
                console.log(error);
            })
    }, []);

    return AuthCheck(
        <MainLayout>
            <h1
                style={{
                    color: 'white'
                }}
            >
                339566
                {/* {id} */}
            </h1>
            <FeaturedMedia 
                title={mediaData.title}
            />
            {/* <MediaRow
                title="More Like This"
                type="small-v"
            /> */}
            <CastInfo />
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {query: context.query}, // will be passed to the page component as props
    }
}