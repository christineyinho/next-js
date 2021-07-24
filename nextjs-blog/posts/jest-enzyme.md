---
title: 'Unit testing React components using Jest/Enzyme'
date: '2021-07-24'
---

<ol>
<li>You should aim to test components with shallow whenever possible
    <ul>
    <li>This will keep the test as narrow as possible</li>
    <li>Testing the only necessary component and not the child/parent component</li>
    </ul>
</li>
<li>Using .instance() to get into the component methods</li>
<li>Another way to propogate to compoennt methods is using jest.spyOn(Input, "componentDidMount")</li>
<li>Try not to test connected components, but instead export the Class or Function, this will keep the test as small as possible, without having to mock the functionality of redux
</li>
<li>In order to simualte change, click events on component
    <ul>
    <li>Ensure the selected element within the component has been selected</li>
    <li>This might be .first() or .at(1) to select the appropriate element, or if there is a map of multiple elements that will be created by component to select only one</li>
    <ul>
</li>
<li>Testing of specific components
    <ul>
    <li>To test specific components use `npm run test /path/to/component`</li>
    <li>To test all files under a folder use `npm run test /path/to/folder` this will however not test the subsequent child imported components that live outside of this folder</li>
    </ul>
</li>
<li>Stringify wrapper to get text from rendered component in order to use .toContain() to find specific text without checking entire html content
    <ul>
    <li>Otherwise you can use .html() in order to compare the entire html render</li>
    </ul>
</li>
<li>Test coverage on specific components
    <ul>
    <li>`npm run test /path/to/component -- --coverage`</li>
    <li>This can cause issues if you are attempting to see coverage on everything related to this component and it's child components, so be careful when attempting to use this for stats</li>
    </ul>
</li>
</ol>