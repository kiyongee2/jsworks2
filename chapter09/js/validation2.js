// 입력값 검증
var id = document.getElementById("user-id");
var pw1 = document.getElementById("pwd1")
var pw2 = document.getElementById("pwd2");

//비밀번호 정규 표현식
let pw_pat1 = /[0-9A-Za-z]/;
let pw_pat2 = /[~!@#$%^&*]/;

id.onchange = checkId;  //checkId() 함수 호출
pw1.onchange = checkPw;
pw2.onchange = comparePw;

//id.addEventListener("change", checkId);

//아이디 유효성 검사
function checkId(){
    if(id.value.length < 4 || id.value.length > 15){
        alert("아이디는 4자이상 15자까지 가능합니다.")
        id.select();  //선택 범위 지정
    }
}

//비밀번호 유효성 검사
function checkPw(){
    if(pw1.value.length < 8 || !pw_pat1.test(pw1.value) || !pw_pat2.test(pw1.value)){
        alert("비밀번호는 숫자, 영어 대,소문자, 특수문자 포함 8자 이상입니다.");
        pw1.focus();  //커서 위치
        pw1.value = "";   //초기화
    }
}

//비밀번호 일치 여부 검삭
function comparePw(){
    if(pw1.value != pw2.value){ //두값이 같지 않으면
        alert("비밀번호가 일치하지 않습니다.");
        pw2.focus();
        pw2.value="";
    }
}
