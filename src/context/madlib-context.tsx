import { createContext, ReactNode, useState } from "react"
// import ListStoriesRoute from "../components/ListStoriesRoute";
import Story from "../model/Story";

// Lists what is going to be in our context
interface StoryContextValue {
  stories: Story[];
  addStory(story:Story):number
  
}

// necessary to provide blank/default values
const defaultValue: StoryContextValue = {
  stories: [],
  addStory:()=> 0
}

// Here is the actual context object.
export const StoryContext = createContext(defaultValue);



export function StoryContextProvider({ children }: { children: ReactNode }) {
  const [ stories, setStories ] = useState<Story[]>([
    {title:"A Blue Story by Sam", words:["red", "yellow", "green", "blue"]},
    {title:"A Hungry Story by Heather", words:["weird", "smooth", "windy", "hungry"]}
    
  ]);

  function addStory(story:Story):number {
        setStories(prev => {
          const newStories = prev.slice(0);
          newStories.push(story);    
          return newStories;});
        return (stories.length);                

}

  return (
    <StoryContext.Provider value={{stories, addStory}} >
      {children}
    </StoryContext.Provider>
  );
}
