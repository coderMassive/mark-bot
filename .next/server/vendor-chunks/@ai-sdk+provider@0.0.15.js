"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@ai-sdk+provider@0.0.15";
exports.ids = ["vendor-chunks/@ai-sdk+provider@0.0.15"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@ai-sdk+provider@0.0.15/node_modules/@ai-sdk/provider/dist/index.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ai-sdk+provider@0.0.15/node_modules/@ai-sdk/provider/dist/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AISDKError: () => (/* binding */ AISDKError),\n/* harmony export */   APICallError: () => (/* binding */ APICallError),\n/* harmony export */   EmptyResponseBodyError: () => (/* binding */ EmptyResponseBodyError),\n/* harmony export */   InvalidPromptError: () => (/* binding */ InvalidPromptError),\n/* harmony export */   InvalidResponseDataError: () => (/* binding */ InvalidResponseDataError),\n/* harmony export */   JSONParseError: () => (/* binding */ JSONParseError),\n/* harmony export */   LoadAPIKeyError: () => (/* binding */ LoadAPIKeyError),\n/* harmony export */   LoadSettingError: () => (/* binding */ LoadSettingError),\n/* harmony export */   NoContentGeneratedError: () => (/* binding */ NoContentGeneratedError),\n/* harmony export */   TooManyEmbeddingValuesForCallError: () => (/* binding */ TooManyEmbeddingValuesForCallError),\n/* harmony export */   TypeValidationError: () => (/* binding */ TypeValidationError),\n/* harmony export */   UnsupportedFunctionalityError: () => (/* binding */ UnsupportedFunctionalityError),\n/* harmony export */   getErrorMessage: () => (/* binding */ getErrorMessage)\n/* harmony export */ });\n// src/errors/ai-sdk-error.ts\nvar marker = \"vercel.ai.error\";\nvar symbol = Symbol.for(marker);\nvar _a;\nvar _AISDKError = class _AISDKError extends Error {\n  /**\n   * Creates an AI SDK Error.\n   *\n   * @param {Object} params - The parameters for creating the error.\n   * @param {string} params.name - The name of the error.\n   * @param {string} params.message - The error message.\n   * @param {unknown} [params.cause] - The underlying cause of the error.\n   */\n  constructor({\n    name: name12,\n    message,\n    cause\n  }) {\n    super(message);\n    this[_a] = true;\n    this.name = name12;\n    this.cause = cause;\n  }\n  /**\n   * Checks if the given error is an AI SDK Error.\n   * @param {unknown} error - The error to check.\n   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.\n   */\n  static isInstance(error) {\n    return _AISDKError.hasMarker(error, marker);\n  }\n  static hasMarker(error, marker13) {\n    const markerSymbol = Symbol.for(marker13);\n    return error != null && typeof error === \"object\" && markerSymbol in error && typeof error[markerSymbol] === \"boolean\" && error[markerSymbol] === true;\n  }\n  /**\n   * Returns a JSON representation of the error.\n   * @returns {Object} An object containing the error's name, message, and cause.\n   *\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message\n    };\n  }\n};\n_a = symbol;\nvar AISDKError = _AISDKError;\n\n// src/errors/api-call-error.ts\nvar name = \"AI_APICallError\";\nvar marker2 = `vercel.ai.error.${name}`;\nvar symbol2 = Symbol.for(marker2);\nvar _a2;\nvar APICallError = class extends AISDKError {\n  constructor({\n    message,\n    url,\n    requestBodyValues,\n    statusCode,\n    responseHeaders,\n    responseBody,\n    cause,\n    isRetryable = statusCode != null && (statusCode === 408 || // request timeout\n    statusCode === 409 || // conflict\n    statusCode === 429 || // too many requests\n    statusCode >= 500),\n    // server error\n    data\n  }) {\n    super({ name, message, cause });\n    this[_a2] = true;\n    this.url = url;\n    this.requestBodyValues = requestBodyValues;\n    this.statusCode = statusCode;\n    this.responseHeaders = responseHeaders;\n    this.responseBody = responseBody;\n    this.isRetryable = isRetryable;\n    this.data = data;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker2);\n  }\n  /**\n   * @deprecated Use isInstance instead.\n   */\n  static isAPICallError(error) {\n    return error instanceof Error && error.name === name && typeof error.url === \"string\" && typeof error.requestBodyValues === \"object\" && (error.statusCode == null || typeof error.statusCode === \"number\") && (error.responseHeaders == null || typeof error.responseHeaders === \"object\") && (error.responseBody == null || typeof error.responseBody === \"string\") && (error.cause == null || typeof error.cause === \"object\") && typeof error.isRetryable === \"boolean\" && (error.data == null || typeof error.data === \"object\");\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message,\n      url: this.url,\n      requestBodyValues: this.requestBodyValues,\n      statusCode: this.statusCode,\n      responseHeaders: this.responseHeaders,\n      responseBody: this.responseBody,\n      cause: this.cause,\n      isRetryable: this.isRetryable,\n      data: this.data\n    };\n  }\n};\n_a2 = symbol2;\n\n// src/errors/empty-response-body-error.ts\nvar name2 = \"AI_EmptyResponseBodyError\";\nvar marker3 = `vercel.ai.error.${name2}`;\nvar symbol3 = Symbol.for(marker3);\nvar _a3;\nvar EmptyResponseBodyError = class extends AISDKError {\n  // used in isInstance\n  constructor({ message = \"Empty response body\" } = {}) {\n    super({ name: name2, message });\n    this[_a3] = true;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker3);\n  }\n  /**\n   * @deprecated use `isInstance` instead\n   */\n  static isEmptyResponseBodyError(error) {\n    return error instanceof Error && error.name === name2;\n  }\n};\n_a3 = symbol3;\n\n// src/errors/get-error-message.ts\nfunction getErrorMessage(error) {\n  if (error == null) {\n    return \"unknown error\";\n  }\n  if (typeof error === \"string\") {\n    return error;\n  }\n  if (error instanceof Error) {\n    return error.message;\n  }\n  return JSON.stringify(error);\n}\n\n// src/errors/invalid-prompt-error.ts\nvar name3 = \"AI_InvalidPromptError\";\nvar marker4 = `vercel.ai.error.${name3}`;\nvar symbol4 = Symbol.for(marker4);\nvar _a4;\nvar InvalidPromptError = class extends AISDKError {\n  constructor({ prompt: prompt2, message }) {\n    super({\n      name: name3,\n      message: `Invalid prompt: ${message}`\n    });\n    this[_a4] = true;\n    this.prompt = prompt2;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker4);\n  }\n  /**\n   * @deprecated use `isInstance` instead\n   */\n  static isInvalidPromptError(error) {\n    return error instanceof Error && error.name === name3 && prompt != null;\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message,\n      stack: this.stack,\n      prompt: this.prompt\n    };\n  }\n};\n_a4 = symbol4;\n\n// src/errors/invalid-response-data-error.ts\nvar name4 = \"AI_InvalidResponseDataError\";\nvar marker5 = `vercel.ai.error.${name4}`;\nvar symbol5 = Symbol.for(marker5);\nvar _a5;\nvar InvalidResponseDataError = class extends AISDKError {\n  constructor({\n    data,\n    message = `Invalid response data: ${JSON.stringify(data)}.`\n  }) {\n    super({ name: name4, message });\n    this[_a5] = true;\n    this.data = data;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker5);\n  }\n  /**\n   * @deprecated use `isInstance` instead\n   */\n  static isInvalidResponseDataError(error) {\n    return error instanceof Error && error.name === name4 && error.data != null;\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message,\n      stack: this.stack,\n      data: this.data\n    };\n  }\n};\n_a5 = symbol5;\n\n// src/errors/json-parse-error.ts\nvar name5 = \"AI_JSONParseError\";\nvar marker6 = `vercel.ai.error.${name5}`;\nvar symbol6 = Symbol.for(marker6);\nvar _a6;\nvar JSONParseError = class extends AISDKError {\n  constructor({ text, cause }) {\n    super({\n      name: name5,\n      message: `JSON parsing failed: Text: ${text}.\nError message: ${getErrorMessage(cause)}`,\n      cause\n    });\n    this[_a6] = true;\n    this.text = text;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker6);\n  }\n  /**\n   * @deprecated use `isInstance` instead\n   */\n  static isJSONParseError(error) {\n    return error instanceof Error && error.name === name5 && typeof error.text === \"string\" && typeof error.cause === \"string\";\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message,\n      cause: this.cause,\n      stack: this.stack,\n      valueText: this.text\n    };\n  }\n};\n_a6 = symbol6;\n\n// src/errors/load-api-key-error.ts\nvar name6 = \"AI_LoadAPIKeyError\";\nvar marker7 = `vercel.ai.error.${name6}`;\nvar symbol7 = Symbol.for(marker7);\nvar _a7;\nvar LoadAPIKeyError = class extends AISDKError {\n  // used in isInstance\n  constructor({ message }) {\n    super({ name: name6, message });\n    this[_a7] = true;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker7);\n  }\n  /**\n   * @deprecated Use isInstance instead.\n   */\n  static isLoadAPIKeyError(error) {\n    return error instanceof Error && error.name === name6;\n  }\n};\n_a7 = symbol7;\n\n// src/errors/load-setting-error.ts\nvar name7 = \"AI_LoadSettingError\";\nvar marker8 = `vercel.ai.error.${name7}`;\nvar symbol8 = Symbol.for(marker8);\nvar _a8;\nvar LoadSettingError = class extends AISDKError {\n  // used in isInstance\n  constructor({ message }) {\n    super({ name: name7, message });\n    this[_a8] = true;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker8);\n  }\n  /**\n   * @deprecated Use isInstance instead.\n   */\n  static isLoadSettingError(error) {\n    return error instanceof Error && error.name === name7;\n  }\n};\n_a8 = symbol8;\n\n// src/errors/no-content-generated-error.ts\nvar name8 = \"AI_NoContentGeneratedError\";\nvar marker9 = `vercel.ai.error.${name8}`;\nvar symbol9 = Symbol.for(marker9);\nvar _a9;\nvar NoContentGeneratedError = class extends AISDKError {\n  // used in isInstance\n  constructor({\n    message = \"No content generated.\"\n  } = {}) {\n    super({ name: name8, message });\n    this[_a9] = true;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker9);\n  }\n  /**\n   * @deprecated Use isInstance instead.\n   */\n  static isNoContentGeneratedError(error) {\n    return error instanceof Error && error.name === name8;\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      cause: this.cause,\n      message: this.message,\n      stack: this.stack\n    };\n  }\n};\n_a9 = symbol9;\n\n// src/errors/too-many-embedding-values-for-call-error.ts\nvar name9 = \"AI_TooManyEmbeddingValuesForCallError\";\nvar marker10 = `vercel.ai.error.${name9}`;\nvar symbol10 = Symbol.for(marker10);\nvar _a10;\nvar TooManyEmbeddingValuesForCallError = class extends AISDKError {\n  constructor(options) {\n    super({\n      name: name9,\n      message: `Too many values for a single embedding call. The ${options.provider} model \"${options.modelId}\" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`\n    });\n    this[_a10] = true;\n    this.provider = options.provider;\n    this.modelId = options.modelId;\n    this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;\n    this.values = options.values;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker10);\n  }\n  /**\n   * @deprecated use `isInstance` instead\n   */\n  static isTooManyEmbeddingValuesForCallError(error) {\n    return error instanceof Error && error.name === name9 && \"provider\" in error && typeof error.provider === \"string\" && \"modelId\" in error && typeof error.modelId === \"string\" && \"maxEmbeddingsPerCall\" in error && typeof error.maxEmbeddingsPerCall === \"number\" && \"values\" in error && Array.isArray(error.values);\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message,\n      stack: this.stack,\n      provider: this.provider,\n      modelId: this.modelId,\n      maxEmbeddingsPerCall: this.maxEmbeddingsPerCall,\n      values: this.values\n    };\n  }\n};\n_a10 = symbol10;\n\n// src/errors/type-validation-error.ts\nvar name10 = \"AI_TypeValidationError\";\nvar marker11 = `vercel.ai.error.${name10}`;\nvar symbol11 = Symbol.for(marker11);\nvar _a11;\nvar TypeValidationError = class extends AISDKError {\n  constructor({ value, cause }) {\n    super({\n      name: name10,\n      message: `Type validation failed: Value: ${JSON.stringify(value)}.\nError message: ${getErrorMessage(cause)}`,\n      cause\n    });\n    this[_a11] = true;\n    this.value = value;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker11);\n  }\n  /**\n   * @deprecated use `isInstance` instead\n   */\n  static isTypeValidationError(error) {\n    return error instanceof Error && error.name === name10;\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message,\n      cause: this.cause,\n      stack: this.stack,\n      value: this.value\n    };\n  }\n};\n_a11 = symbol11;\n\n// src/errors/unsupported-functionality-error.ts\nvar name11 = \"AI_UnsupportedFunctionalityError\";\nvar marker12 = `vercel.ai.error.${name11}`;\nvar symbol12 = Symbol.for(marker12);\nvar _a12;\nvar UnsupportedFunctionalityError = class extends AISDKError {\n  constructor({ functionality }) {\n    super({\n      name: name11,\n      message: `'${functionality}' functionality not supported.`\n    });\n    this[_a12] = true;\n    this.functionality = functionality;\n  }\n  static isInstance(error) {\n    return AISDKError.hasMarker(error, marker12);\n  }\n  /**\n   * @deprecated Use isInstance instead.\n   */\n  static isUnsupportedFunctionalityError(error) {\n    return error instanceof Error && error.name === name11 && typeof error.functionality === \"string\";\n  }\n  /**\n   * @deprecated Do not use this method. It will be removed in the next major version.\n   */\n  toJSON() {\n    return {\n      name: this.name,\n      message: this.message,\n      stack: this.stack,\n      functionality: this.functionality\n    };\n  }\n};\n_a12 = symbol12;\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGFpLXNkaytwcm92aWRlckAwLjAuMTUvbm9kZV9tb2R1bGVzL0BhaS1zZGsvcHJvdmlkZXIvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQ0FBa0MsSUFBSTtBQUN0RCxZQUFZLHNCQUFzQjtBQUNs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyay1ib3QvLi9ub2RlX21vZHVsZXMvLnBucG0vQGFpLXNkaytwcm92aWRlckAwLjAuMTUvbm9kZV9tb2R1bGVzL0BhaS1zZGsvcHJvdmlkZXIvZGlzdC9pbmRleC5tanM/NWIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvZXJyb3JzL2FpLXNkay1lcnJvci50c1xudmFyIG1hcmtlciA9IFwidmVyY2VsLmFpLmVycm9yXCI7XG52YXIgc3ltYm9sID0gU3ltYm9sLmZvcihtYXJrZXIpO1xudmFyIF9hO1xudmFyIF9BSVNES0Vycm9yID0gY2xhc3MgX0FJU0RLRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIEFJIFNESyBFcnJvci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyB0aGUgZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMubmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBlcnJvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5tZXNzYWdlIC0gVGhlIGVycm9yIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7dW5rbm93bn0gW3BhcmFtcy5jYXVzZV0gLSBUaGUgdW5kZXJseWluZyBjYXVzZSBvZiB0aGUgZXJyb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgbmFtZTogbmFtZTEyLFxuICAgIG1lc3NhZ2UsXG4gICAgY2F1c2VcbiAgfSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXNbX2FdID0gdHJ1ZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lMTI7XG4gICAgdGhpcy5jYXVzZSA9IGNhdXNlO1xuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGdpdmVuIGVycm9yIGlzIGFuIEFJIFNESyBFcnJvci5cbiAgICogQHBhcmFtIHt1bmtub3dufSBlcnJvciAtIFRoZSBlcnJvciB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGVycm9yIGlzIGFuIEFJIFNESyBFcnJvciwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKi9cbiAgc3RhdGljIGlzSW5zdGFuY2UoZXJyb3IpIHtcbiAgICByZXR1cm4gX0FJU0RLRXJyb3IuaGFzTWFya2VyKGVycm9yLCBtYXJrZXIpO1xuICB9XG4gIHN0YXRpYyBoYXNNYXJrZXIoZXJyb3IsIG1hcmtlcjEzKSB7XG4gICAgY29uc3QgbWFya2VyU3ltYm9sID0gU3ltYm9sLmZvcihtYXJrZXIxMyk7XG4gICAgcmV0dXJuIGVycm9yICE9IG51bGwgJiYgdHlwZW9mIGVycm9yID09PSBcIm9iamVjdFwiICYmIG1hcmtlclN5bWJvbCBpbiBlcnJvciAmJiB0eXBlb2YgZXJyb3JbbWFya2VyU3ltYm9sXSA9PT0gXCJib29sZWFuXCIgJiYgZXJyb3JbbWFya2VyU3ltYm9sXSA9PT0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXJyb3IncyBuYW1lLCBtZXNzYWdlLCBhbmQgY2F1c2UuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UgdGhpcyBtZXRob2QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2VcbiAgICB9O1xuICB9XG59O1xuX2EgPSBzeW1ib2w7XG52YXIgQUlTREtFcnJvciA9IF9BSVNES0Vycm9yO1xuXG4vLyBzcmMvZXJyb3JzL2FwaS1jYWxsLWVycm9yLnRzXG52YXIgbmFtZSA9IFwiQUlfQVBJQ2FsbEVycm9yXCI7XG52YXIgbWFya2VyMiA9IGB2ZXJjZWwuYWkuZXJyb3IuJHtuYW1lfWA7XG52YXIgc3ltYm9sMiA9IFN5bWJvbC5mb3IobWFya2VyMik7XG52YXIgX2EyO1xudmFyIEFQSUNhbGxFcnJvciA9IGNsYXNzIGV4dGVuZHMgQUlTREtFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBtZXNzYWdlLFxuICAgIHVybCxcbiAgICByZXF1ZXN0Qm9keVZhbHVlcyxcbiAgICBzdGF0dXNDb2RlLFxuICAgIHJlc3BvbnNlSGVhZGVycyxcbiAgICByZXNwb25zZUJvZHksXG4gICAgY2F1c2UsXG4gICAgaXNSZXRyeWFibGUgPSBzdGF0dXNDb2RlICE9IG51bGwgJiYgKHN0YXR1c0NvZGUgPT09IDQwOCB8fCAvLyByZXF1ZXN0IHRpbWVvdXRcbiAgICBzdGF0dXNDb2RlID09PSA0MDkgfHwgLy8gY29uZmxpY3RcbiAgICBzdGF0dXNDb2RlID09PSA0MjkgfHwgLy8gdG9vIG1hbnkgcmVxdWVzdHNcbiAgICBzdGF0dXNDb2RlID49IDUwMCksXG4gICAgLy8gc2VydmVyIGVycm9yXG4gICAgZGF0YVxuICB9KSB7XG4gICAgc3VwZXIoeyBuYW1lLCBtZXNzYWdlLCBjYXVzZSB9KTtcbiAgICB0aGlzW19hMl0gPSB0cnVlO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucmVxdWVzdEJvZHlWYWx1ZXMgPSByZXF1ZXN0Qm9keVZhbHVlcztcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgIHRoaXMucmVzcG9uc2VIZWFkZXJzID0gcmVzcG9uc2VIZWFkZXJzO1xuICAgIHRoaXMucmVzcG9uc2VCb2R5ID0gcmVzcG9uc2VCb2R5O1xuICAgIHRoaXMuaXNSZXRyeWFibGUgPSBpc1JldHJ5YWJsZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG4gIHN0YXRpYyBpc0luc3RhbmNlKGVycm9yKSB7XG4gICAgcmV0dXJuIEFJU0RLRXJyb3IuaGFzTWFya2VyKGVycm9yLCBtYXJrZXIyKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGlzSW5zdGFuY2UgaW5zdGVhZC5cbiAgICovXG4gIHN0YXRpYyBpc0FQSUNhbGxFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IG5hbWUgJiYgdHlwZW9mIGVycm9yLnVybCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgZXJyb3IucmVxdWVzdEJvZHlWYWx1ZXMgPT09IFwib2JqZWN0XCIgJiYgKGVycm9yLnN0YXR1c0NvZGUgPT0gbnVsbCB8fCB0eXBlb2YgZXJyb3Iuc3RhdHVzQ29kZSA9PT0gXCJudW1iZXJcIikgJiYgKGVycm9yLnJlc3BvbnNlSGVhZGVycyA9PSBudWxsIHx8IHR5cGVvZiBlcnJvci5yZXNwb25zZUhlYWRlcnMgPT09IFwib2JqZWN0XCIpICYmIChlcnJvci5yZXNwb25zZUJvZHkgPT0gbnVsbCB8fCB0eXBlb2YgZXJyb3IucmVzcG9uc2VCb2R5ID09PSBcInN0cmluZ1wiKSAmJiAoZXJyb3IuY2F1c2UgPT0gbnVsbCB8fCB0eXBlb2YgZXJyb3IuY2F1c2UgPT09IFwib2JqZWN0XCIpICYmIHR5cGVvZiBlcnJvci5pc1JldHJ5YWJsZSA9PT0gXCJib29sZWFuXCIgJiYgKGVycm9yLmRhdGEgPT0gbnVsbCB8fCB0eXBlb2YgZXJyb3IuZGF0YSA9PT0gXCJvYmplY3RcIik7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UgdGhpcyBtZXRob2QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgcmVxdWVzdEJvZHlWYWx1ZXM6IHRoaXMucmVxdWVzdEJvZHlWYWx1ZXMsXG4gICAgICBzdGF0dXNDb2RlOiB0aGlzLnN0YXR1c0NvZGUsXG4gICAgICByZXNwb25zZUhlYWRlcnM6IHRoaXMucmVzcG9uc2VIZWFkZXJzLFxuICAgICAgcmVzcG9uc2VCb2R5OiB0aGlzLnJlc3BvbnNlQm9keSxcbiAgICAgIGNhdXNlOiB0aGlzLmNhdXNlLFxuICAgICAgaXNSZXRyeWFibGU6IHRoaXMuaXNSZXRyeWFibGUsXG4gICAgICBkYXRhOiB0aGlzLmRhdGFcbiAgICB9O1xuICB9XG59O1xuX2EyID0gc3ltYm9sMjtcblxuLy8gc3JjL2Vycm9ycy9lbXB0eS1yZXNwb25zZS1ib2R5LWVycm9yLnRzXG52YXIgbmFtZTIgPSBcIkFJX0VtcHR5UmVzcG9uc2VCb2R5RXJyb3JcIjtcbnZhciBtYXJrZXIzID0gYHZlcmNlbC5haS5lcnJvci4ke25hbWUyfWA7XG52YXIgc3ltYm9sMyA9IFN5bWJvbC5mb3IobWFya2VyMyk7XG52YXIgX2EzO1xudmFyIEVtcHR5UmVzcG9uc2VCb2R5RXJyb3IgPSBjbGFzcyBleHRlbmRzIEFJU0RLRXJyb3Ige1xuICAvLyB1c2VkIGluIGlzSW5zdGFuY2VcbiAgY29uc3RydWN0b3IoeyBtZXNzYWdlID0gXCJFbXB0eSByZXNwb25zZSBib2R5XCIgfSA9IHt9KSB7XG4gICAgc3VwZXIoeyBuYW1lOiBuYW1lMiwgbWVzc2FnZSB9KTtcbiAgICB0aGlzW19hM10gPSB0cnVlO1xuICB9XG4gIHN0YXRpYyBpc0luc3RhbmNlKGVycm9yKSB7XG4gICAgcmV0dXJuIEFJU0RLRXJyb3IuaGFzTWFya2VyKGVycm9yLCBtYXJrZXIzKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBpc0luc3RhbmNlYCBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgaXNFbXB0eVJlc3BvbnNlQm9keUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gbmFtZTI7XG4gIH1cbn07XG5fYTMgPSBzeW1ib2wzO1xuXG4vLyBzcmMvZXJyb3JzL2dldC1lcnJvci1tZXNzYWdlLnRzXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3IpIHtcbiAgaWYgKGVycm9yID09IG51bGwpIHtcbiAgICByZXR1cm4gXCJ1bmtub3duIGVycm9yXCI7XG4gIH1cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShlcnJvcik7XG59XG5cbi8vIHNyYy9lcnJvcnMvaW52YWxpZC1wcm9tcHQtZXJyb3IudHNcbnZhciBuYW1lMyA9IFwiQUlfSW52YWxpZFByb21wdEVycm9yXCI7XG52YXIgbWFya2VyNCA9IGB2ZXJjZWwuYWkuZXJyb3IuJHtuYW1lM31gO1xudmFyIHN5bWJvbDQgPSBTeW1ib2wuZm9yKG1hcmtlcjQpO1xudmFyIF9hNDtcbnZhciBJbnZhbGlkUHJvbXB0RXJyb3IgPSBjbGFzcyBleHRlbmRzIEFJU0RLRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih7IHByb21wdDogcHJvbXB0MiwgbWVzc2FnZSB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogbmFtZTMsXG4gICAgICBtZXNzYWdlOiBgSW52YWxpZCBwcm9tcHQ6ICR7bWVzc2FnZX1gXG4gICAgfSk7XG4gICAgdGhpc1tfYTRdID0gdHJ1ZTtcbiAgICB0aGlzLnByb21wdCA9IHByb21wdDI7XG4gIH1cbiAgc3RhdGljIGlzSW5zdGFuY2UoZXJyb3IpIHtcbiAgICByZXR1cm4gQUlTREtFcnJvci5oYXNNYXJrZXIoZXJyb3IsIG1hcmtlcjQpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYGlzSW5zdGFuY2VgIGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBpc0ludmFsaWRQcm9tcHRFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IG5hbWUzICYmIHByb21wdCAhPSBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlIHRoaXMgbWV0aG9kLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICBwcm9tcHQ6IHRoaXMucHJvbXB0XG4gICAgfTtcbiAgfVxufTtcbl9hNCA9IHN5bWJvbDQ7XG5cbi8vIHNyYy9lcnJvcnMvaW52YWxpZC1yZXNwb25zZS1kYXRhLWVycm9yLnRzXG52YXIgbmFtZTQgPSBcIkFJX0ludmFsaWRSZXNwb25zZURhdGFFcnJvclwiO1xudmFyIG1hcmtlcjUgPSBgdmVyY2VsLmFpLmVycm9yLiR7bmFtZTR9YDtcbnZhciBzeW1ib2w1ID0gU3ltYm9sLmZvcihtYXJrZXI1KTtcbnZhciBfYTU7XG52YXIgSW52YWxpZFJlc3BvbnNlRGF0YUVycm9yID0gY2xhc3MgZXh0ZW5kcyBBSVNES0Vycm9yIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGRhdGEsXG4gICAgbWVzc2FnZSA9IGBJbnZhbGlkIHJlc3BvbnNlIGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9LmBcbiAgfSkge1xuICAgIHN1cGVyKHsgbmFtZTogbmFtZTQsIG1lc3NhZ2UgfSk7XG4gICAgdGhpc1tfYTVdID0gdHJ1ZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG4gIHN0YXRpYyBpc0luc3RhbmNlKGVycm9yKSB7XG4gICAgcmV0dXJuIEFJU0RLRXJyb3IuaGFzTWFya2VyKGVycm9yLCBtYXJrZXI1KTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBpc0luc3RhbmNlYCBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgaXNJbnZhbGlkUmVzcG9uc2VEYXRhRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSBuYW1lNCAmJiBlcnJvci5kYXRhICE9IG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UgdGhpcyBtZXRob2QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YVxuICAgIH07XG4gIH1cbn07XG5fYTUgPSBzeW1ib2w1O1xuXG4vLyBzcmMvZXJyb3JzL2pzb24tcGFyc2UtZXJyb3IudHNcbnZhciBuYW1lNSA9IFwiQUlfSlNPTlBhcnNlRXJyb3JcIjtcbnZhciBtYXJrZXI2ID0gYHZlcmNlbC5haS5lcnJvci4ke25hbWU1fWA7XG52YXIgc3ltYm9sNiA9IFN5bWJvbC5mb3IobWFya2VyNik7XG52YXIgX2E2O1xudmFyIEpTT05QYXJzZUVycm9yID0gY2xhc3MgZXh0ZW5kcyBBSVNES0Vycm9yIHtcbiAgY29uc3RydWN0b3IoeyB0ZXh0LCBjYXVzZSB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogbmFtZTUsXG4gICAgICBtZXNzYWdlOiBgSlNPTiBwYXJzaW5nIGZhaWxlZDogVGV4dDogJHt0ZXh0fS5cbkVycm9yIG1lc3NhZ2U6ICR7Z2V0RXJyb3JNZXNzYWdlKGNhdXNlKX1gLFxuICAgICAgY2F1c2VcbiAgICB9KTtcbiAgICB0aGlzW19hNl0gPSB0cnVlO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gIH1cbiAgc3RhdGljIGlzSW5zdGFuY2UoZXJyb3IpIHtcbiAgICByZXR1cm4gQUlTREtFcnJvci5oYXNNYXJrZXIoZXJyb3IsIG1hcmtlcjYpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYGlzSW5zdGFuY2VgIGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBpc0pTT05QYXJzZUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gbmFtZTUgJiYgdHlwZW9mIGVycm9yLnRleHQgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGVycm9yLmNhdXNlID09PSBcInN0cmluZ1wiO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlIHRoaXMgbWV0aG9kLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgY2F1c2U6IHRoaXMuY2F1c2UsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIHZhbHVlVGV4dDogdGhpcy50ZXh0XG4gICAgfTtcbiAgfVxufTtcbl9hNiA9IHN5bWJvbDY7XG5cbi8vIHNyYy9lcnJvcnMvbG9hZC1hcGkta2V5LWVycm9yLnRzXG52YXIgbmFtZTYgPSBcIkFJX0xvYWRBUElLZXlFcnJvclwiO1xudmFyIG1hcmtlcjcgPSBgdmVyY2VsLmFpLmVycm9yLiR7bmFtZTZ9YDtcbnZhciBzeW1ib2w3ID0gU3ltYm9sLmZvcihtYXJrZXI3KTtcbnZhciBfYTc7XG52YXIgTG9hZEFQSUtleUVycm9yID0gY2xhc3MgZXh0ZW5kcyBBSVNES0Vycm9yIHtcbiAgLy8gdXNlZCBpbiBpc0luc3RhbmNlXG4gIGNvbnN0cnVjdG9yKHsgbWVzc2FnZSB9KSB7XG4gICAgc3VwZXIoeyBuYW1lOiBuYW1lNiwgbWVzc2FnZSB9KTtcbiAgICB0aGlzW19hN10gPSB0cnVlO1xuICB9XG4gIHN0YXRpYyBpc0luc3RhbmNlKGVycm9yKSB7XG4gICAgcmV0dXJuIEFJU0RLRXJyb3IuaGFzTWFya2VyKGVycm9yLCBtYXJrZXI3KTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGlzSW5zdGFuY2UgaW5zdGVhZC5cbiAgICovXG4gIHN0YXRpYyBpc0xvYWRBUElLZXlFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09IG5hbWU2O1xuICB9XG59O1xuX2E3ID0gc3ltYm9sNztcblxuLy8gc3JjL2Vycm9ycy9sb2FkLXNldHRpbmctZXJyb3IudHNcbnZhciBuYW1lNyA9IFwiQUlfTG9hZFNldHRpbmdFcnJvclwiO1xudmFyIG1hcmtlcjggPSBgdmVyY2VsLmFpLmVycm9yLiR7bmFtZTd9YDtcbnZhciBzeW1ib2w4ID0gU3ltYm9sLmZvcihtYXJrZXI4KTtcbnZhciBfYTg7XG52YXIgTG9hZFNldHRpbmdFcnJvciA9IGNsYXNzIGV4dGVuZHMgQUlTREtFcnJvciB7XG4gIC8vIHVzZWQgaW4gaXNJbnN0YW5jZVxuICBjb25zdHJ1Y3Rvcih7IG1lc3NhZ2UgfSkge1xuICAgIHN1cGVyKHsgbmFtZTogbmFtZTcsIG1lc3NhZ2UgfSk7XG4gICAgdGhpc1tfYThdID0gdHJ1ZTtcbiAgfVxuICBzdGF0aWMgaXNJbnN0YW5jZShlcnJvcikge1xuICAgIHJldHVybiBBSVNES0Vycm9yLmhhc01hcmtlcihlcnJvciwgbWFya2VyOCk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBpc0luc3RhbmNlIGluc3RlYWQuXG4gICAqL1xuICBzdGF0aWMgaXNMb2FkU2V0dGluZ0Vycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gbmFtZTc7XG4gIH1cbn07XG5fYTggPSBzeW1ib2w4O1xuXG4vLyBzcmMvZXJyb3JzL25vLWNvbnRlbnQtZ2VuZXJhdGVkLWVycm9yLnRzXG52YXIgbmFtZTggPSBcIkFJX05vQ29udGVudEdlbmVyYXRlZEVycm9yXCI7XG52YXIgbWFya2VyOSA9IGB2ZXJjZWwuYWkuZXJyb3IuJHtuYW1lOH1gO1xudmFyIHN5bWJvbDkgPSBTeW1ib2wuZm9yKG1hcmtlcjkpO1xudmFyIF9hOTtcbnZhciBOb0NvbnRlbnRHZW5lcmF0ZWRFcnJvciA9IGNsYXNzIGV4dGVuZHMgQUlTREtFcnJvciB7XG4gIC8vIHVzZWQgaW4gaXNJbnN0YW5jZVxuICBjb25zdHJ1Y3Rvcih7XG4gICAgbWVzc2FnZSA9IFwiTm8gY29udGVudCBnZW5lcmF0ZWQuXCJcbiAgfSA9IHt9KSB7XG4gICAgc3VwZXIoeyBuYW1lOiBuYW1lOCwgbWVzc2FnZSB9KTtcbiAgICB0aGlzW19hOV0gPSB0cnVlO1xuICB9XG4gIHN0YXRpYyBpc0luc3RhbmNlKGVycm9yKSB7XG4gICAgcmV0dXJuIEFJU0RLRXJyb3IuaGFzTWFya2VyKGVycm9yLCBtYXJrZXI5KTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGlzSW5zdGFuY2UgaW5zdGVhZC5cbiAgICovXG4gIHN0YXRpYyBpc05vQ29udGVudEdlbmVyYXRlZEVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gbmFtZTg7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UgdGhpcyBtZXRob2QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjYXVzZTogdGhpcy5jYXVzZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrXG4gICAgfTtcbiAgfVxufTtcbl9hOSA9IHN5bWJvbDk7XG5cbi8vIHNyYy9lcnJvcnMvdG9vLW1hbnktZW1iZWRkaW5nLXZhbHVlcy1mb3ItY2FsbC1lcnJvci50c1xudmFyIG5hbWU5ID0gXCJBSV9Ub29NYW55RW1iZWRkaW5nVmFsdWVzRm9yQ2FsbEVycm9yXCI7XG52YXIgbWFya2VyMTAgPSBgdmVyY2VsLmFpLmVycm9yLiR7bmFtZTl9YDtcbnZhciBzeW1ib2wxMCA9IFN5bWJvbC5mb3IobWFya2VyMTApO1xudmFyIF9hMTA7XG52YXIgVG9vTWFueUVtYmVkZGluZ1ZhbHVlc0ZvckNhbGxFcnJvciA9IGNsYXNzIGV4dGVuZHMgQUlTREtFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBuYW1lOSxcbiAgICAgIG1lc3NhZ2U6IGBUb28gbWFueSB2YWx1ZXMgZm9yIGEgc2luZ2xlIGVtYmVkZGluZyBjYWxsLiBUaGUgJHtvcHRpb25zLnByb3ZpZGVyfSBtb2RlbCBcIiR7b3B0aW9ucy5tb2RlbElkfVwiIGNhbiBvbmx5IGVtYmVkIHVwIHRvICR7b3B0aW9ucy5tYXhFbWJlZGRpbmdzUGVyQ2FsbH0gdmFsdWVzIHBlciBjYWxsLCBidXQgJHtvcHRpb25zLnZhbHVlcy5sZW5ndGh9IHZhbHVlcyB3ZXJlIHByb3ZpZGVkLmBcbiAgICB9KTtcbiAgICB0aGlzW19hMTBdID0gdHJ1ZTtcbiAgICB0aGlzLnByb3ZpZGVyID0gb3B0aW9ucy5wcm92aWRlcjtcbiAgICB0aGlzLm1vZGVsSWQgPSBvcHRpb25zLm1vZGVsSWQ7XG4gICAgdGhpcy5tYXhFbWJlZGRpbmdzUGVyQ2FsbCA9IG9wdGlvbnMubWF4RW1iZWRkaW5nc1BlckNhbGw7XG4gICAgdGhpcy52YWx1ZXMgPSBvcHRpb25zLnZhbHVlcztcbiAgfVxuICBzdGF0aWMgaXNJbnN0YW5jZShlcnJvcikge1xuICAgIHJldHVybiBBSVNES0Vycm9yLmhhc01hcmtlcihlcnJvciwgbWFya2VyMTApO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYGlzSW5zdGFuY2VgIGluc3RlYWRcbiAgICovXG4gIHN0YXRpYyBpc1Rvb01hbnlFbWJlZGRpbmdWYWx1ZXNGb3JDYWxsRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnJvci5uYW1lID09PSBuYW1lOSAmJiBcInByb3ZpZGVyXCIgaW4gZXJyb3IgJiYgdHlwZW9mIGVycm9yLnByb3ZpZGVyID09PSBcInN0cmluZ1wiICYmIFwibW9kZWxJZFwiIGluIGVycm9yICYmIHR5cGVvZiBlcnJvci5tb2RlbElkID09PSBcInN0cmluZ1wiICYmIFwibWF4RW1iZWRkaW5nc1BlckNhbGxcIiBpbiBlcnJvciAmJiB0eXBlb2YgZXJyb3IubWF4RW1iZWRkaW5nc1BlckNhbGwgPT09IFwibnVtYmVyXCIgJiYgXCJ2YWx1ZXNcIiBpbiBlcnJvciAmJiBBcnJheS5pc0FycmF5KGVycm9yLnZhbHVlcyk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIERvIG5vdCB1c2UgdGhpcyBtZXRob2QuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIHByb3ZpZGVyOiB0aGlzLnByb3ZpZGVyLFxuICAgICAgbW9kZWxJZDogdGhpcy5tb2RlbElkLFxuICAgICAgbWF4RW1iZWRkaW5nc1BlckNhbGw6IHRoaXMubWF4RW1iZWRkaW5nc1BlckNhbGwsXG4gICAgICB2YWx1ZXM6IHRoaXMudmFsdWVzXG4gICAgfTtcbiAgfVxufTtcbl9hMTAgPSBzeW1ib2wxMDtcblxuLy8gc3JjL2Vycm9ycy90eXBlLXZhbGlkYXRpb24tZXJyb3IudHNcbnZhciBuYW1lMTAgPSBcIkFJX1R5cGVWYWxpZGF0aW9uRXJyb3JcIjtcbnZhciBtYXJrZXIxMSA9IGB2ZXJjZWwuYWkuZXJyb3IuJHtuYW1lMTB9YDtcbnZhciBzeW1ib2wxMSA9IFN5bWJvbC5mb3IobWFya2VyMTEpO1xudmFyIF9hMTE7XG52YXIgVHlwZVZhbGlkYXRpb25FcnJvciA9IGNsYXNzIGV4dGVuZHMgQUlTREtFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHsgdmFsdWUsIGNhdXNlIH0pIHtcbiAgICBzdXBlcih7XG4gICAgICBuYW1lOiBuYW1lMTAsXG4gICAgICBtZXNzYWdlOiBgVHlwZSB2YWxpZGF0aW9uIGZhaWxlZDogVmFsdWU6ICR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfS5cbkVycm9yIG1lc3NhZ2U6ICR7Z2V0RXJyb3JNZXNzYWdlKGNhdXNlKX1gLFxuICAgICAgY2F1c2VcbiAgICB9KTtcbiAgICB0aGlzW19hMTFdID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbiAgc3RhdGljIGlzSW5zdGFuY2UoZXJyb3IpIHtcbiAgICByZXR1cm4gQUlTREtFcnJvci5oYXNNYXJrZXIoZXJyb3IsIG1hcmtlcjExKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBpc0luc3RhbmNlYCBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgaXNUeXBlVmFsaWRhdGlvbkVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gbmFtZTEwO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlIHRoaXMgbWV0aG9kLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgY2F1c2U6IHRoaXMuY2F1c2UsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgfTtcbiAgfVxufTtcbl9hMTEgPSBzeW1ib2wxMTtcblxuLy8gc3JjL2Vycm9ycy91bnN1cHBvcnRlZC1mdW5jdGlvbmFsaXR5LWVycm9yLnRzXG52YXIgbmFtZTExID0gXCJBSV9VbnN1cHBvcnRlZEZ1bmN0aW9uYWxpdHlFcnJvclwiO1xudmFyIG1hcmtlcjEyID0gYHZlcmNlbC5haS5lcnJvci4ke25hbWUxMX1gO1xudmFyIHN5bWJvbDEyID0gU3ltYm9sLmZvcihtYXJrZXIxMik7XG52YXIgX2ExMjtcbnZhciBVbnN1cHBvcnRlZEZ1bmN0aW9uYWxpdHlFcnJvciA9IGNsYXNzIGV4dGVuZHMgQUlTREtFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHsgZnVuY3Rpb25hbGl0eSB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgbmFtZTogbmFtZTExLFxuICAgICAgbWVzc2FnZTogYCcke2Z1bmN0aW9uYWxpdHl9JyBmdW5jdGlvbmFsaXR5IG5vdCBzdXBwb3J0ZWQuYFxuICAgIH0pO1xuICAgIHRoaXNbX2ExMl0gPSB0cnVlO1xuICAgIHRoaXMuZnVuY3Rpb25hbGl0eSA9IGZ1bmN0aW9uYWxpdHk7XG4gIH1cbiAgc3RhdGljIGlzSW5zdGFuY2UoZXJyb3IpIHtcbiAgICByZXR1cm4gQUlTREtFcnJvci5oYXNNYXJrZXIoZXJyb3IsIG1hcmtlcjEyKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGlzSW5zdGFuY2UgaW5zdGVhZC5cbiAgICovXG4gIHN0YXRpYyBpc1Vuc3VwcG9ydGVkRnVuY3Rpb25hbGl0eUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gbmFtZTExICYmIHR5cGVvZiBlcnJvci5mdW5jdGlvbmFsaXR5ID09PSBcInN0cmluZ1wiO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlIHRoaXMgbWV0aG9kLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICBmdW5jdGlvbmFsaXR5OiB0aGlzLmZ1bmN0aW9uYWxpdHlcbiAgICB9O1xuICB9XG59O1xuX2ExMiA9IHN5bWJvbDEyO1xuZXhwb3J0IHtcbiAgQUlTREtFcnJvcixcbiAgQVBJQ2FsbEVycm9yLFxuICBFbXB0eVJlc3BvbnNlQm9keUVycm9yLFxuICBJbnZhbGlkUHJvbXB0RXJyb3IsXG4gIEludmFsaWRSZXNwb25zZURhdGFFcnJvcixcbiAgSlNPTlBhcnNlRXJyb3IsXG4gIExvYWRBUElLZXlFcnJvcixcbiAgTG9hZFNldHRpbmdFcnJvcixcbiAgTm9Db250ZW50R2VuZXJhdGVkRXJyb3IsXG4gIFRvb01hbnlFbWJlZGRpbmdWYWx1ZXNGb3JDYWxsRXJyb3IsXG4gIFR5cGVWYWxpZGF0aW9uRXJyb3IsXG4gIFVuc3VwcG9ydGVkRnVuY3Rpb25hbGl0eUVycm9yLFxuICBnZXRFcnJvck1lc3NhZ2Vcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@ai-sdk+provider@0.0.15/node_modules/@ai-sdk/provider/dist/index.mjs\n");

/***/ })

};
;