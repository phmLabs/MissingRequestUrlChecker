// swagger configuration file

// values in the swagger hash are system configuration for swagger-node
var swagger = {

    fittingsDirs: ["api/fittings", "node_modules"],
    defaultPipe: null,
    swaggerControllerPipe: "swagger_controllers", // defines the standard processing pipe for controllers

    // values defined in the bagpipes key are the bagpipes pipes and fittings definitions
    // (see https://github.com/apigee-127/bagpipes)
    bagpipes: {
        _router: {
            name: "swagger_router",
            mockMode: false,
            mockControllersDirs: ["api/mocks"],
            controllersDirs: ["api/controllers"]
        },

        _swagger_validate: {
            name: "swagger_validator",
            validateResponse: true
        },

        // pipe for all swagger-node controllers
        swagger_controllers: [
            {onError: json_error_handler},
            "cors",
            "swagger_security",
            "_swagger_validate",
            "express_compatibility",
            "_router"
        ],
        // pipe to serve swagger (endpoint is in swagger.yaml)
        swagger_raw: {
            name: "swagger_raw"
        }
    }
};