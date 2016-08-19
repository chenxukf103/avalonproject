require.config({
   /* baseUrl: '/',*/
    paths: {
        jquery: 'resources/lib/jquery/jquery-1.12.4.min',
        avalon: "resources/lib/avalon/avalon.shim",
        text: 'resources/lib/require/text',
        domReady: 'resources/lib/require/domReady',
        css: 'resources/lib/require/css',
        routerConfig:'common/config/router-config',
        oniui:'resources/lib/oniui/oniui.require',
        contextService:'common/utils/contextService',
        sysUtil:'common/utils/sysUtil',
        menuUtil:'common/utils/menuUtil'
    },
    priority: ['text', 'css'],
    shim: {
        jquery: {
            exports: "jquery"
        },
        avalon: {
            exports: "avalon"
        }
    }
});


require(["avalon","jquery","domReady!","oniui","./app"],function() {
});