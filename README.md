Systems Department Website
===

Install prerequisites:

* Node v.6.9.5 (important!)

To develop:

* `npm run dev`

To deploy:

* `npm run build` annd deploy the `dist` folder

For deployment - also set up a cronjob for `node index.js --no-rebuild`
in the `_drive` folder

TODO: Rewrite build system, make it more generic