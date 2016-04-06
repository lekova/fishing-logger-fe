System.register(['./fishinglogs.component', './fishinglog.component', './fishinglog-list.component', './fishinglog.service', './sort-fishinglogs.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (fishinglogs_component_1_1) {
                exportStar_1(fishinglogs_component_1_1);
            },
            function (fishinglog_component_1_1) {
                exportStar_1(fishinglog_component_1_1);
            },
            function (fishinglog_list_component_1_1) {
                exportStar_1(fishinglog_list_component_1_1);
            },
            function (fishinglog_service_1_1) {
                exportStar_1(fishinglog_service_1_1);
            },
            function (sort_fishinglogs_pipe_1_1) {
                exportStar_1(sort_fishinglogs_pipe_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=fishinglogs.js.map