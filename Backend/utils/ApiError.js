class ApiError extends Error {
    constructor(statusCode, message = "Something went worng ", errors = []) {
      super(message);
      this.statusCode = statusCode;
      this.errors = errors;
      this.message = message ;
      this.success = false ; 
    }
  }
  
   export {ApiError};
  