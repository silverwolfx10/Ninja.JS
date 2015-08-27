### Ninja.JS

Ninja é uma forma simples de organizar seu codigo javascript em modulos. Este modulo principal é responsavel pelo registros dos servicos, injecao de dependencias destes servicos e disparo dos componentes apos o evento de load do window

```javascript
this.Ninja.module('$add', [], function () {
  return function (a, b) {
    return a + b;
  };
});

this.Ninja(['$add'], function ($add) {
  console.log($add('hello ', 'cleber.programmer'));
});
```
