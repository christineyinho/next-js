---
title: 'GraphQL and Apollo in Front End Development'
date: '2021-07-24'
---

[Brown bag presentation link](https://docs.google.com/presentation/d/1ygN_DitfapFR70n3eQjkq1zhGm2-7MoS2mvsO5s0aac/edit?usp=sharing)

Using apollo and graphql in front end development

So before we get into Apollo, we’ll need a quick overview of what graphql is.
Graphql is a query language for API’s, meaning it is used for reading and writing data. This means it replaces the use of REST API’s. The differentiation is that Rest API’s are organised into endpoints, but graphql is organised into types. This type system allows you to define a schema (similar to designing a schema for a database).

What we really need to know is that it specifically allows the client to request for only the data that is necessary for our purposes, in their own words, “get exactly what you need, nothing more and nothing less.”.
I won’t get into how it works, as that would probably best be suited for another brown bag, but it essentially is a collection of data, made up of (nodes) objects and each node is connected by an edge (a relationship), as you can see in the image below.

This leads me to the benefits of using graphql, it allows us to evolve our API over time. We can Add new fields and types to your GraphQL API without impacting existing queries. 

It has one single endpoint, so clients don’t have to figure out how to use a new endpoint every single time new functionality is created. As we would with a Restful api endpoint, we’d have to figure out the path, the necessary data needed. With graphql this can all be done using one endpoint, and we can query whatever type and field we can find.

As mentioned before it eliminates the need for over fetching or under fetching of data, meaning there’s no redundant data (a good example of this would be huge payloads that exist such as the campaign data on campaign page, some of which may not be used).

There’s also a bunch of tools available where the schema documentation is available to view. Google chrome plugins, their own UI interfaces that also help you pre-populate the data etc.

We can deprecate fields by adding deprecated flags to them (which will communicate with the client when they’re using the field that it will be deprecated, so for large teams this would be beneficial). So you can communicate deprecated fields in the query.

Other benefits include batching, so previously when retrieving data using REST api would mean if you wanted to make a request for two different things, say donation, campaign, you would have to make two different endpoint calls, but with graphql you can make one call and have it batched all together. This can be written all together, or it can be two separate requests that we’ve made but if it all gets called within 2s of each other it will get batched together into that one request, allowing us to retrieve many resources in a single request.

There are a couple of disadvantages of using gql
Firstly, just as a rest api would fail if something is wrong, a failed graphql query causes the entire payload to fail. These errors could could be syntax errors, where the query isn’t quite what it’s supposed to be,
Or a field that doesn’t exist in gql would return a validation error, or a resolver error where when we go to get the data and it’s failed in attempting to retrieve information for that field, and these can all cause the payload to fail, by default this is how GQL handles failures. Although we can mitigate this sometimes by having resolver errors which may return partial data.
The next drawback is that a failed gql will still return a 200 response if it’s not to do with connecting to the server. So if a malformed query get’s sent and an error returns, you’ll have to have an error handler specifically for the response in that 200, as opposed to using http response status code.
So what is apollo, primarily it is used as a connection between the application clients and back-end services, facilitating the flow of data between them. But apollo also provides a service called “apollo-server” to build graphql schema, but if you have an existing graphql schema, you can simply use apollo to connect to that.

Apollo client is most importantly what we use to make working with React and graphql together much easier.

Benefits of using apollo, apollo has built in tools which make it extremely simple to view and test the types and fields.They also have a bunch of other tools that include browser extensions to view and test the data. I’ll have to get an example up later and send it in dev, as this currently doesn’t work as it only works over HTTP.

Apollo-client comes with hooks which makes our life a lot easier when implementing queries and mutations in our react functions. 

It sets up an in-memory cache by default, which is helpful for storing our app data locally. We can read from and write to our cache to prevent having to execute our queries after our data is updated.
Subscriptions, like regular queries, subscriptions allow you to fetch data. Unlike queries, subscriptions are long lasting and can change their result over time. They can maintain an active connection to your gql server, enabling the server to push updates to the subscriptions result. So instead of using our current system of pusher, Apollo would allow us to “subscribe” to updates of the data, enabling new or updated data to be immediately updated to users without having to re-execute queries or update the cache.
In order for us to get this to work in our editor though, we would have to make some changes to what we send/receive from the backend, as subscriptions are not really made for staying up to date with large objects, but rather small incremental changes to one particular field as they change.
Drawbacks of using apollo, it’s another layer on top of graphql that you have to learn the syntax for and learn the middleware necessary (apollo-link) but once it’s setup it’s available across your app if you want it to be.
Another drawback is that it adds quite a few additional packages to your bundle, and as we know with a bigger bundle may mean more time to download the resource.
Another drawback is that it’s a new and evolving ecosystem, so it’s constantly under development. This can sometimes lead to very little errors that can’t be easily debugged or resolved within a timely manner. (This can sometimes be the use of the hooks, and sometimes this can be the methods used for unit testing). Though most of the documentation is great, if there are issues it is difficult to find many other people facing the same issue, and the error messages (in my experience using the testing capabilities) have been lackluster and make it very difficult to pinpoint the actual issue.
For example an issue that you can face in apollo is that you can mock the data that returns from your request, but if it doesn’t exactly match what you have in the gql query, there is no error message, instead it will return undefined, which is unhelpful in terms of debugging.
So now we’ve been over what apollo is and the usage of it, here’s a demo on how to set it up. After installing relevant dependencies, and scaffolding of your project is done you can simply create a new file and set up one single file that will act as the connection, creating a new client and connecting it to your intended endpoint.
After we’ve set up the connection to our endpoint, we will have to import a context provider from apollo-client called ApolloProvider. This works in a similar way to React context API (provides a way to pass data through the component tree without having to pass props down manually at every level), however this has a special prop called “client” specifically made to accept the apollo client.
Now that the connection is sorted, this is how we actually interact with the graphql endpoint that’s been created using apollo.
There are three ways to interact with graphql, queries which act as a GET request, mutations, acting as POST request, subscriptions which acts as websockets service. 
We can use apollo client directly to make queries/mutations and subscriptions such as the below example. In this example we have called the client, which we created earlier that was connecting to the endpoint. We’ve then called the method “query” and passed a query name (this is a name we define which I will show in the next slide) and as a secondary parameter we can pass variables, similar to how you would have params in url string to a regular REST api call.
Query will then return a promise which we can use for whatever purposes we need it for. Again similar to a regular Request for REST api endpoints.
Now that we’ve created a client query, we’ll have to actually define what we want to query, so we’ll have to define what GET_FOOD_DIARY is.
Get food diary has to be an operation written in gql syntax, so in this example this example could live inside a js file, which is why we can use const variable declaration GET_FOOD_DIARY and then wrap it in a gql function. In order to write gql in a javascript file we’ll have to use an import form apollo client, but we could easily change the file to be .gql extension and we can remove the variable declaration of GET_FOOD_DIARY completely.
As we mentioned before the good thing about using gql is that we can query any data from diary that we want, in this instance diary could have a number of other fields such as meals could contain snacks, or entries could contain weight, but because we don’t want to know that information we don’t have to query it. Unlike in a regular REST api call, all that additional data would come down and we’d have to manually filter it if it was an issue.
This means I know exactly what to expect when the data returns from gql.
So that leads me to how to interact with gql, apollo and react all together. Apollo client provides us a convenient way to interact with gql queries and mutations and that involves react hooks. As a brief overview, react hooks provide functionality for state and lifecycle methods in a functional component that were previously only available for class react components, so it reduces the boilerplate code needed if we just want to use simple lifecycle methods and keep our components as clean as possible.
The hooks that apollo client provides us work exactly the same way as client.query() that we looked at earlier, client.mutation would also work in the same way. Although instead of returning a promise, the hook returns an object that we can easily destructure values from, destructuring means a way of extracting multiple values from data stored in objects and arrays. In the instance of the query, this object contains loading, error and data. 
So the three main hooks that are available to use in apollo-client are useQuery, useMutation and useLazyMutation.
As mentioned before, useQuery would be used in a react functional component, and would run as soon as component is loaded and on every time a component get’s re-rendered.

Here’s an example of useMutation, now with useMutation, this would only be called when we explicitly call it. So here I’ve got an example again which would live in a react functional component. I've given it the name of updateFoodDiary which would be available to the entire component, and this can either be called somewhere in the component or passed down as a callback function into a child component. Here I would be able to call a useMutation hook and call a gql mutation called UPDATE_FOOD_DIARY which would likely be defined in another file. We would pass the variables of what we wanted to update at the time of calling the function, so here I am calling updateFoodDiary which is what I would want to be updated. This can look vastly different depending on how your gql types and fields are created, so this isn’t too important.

On the left hand side we have useLazyQuery, similar to useMutation, useLazyQuery will only be used if we explicitly call it.
The main difference between these are that useQuery and useMutation will return a promise, however useLazyQuery does not have this option as it is handled synchronously, useLazyQuery also does not return an object, but instead an array which we can also destructure. The array is composed of the first param being a name of the function you will define, and then just like the other hooks, the second param is the object containing loading, error and data, this also contains an additional property named “called”, so we can figure out whether we have actually used it or not.

Now that we’ve created those queries and mutations, we’ll have to have a way to be able to test our components that have apollo hooks. So in order to add unit tests we can use <MockedProvider> that acts as <ApolloProvider> that connects to the gql api endpoint, if you remember earlier, this would have apollo provider and would have been passed a client, MockedProvider acts as this so we don’t have to actually set anything up.
This then loads our component with the data that we provide in the data.
We can also mock errors from gql endpoint from this by passing result: { errors } instead of data, and that’s how we test apollo wrapped components, but as mentioned earlier this isn’t quite perfect yet and has its drawbacks, but for the most part it allows us to test our components correctly.

