//자리 배치도
let customNum = prompt("입장객은 몇 명인가요?"); //입장객 수
let colNum = prompt("한 줄에 몇 명 앉나요?");   //열의 수
let rowNum;       //행의 수

//입장객 수에 따른 행과 열 계산
if(customNum % colNum === 0){
  rowNum = parseInt(customNum / colNum);
}
else{ //나머지가 있으면 한 줄(행)이 더 필요
  rowNum = parseInt(customNum / colNum) + 1;
}

//좌석 번호 배치
document.write('<table>');
for(let i = 0; i < rowNum; i++){
  document.write('<tr>');
  for(let j = 1; j <= colNum; j++){
    let seatNum = i * colNum + j;   //좌석 번호
    if(seatNum > customNum)  //좌석번호가 입장객수보다 크면 빠져나옴
        break;
    document.write("<td>좌석" + seatNum + '</td>');
  }
  document.write('</tr>');
}
document.write('</table>');
