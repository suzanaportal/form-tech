<script>
function enviardados()
{
if(document.getElementById("#nome").length < 3) {
    alert("O nome deve ter no mínimo 3 letras.");
    document.getElementById("#nome").focus();
return false;
}



if( document.getElementById("#email"))
document.getElementById.indexOf('@')==-1 ||
if((document.getElementById("#email").value == "")
|| (document.getElementById("#email").value.indexOf('@') -1)
|| (document.getElementById("#email").value.indexOf('.') -1)) {
alert("Email incorreto, preencha corretamente o campo.");
document.getElementById("#email").focus();
return false;
}

</script>
