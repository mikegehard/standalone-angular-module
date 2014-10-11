module.exports = function (lineman) {
    return {
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
