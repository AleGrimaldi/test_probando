
window.onload = function (){

	var animacionNubes = new TimelineMax({repeat:5});
	var animacionAvion = new TimelineMax({repeat:3, yoyo:true});
	var animacionCopies = new TimelineMax();

	animacionNubes
	.staggerTo (['#nube1', '#nube2', '#nube3'], 7, {left:-100, ease: Power0.easeNone}, 2, 0)

	animacionAvion
	.to('#avion', 2, {y:30,  ease: Power0.easeNone}, 0)
	.to('#avion', 5, {y:-20, ease: Power0.easeNone}, 2)
	
	animacionCopies
	.to(['#copy1'], {duration: 1, text:"¡Volá a donde quieras!"}, 1)
	.to(['#copy2'], {duration: 1, text:"Con el mejor precio."}, 2)
	.staggerTo (['#copy1', '#copy2'], 0.5, {autoAlpha:0}, 0.3, 5)

	.to('#copy3', {duration: 1, text:"Buenos Aires - Miami"}, 5.6)
	.to('#copy4', {duration: 1, text:"$61.550"}, 6.6)
	.from('#cta', 0.5, {autoAlpha:0}, 7)
	.from('#cta_over', 0.5, {autoAlpha:0}, 7);


console.log('animacionNubes dura ' + animacionNubes.duration())
console.log('animacionAvion dura ' + animacionAvion.duration())
console.log('animacion dura ' + animacionCopies.duration())


function  ctaOver(){
document.getElementById('cta_over').style.opacity = 1;
document.getElementById('cta').style.opacity = 0;
}

function  ctaOut(){
document.getElementById('cta').style.opacity = 1;
document.getElementById('cta_over').style.opacity = 0;
}


 cta.addEventListener('mouseover', ctaOver)
 cta.addEventListener('mouseout', ctaOut)

}
