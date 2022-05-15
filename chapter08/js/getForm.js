//select 태그 이름에 폼 이름으로 접근
var selectMenu = document.testForm.major;

function displaySelect(){
    // var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    // alert(selectedText);

    //id로 접근 - 값 가져오기
    var selectedText = document.getElementById("subj").value;
    alert(selectedText + "가 선택되었습니다.");
}





