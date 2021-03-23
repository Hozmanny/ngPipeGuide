import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusc'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, option:boolean = true): string {
        return (option) ? value.toUpperCase() : value.toLowerCase();
    }
}