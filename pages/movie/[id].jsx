import { useRouter } from 'next/router'
// import axios from 'axios';

import { useEffect, useState } from 'react';

import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layouts/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/Featuredmedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow"
import axios from '../../components/Hooks/axios';

export default function SingleMediaPage(props) {
    const router = useRouter();
    // const { id } = router.query;

    const [mediaData, setMediaData] = useState(false)

    const [key, setKey] = useState(false);
    console.log('****PROPS***');
    console.log(props);
    console.log('****PROPS***');


    // useEffect(() => {

        // Make a request for a user with a given ID
        //         https://api.themoviedb.org/3/movie/399566?api_key=8d976d47d1b80d5a77b6ec844f4b541f&language=en-US&append_to_response=videos
    //     axios.get(`https://api.themoviedb.org/3/movie/${props.query.id}?api_key=8d976d47d1b80d5a77b6ec844f4b541f&append_to_response=videos&language=en-US`)
    //         .then(function (response) {
    //             // handle success
            
    //             setMediaData(response.data)
    //             setKey(response.data.videos.results[0].key)
    //             // console.log('mediaData.videos.results[0]');
    //             // console.log(mediaData);
    //             // console.log(mediaData.getServerSideProps.results[0].key);
    //             // console.log('mediaData.videos.results[0]');

               
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log('error');
    //             console.log(error);
    //         })
 
    // }, []);
    // const key = mediaData.videos.results.results[0].key;
    
    // if (key){

    // }

    // console.log('key: ' + mediaData.videos.results[0].key);
    // console.log(key);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/399566?api_key=8d976d47d1b80d5a77b6ec844f4b541f&append_to_response=videos&language=en-US`)
            console.log('request: ');
            console.log(request);
            
        }

        fetchData();
    }, []);
    return AuthCheck(

        <MainLayout>
            <h1
                style={{
                    color: 'white'
                }}
            >
                399566
                {/* {id} */}
            </h1>
            <FeaturedMedia
                title={mediaData.title}
                // videoUrl={`https://www.youtube.com/embed/${mediaData.videos.results[0].key}?autoplay=1&loop=1&start=16`}
                videoUrl={`https://www.youtube.com/embed/${key}?autoplay=1&loop=1&start=16`}
// key={mediaData.videos.results[0].key}
                title={mediaData.title}
                location='In theaters and on HBO MAX. Streaming throughout May 23.'
                mediaUrl='/movies/id'
                linkUrl=""
                type="single"
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
        props: { query: context.query }, // will be passed to the page component as props
    }
}