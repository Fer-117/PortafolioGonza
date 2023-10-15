function (factory){
    if(typeof define === "function" && define.amd){
        define(['jquery'], factory);
    } else if(typeof module === "object" && module.exports){
        module.exports = function(root, jQuery){
            if(jQuery === undefined)
        }
    }
}