// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block30")
                .setLeft("2.2857142857142856em")
                .setTop("2.2857142857142856em")
                .setWidth("21.409523809523808em")
                .setHeight("21.409523809523808em")
            );
            
            host.xui_ui_block30.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid11")
                .setLeft("0em")
                .setTop("0em")
                .setRowNumbered(true)
                .setHeader([
                    {
                        "id" : "col1",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col1"
                    },
                    {
                        "id" : "col2",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col2"
                    },
                    {
                        "id" : "col3",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col3"
                    },
                    {
                        "id" : "col4",
                        "width" : "8em",
                        "type" : "input",
                        "caption" : "col4"
                    }
                ])
                .setRows([
                    {
                        "cells" : [
                            {
                                "value" : "A1"
                            },
                            {
                                "value" : "B1"
                            },
                            {
                                "value" : "C1"
                            },
                            {
                                "value" : "D1"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A2"
                            },
                            {
                                "value" : "B2"
                            },
                            {
                                "value" : "C2"
                            },
                            {
                                "value" : "D2"
                            }
                        ]
                    },
                    {
                        "cells" : [
                            {
                                "value" : "A3"
                            },
                            {
                                "value" : "B3"
                            },
                            {
                                "value" : "C3"
                            },
                            {
                                "value" : "D3"
                            }
                        ],
                        "sub" : [
                            {
                                "cells" : [
                                    "A4",
                                    "B4",
                                    "C4",
                                    "D4"
                                ]
                            }
                        ]
                    },
                    {
                        "iniFold" : false,
                        "cells" : [
                            {
                                "value" : "A5"
                            },
                            {
                                "value" : "B5"
                            },
                            {
                                "value" : "C5"
                            },
                            {
                                "value" : "D5"
                            }
                        ],
                        "sub" : [
                            {
                                "cells" : [
                                    {
                                        "value" : "A6"
                                    },
                                    {
                                        "value" : "B6"
                                    },
                                    {
                                        "value" : "C6"
                                    },
                                    {
                                        "value" : "D6"
                                    }
                                ]
                            }
                        ]
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group6")
                .setLeft("28.19047619047619em")
                .setTop("2.2857142857142856em")
                .setWidth("18em")
                .setCaption("Update")
                .setToggleBtn(false)
            );
            
            host.xui_ui_group6.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input26")
                .setLeft("-0.7619047619047619em")
                .setTop("0.6857142857142857em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Key")
            );
            
            host.xui_ui_group6.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input27")
                .setLeft("-0.7619047619047619em")
                .setTop("2.9714285714285715em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Value")
            );
            
            host.xui_ui_group6.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton3")
                .setLeft("7.619047619047619em")
                .setTop("6.019047619047619em")
                .setCaption("Update")
            );
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group7")
                .setLeft("28.19047619047619em")
                .setTop("13.714285714285714em")
                .setWidth("18em")
                .setCaption("New")
                .setToggleBtn(false)
            );
            
            host.xui_ui_group7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input28")
                .setLeft("-0.7619047619047619em")
                .setTop("0em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Key")
            );
            
            host.xui_ui_group7.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input29")
                .setLeft("-0.7619047619047619em")
                .setTop("2.2857142857142856em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Value")
            );
            
            host.xui_ui_group7.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setLeft("7.619047619047619em")
                .setTop("5.257142857142857em")
                .setCaption("Add New")
                .onClick([
                    {
                        "desc" : "validate",
                        "type" : "control",
                        "target" : "xui_ui_group7",
                        "args" : [
                            "{page.xui_ui_group7.checkValid()}"
                        ],
                        "method" : "checkValid",
                        "redirection" : "other:callback:call",
                        "event" : 1
                    },
                    {
                        "desc" : "get data",
                        "type" : "control",
                        "target" : "xui_ui_group7",
                        "args" : [
                            "{page.xui_ui_group7.getFormValues()}",
                            "temp",
                            "data"
                        ],
                        "method" : "getFormValues",
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "call create api",
                        "type" : "module",
                        "target" : "module_firestore491",
                        "args" : [
                            "{page.module_firestore491.createDoc}",
                            undefined,
                            undefined,
                            "createDoc",
                            "todo",
                            "{temp.data}"
                        ],
                        "method" : "$Functions.createDoc",
                        "redirection" : "other:callback:call"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("28.19047619047619em")
                .setTop("25.904761904761905em")
                .setCaption("Delete Selected Row")
            );
            
            append(
                xui.create("Module.Firestore49", "xui.Module")
                .setHost(host,"module_firestore491")
                .setEvents({
                    "onFirebaseLogin" : [
                        {
                            "desc" : "call listDocsAPI",
                            "type" : "module",
                            "target" : "module_firestore491",
                            "args" : [
                                "{page.module_firestore491.listDocs}",
                                undefined,
                                undefined,
                                "listDocs",
                                "todo"
                            ],
                            "method" : "$Functions.listDocs",
                            "redirection" : "other:callback:call"
                        }
                    ],
                    "onDocsList" : [
                        {
                            "desc" : "refresh",
                            "type" : "page",
                            "target" : "*",
                            "args" : [
                                "{page.functions.refreshGrid}",
                                undefined,
                                undefined,
                                "{args[2]}"
                            ],
                            "method" : "functions.refreshGrid",
                            "redirection" : "other:callback:call"
                        }
                    ]
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        events:{
            "onReady" : [
                {
                    "desc" : "auth",
                    "type" : "module",
                    "target" : "module_firestore491",
                    "args" : [
                        "{page.module_firestore491.ensureFirebaseAuth}"
                    ],
                    "method" : "$Functions.ensureFirebaseAuth",
                    "redirection" : "other:callback:call"
                },
                "_page_onready"
            ]
        },
        _page_onready:function(e,i){

        },
        functions:{
            "refreshGrid" : {
                "desc" : "",
                "params" : [
                    {
                        "id" : "list",
                        "type" : "Array",
                        "desc" : ""
                    }
                ],
                "actions" : [
                    {
                        "desc" : "clear rows",
                        "type" : "control",
                        "target" : "xui_ui_treegrid11",
                        "args" : [ ],
                        "method" : "removeAllRows"
                    },
                    {
                        "desc" : "add rows",
                        "type" : "control",
                        "target" : "xui_ui_treegrid11",
                        "args" : [
                            "{page.xui_ui_treegrid11.setRawData()}",
                            undefined,
                            undefined,
                            "{args[0]}"
                        ],
                        "method" : "setRawData",
                        "redirection" : "other:callback:call"
                    }
                ]
            }
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});