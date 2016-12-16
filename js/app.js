document.addEventListener('DOMContentLoaded',function() {
	const MAX_PAGES = 4;
	let currentPage = 0;

	const displaySelectedPara = (k) => {
		const paras = document.getElementsByClassName('para');
		for (let i = 0; i < paras.length; i++) {
			paras[i].style.display = 'none';
		}
		paras[parseInt(k)].style.display = 'block';
	};

	displaySelectedPara(currentPage);

	document.getElementById('prev').addEventListener('click',() => {
		currentPage = (currentPage - 1 + MAX_PAGES) % MAX_PAGES;
		displaySelectedPara(currentPage);
	});

	document.getElementById('next').addEventListener('click',() => {
		currentPage = (currentPage + 1) % MAX_PAGES;
		displaySelectedPara(currentPage);
	});

});
