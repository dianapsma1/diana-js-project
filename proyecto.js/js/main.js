$(document).ready(function(){
    
    //SLIDER
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });

    // POSTS 
    var posts = [
        {
            title: 'Test de titulo 1',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis quaerat sunt voluptas voluptatum repellendus rerum at. Laudantium recusandae corporis excepturi laborum, eos praesentium odio facere eaque. Tempora, architecto saepe, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa debitis tenetur, inventore, id quo iusto molestiae, dolor voluptates maiores quia laborum autem officia modi similique cumque voluptate ducimus minima?'
        },
        {
            title: 'Test de titulo 2',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis quaerat sunt voluptas voluptatum repellendus rerum at. Laudantium recusandae corporis excepturi laborum, eos praesentium odio facere eaque. Tempora, architecto saepe, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa debitis tenetur, inventore, id quo iusto molestiae, dolor voluptates maiores quia laborum autem officia modi similique cumque voluptate ducimus minima?'
        },
        {
            title: 'Test de titulo 3',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis quaerat sunt voluptas voluptatum repellendus rerum at. Laudantium recusandae corporis excepturi laborum, eos praesentium odio facere eaque. Tempora, architecto saepe, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa debitis tenetur, inventore, id quo iusto molestiae, dolor voluptates maiores quia laborum autem officia modi similique cumque voluptate ducimus minima?'
        },
        {
            title: 'Test de titulo 4',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis quaerat sunt voluptas voluptatum repellendus rerum at. Laudantium recusandae corporis excepturi laborum, eos praesentium odio facere eaque. Tempora, architecto saepe, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa debitis tenetur, inventore, id quo iusto molestiae, dolor voluptates maiores quia laborum autem officia modi similique cumque voluptate ducimus minima?'
        },
        {
            title: 'Test de titulo 5',
            date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis quaerat sunt voluptas voluptatum repellendus rerum at. Laudantium recusandae corporis excepturi laborum, eos praesentium odio facere eaque. Tempora, architecto saepe, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ipsa debitis tenetur, inventore, id quo iusto molestiae, dolor voluptates maiores quia laborum autem officia modi similique cumque voluptate ducimus minima?'
        },
    ];
    
    posts.forEach((item, index) => {
        var post = `
        <article class="post">
                
                    <h2>${item.title}</h2>
                    
                    <span class="date">${item.date}</span>
                   
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
        `;
        $("#posts").append(post);
    });

//selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
    theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
    theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");
    });

    // scroll up

    $('.subir').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 500 );

    return false;
});


    // login falso

    $("#login form").submit(function(){
        var form_name =  $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name"); 
    if(form_name !=  null && form_name != "undefined"){
        var about_p = $("#about p");
        about_p.html("<br><strong>Welcome, "+form_name+"</strong>");
        about_p.append("<br><a href='#' id= 'logout'>Log out</a><br>");
        
        $("#login").hide();    
    
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

});