var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)){
    resultSet.push(startEl);
  }

  for (var i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet,...elements];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') {
    return 'id';
  } else if (selector[0] === '.') {
    return 'class';
  }
  if (selector.split('.').length > 1) {
    return 'tag.class'
  }

  return 'tag';
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function(elem) {
      return '#' + elem.id === selector;
    }
   
  } else if (selectorType === "class") {
    matchFunction = function(elem) {
      var classes = elem.classList;
      classes.forEach( e => {if(`.${e}` === selector) return true;});
      return false;
    }
    
  } else if (selectorType === "tag.class") {
    matchFunction = function(elem) {
      var [tagBuscad, classBuscad] = selector.split('.');
      return matchFunctionMaker(tagBuscad)(elem) && matchFunction(`.${classBuscad}`)(elem)
     }
   
    
  } else if (selectorType === "tag") {
    matchFunction = function(elem) {
      return elem.tagName.toLowerCase() === selector;
    }
    
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
