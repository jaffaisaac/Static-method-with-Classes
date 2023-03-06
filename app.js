class Aeroplane{
    constructor(capacity){
        this._capacity =capacity;
    }
    static No_of_Seats(message){
        console.log(`The are more ${message} missing for the flight to go`);
    }
}

const result = Aeroplane.No_of_Seats(20);

console.log(result)