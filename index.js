const _ = {
  //...
  once: function(fn){
    var invoked = false,
        result;
    
    return function(){
      if( !invoked ){
        result = fn();
        invoked = true;
        return result;
      }else{
        return result;
      }
    }
  },
  
  memoize: function ( fn, keyFn ) {
    var cache = {};
    return function(arg){
     
      var cacheKey = (typeof keyFn === 'function') ? keyFn : arg.toString();
      
      if(!cache.hasOwnProperty(cacheKey)){
        cache[cacheKey] = fn(arg);
      }
      
      return cache[cacheKey];      
    };
  }
};

module.exports = _;
