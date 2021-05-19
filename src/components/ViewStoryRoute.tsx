import { useContext } from 'react';
import './ViewStory.css';
import { StoryContext } from '../context/madlib-context';
import { useParams, Link } from 'react-router-dom';

interface RouteParams {
    num:string
}

function ViewStoryRoute (){
    const { num } = useParams<RouteParams>();
    const index = parseInt(num);
    const { stories } = useContext(StoryContext);

    const next = `/stories/${index + 1}`;
    const previous = `/stories/${index - 1}`;

    const title = stories[index].title
    const adj = stories[index].words[0];
    const adj2 = stories[index].words[1];
    const adj3 = stories[index].words[2];
    const feeling = stories[index].words[3];
    


    return (
        <div className="ViewStory">
            <h2>{title}</h2>
            <p> This is a <span className="insert">{adj}</span> story about <span className="insert">{adj2}</span> things.</p>
            <p>It's not very <span className="insert">{adj3}</span>, but I bet it'll make you feel <span className="insert">{feeling}</span>.</p>
            
            <nav>
                {index > 0 && <Link to={previous}>Previous Story</Link>}
                {index < stories.length - 1 && <Link to={next}>Next Story</Link>}
            </nav>
        </div>
    )
}

export default ViewStoryRoute;