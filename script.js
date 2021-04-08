window.onload = function () {
	let str = "Hello, I'm VIKRAM.";
	let i = 0;
	let curr = '';
	typeWriter();
	function typeWriter() {
		curr += str.charAt(i);
		document.getElementById('name').innerHTML = curr + '|';
		i++;
		if (i >= str.length) {
			curr = '';
			i = 0;
				timeout = setTimeout(function () {
        console.log('Input Value:', textInput.value);
    }, 1000);		} else setTimeout(typeWriter, 100);
	}
};
