class ExpressError extends Error{
    constructor(status,messages){
        super();
        this.status = status;
        this.messages = messages;
    }
}

module.exports = ExpressError;