const covid19api =
fetch('https://api.covid19api.com/summary')
  .then(res => {
		console.log(res);
		return res.json()})
  .then(data => {
    // do something with the data
    return data.json;
	})
	.catch(err => {
		console.log(err);
	});

fetchCovidData()
	.then(response => {
		console.log('received');
	})
	.catch(error => {
		console.log('error');
		console.log(error);
	})

async function fetchCovidData() {
	const res = await fetch('https://api.covid19api.com/summary');
	const jsonFile = await res.json();
}

