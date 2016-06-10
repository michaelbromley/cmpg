# cmpg (component generator)

This is an ultra-simple cli tool for generating Angular2 component scaffolding, with naming conventions 
taken from the [Angular 2 Style Guide](https://angular.io/styleguide)


### Templates
Currently the templates reflect my personal use-case, which is a webpack-based build using
Sass for styles. A good enhancement would be to somehow allow different template files to be specified.


### Usage

This is not currently published on npm since I feel it is currently too trivial (too trivial for npm, you say?).

Requires Node v4+

But it can be used like this:

1. Clone this repo.
2. `cd [repo dir]`
3. `npm install -g .`
4. Go to the new component location, e.g. `myapp/src/components/my-component`
3. `cmpg my-component`


That will generate a TypeScript component, test, HTML and Sass file named according to
the argument passed:

`> cmpg foo-selector`

result:

```
./
  |- foo-selector.component.ts
  |- foo-selector.component.spec.ts
  |- foo-selector.component.html
  |- foo-selector.scss
```

The TypeScript file will look like this:
```TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'foo-selector',
  template: require('./foo-selector.component.html'),
  styles: [require('./foo-selector.scss').toString()]
})
export class FooSelectorComponent {
}
```

If the templates are not to your liking, just go in `templates/` and
edit away. Make sure to run step 2 again after making any changes.

That's it.

License: MIT
