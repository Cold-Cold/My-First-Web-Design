function REmark() {
	var RTxt = document.getElementById("txt_1");
	var RSub = document.getElementById("Sub");
	var RUl1 = document.getElementById("REul");
	RSub.onclick = function() {
		var odiv1 = document.createElement("div");
		odiv1.className = "test";
		odiv1.innerHTML = RTxt.value
		var ul2 = document.getElementById("REul");
		var un = document.createElement("div");
		un.className = "un";
		un.innerHTML = '<hr>';
		var unb = document.createElement("div");
		unb.className = "un";
		unb.innerHTML = '<hr >';
		var Del = document.createElement("button");
		Del.id = "#sh1";
		Del.className = "Delete";
		var loveheart = document.createElement("button");
		loveheart.id = "lover";
		loveheart.className = "love";
		Del.className = "Delete";
		RUl1.appendChild(unb);
		RUl1.appendChild(odiv1);
		RUl1.appendChild(Del);
		RUl1.appendChild(loveheart);
		RUl1.appendChild(un);
		var a1 = document.getElementById("#sh1");
		a1.onclick = function() {
			ul2.innerHTML = "";
		}
		var i = 1;
		var a2 = document.getElementById("lover");
		a2.onclick = function review() {

			if (i % 2 == 1) {
				a2.className = "love2";
				i = i + 1;
			} else {
				a2.className = "love";
				i = i + 1;
			}
		}

	}
}
