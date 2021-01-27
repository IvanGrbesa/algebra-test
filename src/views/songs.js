function fetchsong(cntArray) {
  let listItems = "";
  for (let i = 0; i < cntArray.length; i++) {
    listItems += `<li> ${cntArray[i].artistName} - ${cntArray[i].trackName}</li>`;
  }

  return "<ul>" + listItems + "</ul>";
}

export default fetchsong;
