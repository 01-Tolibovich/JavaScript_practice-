function makePhrases () {
    var words1 = ["24 соат", "мо ба шумо боварӣ дорем", "барои хушнудии шумо", "шумо метавонед", "мо метавонем"];
    var words2 = ["дар хизмат", "кафолат 10 сол", "биёеду бо чашми худатон бубинед", "бовар намекунед?", "бурди шумо"];
    var words3 = ["рӯзи нек", "рӯз ба хайр", "бой мешави", "зер кун", "мизоҷи навбатӣ"]; 

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);

    document.write (phrase);

}

makePhrases ();