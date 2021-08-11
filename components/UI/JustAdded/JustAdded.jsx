const JustAdded = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails
    }
    return (
        <div className="just-added">
            <h3 className="just-added__title">Just Added</h3>
            <div className="just-added__thumbnails">
                {loopComp(
                    (<div className="just-added__thumbnail">
                        <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/uI0I369wR5MZlnzRVh9bNf3FjX0=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/BOW7XHAQG4I6RKSDEUVRUHIXFI.jpg" alt="" />
                        <div className="just-added__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>),
                    10
                )}
            </div>
        </div>
    )
}

export default JustAdded;