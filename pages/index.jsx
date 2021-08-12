import { useStateContext } from "../components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/Featuredmedia/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";
import JustAdded from "../components/UI/JustAdded/JustAdded";
import PosterView from "../components/UI/PosterView/PosterView";
import AuthCheck from "../components/AuthCheck";


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {

  }, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  )
}