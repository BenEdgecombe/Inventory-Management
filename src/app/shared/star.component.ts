import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";


@Component({
    selector: "im-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges{
    @Input() condition: number = 0;
    cropWidth: number = 75;
    @Output() conditionClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.cropWidth = this.condition * 75/5;
    }

    onClick(): void{
        this.conditionClicked.emit("The current condition is " + this.condition);
    }
}