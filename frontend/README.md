# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Directory structure
Parts & Pages & Globals
ルール：Vuexとのやり取りはPages or Globalsのみが行う
Globals:グローバルに使うコンポーネント郡。ヘッダーやフッター etc..
Pages:ページを構成する役割。HOMEやUSER etc..
Parts:再利用可能なコンポーネント郡。Vuexは使わず基本はpropsからデータを貰い、それを元に処理する
store:Vuexが入る。namespaceを使用し、ドメインごと分ける。一つのファイルが肥大化するのを防ぐ。

.
├── App.vue
├── assets
├── components
│   ├── globals
│   │   ├── Footer.vue
│   │   └── Header.vue
│   ├── pages
│   │   ├── EditGist.vue
│   │   ├── Gist.vue
│   │   ├── Home.vue
│   │   └── User.vue
│   └── parts
│       ├── Comments.vue
│       ├── Editor.vue
│       ├── GistCard.vue
│       ├── IconButton.vue
│       ├── Loading.vue
│       └── UserCard.vue
├── main.js
├── router
│   └── index.js
└── store
    ├── index.js
    ├── modules
    │   ├── gists
    │   │   ├── actions.js
    │   │   ├── getters.js
    │   │   ├── index.js
    │   │   ├── mutations.js
    │   │   └── state.js
    │   └── users
    │       ├── actions.js
    │       ├── getters.js
    │       ├── index.js
    │       ├── mutations.js
    │       └── state.js
    └── utils.js