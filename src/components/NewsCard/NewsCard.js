import React from 'react'

function NewsCard(props) {
    return (
        <div className="card text-dark" style={{width: "18rem"}}>
            <img className="card-img-top"       
                src={props.urlToImage}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default NewsCard
