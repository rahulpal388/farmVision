


export class apiResponse {
    status: number
    data: {}
    message: string | "sucess"
    constructor(status: number, data: {}, message: string | "sucess") {
        this.status = status
        this.data = data
        this.message = message
    }
}