import { Component, VERSION, ChangeDetectorRef } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Component({
    selector: "demo-case",
    templateUrl: "./demo.component.html",
    styleUrls: ["./demo.component.scss"],
})
export class DemoCaseComponent {
    constructor(private changeDetectorRef: ChangeDetectorRef, private db: AngularFireDatabase) {}

    name = "Angular " + VERSION.full;

    messages: any[] = null;

    key = "";

    value = "";

    getMessages() {
        this.db
            .list("demo")
            .valueChanges()
            .subscribe((r) => {
                this.messages = r;
                this.changeDetectorRef.detectChanges();
            });
    }

    setMessages(key = null, value = null) {
        if (!key || !value) return;
        this.db.list("demo").set(key, value);
    }

    removeMessage(key = null) {
        if (!key) return;
        this.db.list("demo").remove(key);
    }

    ngOnInit() {}

    ngAfterViewInit() {
        this.getMessages();
    }
}
