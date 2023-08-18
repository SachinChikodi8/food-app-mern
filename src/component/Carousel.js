import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner " id='carousel'>
                        <div className="carousel-caption" style={{zIndex:"5"}}>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success text-white bg-bg-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="carousel-item active" style={{}} >
                            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100 h-auto " style={{ filter: "brightness(30%)",width:"100%" , height:"20%" }} alt="..." />
                        </div>
                        <div className="carousel-item" style={{width:"100%" , height:"20%"}}>
                            <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100 h-auto " style={{ filter: "brightness(30%)",width:"100%" , height:"20%" }} alt="..." />
                        </div>
                        <div className="carousel-item" style={{width:"100%" , height:"20%"}}>
                            <img src="https://source.unsplash.com/random/900×700/?sandwhich" className="d-block w-100 h-auto " style={{ filter: "brightness(30%)",width:"100%" , height:"20%" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel
