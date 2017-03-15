

    // Sortir / Cacher Clavier 
    $('.write').click(function() {
        $('#clavier').slideToggle('display');
    });
    
    //Selecteur
    var $writePrenom = $('.write#prenom');
    var $writeNom = $('.write#nom');

    $('.write#prenom').click(function(){
        $('.write#nom').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.write#nom').click(function(){
        $('.write#prenom').removeClass('selected');
        $(this).addClass('selected');
    });

    $('#keyboard li').click(function(){
            var $this = $(this),
            character = $this.html(); //valeur taper

            if($writePrenom.hasClass('selected')) {
                // Supprime
                if ($this.hasClass('delete')) {
                    var html1 = $writePrenom.val(); 
                    $writePrenom.val(html1.substr(0, html1.length - 1));
                    return false;
                }
                // Ajouter caractère
                $writePrenom.val($writePrenom.val() + character);
            } 
            else if ($writeNom.hasClass('selected')){
                // Supprime
                if ($this.hasClass('delete')) {
                    var html2 = $writeNom.val(); 
                    $writeNom.val(html2.substr(0, html2.length - 1));
                    return false;
                }
                // Ajouter caractère
                $writeNom.val($writeNom.val() + character);
            }
    });
