// function show(){
//     document.getElementById('show-cont').style.height="400px";
//     document.getElementById('show-cont').style.display="block";
// }

// function hide(){
//     document.getElementById('show-cont').style.height="0px";
//     document.getElementById('show-cont').style.display="none";
// }
function showFrontLayer() {
    document.getElementById('bg_mask').style.visibility='visible';
    document.getElementById('frontlayer').style.visibility='visible';
  }
  function hideFrontLayer() {
    document.getElementById('bg_mask').style.visibility='hidden';
    document.getElementById('frontlayer').style.visibility='hidden';
  }