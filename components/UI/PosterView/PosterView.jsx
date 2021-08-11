const PosterView = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails
    }
    return (
        <div className="poster-view">
            <h3 className="poster-view__title">Movies</h3>
            <div className="poster-view__thumbnails">
                {loopComp(
                    (<div className="poster-view__thumbnail">
                        <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/uI0I369wR5MZlnzRVh9bNf3FjX0=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/BOW7XHAQG4I6RKSDEUVRUHIXFI.jpg" alt="" />
                        <div className="poster-view__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>),
                    10
                )}
            </div>
        </div>
    )
}

export default PosterView;