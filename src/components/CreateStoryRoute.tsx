import { FormEvent, useContext, useState } from 'react';
import { StoryContext } from '../context/madlib-context';
import Story from '../model/Story';
import { useHistory } from 'react-router';




function CreateStoryRoute() {

    const { addStory } = useContext(StoryContext);
    const history = useHistory();

    const [ adj, setAdj ] = useState("");
    const [ adj2, setAdj2 ] = useState("");
    const [ adj3, setAdj3 ] = useState("");
    const [ feeling, setFeeling ] = useState("");
    const [ name, setName ] = useState("");

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        const story:Story = {
            title: `A ${feeling.charAt(0).toUpperCase() + feeling.slice(1)} Story by ${name}`,
            words: [adj, adj2, adj3, feeling]
        };
        
        const num = addStory(story);
        history.push(`/stories/${num}`);
        
        
        
        
    }

    return (
        <div className="CreateStory">
            <form onSubmit={handleSubmit}>
            <p><label >Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></label></p>
            <p><label >Adj: <input type="text" value={adj} onChange={(e) => setAdj(e.target.value)}/></label></p>
            <p><label >Adj2: <input type="text" value={adj2} onChange={(e) => setAdj2(e.target.value)}/></label></p>
            <p><label >Adj3: <input type="text" value={adj3} onChange={(e) => setAdj3(e.target.value)}/></label></p>
            <p><label >Feeling: <input type="text" value={feeling} onChange={(e) => setFeeling(e.target.value)}/></label></p>
            <button type="submit">Create Story</button>


            </form>

        </div>
    )
}

export default CreateStoryRoute;