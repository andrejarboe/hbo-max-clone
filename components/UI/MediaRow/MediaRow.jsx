const MediaRow = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails
    }
    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
                {loopComp(
                    (<div className="media-row__thumbnail">
                        <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/uI0I369wR5MZlnzRVh9bNf3FjX0=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/BOW7XHAQG4I6RKSDEUVRUHIXFI.jpg" alt="" />
                        <div className="media-row__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>),
                    10
                )}
            </div>
        </div>
    )
}

export default MediaRow;