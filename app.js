(function () {
  
  var filters = {};
  var interceptors = {};
  var modules = [];
  var services = {};
  
  function sandbox(dependencies, callback) {
    modules.push({
      callback: callback,
      dependencies: dependencies
    });
  }
  
  sandbox.filter = function (name, callback) {
    filters[name] = callback;
  };
  
  sandbox.filter.spy = function (closure) {
    return closure(filters);
  };
  
  sandbox.interceptors = function (name, callback) {
    interceptors[name] = callback;
  };
    
  sandbox.interceptors.spy = function (closure) {
    return closure(interceptors);
  };
  
  sandbox.service = function (name, dependencies, callback) {
    services[name] = {
      callback: callback,
      dependencies: dependencies
    };
  };
  
  window.addEventListener('load', function () {
    
    var cache = {};
    
    function inject(name) {
      return cache[name] || (cache[name] = load(services[name]));
    }
    
    function load(item) {
      return item.callback.apply(item.callback, item.dependencies.map(function (name) {
        return inject(name);
      }));
    }
    
    modules.forEach(function(item) {
      window.setTimeout(load.bind(load, item), 0);
    });
    
  });
  
  window.APP = sandbox;

})();
