( function ( root, factory ){

  if ( typeof define === 'function' && define.amd ) {

    define( [], factory(root) );

  }else if ( typeof exports === 'object' ) {

    module.exports = factory(root);

  }else {
    root.NightMode = factory(root);
  }

} )( typeof global !== 'undefined' ? global : this.window || this.global, ( function (root) {

    /**
     * Night Mode Js
     * @version 0.0.1
     */

    'use strict';

     /* Declaring the variables
     * 
     * 
     * 
     * 
     */ 
    const window = root;
    const document = root.document;
    let supports  = 'querySelector' in document && 'addEventListener' in window; // Testing features!
    
    
    
    
    
    const NightMode = function (options) {






          
      /**
       * If not optios have been passed
       * then use {}
       * @private
       */
      options = options || {};
      





                
      /**
       * Variable to store the daytime
       * @private
       */
      let _daytime = null;
      





          
      /**
       * All selected DOM elements for text color .
       * @private
       */
      const $elsColor = [];






            
      /** 
       * All selected DOM elements for background-color .
       * @private
       */
      const $elsBgColor = [];






                  
      /** 
       * All selected DOM elements for background-color .
       * @private
       */
      const positionShorts = {
        'topLeft': 'tl',
        'topRight': 'tr',
        'bottomLeft': 'bl',
        'bottomRight': 'br',
        'top': 'top',
        'bottom': 'bottom',
        'tl': 'tl',
        'tr': 'tr',
        'bl': 'bl',
        'br': 'br',
        't': 'top',
        'b': 'bottom'
      };






            
      /**
       * 
       * Check if day or night
       * @private
       */        
      const checkIfDayOrNight =  function() {
      
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        const isDayTime = hour > 7 && hour < 19;
      
      
        if (isDayTime) {

          _datime = false;           

        } else {

          _datime = true;            

        }
        
        setTimeout(checkIfDayOrNight, 1000);
      };






            
      /**
       * Default options for the plugin.
       * @private
       */         
      const _defaults = {
        isNight: false,
        autoplay: false,
        btnPosition: positionShorts.topRight,
        customColors: null,
      };






            
      /**
       * 
       * Custom extend function
       * @private
       */
      const extend = function() {
          let key, i;
    
          for (i = 1; i < arguments.length; i++)
          {
              for (key in arguments[i])
              {
                  if (arguments[i].hasOwnProperty(key))
                      arguments[0][key] = arguments[i][key];
              }
          }
    
          return arguments[0];
      };






              
      /**
       * Current options set by the caller including defaults.
       * @private
       */
      // TO DO CHRISTOS
      const _options = extend({}, _defaults , options);






      //   rest of the private code






                      
    };
    // end of the function contructor






            
      //API






            
      // TO DO DIMITRIS
      NightMode.prototype.destroy = function() {
        alert('destroy')
      };






            
      NightMode.prototype.init = function() {
        alert('init')
      };






            
      return NightMode;






            
}));