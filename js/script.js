/* BEM VINDO, MARINHEIRO 
   O desafio demorou mas saiu rápido
   Antes de tudo, leia todas as dicas e obersações no link do desafio
   ...
   *-* Todo conteudo dentro de $(document).ready( function() { ... } ); será execultado assim que carregar a página
*/
var c;
$(document).ready(function() {
    $("#alerta").draggable(); 
    $("#X").click(function(){
       toggleAlert();
    });
    c = setInterval(contador,1000);
    
// Estilização da caixa de email
        $("#alerta").one("mouseenter", function(){
        alert("Nem pense em perder essa oportunidade ! Agora você pode cadastrar o seu e-mail para receber todo o conteudo novo e não perder nada !");
    });

        $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
        $("#butt").mouseenter(function(){
        $("#butt").animate({
        opacity:'0.9',
        color:"black"
    });
}); 
        $("#butt").mouseleave(function(){
        $("#butt").animate({
        opacity:'1',
        color:"white"

    });
}); 
//Fim da estilização da caixa de email

//Estilização de links em geral

    $("#lado1").one("mouseenter",function(){
    alert("A Pagina de HTML + CSS3 + JS está em manutenção");
});

    $("#lado2").one("mouseenter",function(){
    alert("A Pagina de Ruby on Rails está em manutenção");
});

//Estilização do Menu ao lado do trainee gti
    $("#link11").mouseenter( function( event )
{
    $("#link11").addClass("divLink");
});
    $("#link11").mouseleave( function( event )
{
    $("#link11").removeClass("divLink");
});
    $("#link12").mouseenter( function( event )
{
    $("#link12").addClass("divLink");
});
    $("#link12").mouseleave( function( event )
{
    $("#link12").removeClass("divLink");
});
    $("#link13").mouseenter( function( event )
{
    $("#link13").addClass("divLink");
});
    $("#link13").mouseleave( function( event )
{
    $("#link13").removeClass("divLink");
});
    $("#link14").mouseenter( function( event )
{
    $("#link14").addClass("divLink");
});
    $("#link14").mouseleave( function( event )
{
    $("#link14").removeClass("divLink");
});
//Fim do Menu

//Inicio do estuda agora
    $("#link21").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});
    $("#link22").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});
    $("#link23").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});
    $("#link24").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});

    $("#estuda1").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});
    $("#estuda2").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});
    $("#estuda3").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});
    $("#estuda4").one("mouseenter",function(){
    alert("Essa pagina está em manutenção");
});

//Botão do VER+
    $("#vmais1").mouseenter( function( event )
{
   $("#vmais1").addClass("divVmais");
});

    $("#vmais1").mouseleave( function( event )
{
    $("#vmais1").removeClass("divVmais");
});
    $("#vmais2").mouseenter( function( event )
{
   $("#vmais2").addClass("divVmais1");
});

    $("#vmais2").mouseleave( function( event )
{
    $("#vmais2").removeClass("divVmais1");
});
//Fim do botão

    $("#novidadesform [type='submit']").click(function(e) {
        e.preventDefault();
        var email;
        email = $("input[type=text][name=email]").val();
        if(email!=0){
        $.ajax({
        url:'http://51.254.204.44/ti/enviar_email.php',
        type:'post',
        data : {'meuemail': email},
        dataType: 'JSON',

            success: function(retorno){
            toastr.success(retorno.text);
            $('.resultado').html(email + " foi salvo em nossa lista de novidades =)");
            $("input[type=text][name=email]").val(null);
            setTimeout(toggleAlert,2000);
            },
            error: function(erro){
            toastr.error(erro.responseJSON.text, 'Error!');
                }
        });
        }else{
        toastr.error('Preencha um email!', 'Error!');
        };
    });
});

function toggleAlert() {
    $('#alerta').slideToggle();
}

var i = 5;
function contador() {
    
    if(i<=0){
        $("#contador").slideToggle();
        clearInterval(c);
        toggleAlert();
    }
    if(i==5){
    $("#contador").html("PREPARE-SE PARA UMA GRANDE BOMBA");
    }
    if(i==4){
    $("#contador").html("NÃO SAIA DAI");
    }
    if(i==3){
    $("#contador").html("É UMA NOVIDADE IMPERDIVEL");
    $("#contador").css("color","blue");
    }
    if(i==2){
    $("#contador").html("VOCE SÓ ENCONTRA AQUI");
    $("#contador").css("color","red");
    }
    if(i==1){
    $("#contador").html("NA GTi");
    $("#contador").css("color","black");
    }
    --i;
}






