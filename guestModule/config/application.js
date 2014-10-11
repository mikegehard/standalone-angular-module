module.exports = function (lineman) {
    return {
        server:{
            web:{
                port: 8001
            }
        },
        removeTasks: {
            common: ["coffee"]
        },
        ngtemplates: {
            options: {
                module: "hostApp"
            }
        }

    };
};
