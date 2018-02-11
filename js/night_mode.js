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
       * @public
       */
      this.options = options || {};
      





                
      /**
       * Variable to store the daytime
       * @public
       */
      this._daytime = null;
      







      /** 
       * Holds the current mode of the web app.
       * @public
       */
      this.currentMode = null;





                  
      /** 
       * All posible positions of the button container.
       * @public
       */
      this.positionShorts = {
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
       * @public
       */        
      this.checkIfDayOrNight =  function() {
      
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
       * @public
       */         
      this._defaults = {
        autoplay: false,
        btnPosition: this.positionShorts.topRight,
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
                  if (arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key];
                  }
              }
          }
    
          return arguments[0];
      };



              
      /**
       * Current options set by the caller including defaults.
       * @public
       */
      // TO DO CHRISTOS
      this._options = extend({}, this._defaults , options);


      
      /**
       * Create buttons
       * @public
       * 
       */

      this.createButtons = function () {
        
        //create div
        const create_div = document.createElement('div');
        //make div child of body
        document.body.appendChild(create_div);
        // add class    
        create_div.classList.add('nm-btn-wrapper');
  
         //create button
        const button_day = document.createElement('button');
         //add class
        button_day.classList.add('nm-btn-default');
         //add id
        button_day.id = 'btn_day';
         //make button_day child of div    
        create_div.appendChild(button_day);
        
         //create second button
        const button_night = document.createElement('button');
         //add class
        button_night.classList.add('nm-btn-default');
         //add id
        button_night.id = 'btn_night';
        //make button_night child of id    
        create_div.appendChild(button_night);
         //create img
        const img_day = document.createElement('img');
        //function to add attributes to images
        function setAttributes(elem, attrs) {
          for(let i in attrs) {
            elem.setAttribute(i, attrs[i]);
          };
        };
         //make img child of button_day    
        setAttributes(img_day, {'src':'images/sun.svg', 'alt': 'sun icon'});
        button_day.appendChild(img_day);
        // add event listener
        button_day.addEventListener('click', function() {
          console.log('button_day')
        });
        
         //create 2nd img
        const img_night = document.createElement('img');
         //CORRECT names of svg
        setAttributes(img_night, {'src':'images/moon.svg', 'alt': 'moon icon'});
         //make img child of button_night
        button_night.append(img_night);
        // add event listener
        button_night.addEventListener('click', function() {
          console.log('button_night')
        });
      };



      /**
       * Cached obj
       * @private
       *  
       */
      const __cache__ = {

        default_colors  : {
          txt : {},
          bg  : {}
        },

        inverted_colors : {
          txt : {},
          bg  : {}          
        },

      };




       /**
       * Cached obj
       * @private
       *  
       */
      const applyCachedColors = function (obj, currentMode) {
        // iterate the objs
        // and apply the colors
      };     




      /**
       * Using cache obj
       * @private
       *  
       */

      const memorizer = function() {

        // use cached obj
        // where colors are stored
        // apply colors
        applyCachedColors(__cache__, stateMode);

      };


      /**
       * start method
       * @public
       */
      this.start = function() {
        this.destroy();

        this.createButtons();
      };




      /**
       * Destroy method
       * @public
       */
      // TO DO DIMITRIS
      this.destroy = function() {

          // remove the the div with the buttons
          const elem = document.querySelector('.nm-btn-wrapper');
          if ( elem ) {
            elem.parentNode.removeChild(elem);
          }    

      };






      /**
       * Init method
       * @public
       */     
      // TO DO DIMITRIS       
      this.init = function() {
        console.log('init');
        this.start();
      };






                      
    };
    // end of the function contructor







            
      return NightMode;






            
}));