# Ninja.JS

Ninja é uma forma simples de organizar seu codigo javascript em modulos. Este modulo principal é responsavel pelo registros dos servicos, injecao de dependencias destes servicos e disparo dos componentes apos o evento de load do window

```javascript
Ninja.service('$component', [], function () {
  return {
    /* code here  */
  };
});

Ninja(['$component'], function ($component) {

  $component('cleber-programmer', {
    templateUrl: './template/cleber-programmer.html'
  });

});
```
