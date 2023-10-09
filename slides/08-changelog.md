<!-- .slide: data-transition="slide" data-auto-animate -->
# Changelog.md

[KeepAChangelog.com](https://keepachangelog.com) <!-- .element: class="fragment -->

- <!-- .element: class="fragment" --> Changelogs are for humans, not machines.
- <!-- .element: class="fragment" --> There should be an entry for every single version.
- <!-- .element: class="fragment" --> The same types of changes should be grouped.
- <!-- .element: class="fragment" --> Versions and sections should be linkable.
- <!-- .element: class="fragment" --> The latest version comes first.
- <!-- .element: class="fragment" --> The release date of each version is displayed.
- <!-- .element: class="fragment" --> Mention whether you follow <a href="https://semver.org/">Semantic Versioning</a>.
  - <!-- .element: class="fragment" --> ...which you definitely are, right?

***

<!-- .slide: data-transition="slide" data-auto-animate -->
# Changelog.md

- <!-- .element: class="fragment" --> <code>Added</code> for new features.
- <!-- .element: class="fragment" --> <code>Changed</code> for changes in existing functionality.
- <!-- .element: class="fragment" --> <code>Deprecated</code> for soon-to-be removed features.
- <!-- .element: class="fragment" --> <code>Removed</code> for now removed features.
- <!-- .element: class="fragment" --> <code>Fixed</code> for any bug fixes.
- <!-- .element: class="fragment" --> <code>Security</code> in case of vulnerabilities.

***

<!-- .slide: data-transition="slide" data-auto-animate -->
# Changelog.md

```markdown [1-5|7|9-13|16]
# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/bbatsche/Verify/compare/3.2.0...master)

## [3.2.0](https://github.com/bbatsche/Verify/compare/3.1.1...3.2.0) - 2023-08-18

### Added

- `property()` and `propertyName()` methods - [#98][PR98]
...

[PR98]: https://github.com/bbatsche/Verify/pull/98 "Deprecate Attribute"
```
