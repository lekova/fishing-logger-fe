//configure system loader
System.config({
  defaultJSExtensions: true,
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }, 
    'angular2-jwt': {
      defaultExtension: 'js'
    },
    '@angular2-material/core': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'core.js'
    },
    '@angular2-material/sidenav': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'sidenav.js'
    },
    '@angular2-material/toolbar': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'toolbar.js'
    },
    '@angular2-material/card': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'card.js'
    },
    '@angular2-material/button': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'button.js'
    },
    '@angular2-material/checkbox': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'checkbox.js'
    },
    '@angular2-material/radio': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'radio.js'
    },
    '@angular2-material/progress-circle': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'progress-circle.js'
    },
    '@angular2-material/input': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'input.js'
    },
    '@angular2-material/list': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'list.js'
    },
    '@angular2-material/icon': {
      format: 'cjs',
      defaultExtension: 'js',
      main: 'icon.js'
    },
    '@angular/common': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/compiler': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/core': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/http': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/router-deprecated': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/testing': { main: 'index.js', defaultExtension: 'js'  },
    '@angular/upgrade': { main: 'index.js', defaultExtension: 'js'  }
  },
  map: {
    'app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular': 'node_modules/@angular',
    'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt',
    '@angular2-material/core': 'node_modules/@angular2-material/core',
    '@angular2-material/sidenav': 'node_modules/@angular2-material/sidenav',
    '@angular2-material/toolbar': 'node_modules/@angular2-material/toolbar',
    '@angular2-material/card': 'node_modules/@angular2-material/card',
    '@angular2-material/button': 'node_modules/@angular2-material/button',
    '@angular2-material/checkbox': 'node_modules/@angular2-material/checkbox',
    '@angular2-material/radio': 'node_modules/@angular2-material/radio',
    '@angular2-material/progress-circle': 'node_modules/@angular2-material/progress-circle',
    '@angular2-material/input': 'node_modules/@angular2-material/input',
    '@angular2-material/icon': 'node_modules/@angular2-material/icon',
    '@angular2-material/list': 'node_modules/@angular2-material/list', 
    'moment': 'node_modules/moment/moment.js'
  }
});