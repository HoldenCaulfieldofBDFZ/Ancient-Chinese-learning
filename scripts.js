document.addEventListener("DOMContentLoaded", function () {
    // 获取所有注释按钮
    var buttons = document.querySelectorAll(".collapsible-button");

    // 为每个按钮添加事件监听器
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // 获取对应的注释内容
            var contentId = button.id.replace("toggleButton", "collapsibleContent");
            var collapsibleContent = document.getElementById(contentId);

            // 切换注释内容的显示和隐藏
            collapsibleContent.classList.toggle("collapsible-content-visible");
        });
    });

    // 获取选择题按钮
    var toggleQuizButton = document.getElementById("toggleQuizButton");
    var quizContainer = document.getElementById("quizContainer");

    // 为选择题按钮添加事件监听器
    toggleQuizButton.addEventListener("click", function () {
        quizContainer.classList.toggle("quiz-visible");

        // 获取所有题目的选项容器
        var optionsContainers = document.querySelectorAll(".options");

        // 遍历每个选项容器，将其可见性切换
        optionsContainers.forEach(function (optionsContainer) {
            optionsContainer.classList.toggle("visible");
        });
    });
});
