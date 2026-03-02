# Virtual DOM

The **Virtual DOM (VDOM)** is a lightweight, in-memory representation of the real **Document Object Model (DOM)** used by libraries such as React to efficiently update user interfaces. Instead of directly manipulating the browser’s real DOM, which is computationally expensive, React first performs updates on this virtual representation stored as JavaScript objects in memory.

When the state or properties of a React component change, React creates a new Virtual DOM tree representing the updated interface. This new version is then compared with the previous Virtual DOM using a process known as **diffing**. After detecting differences, React updates only the necessary parts of the real DOM through a process called **reconciliation**, minimizing costly rendering operations.

This optimization improves performance because direct DOM manipulations may trigger browser operations such as layout recalculation, repainting, and reflow, which are significantly slower than operations performed in memory.

---

# Virtual DOM and `map()`

In React applications, dynamic lists are commonly rendered using JavaScript’s `Array.map()` function. The `map()` method transforms data arrays into collections of UI elements.

Each execution of `map()` generates a new set of React elements that become part of the Virtual DOM tree. During reconciliation, React compares the previous list with the newly generated one to determine which elements were added, removed, or updated.

The **`key` property** allows React to uniquely identify list elements so that it can correctly track changes between Virtual DOM versions. Without keys, React may unnecessarily recreate elements instead of updating existing ones, reducing performance efficiency.

---

# Virtual DOM and `memo`

While the Virtual DOM already optimizes updates, React components may still re-render unnecessarily when their parent components re-render.

This is where `memo` becomes important. `React.memo` is a higher-order component that memoizes a functional component and prevents it from re-rendering if its props have not changed. React performs a **shallow comparison** of props and skips rendering when values remain the same.

When used together with the Virtual DOM:

- React generates a new Virtual DOM tree.
- During comparison, memoized components whose props remain unchanged are skipped.
- Fewer components participate in reconciliation.
- This results in a decrease in real DOM updates.

This mechanism significantly improves performance, especially in large lists rendered with `map()`, where many child components may otherwise re-render unnecessarily.

---

# Team Collaboration

- **Anett Martínez** – Likes counter for each element  
- **Sarah Gutiérrez** – Add and delete elements  
- **Héctor Ayala** – Added navigation  
- **Annete Cedillo** – Fixed counter  
- **Monserrat Morales** – Added invert list  

---

# References

- GeeksforGeeks. (2026, January 10). *ReactJS Virtual DOM*. GeeksforGeeks.  
  https://www.geeksforgeeks.org/reactjs/reactjs-virtual-dom/

- React. (n.d.). *Lists and Keys*.  
  https://legacy.reactjs.org/docs/lists-and-keys.html

- GeeksforGeeks. (2025, July 23). *How to use map() to Create Lists in ReactJS?* GeeksforGeeks.  
  https://www.geeksforgeeks.org/reactjs/how-to-use-map-to-create-lists-in-reactjs/

- React. (n.d.). *memo*.  
  https://react.dev/reference/react/memo