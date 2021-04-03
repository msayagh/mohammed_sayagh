import { gsap } from "gsap";
/**
 * Gsap plugins
 *
 * Use 'process.client' to avoid 'Window is not defined' errors
 * This is due to the 'server-side' rendering.
 */


const animation = {
      animation() {
            gsap.utils.toArray(".animation").forEach(function (elem) {
                  animation.hide(elem);
                  animation.animateForm(elem, -1)
            });
      },
      hide(elem) {
            gsap.to(elem, { opacity: 0 });
      },
      animateForm(elem, direction) {
            direction =  direction | 1;
            let params = {
                  x: 30,
                  y: 0,
                  order: null,
                  decalage: 0.6,
                  duration: 0.7,
                  opacity: 1
            }
            if (elem.classList.contains("direction_y")) {
                  params.y = direction * 10;
                  params.x = 0;
            }
            if (params.decalage >= 0 ){
                  for(let i = 0; i <= 10; i++){
                        if (elem.classList.contains("order" + i) && ( params.x != 0 || params.y != 0)){
                              params.order = (i * params.decalage) + 0.1; // decalage time
                        }
                  }
            }
            let timelineAnimation = gsap.timeline();
            timelineAnimation.fromTo(
                  elem,
                  { opacity: 0, y: params.y, x: params.x },
                  { opacity: params.opacity, y: 0, x: 0, ease: Power2.easeOut, duration: params.duration},
                  params.order
            )
      },
      
}

export default animation;
