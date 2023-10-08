<!-- .slide: data-transition="slide" -->
# Git Hooks

- <!-- .element: class="fragment" --> Perform actions when <code>git</code> commands are executed
- <!-- .element: class="fragment" --> Validate code prior to <code>commit</code> or <code>push</code>
- <!-- .element: class="fragment" --> Enforce style on commit messages
- <!-- .element: class="fragment" --> Difficult to set up

***

# Git Hooks

- <!-- .element: class="fragment" --> Use a language specific tool to install them (e.g. <a href="http://captainhook.info/">CaptainHook</a>)
- <!-- .element: class="fragment" --> Use judiciously (double edged sword)
  - <!-- .element: class="fragment" --> Limit to quick, simple checks
  - <!-- .element: class="fragment" --> Try to target only modified files
