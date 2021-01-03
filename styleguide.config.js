const path = require('path');

const theme = {
  color: {
    // baseBackground: '#252525',
  },
  fontFamily: {
    base: "'Marianne', sans-serif",
    monospace: 'Monaco, Menlo, Courier, monospace',
  },
};

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'file-loader'],
        },
        {
          test: /\.woff2$/,
          use: ['file-loader'],
        },
        {
          test: /\.css$/,
          use: ['css-loader'],
        },
      ],
    },
  },
  components: 'src/components/**/[A-Z]*.js',
  styleguideComponents: {
    // StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuide'),
    // TableOfContentsRenderer: path.join(__dirname, 'styleguide/components/TableOfContents'),
    Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@folland87/puzzle';`;
  },
  title: 'Puzzle',
  styleguideDir: 'build',
  // usageMode: 'expand',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  theme,
  sections: [
    {
      name: 'Getting started',
      content: 'README.md',
      sectionDepth: 0,
    },
    {
      name: 'Composants UI',
      sectionDepth: 1,
      content: 'src/components/README.md',
      components: 'src/components/**/[A-Z]*.js',
    },
    {
      name: 'Hooks',
      sectionDepth: 1,
      content: 'src/hooks/README.md',
      components: 'src/hooks/**/use*.js',
    },
  ],
};
