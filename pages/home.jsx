import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/Featuredmedia/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";

export default function HomeView() {
    return (
        <MainLayout>
            <FeaturedMedia />
            <ForYouList />
        </MainLayout>
    )
}


