export default class Circle {
    size: number;
    startAngle: number;
    angularSpeed: number;
    currentAngle: number = 0;

    constructor(size: number, startAngle: number, angularSpeed: number) {
        this.size = size;
        this.startAngle = startAngle;
        this.angularSpeed = angularSpeed;
        this.reset();
    }
    
    reset(): void {
        this.currentAngle = this.startAngle;        
    }

    update(): void {
        this.currentAngle = (this.currentAngle + this.angularSpeed) % 360;
    }
}