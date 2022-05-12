const {
    api,
    delay,
    mock,
    resp
} = require("apite");


api.get("/test", (ctx) => {
    return ctx;
});
