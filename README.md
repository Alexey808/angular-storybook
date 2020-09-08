# AngularStorybook

### Подключение storybook
`npx -p @storybook/cli sb init`  

### Подключение шрифтов
```scss
// app/styles/fonts.scss
@font-face {
  font-family: 'percolate';
  src: url('/assets/icon/percolate.eot?-5w3um4');
  src: url('/assets/icon/percolate.eot?#iefix5w3um4') format('embedded-opentype'), url('/assets/icon/percolate.woff?5w3um4')
  format('woff'), url('/assets/icon/percolate.ttf?5w3um4') format('truetype'), url('/assets/icon/percolate.svg?5w3um4')
  format('svg');
  font-weight: normal;
  font-style: normal;
}

// styles.scss
@import "app/styles/fonts";
```

### Добавление шрифтов и иконок

`npx degit chromaui/learnstorybook-code/public/font src/assets/font`  

`npx degit chromaui/learnstorybook-code/public/icon src/assets/icon`
