# Playing with Context

This project was created using `create-react-app`.

The focus of this project is to have some fun with the new React Context API (new as of React 16.3alpha). 

## Findings

This new API is great.

* It saves time on passing props 3 or 4 levels deep, and keeps all state as high as possible.
* It emulates how Redux keeps state out of the natural flow of the component tree and stores it all in one place.
* Any `setState` methods all go into one object, along with any default values of state
* It integrates seamlessly into React's flow. You still have access to standard state and props, while still managing information that is meant to permeate the entire app, like `handleChange` methods and other ways of setting state.

## Next Steps

As I play around with this more and more, I'll be sure to see what other things I can do with it.

One thing that I've noticed is that interactions between context and the life cycle methods are a little tricky to wrap one's head around. Basically, what needs to happen is the context store needs some sort of `setState` method that is passed as a prop to the component that is making the interaction between the life cycle and context. The method from the context store (which is now a prop in a the component that is about to invoke a life cycle method) is called in the life cycle, and then that method mutates the context. This is important for things like external API calls and interactions with third-party libraries or JSON dumps. 

