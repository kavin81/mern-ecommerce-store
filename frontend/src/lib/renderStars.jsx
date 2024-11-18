const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i}>★</span>); // filled star
        } else if (i - rating < 1) {
            stars.push(<span key={i}>&#9734;</span>); // TODO: half star
        } else {
            stars.push(<span key={i}>☆</span>); // empty star
        }
    }
    return stars;
};
export default renderStars;