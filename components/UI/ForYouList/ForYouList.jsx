const ForYouList = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp);
        }
        return thumbnails
    }
    return (
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
            <div className="foryou-list__thumbnails">
                {loopComp(
                    (<div className="foryou-list__thumbnail">
                        <img src="https://i5.walmartimages.com/asr/268d4e2f-1b71-48bb-a090-b0fd9ae118b6_1.f35b5e9f6d1b38be5eb509fafaf2ec6b.jpeg" alt="" />
                        <div className="foryou-list__top-layer">
                            <i className="fas fa-play" />
                        </div>
                    </div>),
                    10
                )}
            </div>
        </div>
    )
}

export default ForYouList;