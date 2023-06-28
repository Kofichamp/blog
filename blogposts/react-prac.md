---
title: '18 Best Practices for React'
date: '2023-06-24'
---

React is one of the most popular techs when talking about JavaScript. Even for some developers, it’s the best. React doesn’t force you how to structure your project. It’s completely up to you to choose how do it. As a result, that makes some developers bring the artistic sense out of them. But, on the other hand… others can make a mess. When working as a team, it’s better to make an understandable structure and code.

In this article you’ll explore 18 tips about how to code better in React.

1 — Avoid local state as much as possible

In case you have some calculations, avoid putting the result in a local state and rendering that state later in the JSX. Instead, move your calculations in the JSX, or create a function that returns the result and put it in the JSX.