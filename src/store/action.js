export function getImageDetails(image){
    return(dispatch) => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=1ZoH8qVlRyQSqTcRpTAkqum6HRm3B9h61Ri5OVZuJdk`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: "GET_IMAGES",
                payload: data
            })
        })
    }
}