jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "it.designfuture.toastr.library-preload",
	"modules": {
		"it/designfuture/toastr/library.js": "/*!\n * ${copyright}\n */\n\n/**\n * Initialization Code and shared classes of library it.designfuture.toastr.\n */\nsap.ui.define([\n\t'jquery.sap.global', \n\t'sap/ui/core/library' // library dependency\n\t],  function(jQuery, library) {\n\n\t\t\"use strict\";\n\n\t\t/**\n\t\t * Suite controls library.\n\t\t *\n\t\t * @namespace\n\t\t * @name it.designfuture.toastr\n\t\t * @author Emanuele Ricci <stermi@gmail.com>\n\t\t * @version ${version}\n\t\t * @public\n\t\t */\n\t\t\n\t\t// delegate further initialization of this library to the Core\n\t\tsap.ui.getCore().initLibrary({\n\t\t\tname : \"it.designfuture.toastr\",\n\t\t\tnoLibraryCSS: false,\n\t\t\tversion: \"${version}\",\n\t\t\tdependencies : [\"sap.ui.core\", \"sap.m\"],\n\t\t\ttypes: [],\n\t\t\tinterfaces: [],\n\t\t\tcontrols: [ \n\t\t\t\t\"it.designfuture.toastr.Toastr\"\n\t\t\t],\n\t\t\telements: []\n\t\t});\n\n\t\treturn it.designfuture.toastr;\n\n}, /* bExport= */ false);",
		"it/designfuture/toastr/Toastr.js": "/*!\r\n * ${copyright}\r\n */\r\n\r\n\r\n// Provides control it.designfuture.toastr.Toastr\r\nsap.ui.define([\r\n\t\"./3rdparty/toastr\"\r\n], function (toastrjs) {\r\n\t\"use strict\";\r\n\t\r\n\t/**\r\n\t * @class\r\n\t * A message toast notification offers simple feedback about an operation in a pop-up.\r\n\t * Toasts automatically disappear after a timeout unless the user moves the mouse over\r\n\t * the toast or taps on it. In this case the toast will remain on the screen and can\r\n\t * be closed when the user moves the mouse out or taps out of the toast.\r\n\t * Toasts appears close the bottom of the screen, centered horizontally, but you can change\r\n\t * this position which is not dependent on the default values of the position settings.\r\n\t * The default position applies as long as the application does not do any position setting.\r\n\t * Position settings are \"toast-top-right\", \"toast-bottom-right\", \"toast-bottom-left\", \"toast-top-left\",\r\n\t * \"toast-top-full-width\", \"toast-bottom-full-width\", \"toast-top-center\" and \"toast-bottom-center\".\r\n\t *\r\n\t * This positioning needs to be handled in the application logic.\r\n\t *\r\n\t * Message toast example:\r\n\t *\r\n\t * <pre>\r\n\t * it.designfuture.toastr.Toastr.info(\"Cool message!\", \"Cool title\" {\r\n\t *     closeButton: \t\tfalse,\t\t// default\r\n\t *     debug: \t\t\t\tfalse,\t\t// default\r\n\t *     progressBar: \t\tfalse,\t\t// default\r\n\t *     preventDuplicates: \tfalse,\t\t// default\r\n\t *     tapToDismiss: \t\ttrue,\t\t// default\r\n\t *     newestOnTop: \t\ttrue,\t\t// default\r\n\t *     showEasing: \t\t\t\"swing\",\t// default\r\n\t *     hideEasing: \t\t\t\"linear\",\t// default\r\n\t *     showMethod: \t\t\t\"fadeIn\",\t// default\r\n\t *     hideMethod: \t\t\t\"fadeOut\",\t// default\r\n\t *     showDuration: \t\t300,\t\t// default\r\n\t *     hideDuration: \t\t1000,\t\t// default\r\n\t *     timeOut: \t\t\t5000,\t\t// default\r\n\t *     extendedTimeOut: \t1000,\t\t// default\r\n\t *     rtl: \t\t\t\tfalse,\t\t// default\r\n\t *     onShown: \t\t\tnull\t\t// default\r\n\t *     onHidden: \t\t\tnull\t\t// default\r\n\t *     onclick: \t\t\tnull\t\t// default\r\n\t *     onCloseClick: \t\tnull\t\t// default\r\n\t * });\r\n\t * </pre>\r\n\t *\r\n\t * @author Emanuele Ricci <stermi@gmail.com>\r\n\t * @since 1.40\r\n\t *\r\n\t * @namespace\r\n\t * @public\r\n\t * @alias it.designfuture.toastr.Toastr\r\n\t */\r\n\tvar Toastr =  {};\r\n\r\n\tToastr.__lastToast = null,\r\n\t\r\n\tToastr.info = function(message, title, optionsOverride) {\r\n\t\treturn this.__lastToast = toastr.info(message, title, optionsOverride);\r\n\t};\r\n\t\r\n\tToastr.success = function(message, title, optionsOverride) {\r\n\t\treturn this.__lastToast = toastr.success(message, title, optionsOverride);\r\n\t};\r\n\t\r\n\tToastr.warning = function(message, title, optionsOverride) {\r\n\t\treturn this.__lastToast = toastr.warning(message, title, optionsOverride);\r\n\t};\r\n\t\t\r\n\tToastr.error = function(message, title, optionsOverride) {\r\n\t\treturn this.__lastToast = toastr.error(message, title, optionsOverride);\r\n\t};\r\n\t\r\n\tToastr.clearToast = function(toastObj) {\r\n\t\ttoastr.clear(toastObj);\r\n\t};\r\n\t\r\n\tToastr.clearLastToast = function() {\r\n\t\tthis.clearToast(this.__lastToast);\r\n\t};\r\n\t\r\n\tToastr.clearAllToast = function() {\r\n\t\ttoastr.clear();\r\n\t};\r\n\t\r\n\treturn Toastr;\r\n\r\n}, /* bExport= */ true);",
		"it/designfuture/toastr/ToastrRenderer.js": "sap.ui.define(['jquery.sap.global'],\r\n\tfunction(jQuery) {\r\n\t\"use strict\";\r\n\r\n\r\n\t/**\r\n\t* QRCode renderer.\r\n\t* @static\r\n\t* @namespace\r\n\t*/\r\n\tvar ToastrRenderer = {};\r\n\t\r\n\t/**\r\n\t * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.\r\n\t *\r\n\t * @param {sap.ui.core.RenderManager} oRm The RenderManager that can be used for writing to the render output buffer.\r\n\t * @param {sap.ui.core.Control} oControl An object representation of the control that should be rendered.\r\n\t */\r\n\tToastrRenderer.render = function(oRM, oControl) {};\r\n\r\n\r\n\treturn ToastrRenderer;\r\n\r\n}, /* bExport= */ true);",
		"it/designfuture/toastr/3rdparty/toastr.js": "/*\n * Toastr\n * Copyright 2012-2015\n * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.\n * All Rights Reserved.\n * Use, reproduction, distribution, and modification of this code is subject to the terms and\n * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php\n *\n * ARIA Support: Greta Krafsig\n *\n * Project: https://github.com/CodeSeven/toastr\n */\n/* global define */\n(function (define) {\n    define(['jquery'], function ($) {\n        return (function () {\n            var $container;\n            var listener;\n            var toastId = 0;\n            var toastType = {\n                error: 'error',\n                info: 'info',\n                success: 'success',\n                warning: 'warning'\n            };\n\n            var toastr = {\n                clear: clear,\n                remove: remove,\n                error: error,\n                getContainer: getContainer,\n                info: info,\n                options: {},\n                subscribe: subscribe,\n                success: success,\n                version: '2.1.3',\n                warning: warning\n            };\n\n            var previousToast;\n\n            return toastr;\n\n            ////////////////\n\n            function error(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.error,\n                    iconClass: getOptions().iconClasses.error,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function getContainer(options, create) {\n                if (!options) { options = getOptions(); }\n                $container = $('#' + options.containerId);\n                if ($container.length) {\n                    return $container;\n                }\n                if (create) {\n                    $container = createContainer(options);\n                }\n                return $container;\n            }\n\n            function info(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.info,\n                    iconClass: getOptions().iconClasses.info,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function subscribe(callback) {\n                listener = callback;\n            }\n\n            function success(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.success,\n                    iconClass: getOptions().iconClasses.success,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function warning(message, title, optionsOverride) {\n                return notify({\n                    type: toastType.warning,\n                    iconClass: getOptions().iconClasses.warning,\n                    message: message,\n                    optionsOverride: optionsOverride,\n                    title: title\n                });\n            }\n\n            function clear($toastElement, clearOptions) {\n                var options = getOptions();\n                if (!$container) { getContainer(options); }\n                if (!clearToast($toastElement, options, clearOptions)) {\n                    clearContainer(options);\n                }\n            }\n\n            function remove($toastElement) {\n                var options = getOptions();\n                if (!$container) { getContainer(options); }\n                if ($toastElement && $(':focus', $toastElement).length === 0) {\n                    removeToast($toastElement);\n                    return;\n                }\n                if ($container.children().length) {\n                    $container.remove();\n                }\n            }\n\n            // internal functions\n\n            function clearContainer (options) {\n                var toastsToClear = $container.children();\n                for (var i = toastsToClear.length - 1; i >= 0; i--) {\n                    clearToast($(toastsToClear[i]), options);\n                }\n            }\n\n            function clearToast ($toastElement, options, clearOptions) {\n                var force = clearOptions && clearOptions.force ? clearOptions.force : false;\n                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {\n                    $toastElement[options.hideMethod]({\n                        duration: options.hideDuration,\n                        easing: options.hideEasing,\n                        complete: function () { removeToast($toastElement); }\n                    });\n                    return true;\n                }\n                return false;\n            }\n\n            function createContainer(options) {\n                $container = $('<div/>')\n                    .attr('id', options.containerId)\n                    .addClass(options.positionClass);\n\n                $container.appendTo($(options.target));\n                return $container;\n            }\n\n            function getDefaults() {\n                return {\n                    tapToDismiss: true,\n                    toastClass: 'toast',\n                    containerId: 'toast-container',\n                    debug: false,\n\n                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery\n                    showDuration: 300,\n                    showEasing: 'swing', //swing and linear are built into jQuery\n                    onShown: undefined,\n                    hideMethod: 'fadeOut',\n                    hideDuration: 1000,\n                    hideEasing: 'swing',\n                    onHidden: undefined,\n                    closeMethod: false,\n                    closeDuration: false,\n                    closeEasing: false,\n                    closeOnHover: true,\n\n                    extendedTimeOut: 1000,\n                    iconClasses: {\n                        error: 'toast-error',\n                        info: 'toast-info',\n                        success: 'toast-success',\n                        warning: 'toast-warning'\n                    },\n                    iconClass: 'toast-info',\n                    positionClass: 'toast-top-right',\n                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky\n                    titleClass: 'toast-title',\n                    messageClass: 'toast-message',\n                    escapeHtml: false,\n                    target: 'body',\n                    closeHtml: '<button type=\"button\">&times;</button>',\n                    closeClass: 'toast-close-button',\n                    newestOnTop: true,\n                    preventDuplicates: false,\n                    progressBar: false,\n                    progressClass: 'toast-progress',\n                    rtl: false\n                };\n            }\n\n            function publish(args) {\n                if (!listener) { return; }\n                listener(args);\n            }\n\n            function notify(map) {\n                var options = getOptions();\n                var iconClass = map.iconClass || options.iconClass;\n\n                if (typeof (map.optionsOverride) !== 'undefined') {\n                    options = $.extend(options, map.optionsOverride);\n                    iconClass = map.optionsOverride.iconClass || iconClass;\n                }\n\n                if (shouldExit(options, map)) { return; }\n\n                toastId++;\n\n                $container = getContainer(options, true);\n\n                var intervalId = null;\n                var $toastElement = $('<div/>');\n                var $titleElement = $('<div/>');\n                var $messageElement = $('<div/>');\n                var $progressElement = $('<div/>');\n                var $closeElement = $(options.closeHtml);\n                var progressBar = {\n                    intervalId: null,\n                    hideEta: null,\n                    maxHideTime: null\n                };\n                var response = {\n                    toastId: toastId,\n                    state: 'visible',\n                    startTime: new Date(),\n                    options: options,\n                    map: map\n                };\n\n                personalizeToast();\n\n                displayToast();\n\n                handleEvents();\n\n                publish(response);\n\n                if (options.debug && console) {\n                    console.log(response);\n                }\n\n                return $toastElement;\n\n                function escapeHtml(source) {\n                    if (source == null) {\n                        source = '';\n                    }\n\n                    return source\n                        .replace(/&/g, '&amp;')\n                        .replace(/\"/g, '&quot;')\n                        .replace(/'/g, '&#39;')\n                        .replace(/</g, '&lt;')\n                        .replace(/>/g, '&gt;');\n                }\n\n                function personalizeToast() {\n                    setIcon();\n                    setTitle();\n                    setMessage();\n                    setCloseButton();\n                    setProgressBar();\n                    setRTL();\n                    setSequence();\n                    setAria();\n                }\n\n                function setAria() {\n                    var ariaValue = '';\n                    switch (map.iconClass) {\n                        case 'toast-success':\n                        case 'toast-info':\n                            ariaValue =  'polite';\n                            break;\n                        default:\n                            ariaValue = 'assertive';\n                    }\n                    $toastElement.attr('aria-live', ariaValue);\n                }\n\n                function handleEvents() {\n                    if (options.closeOnHover) {\n                        $toastElement.hover(stickAround, delayedHideToast);\n                    }\n\n                    if (!options.onclick && options.tapToDismiss) {\n                        $toastElement.click(hideToast);\n                    }\n\n                    if (options.closeButton && $closeElement) {\n                        $closeElement.click(function (event) {\n                            if (event.stopPropagation) {\n                                event.stopPropagation();\n                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {\n                                event.cancelBubble = true;\n                            }\n\n                            if (options.onCloseClick) {\n                                options.onCloseClick(event);\n                            }\n\n                            hideToast(true);\n                        });\n                    }\n\n                    if (options.onclick) {\n                        $toastElement.click(function (event) {\n                            options.onclick(event);\n                            hideToast();\n                        });\n                    }\n                }\n\n                function displayToast() {\n                    $toastElement.hide();\n\n                    $toastElement[options.showMethod](\n                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}\n                    );\n\n                    if (options.timeOut > 0) {\n                        intervalId = setTimeout(hideToast, options.timeOut);\n                        progressBar.maxHideTime = parseFloat(options.timeOut);\n                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;\n                        if (options.progressBar) {\n                            progressBar.intervalId = setInterval(updateProgress, 10);\n                        }\n                    }\n                }\n\n                function setIcon() {\n                    if (map.iconClass) {\n                        $toastElement.addClass(options.toastClass).addClass(iconClass);\n                    }\n                }\n\n                function setSequence() {\n                    if (options.newestOnTop) {\n                        $container.prepend($toastElement);\n                    } else {\n                        $container.append($toastElement);\n                    }\n                }\n\n                function setTitle() {\n                    if (map.title) {\n                        var suffix = map.title;\n                        if (options.escapeHtml) {\n                            suffix = escapeHtml(map.title);\n                        }\n                        $titleElement.append(suffix).addClass(options.titleClass);\n                        $toastElement.append($titleElement);\n                    }\n                }\n\n                function setMessage() {\n                    if (map.message) {\n                        var suffix = map.message;\n                        if (options.escapeHtml) {\n                            suffix = escapeHtml(map.message);\n                        }\n                        $messageElement.append(suffix).addClass(options.messageClass);\n                        $toastElement.append($messageElement);\n                    }\n                }\n\n                function setCloseButton() {\n                    if (options.closeButton) {\n                        $closeElement.addClass(options.closeClass).attr('role', 'button');\n                        $toastElement.prepend($closeElement);\n                    }\n                }\n\n                function setProgressBar() {\n                    if (options.progressBar) {\n                        $progressElement.addClass(options.progressClass);\n                        $toastElement.prepend($progressElement);\n                    }\n                }\n\n                function setRTL() {\n                    if (options.rtl) {\n                        $toastElement.addClass('rtl');\n                    }\n                }\n\n                function shouldExit(options, map) {\n                    if (options.preventDuplicates) {\n                        if (map.message === previousToast) {\n                            return true;\n                        } else {\n                            previousToast = map.message;\n                        }\n                    }\n                    return false;\n                }\n\n                function hideToast(override) {\n                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;\n                    var duration = override && options.closeDuration !== false ?\n                        options.closeDuration : options.hideDuration;\n                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;\n                    if ($(':focus', $toastElement).length && !override) {\n                        return;\n                    }\n                    clearTimeout(progressBar.intervalId);\n                    return $toastElement[method]({\n                        duration: duration,\n                        easing: easing,\n                        complete: function () {\n                            removeToast($toastElement);\n                            clearTimeout(intervalId);\n                            if (options.onHidden && response.state !== 'hidden') {\n                                options.onHidden();\n                            }\n                            response.state = 'hidden';\n                            response.endTime = new Date();\n                            publish(response);\n                        }\n                    });\n                }\n\n                function delayedHideToast() {\n                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {\n                        intervalId = setTimeout(hideToast, options.extendedTimeOut);\n                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);\n                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;\n                    }\n                }\n\n                function stickAround() {\n                    clearTimeout(intervalId);\n                    progressBar.hideEta = 0;\n                    $toastElement.stop(true, true)[options.showMethod](\n                        {duration: options.showDuration, easing: options.showEasing}\n                    );\n                }\n\n                function updateProgress() {\n                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;\n                    $progressElement.width(percentage + '%');\n                }\n            }\n\n            function getOptions() {\n                return $.extend({}, getDefaults(), toastr.options);\n            }\n\n            function removeToast($toastElement) {\n                if (!$container) { $container = getContainer(); }\n                if ($toastElement.is(':visible')) {\n                    return;\n                }\n                $toastElement.remove();\n                $toastElement = null;\n                if ($container.children().length === 0) {\n                    $container.remove();\n                    previousToast = undefined;\n                }\n            }\n\n        })();\n    });\n}(typeof define === 'function' && define.amd ? define : function (deps, factory) {\n    if (typeof module !== 'undefined' && module.exports) { //Node\n        module.exports = factory(require('jquery'));\n    } else {\n        window.toastr = factory(window.jQuery);\n    }\n}));\n"
	}
});