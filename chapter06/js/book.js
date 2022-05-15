// 생성자 함수 - Book 만들기
function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
}

//Book 객체 생성
let web = new Book("HTML5+CSS3+JavaScript", "고경희", 30000);
let python = new Book("점프 투 파이썬", "박응용", 20000);
let robot = new Book("천개의 파랑", "천선란", 14000);

//생성된 객체를 배열에 저장
let bookList = [web, python, robot];

//bookList[0] = web
//bookList[0].title = "HTML5+CSS3+JavaScript"

document.write("<h1>책 제목으로 살펴보기</h1>");
for(let i = 0; i < bookList.length; i++){
    document.write("<p>" + bookList[i].title + "</p>");
}

