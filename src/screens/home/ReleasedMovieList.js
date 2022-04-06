import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import './ReleasedMovieList.css';

export default function ReleasedMovieList(props) {

    return (
        <a href='Detail.js' ><ImageList className='ImageListOfReleasedMovie'
            // sx={{  height: 350 }} 
            rowHeight={350}
            cols={4}
        >
            {props.moviesData.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        src={item.poster_url}
                        className="ImageOfReleasedMovie"
                        alt={item.title}
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={`Release Date:${new Date(item.release_date).toLocaleDateString("en-US", {
                            weekday: "short",
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        })}`}
                    />
                </ImageListItem>
            ))}
        </ImageList></a>
    );
}