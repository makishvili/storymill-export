module.exports = function(config) {
    config.node("desktop.bundles/list", function(nodeConfig) {
        nodeConfig.addTechs(getBaseTechs());
        nodeConfig.addTargets(getBaseTargets());

    });

    config.node("desktop.bundles/book", function(nodeConfig) {
        nodeConfig.addTechs(getBaseTechs().concat([
            require("../.bem/techs/priv-fb2"),
            require("../.bem/techs/priv-fo"),
            [ require("enb/techs/file-copy"), { sourceTarget: "?.priv.fb2.js", destTarget: "_?.priv.fb2.js" } ],
            [ require("enb/techs/file-copy"), { sourceTarget: "?.priv.fo.js", destTarget: "_?.priv.fo.js" } ]

        ]));
        nodeConfig.addTargets(getBaseTargets().concat([
            "_?.priv.fb2.js",
            "_?.priv.fo.js"
        ]));

    });

    function getBaseTechs() {
        return [
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            require("enb/techs/bemdecl-from-bemjson"),
            require("enb/techs/deps-old"),
            require("enb/techs/files"),
            [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            require("enb/techs/bemhtml"),
            require("enb/techs/html-from-bemjson"),
            require("enb/techs/js"),
            require("enb/techs/priv-js"),
            require("enb/techs/css"),

            [ require("enb/techs/file-copy"), { sourceTarget: "?.js", destTarget: "_?.js" } ],
            [ require("enb/techs/file-copy"), { sourceTarget: "?.priv.js", destTarget: "_?.priv.js" } ],
            [ require("enb/techs/file-copy"), { sourceTarget: "?.css", destTarget: "_?.css" } ]
        ];
    }

    function getBaseTargets() {
        return [
            "?.html",
            "_?.js",
            "_?.priv.js",
            "_?.css"
        ];
    }

    function getLevels() {
        return [
            {"path":"bem-bl/blocks-common","check":false},
            {"path":"bem-bl/blocks-desktop","check":false},
            {"path":"desktop.blocks","check":true}
        ].map(function(l) { return config.resolvePath(l); });
    }
}