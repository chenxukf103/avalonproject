define(["avalon"], function (avalon) {
    var validationVM;
    var vm = avalon.define({
        $id: "validationDemo1",
        $skipArray: ["validation"],
        a: "xxxx",
        b: "a",
        d: "",
        g: "",
        reset: function () {
            validationVM && validationVM.resetAll();
        },
        validation: {
            onInit: function (v) {
                validationVM = v
            },
            onReset: function (e, data) {
                data.valueResetor && data.valueResetor();
                avalon(this).removeClass("error success");
                removeError(this);
            },
            //this指向被验证元素this指向被验证元素，传参为一个对象数组外加一个可能存在的事件对象
            onError: function (reasons) {
                reasons.forEach(function (reason) {
                    avalon(this).removeClass("success").addClass("error");
                    showError(this, reason);
                }, this);
            },
            onSuccess: function () {
                avalon(this).removeClass("error").addClass("success");
                removeError(this);
            },
            onValidateAll: function (reasons) {
                reasons.forEach(function (reason) {
                    avalon(reason.element).removeClass("success").addClass("error");
                    showError(reason.element, reason);
                });
                if (reasons.length === 0) {
                    avalon.log("全部验证成功!");
                }
            }
        }
    });
    var vm2 = avalon.define({
        $id: "validationDemo2",
        c: "d",
        g: "",
        b: "",
        h: "",
        d: "",
        e: "",
        f: "",
        n: "",
        reset: function () {
            validationVM && validationVM.resetAll();
        },
        validation: {
            onInit: function (v) {
                validationVM = v
            },
            onReset: function (e, data) {
                data.valueResetor && data.valueResetor();
                avalon(this).removeClass("error success");
                removeError(this);
            },
            //this指向被验证元素this指向被验证元素，传参为一个对象数组外加一个可能存在的事件对象
            onError: function (reasons) {
                reasons.forEach(function (reason) {
                    avalon(this).removeClass("success").addClass("error");
                    showError(this, reason);
                }, this);
            },
            onSuccess: function () {
                avalon(this).removeClass("error").addClass("success");
                removeError(this);
            },
            onValidateAll: function (reasons) {
                reasons.forEach(function (reason) {
                    avalon(reason.element).removeClass("success").addClass("error");
                    showError(reason.element, reason);
                });
                if (reasons.length === 0) {
                    avalon.log("全部验证成功!");
                }
            }
        },
        validateInKeyup: false
    });
    var vm3 = avalon.define({
        $id: "validationDemo3",
        $skipArray: ["validation"],
        a: "",
        clearAll: function () {
            validationVM && validationVM.resetAll(function (a) {
                console.log(a)
            })
        },
        checkAll: function () {
            validationVM && validationVM.validateAll()
        },
        validation: {
            validationHooks: {
                match12345: {
                    message: "必须等于12345",
                    get: function (value, data, next) {//这里的传参是固定的，next为回调
                        next(value === "12345")
                        return value
                    }
                }
            },
            valiedateInBlur: false,
            onInit: function (v) {
                validationVM = v
            },
            onReset: function (e, data) {
                data.valueResetor()
            },
            onValidateAll: function (reasons) {
                var msg = []
                reasons.forEach(function (reason) {
                    msg.push(reason.getMessage())
                })
                if (reasons.length === 0) {
                    alert("全部验证成功！")
                } else {
                    alert(msg.join("\n"))
                }
            }
        }
    });
    var vm4 = avalon.define({
        $id: "validationDemo4",
        $skipArray: ["validation"],
        g: "1",
        dropdown: {
            onHide: function () {
                var element = this;
                validationVM.data.forEach(function (data) {
                    if (data.element == element) {
                        validationVM.validate(data,0,{});
                    }
                })
            }
        },
        reset: function () {
            validationVM && validationVM.resetAll()
        },
        validation: {
            onInit: function (v) {
                validationVM = v
            },
            onReset: function (e, data) {
                data.valueResetor && data.valueResetor()
                avalon(this).removeClass("error success")
                removeError(this)
            },
            onError: function (reasons) {
                reasons.forEach(function (reason) {
                    avalon(this).removeClass("success").addClass("error")
                    showError(this, reason)
                }, this)
            },
            onSuccess: function () {
                avalon(this).removeClass("error").addClass("success")
                removeError(this)
            },
            onValidateAll: function (reasons) {
                reasons.forEach(function (reason) {
                    avalon(reason.element).removeClass("success").addClass("error")
                    showError(reason.element, reason)
                })
                if (reasons.length === 0) {
                    avalon.log("全部验证成功！")
                }
            }
        }
    });

    function removeError(el) {
        var next = el.nextSibling;
        if (next && next.className == 'error-tip') {
            avalon.log("parentNode:" + el.parentNode);
            el.parentNode.removeChild(next);
        }
    }

    function showError(el, data) {
        var next = el.nextSibling;
        avalon.log(next);
        if (!(next && next.className == 'error-tip')) {
            next = document.createElement("div");
            next.className = 'error-tip';
            el.parentNode.appendChild(next);
        }
        next.innerHTML = data.getMessage();
    }

    return avalon.controller(function ($ctrl) {
        $ctrl.$vmodels = [vm, vm2, vm3, vm4];
        $ctrl.$onEnter = function (param, rs, rj) {
        }
    })
});