
function checkMember(){
    let form = document.regForm;
    let id = form.mid.value;
    let pwd = form.passwd.value;
    let name = form.name.value;

    //비밀번호 정규 표현식
    let pwd_pat1 = /[0-9A-Za-z]/;
    let pwd_pat2 = /[~!@#$%^&*]/;

    if(id.length != 5){
        alert("아이디는 5자까지 가능합니다.");
        form.mid.select();
        return false;
    }
    else if(pwd.length != 8 || !pwd_pat1.test(pwd) || !pwd_pat2.test(pwd) ){
        alert("비밀번호는 영문자, 숫자, 특수문자 포함 8자까지 가능합니다.");
        form.mid.select();
        return false;
    }
    else if(name == ""){
        alert("이름은 필수 입력 항목입니다.")
        form.mid.focus()
        return false;
    }
    else{
        form.submit();
    }

}