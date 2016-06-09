# cmpg (Component Generator)

This is an ultra-simple cli tool for generating Angular2 component scaffolding.
Currently my personal template is hard-coded, but a good enhancement would be
to somehow allow different template files to be specified.

### Usage

This is not currently published on npm since I feel it is currently too trivial (too trivial for npm, you say?)..

But it can be used like this:

1. Clone this repo.
2. `npm install -g [path just installed under]`
3. `cmpg my-component`


That will generate a TypeScript, HTML and SASS file named according to
the argument passed.

If the templates are not to your liking, just go in `templates/` and
edit away. Make sure to run step 2 again after making any changes.

That's it.

License: MIT