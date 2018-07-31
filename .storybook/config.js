import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context(
    '../components',
    true,
    /.+\/__stories__\/.+\.js/
  );

  req.keys().forEach(req);
}

configure(loadStories, module);
