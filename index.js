const todoTask = document.getElementById("todoForm");
todoTask.addEventListener("submit", (e) => {
  e.preventDefault();
  let textVal = e.target.children[0].value;
  e.target.children[0].value = "";
  let tasks = document.getElementById("taskss");
  let div = document.createElement("div");
  div.style = "display:flex; "
  let elem = document.createElement("label");
  elem.style = "width: 100%";
  let del = document.createElement("button");
  del.style = "background-color: red;";
  del.innerHTML = svgDustbin;
  elem.innerText = textVal;
  del.addEventListener("click", (e) => {
    // if(e.target != del) return;
    e.target.closest("div").remove();
    // e.target.parentNode.remove();
  });
  div.append(elem, del);
  tasks.appendChild(div);
  // elem.appendChild(del);
  // tasks.innerHTML += `<label>${textVal}</label>`;

  document.getElementById("foot").innerText = tasks.children.length;
});

const clrAll = document.getElementById("clr");
clrAll.addEventListener("click", (e) => {
  document.getElementById("taskss").innerHTML = "";
  document.getElementById("foot").innerText = 0;
});

const svgDustbin = `
<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="14px" height="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 474.172 474.172" xml:space="preserve">
<g>
	<g>
		<g>
			<path style="fill:#010002;" d="M83.716,428.254c0,25.32,20.606,45.918,45.943,45.918h218.976
				c25.329,0,45.926-20.598,45.926-45.918V77.27H83.716V428.254z M319.924,153.476h32.246v262.911h-32.246V153.476z
				 M223.016,153.476h32.254v262.911h-32.254V153.476z M128.366,153.476h32.23v262.911h-32.23V153.476z"/>
		</g>
		<g>
			<path style="fill:#010002;" d="M61.81,0v43.098h16.16v24.808h312.82v-24.8h21.573V0H61.81z M401.649,32.368H380.06v24.8H88.707
				v-24.8H72.539V10.73h329.11V32.368z"/>
		</g>
	</g>
</g>
</svg>`