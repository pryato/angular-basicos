import { Component } from "@angular/core";


@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
})
export class HeroComponent {
    public title: string = 'Hero component';
    nombre : string = 'Ironman';
    edad : number = 55;

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 22;
    }

}