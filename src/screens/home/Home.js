import { React, Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import moviesData from "../../common/moviesData.js";
import ImageList from "./ImageList";
import ReleasedMovieList from "./ReleasedMovieList";


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="upcomingMovieHeadingDiv">
                    <span className="upcomingMovieHeading">Upcoming Movies</span>
                </div>
                <div className="ImageListDiv">
                    <ImageList moviesData={moviesData} />
                </div>
                <div className="flex-container">
                    <div className="left">
                        <ReleasedMovieList moviesData={moviesData} />
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        )
    }
}
export default Home;