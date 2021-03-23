import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'heroPower'
})
export class realPowerPipe implements PipeTransform {

    transform(option: boolean): string {
        return (option) ? 'real hero power' : 'human with habilities';
    }
}