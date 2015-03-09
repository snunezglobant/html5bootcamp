var data = {
    title: "Harry Potter and the Philosopher's Stone",
    year: '2001',
    genre: 'Fantasia',
    duration: '153 min',
    director: 'Chris Columbus',
    actor: 'Daniel Radcliffe ',
    description: "Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter series and J. K. Rowling's debut novel. The plot follows Harry Potter, a young wizard who discovers his magical heritage as he makes close friends and a few enemies in his first year at the Hogwarts School of Witchcraft and Wizardry. With the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just one year old."
};

var cont = $("#template").html();
var tmpl = Handlebars.compile(cont);
html = tmpl(data);
$("#content").append(html);
