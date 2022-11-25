
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/dslim/bert-base-NER",
		{
			headers: { Authorization: "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": body}).then((response) => {
    return JSON.stringify(response)};

const body = document.body.innerText;

if (body) {
    const ner_words = getNER(body);
    const wordMatchRegExp = new RegExp(ner_words.join("|"), 'gi');
    const matches = body.match(wordMatchRegExp);
    matches.style['background-color']='#FF00FF';
        }
    