var level=["Ferro", "Bronze","Prata","Ouro","Diamante","Lendário","Imortal"]
var textResult=["O Herói tem saldo de "," e está no nível "]

function xp(win,loser){
  return win - loser
}
let pontos = xp(10, 0)
if (pontos<=10){
  console.log(textResult[0]+pontos
   +textResult[1]+level[0])
}
if (!(pontos<11) && (pontos<=20)){
  console.log(textResult[0]+pontos
              +textResult[1]+level[1])
}
if (!(pontos<21) && (pontos<=50)){
  console.log(textResult[0]+pontos
              +textResult[1]+level[2])
}
if (!(pontos<51) && (pontos<=80)){
  console.log(textResult[0]+pontos
              +textResult[1]+level[3])
}
if (!(pontos<81) && (pontos<=90)){
  console.log(textResult[0]+pontos
              +textResult[1]+level[4])
}
if (!(pontos<91) && (pontos<=100)){
  console.log(textResult[0]+pontos
              +textResult[1]+level[5])
}
if (pontos>100){
  console.log(textResult[0]+pontos
              +textResult[1]+level[6])
}
