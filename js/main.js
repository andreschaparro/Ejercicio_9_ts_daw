class Main {
    constructor() {
        this._counter = 0;
    }
    handleEvent(evt) {
        this._counter++;
        let btn = this._myf.getElementByEvent(evt);
        btn.textContent = `click: ${this._counter}`;
    }
    handleGETResponse(status, response) {
        console.log(`Llego status ${status} response: ${response}`);
        if (status == 200) {
            let data = JSON.parse(response);
            console.log(data);
        }
    }
    main() {
        this._myf = new MyFramework();
        let b = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
        this._myf.requestGET("Devices.txt", this);
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
