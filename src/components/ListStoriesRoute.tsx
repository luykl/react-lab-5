import { useContext } from 'react';
import { StoryContext } from '../context/madlib-context';
import { Link } from 'react-router-dom';
import Story from '../model/Story';


function ListStoriesRoute () {
    const {stories} = useContext(StoryContext);

    


    return (
        <div className="ListStories">
            <ul>
            {stories.map(story => 
             <li key={stories.indexOf(story)}><Link to={"stories/" + stories.indexOf(story)}>{story.title}</Link></li>   
                )}

            </ul>
        </div>

    )
}

export default ListStoriesRoute