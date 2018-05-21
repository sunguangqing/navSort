$(function () {

    // 添加分类
    $(document).on("click", ".add-nav .btn", function () {
        var _html = '<div class="nav-box"><div class="nav-top clearfix"><div class="fl nav-name"><input class="input" type="text" /><span class="text-btn"><i class="add-btn">添加子分类</i></span><span class="text-btn"><i class="set-btn">设为导航</i></span></div><div class="fl nav-sort"><span class="up-btn"></span><span class="down-btn"></span></div><div class="fl nav-del"><span class="del-list-btn">删除</span></div></div></div>';
        $(".main").append(_html);
        firstLevelFunc();
    });

    // 添加子分类
    $(document).on("click", ".add-btn", function () {
        var _html = '<div class="nav-list clearfix"><div class="fl nav-name"><input class="input" type="text" /></div><div class="fl nav-sort"><span class="up-btn"></span><span class="down-btn"></span></div><div class="fl nav-del"><span class="del-btn">删除</span></div></div>';
        $(this).parents(".nav-top").parent().append(_html);
        secondLevelFunc();
    });

    // 页面初始化
    // 一级分类导航
    function firstLevelFunc() {
        var firstLevel = $(".nav-box");
        firstLevel.each(function () {
            if($(this).index() !== 0){
                $(this).find(".up-btn").eq(0).addClass("active parent_btn");
            }
            if($(this).index() !== firstLevel.length - 1){
                $(this).find(".down-btn").eq(0).addClass("active parent_btn");
            }
        });
    }
    // 二级分类导航
    function secondLevelFunc() {
        var secondLevel = $(".nav-list"); //二级分类导航
        secondLevel.each(function () {
            var len = $(this).parents(".nav-box").find(".nav-list").length;
            if($(this).index() !== 0 && $(this).index() !== 1){
                $(this).find(".up-btn").eq(0).addClass("active child_btn");
            }
            if($(this).index() !== len){
                $(this).find(".down-btn").eq(0).addClass("active child_btn");
            }
        });
    }
    secondLevelFunc();
    firstLevelFunc();

    // 点击排序按钮之后重新遍历
    // 一级导航
    function firstLevFunc() {
        var firstLev = $(".nav-box");
        firstLev.each(function () {
            if($(this).index() === 0){
                $(this).find(".up-btn").eq(0).removeClass("active parent_btn");
            }
            if($(this).index() === firstLev.length - 1){
                $(this).find(".down-btn").eq(0).removeClass("active parent_btn");
            }
        });
    }
    // 二级导航
    function secondLevFunc(_this) {
        var secondLev = _this.find(".nav-list");
        secondLev.each(function () {
            if($(this).index() === 1){
                $(this).find(".up-btn").eq(0).removeClass("active child_btn");
            }
            if($(this).index() === secondLev.length){
                $(this).find(".down-btn").eq(0).removeClass("active child_btn");
            }
        });
    }

    // 上移
    $(document).on("click", ".up-btn.parent_btn", function () {
        var _this = $(this),
            $this = _this.parent().parent().parent(".nav-box"),
            $thisNext = _this.parent().parent().parent().prev(".nav-box");
        $this.after($thisNext);
        firstLevelFunc();
        firstLevFunc();
    });
    $(document).on("click", ".up-btn.child_btn", function () {
        var _this = $(this),
            _parents = _this.parents(".nav-box"),
            $this = _this.parent().parent(".nav-list"),
            $thisNext = _this.parent().parent().prev(".nav-list");
        $this.after($thisNext);
        secondLevelFunc();
        secondLevFunc(_parents);
    });

    // 下移
    $(document).on("click", ".down-btn.parent_btn", function () {
        var _this = $(this),
            $this = _this.parent().parent().parent(".nav-box"),
            $thisNext = _this.parent().parent().parent().next(".nav-box");
        $this.before($thisNext);
        firstLevelFunc();
        firstLevFunc();
    });
    $(document).on("click", ".down-btn.child_btn", function () {
        var _this = $(this),
            _parents = _this.parents(".nav-box"),
            $this = _this.parent().parent(".nav-list"),
            $thisNext = _this.parent().parent().next(".nav-list");
        $this.before($thisNext);
        secondLevelFunc();
        secondLevFunc(_parents);
    });

    // 商品分类导航 删除一组列表
    $(document).on("click", ".del-list-btn", function () {
        $(this).parents(".nav-box").remove();
        firstLevelFunc();
        firstLevFunc();
    });

    //删除单个列表
    $(document).on("click", ".del-btn", function () {
        var _parents = $(this).parents(".nav-box");
        $(this).parents(".nav-list").remove();
        secondLevelFunc();
        secondLevFunc(_parents);
    });

    // 保存成功提示
    $(".save .btn").on("click", function () {
        $(".save-success").show();
        setTimeout(function () {
            $(".save-success").hide();
        }, 2000);
    });
});