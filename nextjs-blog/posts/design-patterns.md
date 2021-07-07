---
title: 'Brown Bag: Design Patterns'
date: '2021-05-07'
---

Brown bag presentation:
https://docs.google.com/presentation/d/18AbV1QA3GVFPOwn_gep9sZpDJlJxyGGQwPrjLPe2sq8/edit?usp=sharing

Design patterns in front end development:

So design patterns, in software engineering design patterns are reusable solutions to common problems. Common “problems” that we encounter include firstly, properly creating a class or objects, instantiating an object, and how to interact between objects. Another problem is writing loosely decoupled code, so code that is not dependent on each other so they do not need to know about each other to run), and lastly another common issue we run into is how to write reusable code.

Why do we use design patterns to combat these issues?
Using design patterns makes reading and writing code easier and faster, as a pre templated solution already exists.
As design patterns create a common language between developers, it improves the communication between developers, it makes it easier for developers, code reviewers and future developers who will read the code to understand.
The complexity then just lies in the business logic

There are a number of design patterns which can be grouped into categories creational, structural, behavioural.
Creational type being patterns which are used for class or object instantiation
Structural type is around classes or object structure and composition, increasing the functionality without changing its composition (made of variables and functions).
Behavioural types are how one class communicates with another.

But today I will focus on creational design patterns, module design pattern, singleton and one structural design pattern called decorator, as well as common React design patterns.

So, a module pattern is writing code that has independent, interchangeable modules, so that each contains everything necessary. In javascript it is used to define an object, wrapping a set of variables and functions together in a single scope.

Module pattern allows us to expose certain properties and functions as public, and can restrict the scope of properties and functions within the object itself, making them private. Private variables are variables that cannot be accessed outside the scope of the function.

Why module pattern is used, it is used for maintainability, since all the related code can be encapsulated in a single block, it makes it easier to understand and should make code more independent of each other. 

It also increases the ability to reuse the code if they are encapsulated into blocks.

This is an example of a function in javascript following the module pattern.
This is a function with called FoodMenu, the function contains variables and returns an object literal containing name and price.
Where variables are wrapped in a function scope, the variables are only accessible if they are provided in the return, and as both of these variables are passed to the return object, they are considered public, as they will be accessible to anything outside the function scope.

If we step through the remainder of the code, you can see that console logging the food menu will return all of the data, and we can access individual data using the dot notation.

There are a few improvements to this that can be made, for example in ES6 you can use shorthand for assignments, name: name, can be converted to just name, price, as long as the value and key have the same name and exist in the same scope, it can converted to shorthand.

Module pattern provides other benefits outside of instanting an object with public variables and encapsulated it into a function scope. As mentioned before, it also allows us to create private variables.

In this example, you can see the same code as the previous slide, but this has been updated with a new variable, which is now considered private so it is inaccessible. The bottom variable foodIngredients attempting to access ingredients will return undefined.

Private variables are good for handling “sensitive data” that we don’t want to be publicly available. We can further expand on this

By adding private functionality in the function scope, 
In this instance for example, we could add a price for each of these ingredients and calculate them

Here we can use the data inside the function to calculate any number of things, which we might want to know when calculating profit/loss but not be accessible to the user, or we can expose them when necessary.

Next up is singleton pattern is the creation of one instance of a class that will exist continually in the memory of the applications life cycle.

This means that when an object has been created, it will also refer to this instance even if another is “created”, it will fallback to the very first one. 
Any repeated calls to the constructor would always fetch the same instance.
This could be used for example in the instances of app configuration, in front end development it could be the creation of the redux store, where for that component it creates the store on first load and every reference to the store will always reference that instance.

This is an example of a singleton pattern in javascript, in this example I am creating a class called Foo with a constructor that is provided a message.
In this constructor I am enforcing the singleton pattern in the if statement, with the check of the existence of Foo, and if so return the existing class. Otherwise it goes on to create the Foo class with a message.

The variable bar is setting the initial Foo class, now despite variable baz attempting to pass a new message and create a “new” Foo with the keyword new, it is unable to as the Foo class already exists, and references the existing Foo, which already has a message of bar.

Though this is a well documented design pattern, there are downsides to using a singleton pattern. This is become it can create tightly coupled code to the singleton (which as we mentioned earlier is one of the problems design patterns helps to solve)

Singletons hinder unit testing: A Singleton might cause issues for writing testable code if the object and the methods associated with it are so tightly coupled.
Singletons create hidden dependencies: As the Singleton is readily available throughout the code base, it can be overused.

Next up is the decorator pattern, decorator pattern can be seen as extensions of an object or class.
We can do this by wrapping an existing object or class and adding further functionality in this object.
The simplest form of a decorator can be seen in HTML.
We can see the usage of decorator pattern in our react components throughout the code base, most notable the container components that wrap our presentational components, which I will go into further in the react design patterns.

In this example, I have created a User function that returns variable name and a function called say.

The second function is a new object which takes in an object of user, age and job, and returns a new say function.
What this has allowed us to do is make User function reusable, and allowed us to safely extend the functionality of what User already provides.
That’s as easy as decorator pattern gets!
Finally I will get into some design patterns in React, design patterns can be more specific to your domain, and in this case React eco-systems has proposed ways to handle common problems.
In React the most common design pattern is stateless and stateful components, previously this is known as class component and a functional component, however, this is changing now due to the introduction of hooks being introduced in React 16.8 which I will explain a bit further later, but stateless and stateful component is a solid foundation to know and understand)
Another is higher order components, which is essentially a decorator pattern used to extend the functionality of an existing component)
And then finally conditional rendering.
So what is state? State in react state is simply the values that exist for that component.
The aim in React is to make as many of the components as functional components as possible, meaning we wish to make as many of our components stateless as possible, this makes the component act most predictably.

Stateless or as it previously would have been called “functional components” can be considered presentational components as they retrieve some values or take in some properties from their parent and display them, and they should always act the same way (with a few customisable parameters).

Stateless and functional components are no longer intertwined as we can have state inside a functional component that doesn’t require us creating a new class (which is just more boilerplate code that we don’t need). As React describes it, using hooks, we can “hook into” the react state and lifecycle methods.

Lifecycle methods are methods that we can call during the different rendering state of the component, for example when we are loading the campaign page there are various lifecycle methods we can call, componentDidMount() so it has been added to the DOM we can check and add additional information, or another example would be componentDidUpdate() if a property we have is initially not loaded, but once we call the backend and get the information it updates and sends through the new property and thus we can compare old and new properties in componentDidUpdate().

Stateful components are exactly what they sound like, components that have local state in order to render.

So you probably see this all over our codebase, that there are class components and functional components.
As I mentioned previously the aim is to make as many of the components functional as possible.

In this example, you can see I have made class stateful and functional stateless component which essentially do the same thing. The difference with these is how we can extend both of them.
In the stateful component, we can manipulate the component and what it renders within the component, we could add above render(), a function that called updateEatingState() and change the state to isEating true, which would update and reflect in the UI.

With the stateless component, we could still do this, however it wouldn’t be encapsulated in this function, we would have to add an updateEatingState in the parent component and re-render this component from the updated state in the parent. This can be easily done, but in a real react codebase this may be multiple levels below a parent component that holds its state which could get messy and unmanageable.

A component is a function that takes a component and returns a new component

HOC is a pure function with zero side effects, it isn’t concerned with how and why the data is used, and the wrapped component isn’t concerned with where the data comes from
HOC should not directly manipulate a wrapped component.

What HOC should not be, In this example, you can see logProps is acting as a “HOC” but it is directly manipulating the instance of it, “InputComponent.prototype” is directly manipulating the state inside the component, which is not what we want

What is should be, Instead, a HOC should look more like this, where it is passed some parameters and returns a new function, that new function can be called with another parameter. This is a pattern used throughout our code with the redux library connect HOC.

Instead a HOC should use composition, which is where container components come in, which we use across our codebase, giving us the ability to update and pass relevant data to our wrapped component as we need

HOC/container components are great for adding features to a component without altering it
This is why container components are interlinked with HOC components
Container components manage state, passing props and retrieving data from database

Lastly, we have a design pattern that acts alongside HOC.

Here you can see the container component deals with the data fetching, the data passing and state of the data, and the presentational component is a dumb component that takes whatever information it is passed, and in this scenario it takes just title and img_url.

Container components decouple the data from the presentational layer, making the code more concise and more reusable, all common problems!

In a nutshell design patterns are useful when trying to understand each others code.
It helps to have a shared understanding of the framework and shared language around how to solve a problem.
Which can help us become more efficient overtime, both in communication, problem solving and producing new features!
