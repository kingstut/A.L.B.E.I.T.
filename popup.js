import { ChatGPTAPI } from 'chatgpt'

const SESSION_TOKEN = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..hgFuXmBF4RsQkLb1.qLMEGAcFDd_F9tawFaZ-KY_3PylZt411H-ZhvKQ3CIDpn7r9FOqwOfjbsbN3Rstmeofcx42W6ojSomCaAvFgwtCPsHoG5C8OqOCzvm0kthWC0bmuXD27sLxtyDVu_95Wkw-zB05JYpxOSn3Ri9XiWrKI_DUCa340Vkk7oBScqN_EY2eqnQErWXQcVUs4VjFJz5ancVdEQ5XO1MARvKJbl0lCprbFWwGxTrvSs0y0oaCE9LHPahD1kALgywWhYUeOHCyxZYge3zgyAolOkT9J19dpDE9Li69iXJlIVi_yKmW2MdoQOgpaEZM-iU8nqgceFn4DTXtNHWkJnHIcczA3-rgRe5BJYZGCx12-GZpWuWCFwi2h8R7kyo80rVKL2zFA9-GnafmCgxBW4K8S4dReyX3Wmc1YeyjwyrSp-HQRZuJesbpidhYj2zDEkCi8lbki_BhH54poNGQKk4Il0f_Img2WpYgFq1OJPXt2JgZg-FN61u4KDmiY36t3RrfiYM8IyOPTP-M31sNEVTXk93oITSc6upkwa39PeladrdJL4DoB2GB5YhsNlttQ0Otj0JKvnL2f12vHYicKBcHbX_qW2uKyaYtZqHsv-3MUMkgjazPmaZu3JtCQxganvgwCtcbHrN1VHLWVNpciv0lo-3cUwe8mRFADDFUjckLRH-hdhI43ommWS-WtIeKXMGOpqMhYigvVtbm8N6-DPKHejJQeHh0eZVbiXi3CZ1yl1-wF-4U9f8FzL7oenksPpAFt-RowbS_lAoKnPQwomQ-URGLCTY7thNalE3a--xR3_FcRy6rVf9x9v-unTCrNm1ei5oXVOiQFWNnWtMfSJAdaaKN5KR6eYQsuuEcyRcR7C5NNbUD5Ymt9t-8ByMOp1MFwJC9rVuUqIm2W919cyJ3eQa_Ly6ASEnCz6U99mkVCvClDNJomGE9QwUq85DmESiFQplkVZws4UAaRaIIpf1QIbR8JoTe8KWMCrLFc82ZsMNWM-H55inyaDlrT3Cfs_WP3JLm1yHJ1hQgQ7T06XMu18zPJiNvxWfHbq10hHiFrXerhtN1MkrnO3-B-FJs9hfpz374JWUN7Lm9MMBuKa37gV8HS4viw53EA2ity_mZD61974YkEzifmVNewclggmOSQNtYCjcE2VlJmrV4MEhUvEyVaxVjNep_yOgVYqUGh7M9IaGu5VTgyuoT1Og9F2GTlH-h_5rhppzq-qBSfRo0TTiktjj81dkEhOptDOWHqd-FNLnGnz06-a05OzD7mEAKdIwGhDf6txddgR5OhmoDNQRNQ5-MdSuAy_hDaGUGCXbTii20XWkxBg9l2kMO22ZVrvGYkhkWJ4vkz05zusFJCQ2SVMg42UeYQqiSp9Jw-YEEEjH6aQWStSKWT6PbETrvh40O89WGG_6cU7nJJDBIWnNLA3imiF113z0yNwWxWmUp9VRmvCrDSxlz_lr8JyU0Teoer9-W93Ap25SnuEgqW8OimDlUYJhGLufyp7SuD_VkB1oYVU5q_vjgB_16rDy9YvyUumf3TNE_QVdvinRFJC_H_0kndQ9LHP9FrI4c1YsWLiHGAk3rTGywGpoDVSN_FtK3W1yTdS1WkvEZrjmvj4ZcKonhZ82yrGgcMPJfi5yUtz6rvmuDHvf42h_E_JD6jOvLigL__qcDDH_UIA9RHHuSKXopDoEddkb8ozkwVj_Ori0jqJyc3aSoNPiU0tf1Asbxj41tlxhAKkDb7vgio6eVFjMwJjyjciRIkGqSQmz6RgURPcBXlTY64Np-0u77ZPAjHOhqCCWtS4bA9sYEbAim7Xl9sCT5z2jMomhaNnIj1rCPX4ysq8YzJpCAgvHjb-7b7m0pFZT89dcfvyzPSXiM1CdPfk8CAyLI94b_XAxBVwaUUANz2KQcfi358ts8i6EV9MfLa6TUrd_Jaz_vqP6_OLZVFnbpOY1qywvFywlwUUTPS43UqtBO3GIDk-5Xy7_af5Cyy9_gki1cx30WAIQT2QhVJQ0SiRxJoJr8NwDDEEX7QRX7O8bJj87jt9ugYWU6tR7X8HSXBOvpSWgczmSp9gFkDQQeqcwvWb22R1jWVPhDFxJj6PNDEUwFFQ14bB3GEECxlUPmY6StR5qpr5BoIfqqMfblUKJbhaG1lq9Bk_mAhtdeRXQJLZytmteqVfM_1k_Kd6qv3--lk5ucLlP4ne40N_N4oFauGzN0m0uJfaJylR9e72Yn7Y5EzsjqeIsqYV4_p__2q4hL6THmg-q-d9P1GdsO8kc_e7mBvvg.bqOU5b912slvJrHJFyXnpw"; 

const api = new ChatGPTAPI({
    sessionToken: SESSION_TOKEN
  })

  const conversation = api.getConversation();

document.getElementById("save-btn").onclick = async () => {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    let result;
    try {
    [{result}] = await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: () => getSelection().toString(),
    });
    } catch (e) {
    return; // ignoring an unsupported page like chrome://extensions
    }

    document.body.append(result + ': ');
    //showLoadingCursor();
    const response0 = await conversation.sendMessage('What is ' + result + '?');

    document.body.append(response0);
    //restoreCursor();
};

const showLoadingCursor = () => {
    const style = document.createElement("style");
    style.id = "corsor_wait";
    style.innerHTML = `* {cursor: wait;}`;
    document.head.insertBefore(style, null);
  };
  
  const restoreCursor = () => {
    document.getElementById("corsor_wait").remove();
  };