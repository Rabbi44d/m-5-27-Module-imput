function firstKab(elemen){
    const Elemen=document.getElementById(elemen)
    Elemen.classList.add('hidden')
}
function seced(elemenId){
    const elemenid=document.getElementById(elemenId);
    elemenid.classList.remove('hidden')
}
// এ বি ছি দি add করে স্টাইল ফাইলে কাজ করে কিবতের কাজ ***
function getArandom(){
    const Chabbir='abcdefghijklmnopqrstuvwxyz';
    const shabbir=Chabbir.slice('');
      console.log(shabbir)

      const radomNam=Math.random()*25
      const index=Math.round(radomNam)
      console.log(index.radomNam);
      return radomNam;
}