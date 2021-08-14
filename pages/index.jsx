import { useStateContext } from "../components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LazyLoad from 'react-lazyload';

import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/Featuredmedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow"
import AuthCheck from "../components/AuthCheck";
import Placeholders from "../components/UI/Placeholders/Placeholders.jsx";


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {

  }, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        videoUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16"
        title='Mortal Kombat'
        location='In theaters and on HBO MAX. Streaming throughout May 23.'
        mediaUrl='/movies/id'
      />
      <LazyLoad offset={-400} placeholder={<Placeholders title="Movies" type="large-v" />}>
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc"
        />
      </LazyLoad>
      <LazyLoad offset={-400} placeholder={<Placeholders title="Series" type="small-h" />}>
        <MediaRow
          title="Series"
          type="small-h"
          endpoint="discover/tv?&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad offset={-400} placeholder={<Placeholders title="Action" type="small-v" />}>
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad placeholder={<Placeholders title="Horror" type="small-v" />}>
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad placeholder={<Placeholders title="Animations" type="large=h" />}>
        <MediaRow
          title="Animations"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad placeholder={<Placeholders title="Sci-Fi" type="small-v" />}>
        <MediaRow
          title="Sci-Fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>

    </MainLayout>
  )
}