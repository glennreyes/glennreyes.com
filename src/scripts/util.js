const Util = (($) => {

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  function isElement(obj) {
    return (obj[0] || obj).nodeType
  }


  const Util = {

    typeCheckConfig(componentName, config, configTypes) {
      for (let property in configTypes) {
        if (configTypes.hasOwnProperty(property)) {
          let expectedTypes = configTypes[property]
          let value         = config[property]
          let valueType

          if (value && isElement(value)) {
            valueType = 'element'
          } else {
            valueType = toType(value)
          }

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  return Util;

})(jQuery)

export default Util
