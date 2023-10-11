<!-- .slide: data-transition="slide" data-auto-animate -->
# Gitattributes

notes: it applies certain attributes or metadata to files for git

***

<!-- .slide: data-transition="slide" data-auto-animate -->
# Gitattributes

```sh
# .gitattributes

file-path    attribute
```

note: actually a lot of interesting features around changing git's handling of different files

***

<!-- .slide: data-transition="slide" data-auto-animate -->
# Gitattributes

```sh
# .gitattributes

file-path    export-ignore
```

An ignore file for your development files <!-- .element: class="fragment" -->

***

<!-- .slide: data-transition="slide" data-auto-animate -->
# Gitattributes

```sh
# Ignore all test and miscellaneous support files
/.*                 export-ignore
/CHANGELOG.md       export-ignore
/CODE_OF_CONDUCT.md export-ignore
/CONTRIBUTING.md    export-ignore
/phpstan.neon.dist  export-ignore
/phpunit.xml.dist   export-ignore
/test               export-ignore
```

***

<!-- .slide: data-transition="slide-in fade-out" -->
# Gitattributes

![ConsoleColor repo downloaded without gitattributes](../img/gitattributes-before.png)
<!-- .element: class="r-stretch" -->

***

<!-- .slide: data-transition="fade-in slide-out" -->
# Gitattributes

![ConsoleColor repo downloaded with gitattributes](../img/gitattributes-after.png)
<!-- .element: class="r-stretch" -->
