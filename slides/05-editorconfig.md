<!-- .slide: data-transition="slide" -->
# Editorconfig

- <!-- .element: class="fragment" --> <code>.editorconfig</code> at the root of your project
- <!-- .element: class="fragment" --> Modify editor settings of your contributors
- <!-- .element: class="fragment" --> Simple <a href="https://editorconfig.org/">specification</a> (editorconfig.org)
- <!-- .element: class="fragment" --> Especially useful for files that aren't checked by your style utility (configs, <code>*.xml</code>, <code>*.yml</code>, etc)
- <!-- .element: class="fragment" --> Not necessarily a silver bullet

***

<!-- .slide: data-transition="slide" -->
# Editorconfig

```ini [1-6|8-12|14-15]
[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
charset = utf-8
indent_style = space

[*.{xml,xml.dist}]
indent_size = 4

[*.{yml,yaml}]
indent_size = 2

[Makefile]
indent_style = tab
```

note: editor config looks at file patterns and then applies rules to files that match that pattern
"*" applies to ALL files so it sets our baseline rules
drill down and apply more specific rules based on file extension
