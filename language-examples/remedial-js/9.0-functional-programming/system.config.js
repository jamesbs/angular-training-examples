var angularVersion = '2.1.1';

System.config({
  baseUrl: '/',
  paths: {
    'unpkg:*': 'https://unpkg.com/*'
  }
});

System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },

  meta: {
    '*': {
      deps: ['zone.js', 'reflect-metadata']
    }
  }
});

System.config({
  packageConfigPaths: [
    "unpkg:@*/*/package.json"
  ],

  map: {
    '@angular/core': 'unpkg:@angular/core@' + angularVersion,
    '@angular/compiler': 'unpkg:@angular/compiler@' + angularVersion,
    '@angular/common': 'unpkg:@angular/common@' + angularVersion,
    '@angular/platform-browser': 'unpkg:@angular/platform-browser@' + angularVersion,
    '@angular/platform-browser-dynamic': 'unpkg:@angular/platform-browser-dynamic@' + angularVersion,
    '@angular/http': 'unpkg:@angular/http@' + angularVersion,
    'immutable': 'unpkg:immutable@3.8.1',
    'rxjs': 'unpkg:rxjs@5.0.0-beta.6',
    'zone.js': 'unpkg:zone.js@0.6.12',
    'reflect-metadata': 'unpkg:reflect-metadata@0.1.3',
    "crypto": "@empty"
  },

  packages: {
    'app': {
      defaultExtension: 'js',
      main: './exercise.js'
    }
  }
});