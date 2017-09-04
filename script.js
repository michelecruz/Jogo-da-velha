var jogador = "LINUX";
var cont = 0;
function jogada(id) {
	var src = caminhoImg(id);
	if (src == "b.png") {
		document.getElementById(id).src ="img/"+jogador+".jpg";
		cont ++;
		if(cont == 9){
			alert("DEU VELHA!!!");
			location.reload();
		}
		if (vitoria()) {
			alert(jogador + " \n VENCEU O JOGO!!!")
			location.reload();

		}
		if (jogador =="LINUX") {
			jogador = "WINDOWS";
		}else{
			jogador="LINUX";
		}
	}
}
function caminhoImg(id) {
	var src = document.getElementById(id).src;
	return src.substring(src.length-5,src.length);
}
function vitoria() {
	if((caminhoImg("p1")==caminhoImg("p2"))&&(caminhoImg("p1")==caminhoImg("p3"))&& caminhoImg("p1")!="b.png") {
		return true;
	}
	if((caminhoImg("p4")==caminhoImg("p5"))&&(caminhoImg("p4")==caminhoImg("p6"))&& caminhoImg("p4")!="b.png") {
		return true;
	}
	if((caminhoImg("p7")==caminhoImg("p8"))&&(caminhoImg("p7")==caminhoImg("p9"))&& caminhoImg("p7")!="b.png") {
		return true;
	}
	if((caminhoImg("p1")==caminhoImg("p4"))&&(caminhoImg("p1")==caminhoImg("p7"))&& caminhoImg("p1")!="b.png") {
		return true;
	}
	if((caminhoImg("p2")==caminhoImg("p5"))&&(caminhoImg("p2")==caminhoImg("p8"))&& caminhoImg("p2")!="b.png") {
		return true;
	}
	if((caminhoImg("p3")==caminhoImg("p6"))&&(caminhoImg("p3")==caminhoImg("p9"))&& caminhoImg("p3")!="b.png") {
		return true;
	}
	if((caminhoImg("p1")==caminhoImg("p5"))&&(caminhoImg("p1")==caminhoImg("p9"))&& caminhoImg("p1")!="b.png") {
		return true;
	}
	if((caminhoImg("p3")==caminhoImg("p5"))&&(caminhoImg("p3")==caminhoImg("p7"))&& caminhoImg("p3")!="b.png") {
		return true;
	}
	else {
		return false;
	}
}
