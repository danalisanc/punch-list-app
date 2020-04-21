This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Design Discussion


1. How do you break your app into components?

   - I considered the possible interactions between the different parts of the page. Depending on the complexity I used multiple components in the different parts of the page and have them communicate between each other using the App component.

   - I follow a simple rule when it comes to repetitiveness. If you need to copy something for the third time, then it needs to be extracted and create a component. That's when I decided to create a ListItemCard component since it was being used repetitively to show punch items.

   - When the component was getting too big is when I noticed the render function was large. I knew I should break up the component looking at the number of props or items in state if the component was taking many different props.

2. How do you manage state and data flow?

   - In the Punch List Application I used **props** to pass to Presentational Components such as my PunchList component. This one way of data flow to show how it passes from parent to child.

   - In my PunchListModal component it held a form where I used **state** to store data that could change in the form. This was used to keep track of inputs that are being tracked and can be changed on the form.

   - In a real application I would have used Redux to manage the data. Using reducers and actions that would contain the related code and map state to props using react-redux.

3. What would you have done differently in a real application?

   - Build tools and linting to keep code commits and code review clean.

   - Have folders for "container" and "presentational" components.

   - Group  components based on the areas of the application that they are used, along with a core folder for common components that are used throughout (buttons, headers, footers --- components that are generic and very reusable).

     i. Categorizing into folders of components with the same area of the app that they are used for.

   - Use prop-type by declaring the names and types of expected props, along with whether they are optional or not. This will help working with many components that and their properties, and spend less time debugging if forgotten a property name or have given it the wrong type.

   - Use Redux to manage the data in our application. Use reducers and actions to contain related code.

     i. Keeping your logic out of components and into actions can help with:

      1. test the code in isolation without needing to render any React components

      2. in your React components, you can stub the services to behave and return the data you want for the specific test.

     ii. Debounce - debouncing is a technique to prevent the event trigger from being fired too often.

   - Have a test folder that contains all the test for all components. And keep them in line with your src file structure.

4. How would you handle performance if we needed to hypothetically render thousands of calendar events in this grid?

   - Use more function components that would prevent constructing class instances while reducing the overall bundle size as it minifies better than classes.

   - Avoid Inline Function Definition in the Render Function. An arrow function will create a new instance of the function on each render if it's used in a JSX property. This might create a lot of work for the garbage collector.

     i. Instead of defining the inline function for props, you can define the arrow function.

   - Don't initialize state with props which can be changed later. Instead, use props directly in the component.

   - If using React Redux I would use **Reselect** which is a simple selector library for Redux, which can be used for building memorized selectors. You can define selectors as a function, retrieving snippets of the Redux state for React components. With Reselect will return the last function result until it is passed new inputs.

5. How would you go about measuring the performance of this application using the Chrome DevTools?

   - [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) and [React Component Profiling](https://facebook.github.io/react/blog/2016/11/16/react-v15.4.0.html) 

     - Chrome Developer Tools

        i. The Performance option uses application profiling to generate a timeline of events and associated attributes to provide a very detailed picture of application activity and performance at any point in time.

6. Do you have a sense for UX?

   - UX Design Tips I have learned

     i. Better the appearance of the app, better the user experience would be. By keeping simple UI components this will increase the UX.

     ii. Keep customer involved from the beginning and get feedback every iteration. Understand the customer needs and demands.

     iii.  Maintain consistency of the user flow throughout the application.

   - Accessibility is very important

     i. I always make sure that everyone has access to the application and create regardless of ability, context, or situation. Making the application brings a better experience to everyone.

   - In my application I created a styles folder that will contain all style sheets, such as global style sheets and component style sheets.

   - SCSS - SCSS offers variables, you can shorten your code by using variables. It is a great advantage over conventional CSS.

      i. SASS allows us to use nested syntax. Let's say if you have to style a specific 'paragraph' in 'div' in 'footer' you can definitely do that by SASS.

7. Tradeoffs

   - I focused more on giving a minimum viable product (MVP) app on react to show the ability to add a new punch list. The 3 main features I accomplished:

     i. Ability to show Map of punch items

     ii. Ability to view punch task details

     iii. Ability to add punch list item to the map

   - Focusing more on componentizing the application and having a simple and clean code base.

   - Styling is something I focused on with Semantic UI and using componentized frameworks to get my style across the app.

   - Testing was something that I didn't have time for, but I do suggest testing should be done early in the process and can be done at any time of the app development process.

     i.  Automated react testing was something I was striving for and knew I needed to build a standard for testing procedure at the beginning.

8. Design Decisions

  

- File structure --

       components/

            shared/ -- shared components with the parent,

            App.js  -- parent component

            PunchList.js -- punch list component to list out all punch list items

            PunchListModal.js -- punch list modal form to add a new punch list

       data/

            mockPunchList.json -- mock database json file

      styles/  -- folder that holds all css style sheets and logo

      test/ -- folder that hold test to each of the components

        App.test.js

- In the application I chose to go with **React** Framework for my SPA. I will share some reasons why I chose to go with this framework.

   i. **Easy to use** - Easy to use the component-based approach to build a website or mobile application.

   ii. **Components can be reused** -- React allows to create reusable components that can simplify the app development process. This allows to reuse code that enables to grow and maintain the codebase clean.

  iii. **Debugging Tools** -- Lots of chrome extension tools sets to allow to debut and inspect components easily.

   iv. **Performance** -- React is known for creating complex applications that update the DOM using a virtual DOM, an efficient difference algorithm will then consider the changes and implement the changes.

- For the map framework I used Google Maps Platform -- Google Developers Tool

   i. The **Maps JavaScript API** let me customize maps with my own content and imagery for display on the web page.

   ii. Has a Map component that can easily be added to your React app that takes in some optional props such as style, Zoom and initialCenter.

   iii. I used Marker and infoWindow components to display values of the different punch list items I had in the data.

- For the componentized UI Framework I used Semantic UI. Semantic UI React helped me provide several prebuilt components that I used to speed up the development process by having UI components ready to be used.

  

- In my application I broke the components into a 3 High Ordered Components (HOC) and a shared components folder.

  
  - HOC components are the components that render large portions of the applications

  

    1. For Example: PunchList component that subscribes to the parent data source to render a list of punch list items.

  

   - Shared components are components that will be used throughout all the app. Such as the Header and Footer which will be found in all pages.

  

- For data flow and state management I used props and state.

  

	i. In the Punch List Application I used **props** to pass to presentational components such as my PunchList component. This one way of data flow to show how it passes from parent to child.

  

	ii. In my PunchListModal component it held a form where I used **state** to store data that could change in the form. This was used to keep track of inputs that are being tracked and can be changed on the form.