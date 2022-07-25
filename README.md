# Some notes

# Typescript

I use Typscript for better code quality and easier coding. I admit that with limited time I resorted to "any" as a quick bailout on occasion :)

# State

I do do not use a global state. I store all news items in a state variable "cachedNews" which is the global reference throughout the session.
To persist between state between sessions we could have saved this variable into local storage. Alternatively saving the same variable in an atom and using recoil-persist would also give us a persistent global state.
For this project I opted for the simplest way. Neither context nor recoil were really needed here.

# 3rd party plugins

day.js for handling dates. It is more lighweight and more efficient that moment.js.
nanoId for unique ID generating. It is smaller and faster than uuid. I like the use of unique IDs to hook into data generated items in the dome. In this small project I could also simple have referred to array iterators.

# Testing

I tend to put the emphasis on e2e tests as that is how the user will use the site
I did not mock or stub the API call as it's only 1 call on a local host

In Cypress use cy.wait for 2 reasons:
1: it helps me see what's going on and debug 2. give it a moment to wait for data

# Lighthouse

Lighthouse scores 100/100 mobile andesktop :) (throughout except peroformace due to it running on local host before being compiled)

#If I had more time:

- read and fav status are not reversible, they should be a toggle, not just a setState
- search doesn't work when you backspace what you have typed already
- suggestions for search
- it could look at little mnore attractive
- ... an app is never "done" ... :)
