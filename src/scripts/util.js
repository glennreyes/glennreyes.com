class Util {

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
  static _toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }

  static _isElement(obj) {
    return (obj[0] || obj).nodeType
  }

  static typeCheckConfig(componentName, config, configTypes) {
    for (let property in configTypes) {
      if (configTypes.hasOwnProperty(property)) {
        let expectedTypes = configTypes[property]
        let value         = config[property]
        let valueType
        if (value && this._isElement(value)) {
          valueType = 'element'
        } else {
          valueType = this._toType(value)
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


export default Util
