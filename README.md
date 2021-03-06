### 点击上下按钮对列表重新排序

https://sunguangqing.github.io/navSort/nav-sort.html

#### `HTML结构`
```HTML
<div class="nav-box">
    <div class="nav-top clearfix">
        <div class="fl nav-name"><input class="input" value="一级导航 - 第一个" type="text" />
            <span class="text-btn"><i class="add-btn">添加子分类</i></span>
            <span class="text-btn"><i class="set-btn">设为导航</i></span>
        </div>
        <div class="fl nav-sort">
            <span class="up-btn"></span><span class="down-btn"></span>
        </div>
        <div class="fl nav-del"><span class="del-list-btn">删除</span></div>
    </div>
    <div class="nav-list clearfix">
        <div class="fl nav-name"><input class="input" value="二级导航 - 第一个" type="text" /></div>
        <div class="fl nav-sort">
            <span class="up-btn"></span><span class="down-btn"></span>
        </div>
        <div class="fl nav-del"><span class="del-btn">删除</span></div>
    </div>
    <div class="nav-list clearfix">
        <div class="fl nav-name"><input class="input" value="二级导航 - 第二个" type="text" /></div>
        <div class="fl nav-sort">
            <span class="up-btn"></span><span class="down-btn"></span>
        </div>
        <div class="fl nav-del"><span class="del-btn">删除</span></div>
    </div>
</div>
```

#### `CSS代码：`
```CSS
/*导航列表*/
.nav-name{
    width: 70%;
    padding-left: 21px;
}
.nav-sort{
    width: 20%;
    text-align: center;
}
.nav-del{
    width: 10%;
    text-align: center;
}
.nav-top > div{
    height: 47px;
    background-color: #e6f7ff;
    border-bottom: 1px solid #e8e8e8;
}
.nav-name .input{
    width: 190px;
    height: 34px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    margin-top: 6px;
    padding: 0 10px;
}
.nav-name .text-btn{
    color: #108ee9;
    width: 33.33%;
    text-align: center;
}
.nav-del{
    line-height: 47px;
}
.nav-list > div{
    height: 47px;
    border-bottom: 1px solid #e8e8e8;
}
.nav-list .nav-name{
    padding-left: 44px;
}
.nav-list .del-btn,
.nav-top .del-list-btn{
    color: #108ee9;
    cursor: pointer;
}
/*利用伪类实现上下按钮图标*/
/*默认样式*/
.nav-sort .up-btn,
.nav-sort .down-btn{
    position: relative;
    margin-right: 13px;
    margin-left: 5px;
    cursor: pointer;
}
.nav-sort .up-btn:after,
.nav-sort .up-btn:before,
.nav-sort .down-btn:after,
.nav-sort .down-btn:before{
    position: absolute;
    content: '';
}
.nav-sort .up-btn:after,
.nav-sort .down-btn:after{
    width: 6px;
    height: 10px;
    background-color: #d9d9d9;
}
.nav-sort .up-btn:after{
    top: 9px;
}
.nav-sort .down-btn:before,
.nav-sort .up-btn:before{
    left: -3px;
    border: 6px solid transparent;
    border-top-width: 10px;
    border-bottom-width: 10px;
}
.nav-sort .up-btn:before{
    border-bottom-color: #d9d9d9;
}
.nav-sort .down-btn:before{
    border-top-color: #d9d9d9;
}
.nav-sort .down-btn:before{
    top: 10px;
}
.nav-sort .up-btn:before{
    top: -11px;
}
/*一级导航 可点击样式*/
.nav-top .down-btn.active:after,
.nav-top .up-btn.active:after{
    background-color: #1296db;
}
.nav-top .down-btn.active:before{
    border-top-color: #1296db;
}
.nav-top .up-btn.active:before{
    border-bottom-color: #1296db;
}
/*二级导航 可点击样式*/
.nav-list .down-btn.active:after,
.nav-list .up-btn.active:after {
    background-color: #1afa29;
}
.nav-list .up-btn.active:before{
    border-bottom-color: #1afa29;
}
.nav-list .down-btn.active:before{
    border-top-color: #1afa29;
}
```

#### `JS代码：`
### --- 页面初始化
```JavaScript
// 一级导航
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
// 二级导航
function secondLevelFunc() {
    var secondLevel = $(".nav-list"); 
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
```

### --- 点击排序按钮之后重新遍历
```JavaScript
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
```

### --- 上移
```JavaScript
// 一级导航
$(document).on("click", ".up-btn.parent_btn", function () {
    var _this = $(this),
        $this = _this.parent().parent().parent(".nav-box"),
        $thisNext = _this.parent().parent().parent().prev(".nav-box");
    $this.after($thisNext);
    firstLevelFunc();
    firstLevFunc();
});
// 二级导航
$(document).on("click", ".up-btn.child_btn", function () {
    var _this = $(this),
        _parents = _this.parents(".nav-box"),
        $this = _this.parent().parent(".nav-list"),
        $thisNext = _this.parent().parent().prev(".nav-list");
    $this.after($thisNext);
    secondLevelFunc();
    secondLevFunc(_parents);
});
```

### --- 下移
```JavaScript
// 一级导航
$(document).on("click", ".down-btn.parent_btn", function () {
    var _this = $(this),
        $this = _this.parent().parent().parent(".nav-box"),
        $thisNext = _this.parent().parent().parent().next(".nav-box");
    $this.before($thisNext);
    firstLevelFunc();
    firstLevFunc();
});
// 二级导航
$(document).on("click", ".down-btn.child_btn", function () {
    var _this = $(this),
        _parents = _this.parents(".nav-box"),
        $this = _this.parent().parent(".nav-list"),
        $thisNext = _this.parent().parent().next(".nav-list");
    $this.before($thisNext);
    secondLevelFunc();
    secondLevFunc(_parents);
});
```

### --- 删除一组列表
```JavaScript
$(document).on("click", ".del-list-btn", function () {
    $(this).parents(".nav-box").remove();
    firstLevelFunc();
    firstLevFunc();
});
```

### --- 删除单个列表
```JavaScript
$(document).on("click", ".del-btn", function () {
    var _parents = $(this).parents(".nav-box");
    $(this).parents(".nav-list").remove();
    secondLevelFunc();
    secondLevFunc(_parents);
});
```
