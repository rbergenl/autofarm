var Gpio = (function () {
    function Gpio(pin, opts) {
        this.pin = pin;
        this.mode = opts.mode;
    }
    Gpio.prototype.digitalWrite = function(on) {
        console.log(this.pin + ' (' + this.mode + ') is now ' + on);
        return;
    };
    Gpio.prototype.pwmWrite = function(val) {
        console.log(this.pin + ' (' + this.mode + ') has a value of ' + val);
        return;
    };
    Gpio.OUTPUT = 'OUTPUT';
    return Gpio;
}());

module.exports.Gpio = Gpio;
