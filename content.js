
const API_KEY = "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";

function fetchNERs(element, data, API_KEY) {
    return new Promise((resolve, reject) => {
        // Send post request to inference API
        //element.innerHTML = element.innerHTML.replaceAll("the", '<span style="background-color:red">' + "the" + '</span>');

        return fetch(
            "https://api-inference.huggingface.co/models/dslim/bert-base-NER",
            {
                headers: { Authorization: `Bearer ${API_KEY}` },
                method: "POST",
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(json => {

            if (Array.isArray(json)) {
                const words = Array();
                for (let i = 0; i < json.length; i++) {
                    const word = json[i].word.trimStart();
                    words.push(word);
                }

                resolve({ words });
            }
            else {
                console.log(json);
                throw new Error("error");
            }
        })
            .catch(err => reject(err));
    });
}

const provider = {
    provideNERs: async (element) => {
        let rs;
        try {
            // Fetch the NER words based on the text in the user's document
            const body = element.innerText;
            rs = await fetchNERs(element, body, API_KEY);
            //console.log(rs);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.toString());
            }
            return { words: [] };
        }
        if (rs == null) {
            return { words: [] };
        }

        // Highlight the NER words
        //element.innerHTML = element.innerHTML.replaceAll("the", '<span style="background-color:red">' + "the" + '</span>');

        let searchTerms = rs.words;
        for (let j = 0; j < searchTerms.length; j++) {
            let innerText = element.innerHTML;
            const reg = new RegExp(searchTerms[j], 'gi')
            const matches = innerText.toLowerCase().match(reg) || []
            if (matches.length) {
                element.innerHTML = innerText.replaceAll(reg, '<span style="background-color:red">' + searchTerms[j] + '</span>');
            }
          }
    }
}


let elems = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a")
for (let i = 0, total = elems.length; i < total; i++) {
  let element = elems[i];
  if (element && element.innerText) {
    provider.provideNERs(element);   
  }
}
