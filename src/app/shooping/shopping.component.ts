import { Component, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavComponent } from '../shared/component/nav/nav.component';
import { FooterComponent } from '../shared/component/footer/footer.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  imports: [NavComponent,FooterComponent],
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements AfterViewInit, OnDestroy {
  private ctx!: gsap.Context;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    
    this.ctx = gsap.context(() => {
      
      gsap.utils.toArray<HTMLElement>('.contain').forEach(section => {
        gsap.from(section.querySelectorAll('.text, .deptos'), {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%', 
            toggleActions: 'play none none reverse'
            
          }
        });
      });
    }, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // Limpia animaciones y ScrollTriggers
    this.ctx?.revert();
  }
}
