import AuthCheck from "../components/AuthCheck";
import MainLayout from "../components/Layouts/MainLayout";
import CastInfo from "../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../components/UI/Featuredmedia/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";
import JustAdded from "../components/UI/JustAdded/JustAdded";
import PosterView from "../components/UI/PosterView/PosterView";

export default function HomeView() {
    return AuthCheck(
        <MainLayout>
            <FeaturedMedia />
            <PosterView />
            <CastInfo />
        </MainLayout>
    )
}


